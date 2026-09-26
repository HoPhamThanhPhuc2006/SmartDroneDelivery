
import React, { useState } from "react";
import Dashboard from "./pages/Dashboard";
import OrderManagement from "./pages/OrderManagement";
import StationManagement from "./pages/StationManagement";
import AIAssistant from "./pages/AIAssistant";
import AuditLogs from "./pages/AuditLogs";

export default function App() {
  const [currentTab, setCurrentTab] = useState("dashboard");

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial, sans-serif", backgroundColor: "#f3f4f6" }}>
      {/* Sidebar */}
      <div style={{ width: "260px", backgroundColor: "#0f172a", color: "white", display: "flex", flexDirection: "column", boxShadow: "2px 0 5px rgba(0,0,0,0.1)" }}>
        <div style={{ padding: "20px", fontSize: "18px", fontWeight: "bold", borderBottom: "1px solid #1e293b", color: "#60a5fa" }}>
          SmartDrone Portal
        </div>
        <nav style={{ padding: "15px", display: "flex", flexDirection: "column", gap: "10px" }}>
          <button 
            onClick={() => setCurrentTab("dashboard")} 
            style={{ padding: "12px 15px", textAlign: "left", borderRadius: "8px", border: "none", cursor: "pointer", fontSize: "14px", fontWeight: "500", backgroundColor: currentTab === "dashboard" ? "#2563eb" : "transparent", color: currentTab === "dashboard" ? "#fff" : "#cbd5e1" }}
          >
            📊 Tổng quan & AI Insights
          </button>
          <button 
            onClick={() => setCurrentTab("orders")} 
            style={{ padding: "12px 15px", textAlign: "left", borderRadius: "8px", border: "none", cursor: "pointer", fontSize: "14px", fontWeight: "500", backgroundColor: currentTab === "orders" ? "#2563eb" : "transparent", color: currentTab === "orders" ? "#fff" : "#cbd5e1" }}
          >
            📦 Quản lý Đơn hàng
          </button>
          <button 
            onClick={() => setCurrentTab("stations")} 
            style={{ padding: "12px 15px", textAlign: "left", borderRadius: "8px", border: "none", cursor: "pointer", fontSize: "14px", fontWeight: "500", backgroundColor: currentTab === "stations" ? "#2563eb" : "transparent", color: currentTab === "stations" ? "#fff" : "#cbd5e1" }}
          >
            🚁 Trạm & Đội Drone
          </button>
          <button 
            onClick={() => setCurrentTab("ai")} 
            style={{ padding: "12px 15px", textAlign: "left", borderRadius: "8px", border: "none", cursor: "pointer", fontSize: "14px", fontWeight: "500", backgroundColor: currentTab === "ai" ? "#2563eb" : "transparent", color: currentTab === "ai" ? "#fff" : "#cbd5e1" }}
          >
            🤖 Trợ lý AI & Dự báo
          </button>
          <button 
            onClick={() => setCurrentTab("logs")} 
            style={{ padding: "12px 15px", textAlign: "left", borderRadius: "8px", border: "none", cursor: "pointer", fontSize: "14px", fontWeight: "500", backgroundColor: currentTab === "logs" ? "#2563eb" : "transparent", color: currentTab === "logs" ? "#fff" : "#cbd5e1" }}
          >
            🛡️ Nhật ký hoạt động (Logs)
          </button>
        </nav>
      </div>

      {/* Content Area */}
      <div style={{ flex: 1, overflowY: "auto" }}>
        {currentTab === "dashboard" && <Dashboard />}
        {currentTab === "orders" && <OrderManagement />}
        {currentTab === "stations" && <StationManagement />}
        {currentTab === "ai" && <AIAssistant />}
        {currentTab === "logs" && <AuditLogs />}
      </div>
    </div>
  );
}

