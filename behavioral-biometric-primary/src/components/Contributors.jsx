import React from "react";
import BBLogo from "../assets/BBLogo.png"; // Replace with your actual logo
import KS from "../assets/Contributors/KS.png";
import BG from "../assets/Contributors/BG.png";
import PK from "../assets/Contributors/PK.png";
const Contributors = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="pt-5 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Contributors
      </h1>

      {/* Contributors Grid - Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto justify-center">
        {/* Contributor Card - Kshitij K Sawant */}
        <div className="flex justify-center">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="h-auto w-full rounded-t-lg transition-all duration-300 filter grayscale hover:grayscale-0"
                src={KS}
                alt="Profile Cover"
              />
            </a>
            <div className="p-5 text-center">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Kshitij K Sawant
                </h5>
              </a>
              <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
                Software Developer | AI & Data Science Visionary | Educator
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://github.com/KshitijSawant1"
                  className="flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#24292F] rounded-lg hover:bg-[#24292F]/90"
                >
                  Explore Github
                </a>
                <a
                  href="https://www.linkedin.com/in/kshitijksawant/"
                  className="flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#0A66C2] rounded-lg hover:bg-[#0A66C2]/90"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contributor Card - Bhargav Gajare */}
        <div className="flex justify-center">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="h-auto w-full rounded-t-lg transition-all duration-300 filter grayscale hover:grayscale-0"
                src={BG}
                alt="Profile Cover"
              />
            </a>
            <div className="p-5 text-center">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Bhargav Gajare
                </h5>
              </a>
              <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
                Software Developer | AI & Data Science Visionary | Educator
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://github.com/maazshaikh2079"
                  className="flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#24292F] rounded-lg hover:bg-[#24292F]/90"
                >
                  Explore Github
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#0A66C2] rounded-lg hover:bg-[#0A66C2]/90"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contributor Card - Prathmesh Kulkarni */}
        <div className="flex justify-center">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="h-auto w-full rounded-t-lg transition-all duration-300 filter grayscale hover:grayscale-0"
                src={PK}
                alt="Profile Cover"
              />
            </a>
            <div className="p-5 text-center">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Prathmesh Kulkarni
                </h5>
              </a>
              <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
                Software Developer | AI & Data Science Visionary | Educator
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://github.com/Intr0vert1648"
                  className="flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#24292F] rounded-lg hover:bg-[#24292F]/90"
                >
                  Explore Github
                </a>
                <a
                  href="https://www.linkedin.com/in/jash-damania-a61281266/"
                  className="flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#0A66C2] rounded-lg hover:bg-[#0A66C2]/90"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contributors;
