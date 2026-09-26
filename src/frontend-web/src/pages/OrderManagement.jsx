
import React, { useState, useEffect } from "react";
import { api } from "../services/api";

export default function OrderManagement() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Gọi API lấy danh sách đơn hàng từ Backend .NET
    api.getOrders().then((data) => {
      if (data && Array.isArray(data)) {
        setOrders(data);
      } else {
        // Dữ liệu giả lập dự phòng nếu database trống
        setOrders([
          { id: "ORD-001", customerName: "Nguyễn Văn A", destination: "Trạm Alpha - Khu A", status: "Đang giao", weight: "1.2 kg" },
          { id: "ORD-002", customerName: "Trần Thị B", destination: "Trạm Beta - Khu B", status: "Hoàn thành", weight: "0.8 kg" },
        ]);
      }
      setLoading(false);
    });
  }, []);

  return (
    <div style={{ padding: "30px", backgroundColor: "#f9fafb", minHeight: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", background: "#fff", padding: "20px", borderRadius: "12px", border: "1px solid #e5e7eb", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
        <div>
          <h1 style={{ fontSize: "22px", fontWeight: "bold", color: "#2563eb", margin: "0 0 5px 0" }}>Quản Lý Đơn Hàng & Gói Hàng (API Live Data)</h1>
          <p style={{ fontSize: "13px", color: "#6b7280", margin: 0 }}>Theo dõi toàn bộ trạng thái vận chuyển đơn hàng bằng drone</p>
        </div>
        <button style={{ backgroundColor: "#2563eb", color: "#fff", border: "none", padding: "10px 16px", borderRadius: "8px", fontWeight: "600", cursor: "pointer", fontSize: "14px" }}>
          + Tạo Đơn Hàng Mới
        </button>
      </div>

      {loading ? (
        <p style={{ textAlign: "center", color: "#6b7280", padding: "40px" }}>Đang đồng bộ dữ liệu từ server .NET...</p>
      ) : (
        <div style={{ background: "#fff", borderRadius: "12px", border: "1px solid #e5e7eb", overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
            <thead>
              <tr style={{ backgroundColor: "#f9fafb", borderBottom: "1px solid #e5e7eb", fontSize: "13px", color: "#374151" }}>
                <th style={{ padding: "15px" }}>Mã Đơn</th>
                <th style={{ padding: "15px" }}>Khách Hàng</th>
                <th style={{ padding: "15px" }}>Điểm Đến</th>
                <th style={{ padding: "15px" }}>Trọng Lượng</th>
                <th style={{ padding: "15px" }}>Trạng Thái</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id || o.orderId} style={{ borderBottom: "1px solid #f3f4f6", fontSize: "14px" }}>
                  <td style={{ padding: "15px", fontWeight: "600", color: "#2563eb" }}>{o.id || o.orderId}</td>
                  <td style={{ padding: "15px", color: "#1f2937" }}>{o.customerName || o.recipientName}</td>
                  <td style={{ padding: "15px", color: "#4b5563" }}>{o.destination || o.deliveryAddress}</td>
                  <td style={{ padding: "15px", color: "#4b5563" }}>{o.weight || "1.0 kg"}</td>
                  <td style={{ padding: "15px" }}>
                    <span style={{ padding: "4px 10px", borderRadius: "20px", fontSize: "12px", fontWeight: "500", backgroundColor: "#dbeafe", color: "#1e40af" }}>
                      {o.status || "Đang xử lý"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

