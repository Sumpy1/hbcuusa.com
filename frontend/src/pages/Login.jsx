import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi'; // Import eye icons from react-icons library

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5001/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <main className="flex-1 flex justify-center items-center bg-gray-100 dark:bg-gray-800 font-body">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md max-w-md w-full">
            <h1 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h1>
            <form id="login-form" className="space-y-4" action="/login" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
              />
              <div className="relative"> {/* Container for password field and eye icon */}
                <input
                  type={showPassword ? "text" : "password"} // Show password if showPassword is true
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={data.password}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                />
                {/* Eye icon to toggle password visibility */}
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  {showPassword ? (
                    <FiEyeOff onClick={togglePasswordVisibility} className="text-gray-400 cursor-pointer" />
                  ) : (
                    <FiEye onClick={togglePasswordVisibility} className="text-gray-400 cursor-pointer" />
                  )}
                </div>
              </div>
              {error && <div className="text-red-500">{error}</div>}
              <button
                type="submit"
                className="w-full bg-blue-500 dark:bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-600 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Sign In
              </button>
            </form>
            <div className="mt-4 text-center">
              <h1 className="text-lg">New Here?</h1>
              <Link to="/signup">
                <button type="button" className="mt-2 w-full bg-white dark:bg-gray-800 text-blue-500 dark:text-blue-300 py-2 px-4 rounded-md border border-blue-500 dark:border-blue-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Login;
