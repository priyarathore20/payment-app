"use client";

import React, { useState } from "react";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the sign-up logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex justify-center items-center p-4 h-full">
      <div className="bg-white shadow-xl p-8 rounded-lg w-full max-w-md">
      <h1 className="mb-5 font-bold text-6xl text-center">
        <span className="text-blue-600">city</span>
        <span className="text-red-600">biz</span>+
      </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-gray-600 text-sm hover:text-red-500 transition-all duration-300 ease-in-out"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border-gray-300 px-3 py-2 border focus:border-red-500 rounded-md focus:ring-2 focus:ring-red-200 w-full focus:outline-none transition-all duration-300"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="phone"
              className="block mb-2 text-gray-600 text-sm hover:text-red-500 transition-all duration-300 ease-in-out"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="border-gray-300 px-3 py-2 border focus:border-red-500 rounded-md focus:ring-2 focus:ring-red-200 w-full focus:outline-none transition-all duration-300"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-gray-600 text-sm hover:text-red-500 transition-all duration-300 ease-in-out"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border-gray-300 px-3 py-2 border focus:border-red-500 rounded-md focus:ring-2 focus:ring-red-200 w-full focus:outline-none transition-all duration-300"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-gray-600 text-sm hover:text-red-500 transition-all duration-300 ease-in-out"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border-gray-300 px-3 py-2 border focus:border-red-500 rounded-md focus:ring-2 focus:ring-red-200 w-full focus:outline-none transition-all duration-300"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 py-2 rounded-md focus:ring-2 focus:ring-red-200 w-full text-white transition-all duration-300 ease-in-out focus:outline-none"
          >
            Submit
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-red-500">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
