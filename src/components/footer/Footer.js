import React from "react";
import { FiMail, FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center bg-gray-50 p-3 md:p-6">
        <h3 className="text-black-900 text-base md:text-xl">اشترك في النشرة البريدية</h3>
        <h4 className='text-gray-600 text-sm md:text-base'>وكن أول من يعلم عن كل جديد في عالم التجارة الالكترونية</h4>
        <div className='flex w-full md:w-1/2 mt-2 min-h-fit rounded-md'>
            <i className="pr-3 pl-1 md:p-3 absolute self-center"><FiTwitter className="stroke-orange-light"/></i>
            <input className="flex-1 rounded-r-lg pr-9 pl-2 input" type="email" placeholder="البريد الالكتروني"></input>
            <button className="button-input">اشترك</button>


        {/* <div class="flex items-center justify-center w-screen  bg-gray-600">

    <div class="relative text-gray-600 focus-within:text-gray-400">
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </span>
      <input type="search" name="q" class="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-600" placeholder="Search..." autocomplete="off"></input>
    </div>
</div> */}

        </div>
      </div>
      <div className="relative grid grid-cols-12  bg-white bottom-0 mx-auto my-auto px-0.5 md:px-16 py-2 md:py-3  w-full items-center sm:text-center md:text-start">
        <div className="text-xs md:text-sm text-gray-600 sm:text-center md:text-start col-span-3">
          جميع الحقوق محفوظة لشركة مدونة 2022
        </div>
        <div className="space-x-1 md:space-x-3 col-span-7  flex justify-center">
          <button
            type="button"
            className="rounded-icon contact-icon ml-1 md:ml-3"
          >
            <FiMail className="h-2 w-2 md:h-4 md:w-4" />
          </button>
          <button type="button" className="rounded-icon contact-icon">
            <FiFacebook className="h-2 w-2 md:h-4 md:w-4" />
          </button>
          <button type="button" className="rounded-icon contact-icon">
            <FiInstagram className="h-2 w-2 md:h-4 md:w-4" />
          </button>
          <button type="button" className="rounded-icon contact-icon">
            <FiTwitter className="h-2 w-2 md:h-4 md:w-4" />
          </button>
          <span className=" border-primary-light border-solid border-r-2"></span>
          <button type="button" className="text-xs md:text-sm button-orange">
            كن كاتبا معنا
          </button>
        </div>
        <div className="text-xs md:text-sm text-gray-600 sm:text-center md:text-end col-span-2">
          الشروط والاحكام
        </div>
      </div>
    </>
  );
};

export default Footer;
