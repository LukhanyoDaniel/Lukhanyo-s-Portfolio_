import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronDown } from 'react-feather';
import { Link } from "react-router-dom";

const Home = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="home"
      className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen flex items-center justify-center relative transition-colors duration-300"
    >
      <div className="absolute inset-0 z-0">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: "url('/BackgroundAboutMe.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-white dark:bg-gray-900 opacity-75"></div>
      </div>

      <div
        ref={ref}
        className={`relative z-10 text-center px-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-gray-900 dark:text-white">
          Hello, I'm <span className="text-indigo-500">Lukhanyo Castro Daniel</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
          A Passionate Software Developer in web development and data-driven solutions
        </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
          <Link
            to="/projects"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="bg-transparent border-2 border-gray-900 dark:border-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 text-gray-900 dark:text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Get in Touch
          </Link>
          <Link
            to="/certificates"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Online Certificates
          </Link>
        </div>
      </div>

      <div className={`relative z-10 mt-16 sm:mt-24 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <a
          href="#about"
          className="animate-bounce text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition-colors"
        >
          <ChevronDown size={48} />
        </a>
      </div>
    </section>
  );
};

export default Home;
