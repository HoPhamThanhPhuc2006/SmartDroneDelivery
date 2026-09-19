import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import DashboardAI from './pages/DashboardAI';
import Orders from './pages/Orders';
import Stations from './pages/Stations';
import Tracking from './pages/Tracking';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<DashboardAI />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/stations" element={<Stations />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;