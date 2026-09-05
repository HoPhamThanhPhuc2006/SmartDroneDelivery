namespace SmartDroneDelivery.API.Entities;

public class LandingStation
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public string Name { get; set; } = string.Empty;
    public double Latitude { get; set; }
    public double Longitude { get; set; }
    public bool IsAvailable { get; set; } = true;
    public int Capacity { get; set; } = 5;
    public int CurrentDronesCount { get; set; } = 0;
}