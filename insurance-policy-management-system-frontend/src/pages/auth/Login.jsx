import { useState } from "react";
import { loginApi } from "../../api/authApi";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginApi(formData);

      const data = response.data;

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      if (data.role === "ADMIN") {
        navigate("/admin/dashboard");
      }

      else if (data.role === "AGENT") {
        navigate("/agent/dashboard");
      }

      else {
        navigate("/customer/dashboard");
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-[400px]"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">
          Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-3 w-full mb-4 rounded"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border p-3 w-full mb-4 rounded"
          onChange={handleChange}
        />

        <button
          className="bg-blue-600 text-white p-3 rounded w-full"
        >
          Login
        </button>

      </form>
    </div>
  );
}