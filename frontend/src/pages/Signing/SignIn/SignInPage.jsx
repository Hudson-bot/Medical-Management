import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple, AiFillFacebook } from "react-icons/ai";

const SigninPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const role = params.get("role") || "User"; // Default role is "User" if not provided
  const navigate = useNavigate();

  const handleSignIn = () => {
    if (role === "Patient") {
      navigate("/dashboard"); // Redirect patient to dashboard
    }else if (role === "Doctor") {
        navigate("/doctor-dashboard"); // Redirect doctor to doctor dashboard
    } else {
      alert("Only patients are redirected to the dashboard for now!");
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-indigo-50 px-6">
      <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">{role} Login</h2>
        <p className="text-gray-600 mb-4 font-semibold text-center">Enter your details to sign in</p>

        {/* Input Fields */}
        <input
          type="text"
          placeholder="Enter Email / Phone No"
          className="w-full border border-gray-300 p-3 rounded-md mb-3"
        />
        <input
          type="password"
          placeholder="Passcode"
          className="w-full border border-gray-300 p-3 rounded-md mb-3"
        />

        <button onClick={handleSignIn} className="w-full bg-blue-900 text-white py-2 rounded-md font-medium hover:bg-blue-600 transition">
          Sign in
        </button>

        <div className="text-center mt-4 text-gray-500">— Or Sign in with —</div>

        {/* Social Login */}
        <div className="flex justify-center gap-4 mt-3">
          <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-200 transition">
            <FcGoogle size={24} /> 
          </button>
          <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-200 transition">
            <AiFillApple size={24} /> 
          </button>
          <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-200 transition">
            <AiFillFacebook size={24} className="text-blue-600" /> 
          </button>
        </div>

        <p className="mt-4 text-sm text-center text-gray-500">
          Don't have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer hover:underline"
            onClick={() => navigate("/signup")}
          >
            Request Now
          </span>
        </p>

      </div>
    </section>
  );
};

export default SigninPage;
