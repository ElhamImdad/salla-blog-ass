import React from 'react';
import {FiMail, FiFacebook, FiInstagram, FiTwitter} from "react-icons/fi";

const Footer=()=> {
    return ( 
        <>
        <div className='grid grid-cols-12  bg-white bottom-0 mx-auto my-auto px-0.5 md:px-16 py-2 md:py-3  w-full items-center sm:text-center md:text-start'>
            <div className='text-xs md:text-sm text-gray-neutrals sm:text-center md:text-start col-span-3'>جميع الحقوق محفوظة لشركة مدونة 2022</div>
            <div className='space-x-1 md:space-x-3 col-span-7  flex justify-center'>
                <button type="button" className='rounded-icon contact-icon ml-1 md:ml-3'><FiMail className='h-2 w-2 md:h-4 md:w-4'/></button>
                <button type="button" className='rounded-icon contact-icon'><FiFacebook className='h-2 w-2 md:h-4 md:w-4'/></button>
                <button type="button" className='rounded-icon contact-icon'><FiInstagram className='h-2 w-2 md:h-4 md:w-4'/></button>
                <button type="button" className='rounded-icon contact-icon'><FiTwitter className='h-2 w-2 md:h-4 md:w-4'/></button>
                <span className=" border-primary-light border-solid border-r-2"></span>
                <button type="button" className='text-xs md:text-sm button-orange'>كن كاتبا معنا</button>
            </div>
            <div className='text-xs md:text-sm text-gray-neutrals sm:text-center md:text-end col-span-2'>الشروط والاحكام</div>
        </div>
        </>
     );
}

export default Footer;