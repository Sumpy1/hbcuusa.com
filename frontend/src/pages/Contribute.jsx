import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';


const Contribute = () => {

    // Add inline style to set body overflow to hidden
    document.body.style.overflowY = 'hidden';
  return (
    <>

    <Navbar />
    <html lang="en">
      <body className="flex flex-col min-h-screen font-body" >

        <main className="flex-1 flex justify-center items-center bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md max-w-md w-full transition-colors duration-300">
            <h1 className="text-2xl font-bold mb-6 text-center">Contribute by adding a program</h1>
            <form action="/" method="post" className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 dark:text-gray-300">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name.." className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 dark:text-gray-300">HBCU email</label>
                <input type="text" id="email" name="email" placeholder="Your HBCU.edu email.." className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300" required />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-1 dark:text-gray-300">Contribute by typing any fellowship you know</label>
                <textarea id="subject" name="subject" placeholder="Write something.." className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300" style={{ height: '200px' }} required></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700">Submit</button>
            </form>
          </div>
        </main>
      </body>
    </html>
    </>
  );
};

export default Contribute;
