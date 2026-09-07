import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleLogin = (event) => {
		event.preventDefault();
		navigate('/dashboard');
	};

	return (
		<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0f172a' }}>
			<form onSubmit={handleLogin} style={{ backgroundColor: '#fff', padding: '32px', borderRadius: '12px', width: 'min(360px, calc(100% - 48px))' }}>
				<h2 style={{ textAlign: 'center', color: '#0f172a', marginBottom: '8px' }}>SmartDrone Portal</h2>
				<p style={{ textAlign: 'center', color: '#64748b', fontSize: '14px', marginBottom: '24px' }}>Đăng nhập tài khoản quản trị</p>
				<label style={{ display: 'block', marginBottom: '16px', color: '#334155' }}>
					Email
					<input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="admin@smartdrone.com" style={{ width: '100%', marginTop: '6px', padding: '10px', boxSizing: 'border-box' }} />
				</label>
				<label style={{ display: 'block', marginBottom: '24px', color: '#334155' }}>
					Mật khẩu
					<input type="password" required value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Mật khẩu" style={{ width: '100%', marginTop: '6px', padding: '10px', boxSizing: 'border-box' }} />
				</label>
				<button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#0284c7', color: '#fff', border: 0, borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>Đăng nhập hệ thống</button>
			</form>
		</div>
	);
}
