import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import VerifyOtp from "../pages/auth/VerifyOtp";

import AdminDashboard from "../pages/admin/Dashboard";
import AgentDashboard from "../pages/agent/Dashboard";
import CustomerDashboard from "../pages/customer/Dashboard";

import ProtectedRoute from "../components/common/ProtectedRoute";
import RoleRoute from "../components/common/RoleRoute";

import DashboardLayout from "../components/layout/DashboardLayout";

export default function AppRoutes() {
  return (
    <Routes>

      {/* Default Route */}
      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />

      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verify-otp" element={<VerifyOtp />} />

      {/* Protected Layout */}
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >

        {/* Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <RoleRoute allowedRole="ADMIN">
              <AdminDashboard />
            </RoleRoute>
          }
        />

        {/* Agent Routes */}
        <Route
          path="/agent/dashboard"
          element={
            <RoleRoute allowedRole="AGENT">
              <AgentDashboard />
            </RoleRoute>
          }
        />

        {/* Customer Routes */}
        <Route
          path="/customer/dashboard"
          element={
            <RoleRoute allowedRole="CUSTOMER">
              <CustomerDashboard />
            </RoleRoute>
          }
        />

      </Route>

      {/* 404 Route */}
      <Route
        path="*"
        element={
          <div className="h-screen flex items-center justify-center text-3xl font-bold">
            404 - Page Not Found
          </div>
        }
      />

    </Routes>
  );
}