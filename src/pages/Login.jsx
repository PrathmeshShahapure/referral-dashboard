import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { loginUser } from "../api/authApi";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const token = Cookies.get("jwt_token");

  if (token) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);
    try {
      const res = await loginUser(formData);
      const token = res.data.token;
      console.log(res);
      Cookies.set("jwt_token", token, { expires: 1 });
      navigate("/");
    } catch (err) {
      setError(err?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(formData);
  };
  return (
    <div
      className="min-h-screen flex items-center justify-center
    bg-center bg-cover "
    >
      <div className=" max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-[#6e70f1] mb-2">
          Go Business
        </h1>
        <p className="text-gray-600 mb-4">
          Sign in to open your referral dashboard.
        </p>
        <form id="loginForm" onSubmit={handleSubmit} className="">
          <label
            htmlFor="email"
            className=" text-gray-900 font-bold text-base mb-2"
          >
            Email
          </label>
          <input
            className="w-full h-8 px-1 border border-gray-400 mb-2 outline-none rounded"
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
          />
          <label
            htmlFor="password"
            className="text-gray-900 font-bold text-base  mb-2"
          >
            Password
          </label>
          <input
            className="w-full h-8 px-1 border border-gray-400 mb-4 outline-none rounded"
            type="password"
            id="password"
            name="password"
            placeholder="********"
            value={formData.password}
            onChange={handleChange}
          />

          <div className=" flex justify-center">
            {loading ? (
              <button
                className=" bg-[#6e70f1]  hover:bg-[#5a5cff] text-white py-1.5 px-4 rounded"
                type="submit"
              >
                Signing in...
              </button>
            ) : (
              <button
                className=" bg-[#6e70f1]  hover:bg-[#5a5cff] text-white py-1.5 px-4 rounded"
                type="submit"
              >
                Sign in
              </button>
            )}
          </div>
        </form>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
