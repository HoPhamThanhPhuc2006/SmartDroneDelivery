using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace SmartDroneDelivery.API
{
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
            var totalOrders = await _context.DeliveryOrders.CountAsync();
            var activeDrones = await _context.Drones.CountAsync();
            var totalStations = await _context.LandingStations.CountAsync();

            return Ok(new
            {
                TotalOrders = totalOrders,
                ActiveDrones = activeDrones,
                TotalStations = totalStations
            });
        }
    }
}
