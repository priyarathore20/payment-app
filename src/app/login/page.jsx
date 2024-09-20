"use client";
import React, { useState } from "react";

const AnimatedLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-purple-400 to-blue-600 min-h-screen">
      <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-md transform transition-all hover:scale-105 duration-500 ease-in-out">
        <h2 className="mb-8 font-bold text-4xl text-center text-gray-800 hover:text-indigo-600 transition-all duration-300 ease-in-out">
          Payments App
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-gray-600 text-sm hover:text-indigo-500 transition-all duration-300 ease-in-out"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border-gray-300 focus:border-indigo-500 px-3 py-2 border rounded-md focus:ring-2 focus:ring-indigo-200 w-full focus:outline-none transition-all duration-300"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-gray-600 text-sm hover:text-indigo-500 transition-all duration-300 ease-in-out"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border-gray-300 focus:border-indigo-500 px-3 py-2 border rounded-md focus:ring-2 focus:ring-indigo-200 w-full focus:outline-none transition-all duration-300"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 py-2 rounded-md focus:ring-2 focus:ring-indigo-200 w-full text-white transition-all duration-300 ease-in-out focus:outline-none"
          >
            Submit
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600 text-sm">
          Don't have an account?{" "}
          <a href="#" className="text-indigo-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default AnimatedLoginPage;
