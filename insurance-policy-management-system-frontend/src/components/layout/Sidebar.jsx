// components/layout/Sidebar.jsx

import {
  LayoutDashboard,
  Users,
  Shield,
  Receipt,
  FileText,
  LogOut
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function Sidebar() {

  const role = localStorage.getItem("role");

  const adminMenu = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: LayoutDashboard
    },
    {
      name: "Users",
      path: "/admin/users",
      icon: Users
    },
    {
      name: "Policies",
      path: "/admin/policies",
      icon: Shield
    },
    {
      name: "Claims",
      path: "/admin/claims",
      icon: FileText
    }
  ];

  const customerMenu = [
    {
      name: "Dashboard",
      path: "/customer/dashboard",
      icon: LayoutDashboard
    },
    {
      name: "Policies",
      path: "/customer/policies",
      icon: Shield
    },
    {
      name: "Payments",
      path: "/customer/payments",
      icon: Receipt
    },
    {
      name: "Claims",
      path: "/customer/claims",
      icon: FileText
    }
  ];

  const agentMenu = [
    {
      name: "Dashboard",
      path: "/agent/dashboard",
      icon: LayoutDashboard
    },
    {
      name: "Claims",
      path: "/agent/claims",
      icon: FileText
    }
  ];

  const menu =
    role === "ADMIN"
      ? adminMenu
      : role === "AGENT"
      ? agentMenu
      : customerMenu;

  return (
    <div className="w-72 bg-slate-900 text-white flex flex-col">

      <div className="text-2xl font-bold p-6 border-b border-slate-700">
        Insurance CRM
      </div>

      <div className="flex-1 p-4 space-y-2">

        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  isActive
                    ? "bg-blue-600"
                    : "hover:bg-slate-800"
                }`
              }
            >
              <Icon size={18} />
              {item.name}
            </NavLink>
          );
        })}
      </div>

      <button
        className="m-4 flex items-center gap-3 bg-red-600 px-4 py-3 rounded-lg"
      >
        <LogOut size={18} />
        Logout
      </button>

    </div>
  );
}