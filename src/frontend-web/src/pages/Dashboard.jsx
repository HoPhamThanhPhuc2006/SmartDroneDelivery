
import React, { useState } from "react";
import RoleSelector from "../components/RoleSelector";

export default function Dashboard() {
  const [role, setRole] = useState("Dispatcher");

  return (
    <div style={{ padding: "30px", backgroundColor: "#f9fafb", minHeight: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", background: "#fff", padding: "20px", borderRadius: "12px", border: "1px solid #e5e7eb", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
        <div>
          <h1 style={{ fontSize: "22px", fontWeight: "bold", color: "#2563eb", margin: "0 0 5px 0" }}>SmartDroneDelivery Platform</h1>
          <p style={{ fontSize: "13px", color: "#6b7280", margin: 0 }}>Nền Tảng Quản Lý Giao Hàng Bằng Drone Tích Hợp AI (UTH Thesis)</p>
        </div>
        <RoleSelector currentRole={role} onRoleChange={setRole} />
      </div>

      <div style={{ backgroundColor: "#fef3c7", borderLeft: "4px solid #f59e0b", padding: "15px", marginBottom: "20px", borderRadius: "0 8px 8px 0", fontSize: "14px", color: "#92400e" }}>
        ⚡ Chào Phúc! Bạn đang đăng nhập với quyền: <strong style={{ textTransform: "uppercase" }}>{role}</strong>. Giao diện và quyền hạn sẽ tự động điều chỉnh theo nhóm người dùng này.
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", marginBottom: "20px" }}>
        <div style={{ background: "#fff", padding: "20px", borderRadius: "12px", border: "1px solid #e5e7eb", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
          <p style={{ fontSize: "13px", color: "#6b7280", margin: "0 0 8px 0" }}>Tổng đơn hàng</p>
          <p style={{ fontSize: "28px", fontWeight: "bold", color: "#1f2937", margin: 0 }}>158</p>
        </div>
        <div style={{ background: "#fff", padding: "20px", borderRadius: "12px", border: "1px solid #e5e7eb", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
          <p style={{ fontSize: "13px", color: "#6b7280", margin: "0 0 8px 0" }}>Drone đang hoạt động</p>
          <p style={{ fontSize: "28px", fontWeight: "bold", color: "#2563eb", margin: 0 }}>14 / 20</p>
        </div>
        <div style={{ background: "#fff", padding: "20px", borderRadius: "12px", border: "1px solid #e5e7eb", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
          <p style={{ fontSize: "13px", color: "#6b7280", margin: "0 0 8px 0" }}>Hoàn thành hôm nay</p>
          <p style={{ fontSize: "28px", fontWeight: "bold", color: "#16a34a", margin: 0 }}>52</p>
        </div>
        <div style={{ background: "#fff", padding: "20px", borderRadius: "12px", border: "1px solid #e5e7eb", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
          <p style={{ fontSize: "13px", color: "#6b7280", margin: "0 0 8px 0" }}>Cảnh báo sự cố</p>
          <p style={{ fontSize: "28px", fontWeight: "bold", color: "#dc2626", margin: 0 }}>1</p>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "20px" }}>
        <div style={{ background: "#fff", padding: "20px", borderRadius: "12px", border: "1px solid #e5e7eb", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
          <h3 style={{ fontWeight: "bold", color: "#1f2937", marginTop: 0, marginBottom: "15px", fontSize: "16px" }}>
            🤖 AI Operations Summary & Insights
          </h3>
          <p style={{ fontSize: "14px", color: "#4b5563", marginBottom: "15px" }}>Độ hiệu quả vận hành tối ưu AI (Efficiency Score): <span style={{ fontWeight: "600", color: "#16a34a" }}>94.8%</span></p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ backgroundColor: "#eff6ff", padding: "12px", borderRadius: "8px", fontSize: "13px", color: "#1e40af", border: "1px solid #dbeafe" }}>
              💡 <strong>Tối ưu hóa đường bay:</strong> Đã giảm 12% thời gian giao nhận khu vực Trạm Alpha -> Beta.
            </div>
            <div style={{ backgroundColor: "#fef3c7", padding: "12px", borderRadius: "8px", fontSize: "13px", color: "#92400e", border: "1px solid #fde68a" }}>
              ⚠️ <strong>Cảnh báo thời tiết:</strong> Mật độ gió cao tại Sector C, khuyến nghị giảm tải trọng 10%.
            </div>
          </div>
        </div>

        <div style={{ background: "#fff", padding: "20px", borderRadius: "12px", border: "1px solid #e5e7eb", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
          <h3 style={{ fontWeight: "bold", color: "#1f2937", marginTop: 0, marginBottom: "15px", fontSize: "16px" }}>Trạng thái Đội Drone</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "14px", color: "#4b5563" }}>
            <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "10px", borderBottom: "1px solid #f3f4f6" }}>
              <span>🟢 Trạm sạc sẵn sàng:</span>
              <span style={{ fontWeight: "bold", color: "#1f2937" }}>4 units</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "10px", borderBottom: "1px solid #f3f4f6" }}>
              <span>🔧 Đang bảo trì:</span>
              <span style={{ fontWeight: "bold", color: "#dc2626" }}>2 units</span>
            </div>
            <button style={{ width: "100%", marginTop: "10px", backgroundColor: "#2563eb", color: "white", padding: "10px", borderRadius: "8px", border: "none", cursor: "pointer", fontSize: "14px", fontWeight: "500" }}>
              Mở Bản Đồ Giám Sát Real-time
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

