import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Contribute = () => {
  const [data, setData] = useState({ name: "", email: "", subject: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5001/api/programs";
      const { data: res } = await axios.post(url, data);
      setSuccess(res.message);
      setError("");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
      setSuccess("");
    }
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <main className="flex-1 flex justify-center items-center bg-gray-100 dark:bg-gray-800 font-body">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md max-w-md w-full">
            <h1 className="text-2xl font-bold mb-6 text-center">Contribute by adding a program</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 dark:text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name.."
                  onChange={handleChange}
                  value={data.name}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 dark:text-gray-300">HBCU email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your HBCU.edu email.."
                  onChange={handleChange}
                  value={data.email}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-1 dark:text-gray-300">Contribute by typing any fellowship you know</label>
                <textarea
                  id="subject"
                  name="subject"
                  placeholder="Write something.."
                  onChange={handleChange}
                  value={data.subject}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
                  style={{ height: '200px' }}
                  required
                ></textarea>
              </div>
              {error && <div className="text-red-500">{error}</div>}
              {success && <div className="text-green-500">{success}</div>}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};

export default Contribute;
