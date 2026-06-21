import { useState } from "react";
import { getPaymentById } from "../../api/paymentApi";

const GetPaymentById = () => {
  const [id, setId] = useState("");
  const [payment, setPayment] = useState(null);

  const handleFetch = async () => {
    try {
      const data = await getPaymentById(id);
      setPayment(data);
    } catch (error) {
      console.log(error);
      alert("Payment not found");
    }
  };

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-5">
        Get Payment By Id
      </h1>

      <div className="bg-white p-5 rounded-xl shadow">

        <input
          type="number"
          placeholder="Enter Payment Id"
          value={id}
          onChange={(e) =>
            setId(e.target.value)
          }
          className="border p-2 rounded w-full"
        />

        <button
          onClick={handleFetch}
          className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
        >
          Fetch Payment
        </button>

      </div>

      {payment && (
        <div className="bg-white p-6 rounded-xl shadow mt-5">

          <p><strong>Payment Id :</strong> {payment.paymentId}</p>

          <p><strong>Policy Number :</strong> {payment.policyNumber}</p>

          <p><strong>Amount :</strong> {payment.amount}</p>

          <p><strong>Mode :</strong> {payment.paymentMode}</p>

          <p><strong>Status :</strong> {payment.paymentStatus}</p>

          <p><strong>Transaction Ref :</strong> {payment.transactionReference}</p>

          <p><strong>Date :</strong> {payment.paymentDate}</p>

        </div>
      )}
    </div>
  );
};

export default GetPaymentById;