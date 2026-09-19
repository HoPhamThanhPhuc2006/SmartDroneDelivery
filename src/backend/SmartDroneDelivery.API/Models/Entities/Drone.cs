using System.ComponentModel.DataAnnotations;

namespace SmartDroneDelivery.API.Models.Entities
{
    public class Drone
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();

        [Required, MaxLength(50)]
        public string SerialNumber { get; set; } = string.Empty;

        [Required, MaxLength(100)]
        public string Model { get; set; } = string.Empty;

        public double MaxPayloadKg { get; set; }
        public double BatteryPercentage { get; set; } = 100.0;

        public DroneStatus Status { get; set; } = DroneStatus.Idle;
    }
}
