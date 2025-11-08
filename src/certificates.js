import React from "react";

const Certificates = () => {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-6 text-indigo-600">My Online Certificates</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {/* Example certificate card */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Bcom information systems</h2>
          <p className="text-gray-600 dark:text-gray-300">Issued by University of Johannesburg</p>
        </div>
        {/* Introduction to Data Science*/}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Introduction to Data Science</h2>
          <p className="text-gray-600 dark:text-gray-300">Issued by CISCO </p>
           <a
            href="https://www.credly.com/badges/319b6898-04f8-4018-a2a2-4032bac1229f/public_url"
            download
            className="inline-block bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-6 rounded-full shadow transition-all duration-300"
          >
            VIEW CERTIFICATE
          </a>
        </div>

        {/* Data Science Essentials with Python PDF*/}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Data Science Essentials with Python</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Issued September 2025</p>
          <a
            href="https://www.credly.com/badges/3074e488-9919-40cc-bb57-d1e2ce4d1ae1/linked_in?t=t1dkwd"
            download
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-full shadow transition-all duration-300"
          >
            VIEW CERTIFICATE
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
