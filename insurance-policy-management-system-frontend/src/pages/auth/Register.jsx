import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerApi } from "../../api/authApi";

export default function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    mobileNumber: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await registerApi(formData);

      localStorage.setItem(
        "verificationEmail",
        formData.email
      );

      alert("OTP sent successfully");

      navigate("/verify-otp");

    } catch (error) {

      console.log(error);

      alert(
        error?.response?.data ||
        "Registration failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">

      <div className="bg-white p-10 rounded-3xl shadow-xl w-[500px]">

        <h1 className="text-3xl font-bold text-center mb-8">
          Create Account
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="w-full border p-4 rounded-xl"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border p-4 rounded-xl"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border p-4 rounded-xl"
            onChange={handleChange}
          />

          <input
            type="text"
            name="mobileNumber"
            placeholder="Mobile Number"
            className="w-full border p-4 rounded-xl"
            onChange={handleChange}
          />

          <button
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold"
          >
            Register
          </button>

        </form>

      </div>

    </div>
  );
}