import { NavLink, Outlet } from 'react-router-dom';

const links = [
  { to: '/dashboard', label: 'Tổng quan' },
  { to: '/orders', label: 'Đơn hàng' },
  { to: '/stations', label: 'Trạm & Drone' },
  { to: '/tracking', label: 'Theo dõi' },
];

export default function Layout() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f1f5f9', color: '#1e293b' }}>
      <header style={{ backgroundColor: '#0f172a', color: '#fff', padding: '16px 24px' }}>
        <strong>SmartDrone Portal</strong>
      </header>
      <div style={{ display: 'flex', minHeight: 'calc(100vh - 57px)' }}>
        <nav style={{ width: '220px', flexShrink: 0, backgroundColor: '#fff', padding: '20px 12px' }}>
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} style={({ isActive }) => ({
              display: 'block', padding: '10px 12px', marginBottom: '4px', borderRadius: '6px',
              color: isActive ? '#0284c7' : '#475569', backgroundColor: isActive ? '#e0f2fe' : 'transparent',
              textDecoration: 'none', fontWeight: isActive ? 'bold' : 'normal',
            })}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <main style={{ flex: 1, padding: '24px', minWidth: 0 }}><Outlet /></main>
      </div>
    </div>
  );
}