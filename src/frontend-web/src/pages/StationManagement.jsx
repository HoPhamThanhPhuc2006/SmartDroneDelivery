
import React from "react";

export default function StationManagement() {
  const stations = [
    { id: "ST-01", name: "Trạm Alpha (Khu A)", status: "Hoạt động", dronesReady: 3, capacity: 5 },
    { id: "ST-02", name: "Trạm Beta (Khu B)", status: "Hoạt động", dronesReady: 1, capacity: 4 },
    { id: "ST-03", name: "Trạm Gamma (Khu C)", status: "Bảo trì", dronesReady: 0, capacity: 3 },
  ];

  return (
    <div style={{ padding: "30px", backgroundColor: "#f9fafb", minHeight: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", background: "#fff", padding: "20px", borderRadius: "12px", border: "1px solid #e5e7eb", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
        <div>
          <h1 style={{ fontSize: "22px", fontWeight: "bold", color: "#2563eb", margin: "0 0 5px 0" }}>Quản Lý Trạm Hạ Cánh & Đội Drone</h1>
          <p style={{ fontSize: "13px", color: "#6b7280", margin: 0 }}>Theo dõi tình trạng sẵn sàng của trạm sạc và phân bổ thiết bị</p>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {stations.map((s) => (
          <div key={s.id} style={{ background: "#fff", padding: "20px", borderRadius: "12px", border: "1px solid #e5e7eb", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
              <h3 style={{ fontWeight: "bold", color: "#1f2937", margin: 0, fontSize: "16px" }}>{s.name}</h3>
              <span style={{ padding: "4px 10px", borderRadius: "20px", fontSize: "12px", fontWeight: "500", backgroundColor: s.status === "Hoạt động" ? "#dcfce7" : "#fee2e2", color: s.status === "Hoạt động" ? "#166534" : "#991b1b" }}>
                {s.status}
              </span>
            </div>
            <p style={{ fontSize: "14px", color: "#4b5563", margin: "0 0 8px 0" }}>Mã định danh: <span style={{ fontWeight: "600" }}>{s.id}</span></p>
            <p style={{ fontSize: "14px", color: "#4b5563", margin: "0 0 15px 0" }}>Drone sẵn sàng sạc: <span style={{ fontWeight: "bold", color: "#2563eb" }}>{s.dronesReady} / {s.capacity}</span></p>
            <button style={{ width: "100%", backgroundColor: "#f3f4f6", color: "#1f2937", padding: "10px", borderRadius: "8px", border: "none", cursor: "pointer", fontSize: "14px", fontWeight: "500" }}>
              Xem Chi Tiết Trạm
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

