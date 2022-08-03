import React from "react";
import {FaMoon, FaSistrix} from "react-icons/fa";
 
function Navbar() {
  return (
    <>
      <nav class="bg-zinc-800">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex items-center justify-between h-16">
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                class=" p-2 mx-1 rounded-full text-gray-400 hover:text-white  focus:ring-1 focus:ring-offset-1 focus:ring-offset-inherit ring-white"
              >
                {/* <span class="sr-only">View notifications</span> */}
                {/* <!-- Heroicon name: outline/bell --> */}
                <span className="text-base font-bold sm:text-lg"><FaMoon/></span>
              </button>
              <button
                type="button"
                class=" p-2 mx-1 rounded-full text-gray-400 hover:text-white  focus:ring-1 focus:ring-offset-1 focus:ring-offset-inherit  ring-white"
              >
             
                <span className="text-base sm:text-lg"><FaSistrix/></span>
              </button>
            </div>

            {/* <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        {/* Mobile menu button */}
            {/* <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>

          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
  
        </button>
      </div> */}

            <div class="flex items-center justify-center sm:items-stretch sm:justify-start">
              <div class="hidden sm:block sm:ml-6 px-4">
                <div class="flex space-x-4">
                  <a
                    href="#"
                    class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    المقالات
                  </a>

                  <a
                    href="#"
                    class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {" "}
                    التقارير والدراسات
                  </a>

                  <a
                    href="#"
                    class="text-sky-400 underline underline-offset-1 px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    الرئيسية
                  </a>
                </div>
              </div>
              <div class="flex-shrink-0 flex items-center">
                <h1 className="text-1xl font-bold sm:text-2xl text-white">
                  المدونة | Blog{" "}
                </h1>
              </div>
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
