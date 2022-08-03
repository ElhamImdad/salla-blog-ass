import React from "react";
import { FaMoon, FaSistrix } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <nav class="bg-zinc-800">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex items-center justify-between h-16">

            <div class="flex items-center justify-center sm:items-stretch sm:justify-start">
              <div class="flex-shrink-0 flex items-center">
                <h1 className="text-1xl font-bold sm:text-2xl text-white">
                  المدونة | Blog{" "}
                </h1>
              </div>
              <div class="hidden sm:block sm:ml-6 px-4">
                <div class="flex space-x-4">
                  <a
                    href="#"
                    class="text-sky-400 underline underline-offset-1 px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    الرئيسية
                  </a>
                  <a
                    href="#"
                    class="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
                  >
                    {" "}
                    التقارير والدراسات
                  </a>
                  <a
                    href="#"
                    class="text-gray-300 hover:text-white py-2 text-sm font-medium"
                  >
                    المقالات
                  </a>
                </div>
              </div>
            </div>

            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden sm:block">
              <button
                type="button"
                class=" p-2 mx-1 rounded-full text-gray-400 hover:text-white  focus:ring-1 focus:ring-offset-1 focus:ring-offset-inherit  ring-white"
              >
                <span className="text-base sm:text-lg">
                  <FaSistrix />
                </span>
              </button>
              <button
                type="button"
                class=" p-2 mx-1 rounded-full text-gray-400 hover:text-white  focus:ring-1 focus:ring-offset-1 focus:ring-offset-inherit ring-white"
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

// <>
//   <nav className="w-screen h-[70px] bg-zinc-800 fixed drop-shadow-lg">
//     <div className="px-20 flex justify-between items-center w-full h-full">
//       <div className="flex">
//         <button className="border-none bg-transparent text-white">
//           icon1
//         </button>
//         <button className="px-4 py-3 text-white">search</button>
//       </div>

//       <div className="flex justify-between items-center">
//           <div className="flex flex-row flex-wrap space-x-6 hidden md:flex">
//             <div className="flex items-center text-sm text-white">
//               المقالات
//             </div>
//             <div className="flex items-center text-sm text-white">
//               التقارير والدراسات
//             </div>
//             <div className="flex items-center text-sm text-white">
//               الرئيسية
//             </div>
//         </div>
//         <div>
//         <h1 className="text-2xl font-bold sm:text-3xl text-white">المدونة | Blog </h1>
//         </div>
//       </div>
//     </div>
//   </nav>
// </>
