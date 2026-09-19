using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SmartDroneDelivery.API.Models.Entities;

namespace SmartDroneDelivery.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LandingStationsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public LandingStationsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var stations = await _context.LandingStations.ToListAsync();
            return Ok(stations);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] LandingStation station)
        {
            _context.LandingStations.Add(station);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetAll), new { id = station.Id }, station);
        }
    }
}
