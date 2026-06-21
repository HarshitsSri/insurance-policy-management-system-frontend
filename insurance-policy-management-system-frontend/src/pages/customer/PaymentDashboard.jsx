import { useNavigate } from "react-router-dom";
import { CreditCard, Wallet, Search } from "lucide-react";

const PaymentDashboard = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Make Payment",
      icon: CreditCard,
      path: "/customer/payments/make",
    },
    {
      title: "My Payments",
      icon: Wallet,
      path: "/customer/payments/my",
    },
    {
      title: "Get Payment By Id",
      icon: Search,
      path: "/customer/payments/by-id",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Premium Payment Module
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              onClick={() => navigate(card.path)}
              className="bg-white p-6 rounded-xl shadow cursor-pointer hover:shadow-xl"
            >
              <Icon size={40} />
              <h2 className="text-xl font-bold mt-4">
                {card.title}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PaymentDashboard;