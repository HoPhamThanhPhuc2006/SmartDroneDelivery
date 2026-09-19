using System.ComponentModel.DataAnnotations;

namespace SmartDroneDelivery.API.Models.Entities
{
    public class Package
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();
        
        [Required, MaxLength(100)]
        public string PackageCode { get; set; } = string.Empty;
        
        public double WeightKg { get; set; }
        public string Description { get; set; } = string.Empty;
        
        public Guid DeliveryOrderId { get; set; }
        public DeliveryOrder? DeliveryOrder { get; set; }
    }
}
