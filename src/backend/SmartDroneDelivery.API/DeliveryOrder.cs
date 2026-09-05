namespace SmartDroneDelivery.API.Entities;

public class DeliveryOrder
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public string OrderCode { get; set; } = string.Empty; // e.g., ORD-8821
    public string CustomerName { get; set; } = string.Empty;
    public string DeliveryAddress { get; set; } = string.Empty;
    public double DestinationLatitude { get; set; }
    public double DestinationLongitude { get; set; }
    public double PackageWeightKg { get; set; }
    public string Status { get; set; } = "Pending"; // Pending, Assigned, InTransit, Delivered, Cancelled
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? EstimatedArrivalTime { get; set; }
    public Guid? AssignedDroneId { get; set; }
    public Drone? AssignedDrone { get; set; }
}