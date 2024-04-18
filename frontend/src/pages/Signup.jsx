import React from 'react';
import Navbar from '../components/Navbar';

const Signup = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const nameInput = document.getElementById('name').value;
    const emailInput = document.getElementById('email').value;

    // Perform form validation and submission logic here
    // For this example, we'll just show the success message and redirect after 3 seconds
    const form = document.getElementById('signup-form');
    const successMessage = document.getElementById('success-message');
    form.classList.add('hidden');
    successMessage.classList.remove('hidden');

    setTimeout(() => {
      window.location.href = 'index.html';
    }, 3000);
  };

    // Add inline style to set body overflow to hidden
    document.body.style.overflowY = 'hidden';

  return (
    <>
        <Navbar />

<div className="flex flex-col h-screen"> {/* Added this wrapper div */}
        <main className="flex-1 flex justify-center items-center bg-gray-100 dark:bg-gray-800 font-body" >
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md max-w-md w-full">
            <h1 className="text-2xl font-bold mb-6 text-center">Sign Up for More Opportunities</h1>
            <form id="signup-form" className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                required
              />
              <input
                type="email"
                id="email"
                placeholder="HBCU Email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-500 dark:bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-600 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Sign Up
              </button>
            </form>
            <div id="success-message" className="hidden mt-4 text-center text-green-500">
              <p>Thank you for signing up! We'll be in touch with more opportunities soon.</p>
            </div>
          </div>
        </main>
        </div>
    </>
  );
};

export default Signup;
