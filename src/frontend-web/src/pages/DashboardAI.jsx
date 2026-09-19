import React, { useState } from 'react';

export default function DashboardAI() {
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'AI', text: 'Xin chào! Tôi có thể tóm tắt đơn hàng hoặc dự đoán thời gian ETA giúp bạn.' }
  ]);

  const handleSend = () => {
    if (!chatInput.trim()) return;
    setMessages(prev => [
      ...prev,
      { sender: 'User', text: chatInput },
      { sender: 'AI', text: `[Dự đoán ETA]: Đơn hàng của bạn sẽ hoàn thành sau khoảng 14 phút nữa.` }
    ]);
    setChatInput('');
  };

  return (
    <div>
      <h2 style={{ color: '#1e293b', marginBottom: '20px' }}>Tổng quan Vận hành & Dịch vụ AI</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <span style={{ color: '#64748b', fontSize: '13px' }}>Tổng đơn trong ngày</span>
          <h3 style={{ margin: '8px 0 0 0', fontSize: '28px', color: '#0f172a' }}>124</h3>
        </div>
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <span style={{ color: '#64748b', fontSize: '13px' }}>Tỷ lệ hoàn thành</span>
          <h3 style={{ margin: '8px 0 0 0', fontSize: '28px', color: '#16a34a' }}>98.2%</h3>
        </div>
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <span style={{ color: '#64748b', fontSize: '13px' }}>Thời gian giao TB (ETA)</span>
          <h3 style={{ margin: '8px 0 0 0', fontSize: '28px', color: '#0284c7' }}>18 Phút</h3>
        </div>
      </div>

      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', color: '#1e293b' }}>🤖 Trợ lý AI Hỗ trợ & Dự đoán (AI Assistant)</h3>
        
        <div style={{ height: '180px', backgroundColor: '#f8fafc', padding: '12px', border: '1px solid #f1f5f9', borderRadius: '6px', overflowY: 'auto', marginBottom: '12px' }}>
          {messages.map((m, idx) => (
            <div key={idx} style={{ marginBottom: '8px', textAlign: m.sender === 'User' ? 'right' : 'left' }}>
              <span style={{
                display: 'inline-block', padding: '8px 12px', borderRadius: '8px', fontSize: '13px',
                backgroundColor: m.sender === 'User' ? '#0284c7' : '#e2e8f0',
                color: m.sender === 'User' ? '#fff' : '#1e293b'
              }}>
                {m.text}
              </span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <input
            type="text"
            placeholder="Nhập câu hỏi (Ví dụ: Tra cứu đơn ORD-8821)..."
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            style={{ flex: 1, padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
          />
          <button onClick={handleSend} style={{ padding: '10px 20px', backgroundColor: '#0284c7', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
            Hỏi AI
          </button>
        </div>
      </div>
    </div>
  );
}