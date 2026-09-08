using System.ComponentModel.DataAnnotations;

namespace SmartDroneDelivery.API.Models.Entities
{
    public class DeliveryOrder
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();
        
        [Required, MaxLength(50)]
        public string TrackingNumber { get; set; } = string.Empty;
        
        public Guid CustomerId { get; set; }
        public User? Customer { get; set; }
        
        public string PickupAddress { get; set; } = string.Empty;
        public string DeliveryAddress { get; set; } = string.Empty;
        
        public Guid OriginStationId { get; set; }
        public LandingStation? OriginStation { get; set; }
        
        public Guid DestinationStationId { get; set; }
        public LandingStation? DestinationStation { get; set; }
        
        public OrderStatus Status { get; set; } = OrderStatus.Pending;
        
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime? EstimatedDeliveryTime { get; set; }
        public DateTime? CompletedAt { get; set; }
        
        public Package? Package { get; set; }
        public string? ProofOfDeliveryUrl { get; set; }
    }
}
