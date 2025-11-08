import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Linkedin, GitHub } from 'react-feather';

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="about"
      className="text-gray-900 dark:text-gray-100 py-16 px-8 transition-colors duration-300 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto">
        
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            A brief introduction to who I am and what I do.
          </p>
        </div>

        
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-12">
          
          {/* <div
            className={`w-full lg:w-1/3 mb-12 lg:mb-0 transform transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '150ms' }}
          >
          <img
            src="/lukhanyo.jpg"
            alt="Mr. Lukhanyo"
            className="rounded-full shadow-lg border-4 border-indigo-500 mx-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div> */}

          <div
            className={`w-full lg:w-1/3 mb-12 lg:mb-0 transform transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '150ms' }}
          >
            <img
              src={process.env.PUBLIC_URL + "/lukhanyo.jpg"}
              alt="Lukhanyo"
              className="rounded-full shadow-lg dark:shadow-indigo-900 border-4 border-indigo-500 dark:border-indigo-400 mx-auto transform hover:scale-105 transition-transform duration-300 bg-white dark:bg-gray-800"
            />
          </div>

                  
          <div
            className={`w-full lg:w-2/3 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="p-8 rounded-lg shadow-lg dark:shadow-indigo-900 hover:shadow-2xl dark:hover:shadow-indigo-800 transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <p className="text-lg leading-relaxed mb-6 text-gray-800 dark:text-gray-300">
                My name is Lukhanyo Daniel. I am a BCom information systems Graduate with a strong passion for technology, business, and innovation.
                Alongside my academic studies, I have developed solid programming skills and even created my own website portfolio to showcase my work.
                I am proficient in languages such as HTML, CSS, JavaScript, My SQL and Python, with experience in building responsive websites, problem-solving, and working with digital tools.
                My strengths lie in combining analytical thinking with technical skills, allowing me to bridge business and technology effectively.
                I am eager to apply my knowledge, creativity, and programming expertise in real-world projects and professional environments.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-gray-800 dark:text-gray-300">
                I am continuously expanding my expertise in modern technologies like
                Tailwind CSS, databases and data visualization. My goal is to apply
                these skills to real-world projects and contribute to innovative
                solutions that create real impact.
              </p>
             
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/lukhanyo-daniel-a9720823a"
                  aria-label="LinkedIn profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/urjiiko1"
                  aria-label="GitHub profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
                >
                  <GitHub size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
