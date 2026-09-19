namespace SmartDroneDelivery.API.Models
{
    public enum UserRole
    {
        Customer,
        Dispatcher,
        StationOperator,
        LogisticsManager,
        SystemAdministrator
    }

    public enum OrderStatus
    {
        Pending,
        Approved,
        Scheduled,
        InTransit,
        Delivered,
        Failed,
        Cancelled
    }

    public enum StationStatus
    {
        Active,
        Maintenance,
        Offline
    }

    public enum DroneStatus
    {
        Idle,
        InFlight,
        Charging,
        Maintenance
    }
}
