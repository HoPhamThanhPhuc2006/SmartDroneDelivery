using Microsoft.EntityFrameworkCore;
using SmartDroneDelivery.API.Models;
using SmartDroneDelivery.API.Models.Entities;

namespace SmartDroneDelivery.API
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<DeliveryOrder> DeliveryOrders { get; set; }
        public DbSet<Package> Packages { get; set; }
        public DbSet<LandingStation> LandingStations { get; set; }
        public DbSet<Drone> Drones { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<DeliveryOrder>()
                .HasOne(o => o.Package)
                .WithOne(p => p.DeliveryOrder)
                .HasForeignKey<Package>(p => p.DeliveryOrderId);

            modelBuilder.Entity<DeliveryOrder>()
                .HasIndex(o => o.TrackingNumber)
                .IsUnique();
        }
    }
}
