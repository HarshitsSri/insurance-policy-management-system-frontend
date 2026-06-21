import { useEffect, useState } from "react";

import {
  getAllPlans,
  getPlanById,
} from "../../api/policyPlanApi";

const GetPlanById = () => {
  const [plans, setPlans] = useState([]);
  const [selectedId, setSelectedId] =
    useState("");

  const [plan, setPlan] =
    useState(null);

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

  const handleFetch = async () => {
    try {
      const data =
        await getPlanById(selectedId);

      setPlan(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Get Plan By Id
      </h1>

      <div className="bg-white p-6 rounded-xl shadow">

        <select
          value={selectedId}
          onChange={(e) =>
            setSelectedId(e.target.value)
          }
          className="border p-3 rounded w-full"
        >
          <option value="">
            Select Plan
          </option>

          {plans.map((plan) => (
            <option
              key={plan.planId}
              value={plan.planId}
            >
              {plan.planName}
            </option>
          ))}
        </select>

        <button
          onClick={handleFetch}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Fetch Plan
        </button>

      </div>

      {plan && (
        <div className="bg-white p-6 rounded-xl shadow mt-6">

          <h2 className="text-2xl font-bold mb-4">
            Plan Details
          </h2>

          <p>
            <strong>Plan ID:</strong>{" "}
            {plan.planId}
          </p>

          <p>
            <strong>Product:</strong>{" "}
            {plan.productName}
          </p>

          <p>
            <strong>Product Type:</strong>{" "}
            {plan.productType}
          </p>

          <p>
            <strong>Plan Name:</strong>{" "}
            {plan.planName}
          </p>

          <p>
            <strong>Coverage:</strong> ₹
            {plan.coverageAmount}
          </p>

          <p>
            <strong>Premium:</strong> ₹
            {plan.premiumAmount}
          </p>

          <p>
            <strong>Premium Type:</strong>{" "}
            {plan.premiumType}
          </p>

          <p>
            <strong>Duration:</strong>{" "}
            {plan.duration} Years
          </p>

          <p>
            <strong>Terms:</strong>{" "}
            {plan.termsAndConditions}
          </p>

          <p>
            <strong>Status:</strong>{" "}
            {plan.active
              ? "ACTIVE"
              : "INACTIVE"}
          </p>

        </div>
      )}

    </div>
  );
};

export default GetPlanById;