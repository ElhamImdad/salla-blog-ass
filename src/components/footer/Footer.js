import React from 'react';
import {FiMail, FiFacebook, FiInstagram, FiTwitter} from "react-icons/fi";

const Footer=()=> {
    return ( 
        <>
        <div className='bg-white bottom-0 flex justify-between mx-auto px-7 md:px-16 py-2 md:py-3 relative w-full'>
            <div className='text-xs md:text-sm text-gray-neutrals'>جميع الحقوق محفوظة لشركة مدونة 2022</div>
            <div className='flex space-x-1 md:space-x-3'>
                <button type="button" className='rounded-icon contact-icon'><FiMail className='h-2 w-2 md:h-4 md:w-4'/></button>
                <button type="button" className='rounded-icon contact-icon'><FiFacebook className='h-2 w-2 md:h-4 md:w-4'/></button>
                <button type="button" className='rounded-icon contact-icon'><FiInstagram className='h-2 w-2 md:h-4 md:w-4'/></button>
                <button type="button" className='rounded-icon contact-icon'><FiTwitter className='h-2 w-2 md:h-4 md:w-4'/></button>
                <span>|</span>
                <button type="button" className=''>كن كاتبا معنا</button>
            </div>
            <div className='text-xs md:text-sm text-gray-neutrals'>الشروط والاحكام</div>
        </div>
        </>
     );
}

export default Footer;