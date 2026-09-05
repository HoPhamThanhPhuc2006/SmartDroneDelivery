using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SmartDroneDelivery.API.Data;

namespace SmartDroneDelivery.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class DashboardController : ControllerBase
{
    private readonly AppDbContext _context;

    public DashboardController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet("stats")]
    public async Task<IActionResult> GetStats()
    {
        var totalOrdersToday = await _context.DeliveryOrders.CountAsync();
        var activeDrones = await _context.Drones.CountAsync(d => d.Status == "InFlight");
        var availableStations = await _context.LandingStations.CountAsync(s => s.IsAvailable);

        return Ok(new
        {
            TotalOrdersToday = totalOrdersToday,
            SuccessRatePercent = 98.2,
            AverageEtaMinutes = 18,
            ActiveDronesCount = activeDrones,
            AvailableStationsCount = availableStations
        });
    }

    [HttpGet("orders")]
    public async Task<IActionResult> GetOrders()
    {
        var orders = await _context.DeliveryOrders.Include(o => o.AssignedDrone).ToListAsync();
        return Ok(orders);
    }
}