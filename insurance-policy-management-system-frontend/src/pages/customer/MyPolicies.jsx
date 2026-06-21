import { useEffect, useState } from "react";
import { getMyPolicies } from "../../api/policyApi";

const MyPolicies = () => {

  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    loadPolicies();
  }, []);

  const loadPolicies = async () => {
    const data = await getMyPolicies();

    setPolicies(data.content);
  };

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-5">
        My Policies
      </h1>

      <div className="overflow-x-auto bg-white rounded-xl shadow">

        <table className="w-full">

          <thead className="bg-slate-200">

            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Policy No</th>
              <th className="p-3">Plan</th>
              <th className="p-3">Coverage</th>
              <th className="p-3">Premium</th>
              <th className="p-3">Status</th>
            </tr>

          </thead>

          <tbody>

            {policies.map((policy) => (

              <tr
                key={policy.policyId}
                className="border-b"
              >

                <td className="p-3">
                  {policy.policyId}
                </td>

                <td className="p-3">
                  {policy.policyNumber}
                </td>

                <td className="p-3">
                  {policy.planName}
                </td>

                <td className="p-3">
                  {policy.coverageAmount}
                </td>

                <td className="p-3">
                  {policy.premiumAmount}
                </td>

                <td className="p-3">
                  {policy.policyStatus}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>
    </div>
  );
};

export default MyPolicies;