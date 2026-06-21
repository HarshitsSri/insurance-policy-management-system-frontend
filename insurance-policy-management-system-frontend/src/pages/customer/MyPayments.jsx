import { useEffect, useState } from "react";
import { getMyPayments } from "../../api/paymentApi";

const MyPayments = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    loadPayments();
  }, []);

  const loadPayments = async () => {
    try {
      const data = await getMyPayments();
      setPayments(data.content);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-5">
        My Payments
      </h1>

      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-200">
            <tr>
              <th className="p-3">Payment ID</th>
              <th className="p-3">Policy Number</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Mode</th>
              <th className="p-3">Status</th>
              <th className="p-3">Transaction Ref</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((payment) => (
              <tr key={payment.paymentId}>
                <td className="p-3">{payment.paymentId}</td>
                <td className="p-3">{payment.policyNumber}</td>
                <td className="p-3">{payment.amount}</td>
                <td className="p-3">{payment.paymentMode}</td>
                <td className="p-3">{payment.paymentStatus}</td>
                <td className="p-3">
                  {payment.transactionReference}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPayments;