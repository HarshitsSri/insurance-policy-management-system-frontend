import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import VerifyOtp from "../pages/auth/VerifyOtp";

import AdminDashboard from "../pages/admin/Dashboard";
import AgentDashboard from "../pages/agent/Dashboard";
import CustomerDashboard from "../pages/customer/Dashboard";

import CreateProfile from "../pages/customer/CreateProfile";
import ViewProfile from "../pages/customer/ViewProfile";
import UpdateProfile from "../pages/customer/UpdateProfile";
import ProductDashboard from "../pages/customer/ProductDashboard";

import ProtectedRoute from "../components/common/ProtectedRoute";
import RoleRoute from "../components/common/RoleRoute";

import GetAllProducts from "../pages/customer/GetAllProducts";
import GetProductById from "../pages/customer/GetProductById";
import DashboardLayout from "../components/layout/DashboardLayout";
import PolicyPlanDashboard from "../pages/customer/PolicyPlanDashboard";
import GetAllPlans from "../pages/customer/GetAllPlans";
import GetPlanById from "../pages/customer/GetPlanById";
import PolicyDashboard from "../pages/customer/PolicyDashboard";
import PurchasePolicy from "../pages/customer/PurchasePolicy";
import MyPolicies from "../pages/customer/MyPolicies";
import GetPolicyById from "../pages/customer/GetPolicyById";

import PaymentDashboard from "../pages/customer/PaymentDashboard";
import MyPayments from "../pages/customer/MyPayments";
import GetPaymentById from "../pages/customer/GetPaymentById";
export default function AppRoutes() {
  return (
    <Routes>
      {/* Default */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verify-otp" element={<VerifyOtp />} />

      {/* Protected Routes */}
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        {/* ADMIN */}
        <Route
          path="/admin/dashboard"
          element={
            <RoleRoute allowedRole="ADMIN">
              <AdminDashboard />
            </RoleRoute>
          }
        />

        {/* AGENT */}
        <Route
          path="/agent/dashboard"
          element={
            <RoleRoute allowedRole="AGENT">
              <AgentDashboard />
            </RoleRoute>
          }
        />

        {/* CUSTOMER DASHBOARD */}
        <Route
          path="/customer/dashboard"
          element={
            <RoleRoute allowedRole="CUSTOMER">
              <CustomerDashboard />
            </RoleRoute>
          }
        />

        {/* CUSTOMER PROFILE */}
        <Route
          path="/customer/profile/create"
          element={
            <RoleRoute allowedRole="CUSTOMER">
              <CreateProfile />
            </RoleRoute>
          }
        />

        <Route
          path="/customer/profile/view"
          element={
            <RoleRoute allowedRole="CUSTOMER">
              <ViewProfile />
            </RoleRoute>
          }
        />

        <Route
          path="/customer/profile/update"
          element={
            <RoleRoute allowedRole="CUSTOMER">
              <UpdateProfile />
            </RoleRoute>
          }
        />

        {/* PRODUCT MODULE */}
        <Route
          path="/customer/products"
          element={
            <RoleRoute allowedRole="CUSTOMER">
              <ProductDashboard />
            </RoleRoute>
          }
        />
        <Route
  path="/customer/products/all"
  element={
    <RoleRoute allowedRole="CUSTOMER">
      <GetAllProducts />
    </RoleRoute>
  }
/>

<Route
  path="/customer/products/by-id"
  element={
    <RoleRoute allowedRole="CUSTOMER">
      <GetProductById />
    </RoleRoute>
  }
/>
<Route
  path="/customer/policy-plans"
  element={
    <RoleRoute allowedRole="CUSTOMER">
      <PolicyPlanDashboard />
    </RoleRoute>
  }
/>

<Route
  path="/customer/policies/all"
  element={
    <RoleRoute allowedRole="CUSTOMER">
      <GetAllPlans />
    </RoleRoute>
  }
/>

<Route
  path="/customer/policies/by-id"
  element={
    <RoleRoute allowedRole="CUSTOMER">
      <GetPlanById />
    </RoleRoute>
  }
/>
{/* POLICY MODULE */}

<Route
  path="/customer/policies"
  element={
    <RoleRoute allowedRole="CUSTOMER">
      <PolicyDashboard />
    </RoleRoute>
  }
/>

<Route
  path="/customer/policies/purchase"
  element={
    <RoleRoute allowedRole="CUSTOMER">
      <PurchasePolicy />
    </RoleRoute>
  }
/>

<Route
  path="/customer/policies/my"
  element={
    <RoleRoute allowedRole="CUSTOMER">
      <MyPolicies />
    </RoleRoute>
  }
/>

<Route
  path="/customer/policies/by-id"
  element={
    <RoleRoute allowedRole="CUSTOMER">
      <GetPolicyById />
    </RoleRoute>
  }
/>
<Route
  path="/customer/payments"
  element={<PaymentDashboard />}
/>

<Route
  path="/customer/payments/my"
  element={<MyPayments />}
/>

<Route
  path="/customer/payments/by-id"
  element={<GetPaymentById />}
/>
      </Route>

      {/* 404 */}
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
