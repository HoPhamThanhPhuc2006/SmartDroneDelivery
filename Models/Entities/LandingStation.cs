using System.ComponentModel.DataAnnotations;

namespace SmartDroneDelivery.API.Models.Entities
{
    public class LandingStation
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();
        
        [Required, MaxLength(100)]
        public string Name { get; set; } = string.Empty;
        
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        
        public int Capacity { get; set; }
        public StationStatus Status { get; set; } = StationStatus.Active;
    }
}
