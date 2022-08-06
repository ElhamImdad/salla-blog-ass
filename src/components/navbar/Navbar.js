import React from "react";
import { FaMoon, FaSistrix } from "react-icons/fa";

const Navbar=()=> {
  return (
    <>
      <nav className="bg-black-light sticky top-0 z-10 w-fill w-window">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">

            <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-1xl font-bold sm:text-2xl text-white">
                  المدونة | Blog{" "}
                </h1>
              </div>
              <div className="hidden sm:block sm:ml-6 px-4">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-primary-light underline underline-offset-8 px-3 py-2 text-sm md:text-base font-normal"
                    aria-current="page"
                  >
                    الرئيسية
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white px-3 py-2 text-sm md:text-base font-normal"
                  >
                    {" "}
                    التقارير والدراسات
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white py-2 text-sm md:text-base font-normal"
                  >
                    المقالات
                  </a>
                </div>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden sm:block">
              <button
                type="button"
                className=" p-2 mx-1 rounded-full text-gray-300 hover:text-white  focus:ring-1 focus:ring-offset-1 focus:ring-offset-inherit  ring-white"
              >
                <span className="text-base sm:text-lg">
                  <FaSistrix />
                </span>
              </button>
              <button
                type="button"
                className=" p-2 mx-1 rounded-full text-gray-300 hover:text-white  focus:ring-1 focus:ring-offset-1 focus:ring-offset-inherit ring-white"
              >
                <span className="text-base font-bold sm:text-lg">
                  <FaMoon />
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
