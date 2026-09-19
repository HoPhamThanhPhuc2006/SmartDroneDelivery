import { MapContainer, Marker, Polyline, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const route = [
  [10.7769, 106.7009],
  [10.7798, 106.7042],
  [10.7831, 106.7086],
  [10.7862, 106.7123],
];

const droneIcon = L.divIcon({
  className: 'drone-marker',
  html: '<span>DRONE</span>',
  iconSize: [64, 28],
  iconAnchor: [32, 14],
});

export default function Tracking() {
  return (
    <div>
      <h2 style={{ color: '#1e293b', marginBottom: '16px' }}>Bản đồ Theo dõi Hành trình Real-time</h2>
      <div style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
        <p style={{ fontSize: '14px', color: '#64748b', marginTop: 0 }}>
          Theo dõi hành trình Drone <b>#DRONE-X1</b> - Đơn hàng: <b>ORD-8821</b>
        </p>
        
        <div style={{ width: '100%', height: '420px', borderRadius: '6px', overflow: 'hidden' }}>
          <MapContainer center={route[1]} zoom={15} scrollWheelZoom style={{ width: '100%', height: '100%' }}>
            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Polyline positions={route} pathOptions={{ color: '#0284c7', weight: 5 }} />
            <Marker position={route[route.length - 1]} icon={droneIcon}>
              <Popup>DRONE-X1 đang giao ORD-8821</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}