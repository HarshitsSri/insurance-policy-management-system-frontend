import { useEffect, useState } from "react";

import {
  getMyPolicies,
  getPolicyById,
} from "../../api/policyApi";

const GetPolicyById = () => {

  const [policies, setPolicies] = useState([]);

  const [selectedId, setSelectedId] =
    useState("");

  const [policy, setPolicy] =
    useState(null);

  useEffect(() => {
    loadPolicies();
  }, []);

  const loadPolicies = async () => {
    const data = await getMyPolicies();

    setPolicies(data.content);
  };

  const handleFetch = async () => {
    const data =
      await getPolicyById(selectedId);

    setPolicy(data);
  };

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-4">
        Get Policy By Id
      </h1>

      <select
        value={selectedId}
        onChange={(e) =>
          setSelectedId(e.target.value)
        }
        className="border p-3 rounded w-full"
      >

        <option value="">
          Select Policy
        </option>

        {policies.map((policy) => (
          <option
            key={policy.policyId}
            value={policy.policyId}
          >
            {policy.policyNumber}
          </option>
        ))}

      </select>

      <button
        onClick={handleFetch}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
      >
        Fetch Policy
      </button>

      {policy && (
        <div className="bg-white shadow rounded-xl p-6 mt-6">

          <p><strong>ID :</strong> {policy.policyId}</p>

          <p><strong>Policy No :</strong> {policy.policyNumber}</p>

          <p><strong>Customer :</strong> {policy.customerName}</p>

          <p><strong>Plan :</strong> {policy.planName}</p>

          <p><strong>Product Type :</strong> {policy.productType}</p>

          <p><strong>Coverage :</strong> {policy.coverageAmount}</p>

          <p><strong>Premium :</strong> {policy.premiumAmount}</p>

          <p><strong>Premium Type :</strong> {policy.premiumType}</p>

          <p><strong>Start Date :</strong> {policy.startDate}</p>

          <p><strong>End Date :</strong> {policy.endDate}</p>

          <p><strong>Status :</strong> {policy.policyStatus}</p>

          <p><strong>Total Paid :</strong> {policy.totalPremiumPaid}</p>

        </div>
      )}
    </div>
  );
};

export default GetPolicyById;