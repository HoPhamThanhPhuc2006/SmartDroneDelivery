using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SmartDroneDelivery.API.Models;
using SmartDroneDelivery.API.Models.Entities;

namespace SmartDroneDelivery.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrdersController : ControllerBase
    {
        private readonly AppDbContext _context;

        public OrdersController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllOrders()
        {
            var orders = await _context.DeliveryOrders
                .Include(o => o.Customer)
                .Include(o => o.Package)
                .Include(o => o.OriginStation)
                .Include(o => o.DestinationStation)
                .ToListAsync();
            return Ok(orders);
        }

        [HttpPost]
        public async Task<IActionResult> CreateOrder([FromBody] DeliveryOrder order)
        {
            order.TrackingNumber = "SDD-" + DateTime.UtcNow.Ticks.ToString()[^8..];
            order.CreatedAt = DateTime.UtcNow;
            order.Status = OrderStatus.Pending;

            _context.DeliveryOrders.Add(order);
            await _context.SaveChangesAsync();

            return Ok(order);
        }

        [HttpPut("{id}/status")]
        public async Task<IActionResult> UpdateStatus(Guid id, [FromBody] OrderStatus status)
        {
            var order = await _context.DeliveryOrders.FindAsync(id);
            if (order == null) return NotFound();

            order.Status = status;
            if (status == OrderStatus.Delivered)
            {
                order.CompletedAt = DateTime.UtcNow;
            }

            await _context.SaveChangesAsync();
            return Ok(order);
        }
    }
}
