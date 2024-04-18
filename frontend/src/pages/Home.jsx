import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Searchbox from '../components/Searchbox';

export default function Home() {
  const [programs, setPrograms] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');


  useEffect(() => {
    fetch(process.env.PUBLIC_URL + 'img/program.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch program data");
        }
        return response.json();
      })
      .then((programs) => {
        setPrograms(programs);
      })
      .catch((error) => {
        console.error("Error fetching programs:", error);
      });
  }, []);


  function filterPrograms() {
    const searchValue = document.getElementById("searchInput").value.toLowerCase();
    const selectedMonth = document.getElementById("monthSelect").value.toLowerCase();

    // Filter programs based on both search input and selected month
    const filteredPrograms = programs.filter(program => {
      const programName = program.name.toLowerCase();
      const programMonth = program.applicationMonth.toLowerCase();
      return (searchValue === "" || programName.includes(searchValue)) &&
             (selectedMonth === "" || programMonth.includes(selectedMonth));
    });

    renderPrograms(filteredPrograms);
  }

  function renderPrograms(programs) {
    const opportunitiesContainer = document.getElementById("opportunitiesContainer");
    opportunitiesContainer.innerHTML = ''; // Clear previous content

    programs.forEach(program => {
      const opportunity = document.createElement("div");
      opportunity.classList.add(
        "opportunity",
        "bg-white",
        "dark:bg-gray-900",
        "p-4",
        "rounded-md",
        "shadow-md"
      );

      opportunity.innerHTML = `
        <h2 class="text-lg font-bold mb-2 dark:text-white cursor-pointer font-body">${program.name}</h2>
        <div class="hidden">
          <p>${program.description}</p>
        </div>
        <div class="flex justify-between items-center">
          <p class="text-gray-600 dark:text-gray-400">${program.applicationMonth}</p>
          <a href="${program.applicationLink}" class="bg-blue-500 dark:bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-600 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500">Apply</a>
        </div>
      `;
      opportunitiesContainer.appendChild(opportunity);
    });
  }

  useEffect(() => {
    renderPrograms(programs);
  }, [programs]);

  return (
    <>
      <Navbar />
      <Searchbox onSearch={filterPrograms} setSearchValue={setSearchValue} setSelectedMonth={setSelectedMonth} />

      <main className="flex-1 bg-gray-100 dark:bg-gray-800 p-0 font-body">
        <div className="container mx-auto">
          <section className="opportunities overflow-x">
            <div className="opportunity-header flex justify-between items-center mb-4 dark:text-white">
              <span>Programs</span>
              <span>Application opens</span>
            </div>
            <div id="opportunitiesContainer" className="space-y-4">
              {/* Dynamic opportunities will be added here */}
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-blue-800 dark:bg-gray-900 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy;2024 Copyright: All Rights Reserved by HBCUUSA.com</p>
        </div>
      </footer>
    </>
  );
}
