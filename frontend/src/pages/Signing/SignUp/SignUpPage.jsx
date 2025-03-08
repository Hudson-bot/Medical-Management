import React from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple, AiFillFacebook } from "react-icons/ai";

const SignUpPage = () => {
  const navigate = useNavigate();

  return (
    <section className="flex items-center justify-center min-h-screen bg-indigo-50 px-6">
      <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-lg w-full max-w-md mt-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Sign Up</h2>
        <p className="text-gray-600 mb-4 text-center font-semiboldg">Create a new account</p>

        {/* Input Fields */}
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border border-gray-300 p-3 rounded-md mb-3"
        />
        <input
          type="email"
          placeholder="Enter Email"
          className="w-full border border-gray-300 p-3 rounded-md mb-3"
        />
        <input
          type="password"
          placeholder="Create Password"
          className="w-full border border-gray-300 p-3 rounded-md mb-3"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full border border-gray-300 p-3 rounded-md mb-3"
        />

        <button className="w-full bg-blue-900 text-white py-2 rounded-md font-medium hover:bg-blue-600 transition ">
          Sign Up
        </button>

        <div className="text-center mt-4 text-gray-500">— Or Sign up with —</div>

        {/* Social Sign Up */}
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
          Already have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer hover:underline"
            onClick={() => navigate("/signin")}
          >
            Sign In
          </span>
        </p>
      </div>
    </section>
  );
};

export default SignUpPage;
