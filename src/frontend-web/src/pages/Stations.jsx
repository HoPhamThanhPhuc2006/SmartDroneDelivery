import React from 'react';

export default function Stations() {
  const stations = [
    { id: 'ST-01', name: 'Trạm A - Smart Campus', capacity: '8/10', status: 'Hoạt động' },
    { id: 'ST-02', name: 'Trạm B - Khu Dân Cư A', capacity: '3/5', status: 'Hoạt động' },
  ];

  const drones = [
    { id: 'DRONE-X1', battery: '85%', status: 'In-Flight', speed: '45 km/h' },
    { id: 'DRONE-X2', battery: '100%', status: 'Idle (Sẵn sàng)', speed: '0 km/h' },
  ];

  return (
    <div>
      <h2 style={{ color: '#1e293b', marginBottom: '20px' }}>Quản lý Trạm đáp & Thiết bị Drone</h2>
      
      <h3 style={{ color: '#334155', fontSize: '16px' }}>Danh sách Trạm đáp (Landing Stations)</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '32px' }}>
        {stations.map(st => (
          <div key={st.id} style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <h4 style={{ margin: '0 0 8px 0', color: '#0f172a' }}>{st.name}</h4>
            <p style={{ margin: '4px 0', fontSize: '14px', color: '#64748b' }}>Sức chứa: <b>{st.capacity}</b></p>
            <p style={{ margin: '4px 0', fontSize: '14px', color: '#16a34a' }}>Trạng thái: <b>{st.status}</b></p>
          </div>
        ))}
      </div>

      <h3 style={{ color: '#334155', fontSize: '16px' }}>Danh sách Drone</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
        {drones.map(dr => (
          <div key={dr.id} style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <h4 style={{ margin: '0 0 8px 0', color: '#0284c7' }}>{dr.id}</h4>
            <p style={{ margin: '4px 0', fontSize: '14px', color: '#64748b' }}>Mức dung lượng Pin: <b>{dr.battery}</b></p>
            <p style={{ margin: '4px 0', fontSize: '14px', color: '#334155' }}>Trạng thái: <b>{dr.status}</b></p>
          </div>
        ))}
      </div>
    </div>
  );
}