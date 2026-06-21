import { useNavigate } from "react-router-dom";
import { FilePlus, List, Search } from "lucide-react";

const PolicyDashboard = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Purchase Policy",
      icon: FilePlus,
      path: "/customer/policies/purchase",
    },
    {
      title: "My Policies",
      icon: List,
      path: "/customer/policies/my",
    },
    {
      title: "Get Policy By Id",
      icon: Search,
      path: "/customer/policies/by-id",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Policy Module
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              onClick={() => navigate(card.path)}
              className="bg-white rounded-xl shadow-md p-6 cursor-pointer hover:shadow-xl"
            >
              <Icon size={40} />

              <h2 className="text-xl font-semibold mt-4">
                {card.title}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PolicyDashboard;