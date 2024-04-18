import React from 'react';

const Searchbox = ({ onSearch }) => {
  const handleSearch = () => {
    onSearch(); // Call the onSearch function passed from the parent component
  };
  
  return (
    <main className="flex-1 bg-gray-100 dark:bg-gray-800 p-8 font-body">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <input
            type="text"
            placeholder="Search..."
            id="searchInput"
            className="w-full sm:w-auto mb-2 sm:mb-0 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          />
          <div className="flex flex-wrap gap-2">
            <select
              className="w-full sm:w-auto mb-2 sm:mb-0 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            >
              <option value="">All Universities</option>
              <option value="Howard University">Howard University</option>
              <option value="Hampton University">Hampton University</option>
              <option value="Morehouse College">Morehouse College</option>
              <option value="Spelman College">Spelman College</option>
              <option value="Fisk University">Fisk University</option>
            </select>
            <select
              id="monthSelect"
              className="w-full sm:w-auto mb-2 sm:mb-0 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            >
              <option value="">All Dates</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
            <select
              className="w-full sm:w-auto mb-2 sm:mb-0 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            >
              <option value="">All Programs</option>
              <option value="fellowship">Fellowship</option>
              <option value="internship">Internship</option>
              <option value="conference">Conference</option>
            </select>
            <button
              className="w-full sm:w-auto bg-blue-500 dark:bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-600 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Searchbox;
