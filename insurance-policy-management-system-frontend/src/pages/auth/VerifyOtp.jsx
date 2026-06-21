import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyOtpApi } from "../../api/authApi";

export default function VerifyOtp() {

  const navigate = useNavigate();

  const [otp, setOtp] = useState("");

  const email =
    localStorage.getItem(
      "verificationEmail"
    );

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await verifyOtpApi({
        email,
        otp
      });

      alert(
        "Email verified successfully"
      );

      localStorage.removeItem(
        "verificationEmail"
      );

      navigate("/login");

    } catch (error) {

      console.log(error);

      alert(
        error?.response?.data ||
        "OTP verification failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">

      <div className="bg-white p-10 rounded-3xl shadow-xl w-[450px]">

        <h1 className="text-3xl font-bold text-center mb-3">
          Verify Email
        </h1>

        <p className="text-center text-slate-500 mb-6">
          Enter OTP sent to
          <br />
          {email}
        </p>

        <form
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            placeholder="Enter OTP"
            className="w-full border p-4 rounded-xl mb-4"
            value={otp}
            onChange={(e) =>
              setOtp(e.target.value)
            }
          />

          <button
            className="w-full bg-green-600 text-white py-4 rounded-xl"
          >
            Verify OTP
          </button>

        </form>

      </div>

    </div>
  );
}