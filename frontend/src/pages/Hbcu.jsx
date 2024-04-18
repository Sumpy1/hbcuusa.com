import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';

export default function Home() {
  useEffect(() => {
    async function fetchCsvData() {
      try {
        const response = await fetch(process.env.PUBLIC_URL + '/img/HBCU.csv');
        if (!response.ok) {
          throw new Error('Failed to fetch CSV data');
        }
        const data = await response.text();
        const rows = data.split('\n');
        const tableBody = document.querySelector('#universityTable tbody');

        let rowNumber = 1;
        for (let i = 1; i < rows.length; i++) {
          const columns = rows[i].split(',');
          const tr = document.createElement('tr');
          tr.classList.add('border-b', 'dark:border-gray-600');

          const numberCell = document.createElement('td');
          numberCell.classList.add('px-4', 'py-2');
          numberCell.textContent = rowNumber;
          tr.appendChild(numberCell);

          columns.forEach((column, index) => {
            const td = document.createElement('td');
            td.classList.add('px-4', 'py-2');
            if (index === 1) {
              const link = document.createElement('a');
              link.href = column.trim();
              link.textContent = column.trim();
              link.classList.add(
                'text-blue-500',
                'hover:text-blue-700',
                'dark:text-blue-400',
                'dark:hover:text-blue-300'
              );
              td.appendChild(link);
            } else {
              td.textContent = column.trim();
            }
            tr.appendChild(td);
          });

          tableBody.appendChild(tr);
          rowNumber++;
        }
      } catch (error) {
        console.error('Error fetching CSV data:', error);
      }
    }

    fetchCsvData();
  }, []);

  return (
    <>
        <Navbar />
      <main className="flex-1 bg-gray-100 dark:bg-gray-800 p-8 font-body">
        <h1 className="text-2xl font-bold mb-4 dark:text-white">HBCU Universities Database</h1>

        <table id="universityTable" className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-800 dark:bg-gray-900 text-white">
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">College / University</th>
              <th className="px-4 py-2">URL</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </main>

      <footer className="bg-blue-800 dark:bg-gray-900 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy;2024 Copyright: All Rights Reserved by HBCUUSA.com</p>
        </div>
      </footer>
    </>
  );
}
