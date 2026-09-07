using Microsoft.EntityFrameworkCore;
using SmartDroneDelivery.API.Entities;

namespace SmartDroneDelivery.API.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<DeliveryOrder> DeliveryOrders => Set<DeliveryOrder>();
    public DbSet<Drone> Drones => Set<Drone>();
    public DbSet<LandingStation> LandingStations => Set<LandingStation>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Seed dữ liệu ban đầu cho hệ thống
        var station1 = new LandingStation { Id = Guid.NewGuid(), Name = "Trạm 01 - Quận 1", Latitude = 10.7769, Longitude = 106.7009, IsAvailable = true, Capacity = 10, CurrentDronesCount = 2 };
        var station2 = new LandingStation { Id = Guid.NewGuid(), Name = "Trạm 02 - TP. Thủ Đức", Latitude = 10.8456, Longitude = 106.7932, IsAvailable = true, Capacity = 8, CurrentDronesCount = 1 };

        modelBuilder.Entity<LandingStation>().HasData(station1, station2);

        var drone1 = new Drone { Id = Guid.NewGuid(), ModelCode = "DRONE-A1", BatteryPercentage = 95.5, Status = "Idle", CurrentLatitude = 10.7769, CurrentLongitude = 106.7009, CurrentStationId = station1.Id };
        var drone2 = new Drone { Id = Guid.NewGuid(), ModelCode = "DRONE-B2", BatteryPercentage = 82.0, Status = "InFlight", CurrentLatitude = 10.7800, CurrentLongitude = 106.7050, CurrentStationId = station1.Id };

        modelBuilder.Entity<Drone>().HasData(drone1, drone2);

        modelBuilder.Entity<DeliveryOrder>().HasData(
            new DeliveryOrder { Id = Guid.NewGuid(), OrderCode = "ORD-8821", CustomerName = "Nguyễn Văn A", DeliveryAddress = "123 Nguyễn Huệ, Q1", DestinationLatitude = 10.7740, DestinationLongitude = 106.7030, PackageWeightKg = 1.5, Status = "InTransit", AssignedDroneId = drone2.Id, EstimatedArrivalTime = DateTime.UtcNow.AddMinutes(18) },
            new DeliveryOrder { Id = Guid.NewGuid(), OrderCode = "ORD-8822", CustomerName = "Trần Thị B", DeliveryAddress = "456 Lê Duẩn, Q1", DestinationLatitude = 10.7820, DestinationLongitude = 106.6980, PackageWeightKg = 0.8, Status = "Pending" }
        );
    }
}