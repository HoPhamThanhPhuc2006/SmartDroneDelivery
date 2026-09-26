
import React, { useState } from "react";

export default function AuditLogs() {
  const [logs] = useState([
    { id: "LOG-101", user: "Admin System", action: "Phê duyệt đơn hàng ORD-8821", time: "2026-09-26 08:30:15", ip: "192.168.1.10" },
    { id: "LOG-102", user: "Station Operator", action: "Cập nhật trạng thái Trạm Alpha sẵn sàng", time: "2026-09-26 08:15:00", ip: "192.168.1.25" },
    { id: "LOG-103", user: "Dispatcher", action: "Khởi tạo lộ trình bay tự động Sector B", time: "2026-09-26 07:50:42", ip: "192.168.1.12" },
  ]);

  return (
    <div style={{ padding: "30px", backgroundColor: "#f9fafb", minHeight: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", background: "#fff", padding: "20px", borderRadius: "12px", border: "1px solid #e5e7eb", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
        <div>
          <h1 style={{ fontSize: "22px", fontWeight: "bold", color: "#2563eb", margin: "0 0 5px 0" }}>Nhật Ký Hoạt Động (Audit Logs)</h1>
          <p style={{ fontSize: "13px", color: "#6b7280", margin: 0 }}>Ghi lại lịch sử thao tác hệ thống phục vụ kiểm tra bảo mật và giám sát an toàn</p>
        </div>
      </div>

      <div style={{ background: "#fff", borderRadius: "12px", border: "1px solid #e5e7eb", overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead>
            <tr style={{ backgroundColor: "#f9fafb", borderBottom: "1px solid #e5e7eb", fontSize: "13px", color: "#374151" }}>
              <th style={{ padding: "15px" }}>Mã Log</th>
              <th style={{ padding: "15px" }}>Người thực hiện</th>
              <th style={{ padding: "15px" }}>Hành động chi tiết</th>
              <th style={{ padding: "15px" }}>Thời gian</th>
              <th style={{ padding: "15px" }}>Địa chỉ IP</th>
            </tr>
          </thead>
          <tbody style={{ fontSize: "14px", color: "#4b5563" }}>
            {logs.map((l) => (
              <tr key={l.id} style={{ borderBottom: "1px solid #f3f4f6" }}>
                <td style={{ padding: "15px", fontWeight: "600", color: "#2563eb" }}>{l.id}</td>
                <td style={{ padding: "15px" }}>{l.user}</td>
                <td style={{ padding: "15px" }}>{l.action}</td>
                <td style={{ padding: "15px" }}>{l.time}</td>
                <td style={{ padding: "15px", fontFamily: "monospace", color: "#6b7280" }}>{l.ip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

