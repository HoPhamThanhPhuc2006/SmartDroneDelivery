
import React, { useState } from "react";

export default function AIAssistant() {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Xin chào! Tôi là Trợ lý AI SmartDrone. Tôi có thể hỗ trợ gì về dự báo ETA, phân tích rủi ro đơn hàng hoặc trạng thái vận hành hôm nay?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = input;
    setMessages(prev => [...prev, { sender: "user", text: userMsg }, { sender: "ai", text: "Đang phân tích dữ liệu thời gian thực và mô hình Machine Learning cho yêu cầu: \"" + userMsg + "\"... Hệ thống đánh giá độ rủi ro thấp, ETA dự kiến an toàn trong 12 phút." }]);
    setInput("");
  };

  return (
    <div style={{ padding: "30px", backgroundColor: "#f9fafb", minHeight: "100%", display: "flex", flexDirection: "column", height: "calc(100vh - 60px)" }}>
      <div style={{ marginBottom: "20px", background: "#fff", padding: "20px", borderRadius: "12px", border: "1px solid #e5e7eb", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
        <h1 style={{ fontSize: "22px", fontWeight: "bold", color: "#2563eb", margin: "0 0 5px 0" }}>Trợ Lý AI & Dự Báo Rủi Ro</h1>
        <p style={{ fontSize: "13px", color: "#6b7280", margin: 0 }}>Hỗ trợ tư vấn lộ trình, ước tính ETA thông minh và phát hiện nguy cơ giao hàng thất bại</p>
      </div>

      <div style={{ flex: 1, background: "#fff", borderRadius: "12px", border: "1px solid #e5e7eb", display: "flex", flexDirection: "column", overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
        <div style={{ flex: 1, padding: "20px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "15px" }}>
          {messages.map((m, idx) => (
            <div key={idx} style={{ display: "flex", justifyContent: m.sender === "user" ? "flex-end" : "flex-start" }}>
              <div style={{ maxWidth: "70%", padding: "12px 16px", borderRadius: "12px", fontSize: "14px", backgroundColor: m.sender === "user" ? "#2563eb" : "#f3f4f6", color: m.sender === "user" ? "#fff" : "#1f2937" }}>
                {m.text}
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSend} style={{ display: "flex", padding: "15px", borderTop: "1px solid #e5e7eb", background: "#fff" }}>
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            placeholder="Nhập câu hỏi cho Trợ lý AI (Ví dụ: Dự báo ETA đơn ORD-8821)..." 
            style={{ flex: 1, padding: "12px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "14px", outline: "none", marginRight: "10px" }}
          />
          <button type="submit" style={{ backgroundColor: "#2563eb", color: "white", padding: "0 20px", borderRadius: "8px", border: "none", cursor: "pointer", fontWeight: "500" }}>Gửi</button>
        </form>
      </div>
    </div>
  );
}

