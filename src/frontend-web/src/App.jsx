import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import DashboardAI from './pages/DashboardAI';
import Login from './pages/Login';
import Orders from './pages/Orders';
import Stations from './pages/Stations';
import Tracking from './pages/Tracking';

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<DashboardAI />} />
        <Route path="orders" element={<Orders />} />
        <Route path="stations" element={<Stations />} />
        <Route path="tracking" element={<Tracking />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}