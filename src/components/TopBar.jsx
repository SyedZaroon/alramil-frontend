import React from 'react'
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const TopBar = () => {
    return (
        <div className='bg-primary  px-8 py-4 flex justify-center items-center laptop:justify-between '>
            <div className='hidden laptop:flex gap-4  '>
                <span className='text-xs text-white border-l-[1px] pl-2 '  >WARM WELCOME TO VISIT US</span>
                <span className='text-xs text-white border-l-[1px] pl-2 ' >Free Delivery on orders over AED 1000</span>
            </div>

            <div className='flex items-center gap-8  '>
                <div className='flex gap-3 text-white  '>
                    <FaFacebookF className='hover:text-primaryLight transition-all  '  />
                    <FaInstagram className='hover:text-primaryLight transition-all  ' />
                    <FaYoutube className='hover:text-primaryLight transition-all  ' />
                    <FaWhatsapp className='hover:text-primaryLight transition-all  ' />
                    <FaTiktok className='hover:text-primaryLight transition-all  ' />
                </div>
                <div className='text-xs text-white hidden laptop:flex gap-4 '>
                    <Link to="contact" className='border-l-[1px] pl-2 hover:text-primaryLight transition-all   ' >Contact</Link>
                    <Link to="faq" className='border-l-[1px] pl-2 hover:text-primaryLight transition-all   ' >Faqs</Link>
                </div>
            </div>
        </div>
    )
}

export default TopBar