
import React from "react";

export default function RoleSelector({ currentRole, onRoleChange }) {
  const roles = [
    { key: "Customer", label: "Khách hàng (Customer)" },
    { key: "Dispatcher", label: "Điều phối viên (Dispatcher)" },
    { key: "StationOperator", label: "Nhân viên trạm (Station Operator)" },
    { key: "LogisticsManager", label: "Quản lý logistics (Logistics Manager)" },
    { key: "SystemAdministrator", label: "Quản trị viên (System Administrator)" },
  ];

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "#fff", padding: "8px 12px", borderRadius: "8px", border: "1px solid #e5e7eb" }}>
      <span style={{ fontSize: "14px", fontWeight: "500", color: "#374151" }}>Chọn Vai Trò (RBAC):</span>
      <select 
        value={currentRole} 
        onChange={(e) => onRoleChange(e.target.value)}
        style={{ border: "1px solid #d1d5db", borderRadius: "6px", padding: "6px 10px", fontSize: "14px", outline: "none", background: "#fff" }}
      >
        {roles.map((r) => (
          <option key={r.key} value={r.key}>
            {r.label}
          </option>
        ))}
      </select>
    </div>
  );
}

