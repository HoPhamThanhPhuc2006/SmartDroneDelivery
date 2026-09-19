import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [stats, setStats] = useState({
    totalOrdersToday: 0,
    successRatePercent: 0,
    averageEtaMinutes: 0
  });

  useEffect(() => {
    // Gọi API từ Backend ASP.NET Core
    axios.get('http://localhost:5000/api/dashboard/stats')
      .then(response => {
        setStats(response.data);
      })
      .catch(error => {
        console.error("Lỗi kết nối API:", error);
      });
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>SmartDrone Portal</h1>
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
          <h3>Tổng đơn trong ngày</h3>
          <h2>{stats.totalOrdersToday}</h2>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
          <h3>Tỷ lệ hoàn thành</h3>
          <h2 style={{ color: 'green' }}>{stats.successRatePercent}%</h2>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
          <h3>Thời gian giao TB (ETA)</h3>
          <h2 style={{ color: '#007bff' }}>{stats.averageEtaMinutes} Phút</h2>
        </div>
      </div>
    </div>
  );
}

export default App;