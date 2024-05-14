import React from 'react';

export default function About() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 bg-gray-100 dark:bg-gray-800 font-body">
          <section className="about-section">
            <section className="image-section h-half w-full">
              <img
                src="img/9404239828_0443447145_o.jpg"
                alt="picture"
                className="w-full h-full object-cover"
              />
            </section>

            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">
                Welcome to HBCU & MSI Initiatives
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Do you want to earn some extra cash and get industry-based experience during your college? Do you see your friends' posts about getting external scholarships and wonder where they applied from?
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                HBCUUSA is a simple yet efficient one-stop platform for all the HBCU and MSI students where you can apply to all the CSR, internship, fellowships programs opened at that specific time. We are dedicated to showcasing Corporate Social Responsibility (CSR) initiatives and providing information about fellowships specifically aimed at students of Historically Black Colleges and Universities (HBCU) and Minority-Serving Institutions (MSI). Our platform aims to connect students with opportunities that promote diversity, inclusion, and social impact.
              </p>
            </div>
          </section>

          <section className="mission-vision">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Our Mission</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Our mission is to empower students of HBCUs and MSIs by providing access to resources, opportunities, and information about CSR initiatives and fellowships that support their personal and professional development.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-4 dark:text-white">Our Vision</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We envision a future where every student, regardless of their background, has equal access to opportunities for growth, success, and positive impact in their communities.
              </p>
            </div>
          </section>
        </main>

        <footer className="bg-blue-800 dark:bg-gray-900 text-white py-4">
          <div className="container mx-auto text-center">
            <p>&copy;2024 Copyright: All Rights Reserved by HBCUUSA.com</p>
          </div>
        </footer>
      </div>
    </>
  );
}
