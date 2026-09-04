import React from 'react';

export default function Tracking() {
  return (
    <div>
      <h2 style={{ color: '#1e293b', marginBottom: '16px' }}>Bản đồ Theo dõi Hành trình Real-time</h2>
      <div style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
        <p style={{ fontSize: '14px', color: '#64748b', marginTop: 0 }}>
          Theo dõi hành trình Drone <b>#DRONE-X1</b> - Đơn hàng: <b>ORD-8821</b>
        </p>
        
        <div style={{ width: '100%', height: '420px', backgroundColor: '#cbd5e1', borderRadius: '6px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '2px dashed #94a3b8' }}>
          <span style={{ fontSize: '32px', marginBottom: '8px' }}>🗺️</span>
          <p style={{ color: '#334155', fontWeight: 'bold', margin: 0 }}>[ Khung tích hợp Leaflet Map ]</p>
          <span style={{ fontSize: '13px', color: '#64748b', marginTop: '4px' }}>Nhận tọa độ GPS theo thời gian thực</span>
        </div>
      </div>
    </div>
  );
}