import { useEffect, useState } from "react";
import { getAllPlans } from "../../api/policyPlanApi";
import { purchasePolicy } from "../../api/policyApi";

const PurchasePolicy = () => {
  const [plans, setPlans] = useState([]);
  const [planId, setPlanId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadPlans();
  }, []);

  const loadPlans = async () => {
    try {
      const data = await getAllPlans();

      console.log("Plans:", data);

      setPlans(data.content || []);
    } catch (error) {
      console.log(error);
      alert("Failed to load plans");
    }
  };

  const selectedPlan = plans.find(
    (plan) => plan.planId === Number(planId)
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!planId || !startDate) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      await purchasePolicy({
        planId: Number(planId),
        startDate,
      });

      alert("Policy Purchased Successfully");

      setPlanId("");
      setStartDate("");
    } catch (error) {
      console.log(error);

      const message =
        error?.response?.data?.message ||
        "Purchase Failed";

      alert(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">

      <div className="bg-white rounded-xl shadow p-6">

        <h1 className="text-3xl font-bold mb-6">
          Purchase Policy
        </h1>

        <form onSubmit={handleSubmit}>

          {/* Plan Dropdown */}
          <label className="block font-semibold mb-2">
            Select Plan
          </label>

          <select
            value={planId}
            onChange={(e) =>
              setPlanId(e.target.value)
            }
            className="w-full border rounded-lg p-3 mb-5"
          >
            <option value="">
              Select Policy Plan
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

          {/* Plan Details */}
          {selectedPlan && (
            <div className="bg-slate-100 rounded-lg p-4 mb-5">

              <h2 className="text-xl font-bold mb-3">
                Plan Details
              </h2>

              <div className="grid md:grid-cols-2 gap-3">

                <p>
                  <strong>Product:</strong>{" "}
                  {selectedPlan.productName}
                </p>

                <p>
                  <strong>Product Type:</strong>{" "}
                  {selectedPlan.productType}
                </p>

                <p>
                  <strong>Plan:</strong>{" "}
                  {selectedPlan.planName}
                </p>

                <p>
                  <strong>Coverage:</strong> ₹
                  {selectedPlan.coverageAmount}
                </p>

                <p>
                  <strong>Premium:</strong> ₹
                  {selectedPlan.premiumAmount}
                </p>

                <p>
                  <strong>Premium Type:</strong>{" "}
                  {selectedPlan.premiumType}
                </p>

                <p>
                  <strong>Duration:</strong>{" "}
                  {selectedPlan.duration} Years
                </p>

                <p>
                  <strong>Status:</strong>{" "}
                  {selectedPlan.active
                    ? "ACTIVE"
                    : "INACTIVE"}
                </p>

              </div>

              <div className="mt-4">
                <strong>
                  Terms & Conditions:
                </strong>

                <p className="mt-2 text-gray-700">
                  {
                    selectedPlan.termsAndConditions
                  }
                </p>
              </div>

            </div>
          )}

          {/* Start Date */}
          <label className="block font-semibold mb-2">
            Policy Start Date
          </label>

          <input
            type="date"
            value={startDate}
            onChange={(e) =>
              setStartDate(e.target.value)
            }
            className="w-full border rounded-lg p-3 mb-5"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
          >
            {loading
              ? "Purchasing..."
              : "Purchase Policy"}
          </button>

        </form>

      </div>

    </div>
  );
};

export default PurchasePolicy;