using Microsoft.AspNetCore.SignalR;

namespace SmartDroneDelivery.API.Hubs
{
    public class TrackingHub : Hub
    {
        public async Task SendLocationUpdate(string trackingNumber, double latitude, double longitude)
        {
            await Clients.Group(trackingNumber).SendAsync("ReceiveLocationUpdate", latitude, longitude);
        }

        public async Task JoinTrackingGroup(string trackingNumber)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, trackingNumber);
        }

        public async Task LeaveTrackingGroup(string trackingNumber)
        {
            await Groups.RemoveFromGroupAsync(Context.ConnectionId, trackingNumber);
        }
    }
}
