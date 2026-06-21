import { Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";

import AdminDashboard from "../pages/admin/Dashboard";
import AgentDashboard from "../pages/agent/Dashboard";
import CustomerDashboard from "../pages/customer/Dashboard";

import ProtectedRoute from "../components/common/ProtectedRoute";
import RoleRoute from "../components/common/RoleRoute";
import Register from "../pages/auth/Register";
import VerifyOtp from "../pages/auth/VerifyOtp";

export default function AppRoutes() {

  return (
    <Routes>

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <RoleRoute allowedRole="ADMIN">
              <AdminDashboard />
            </RoleRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/agent/dashboard"
        element={
          <ProtectedRoute>
            <RoleRoute allowedRole="AGENT">
              <AgentDashboard />
            </RoleRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/customer/dashboard"
        element={
          <ProtectedRoute>
            <RoleRoute allowedRole="CUSTOMER">
              <CustomerDashboard />
            </RoleRoute>
          </ProtectedRoute>
        }
      />


      <Route path="/register" element={<Register />} />

      <Route path="/verify-otp" element={<VerifyOtp />} />

    </Routes>
  );
}