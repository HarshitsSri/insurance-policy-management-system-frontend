import { useEffect, useState } from "react";
import { getAllPlans } from "../../api/policyPlanApi";

const GetAllPlans = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    loadPlans();
  }, []);

  const loadPlans = async () => {
    try {
      const data = await getAllPlans();

      setPlans(data.content || []);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        All Policy Plans
      </h1>

      <div className="bg-white rounded-xl shadow overflow-x-auto">

        <table className="w-full">

          <thead className="bg-slate-200">

            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Product</th>
              <th className="p-3">Plan</th>
              <th className="p-3">Coverage</th>
              <th className="p-3">Premium</th>
              <th className="p-3">Duration</th>
              <th className="p-3">Status</th>
            </tr>

          </thead>

          <tbody>

            {plans.map((plan) => (
              <tr
                key={plan.planId}
                className="border-b"
              >
                <td className="p-3">
                  {plan.planId}
                </td>

                <td className="p-3">
                  {plan.productName}
                </td>

                <td className="p-3">
                  {plan.planName}
                </td>

                <td className="p-3">
                  ₹{plan.coverageAmount}
                </td>

                <td className="p-3">
                  ₹{plan.premiumAmount}
                </td>

                <td className="p-3">
                  {plan.duration} Years
                </td>

                <td className="p-3">
                  {plan.active
                    ? "ACTIVE"
                    : "INACTIVE"}
                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default GetAllPlans;