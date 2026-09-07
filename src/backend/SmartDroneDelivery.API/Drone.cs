namespace SmartDroneDelivery.API.Entities;

public class Drone
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public string ModelCode { get; set; } = string.Empty;
    public double BatteryPercentage { get; set; } = 100.0;
    public string Status { get; set; } = "Idle"; // Idle, InFlight, Charging, Maintenance
    public double CurrentLatitude { get; set; }
    public double CurrentLongitude { get; set; }
    public Guid? CurrentStationId { get; set; }
    public LandingStation? CurrentStation { get; set; }
}