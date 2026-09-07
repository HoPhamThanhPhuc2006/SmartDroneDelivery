import React from 'react';

export default function Orders() {
  const orders = [
    { id: 'ORD-8821', customer: 'Nguyễn Văn A', address: 'Khu Công Nghệ Cao, Q9', weight: '1.2 kg', status: 'Đang giao' },
    { id: 'ORD-8822', customer: 'Trần Thị B', address: 'Đại học UTH, Bình Thạnh', weight: '0.5 kg', status: 'Chờ duyệt' },
    { id: 'ORD-8823', customer: 'Lê Hoàng C', address: 'Vinhomes Grand Park', weight: '2.1 kg', status: 'Hoàn thành' },
  ];

  return (
    <div>
      <h2 style={{ color: '#1e293b', marginBottom: '16px' }}>Quản lý Đơn hàng & Kiện hàng</h2>
      <div style={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
          <thead style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#64748b' }}>
            <tr>
              <th style={{ padding: '14px' }}>Mã đơn</th>
              <th style={{ padding: '14px' }}>Khách hàng</th>
              <th style={{ padding: '14px' }}>Địa chỉ nhận</th>
              <th style={{ padding: '14px' }}>Khối lượng</th>
              <th style={{ padding: '14px' }}>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item) => (
              <tr key={item.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '14px', fontWeight: 'bold', color: '#0284c7' }}>{item.id}</td>
                <td style={{ padding: '14px' }}>{item.customer}</td>
                <td style={{ padding: '14px' }}>{item.address}</td>
                <td style={{ padding: '14px' }}>{item.weight}</td>
                <td style={{ padding: '14px' }}>
                  <span style={{
                    padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold',
                    backgroundColor: item.status === 'Đang giao' ? '#e0f2fe' : item.status === 'Chờ duyệt' ? '#fef3c7' : '#dcfce7',
                    color: item.status === 'Đang giao' ? '#0369a1' : item.status === 'Chờ duyệt' ? '#b45309' : '#15803d'
                  }}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}