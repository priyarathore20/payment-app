"use client";
import Loader from "@/components/Loader";
import instance from "@/utils";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const loginUser = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    try {
      setIsLoading(true);
      const res = await instance.post("/auth/login", data);
      const token = res?.data?.token;
      localStorage.setItem("token", token);
      const user = jwtDecode(token);
      router.replace("/");
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 p-6 sm:p-12 min-h-screen">
      <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-lg transform transition-all">
        <h1 className="mb-5 font-bold text-6xl text-center">
          <span className="text-blue-600">city</span>
          <span className="text-red-600">biz</span>+
        </h1>
        <form onSubmit={loginUser}>
          {/* Email Input */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-gray-600 text-sm hover:text-blue-600 transition-all duration-300 ease-in-out"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border-gray-300 px-4 py-3 border focus:border-red-500 rounded-lg focus:ring-2 focus:ring-red-300 w-full focus:outline-none transition-all duration-300"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-gray-600 text-sm hover:text-blue-600 transition-all duration-300 ease-in-out"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border-gray-300 px-4 py-3 border focus:border-red-500 rounded-lg focus:ring-2 focus:ring-red-300 w-full focus:outline-none transition-all duration-300"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 py-3 rounded-lg focus:ring-2 focus:ring-red-300 w-full font-semibold text-white transition-all duration-300 ease-in-out focus:outline-none"
          >
            {isLoading ? <Loader size={"small"} /> : "Submit"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600 text-sm">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="text-red-500">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
