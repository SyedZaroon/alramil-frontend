import React, { useState } from 'react'
import { FaBars, FaHeart, FaRegHeart, FaSearch, FaTimes } from 'react-icons/fa'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Header = () => {


    

    return (
        
        <>
            <div className='flex justify-between items-center p-4'>
                <div className='flex gap-1 items-center laptop:hidden '>
                    <FaBars className='text-xl' />
                    <span>Menu</span>
                </div>

                <img src="/assets/Logo-header.svg" alt="header-logo" className='w-40 laptop:w-64 ' />

                <FaSearch className='text-xl laptop:hidden ' />

                <div className='border-[1px] rounded-sm px-2  laptop:flex justify-between items-center flex-1 mx-8 hidden'>
                    <input type="text" placeholder='Search Product' className='w-full focus:outline-none ' />
                    <div className='flex justify-between items-center'>
                        <input type="select" placeholder='Select Category' className='border-x-2 w-full p-3 ' />
                        <FaSearch className='text-2xl text-textColor mx-2 ' />
                    </div>
                </div>

                <div className=' hidden laptop:flex gap-2 items-center '>
                    <div >
                        <Link className='font-bold hover:text-textColor ' to="login">Login/Register</Link>
                        
                    </div>

                   

                    <div className='flex gap-2 items-center font-bold '>
                        <div className='relative ' >
                            <Link><FaRegHeart className='text-2xl hover:text-textColor ' /></Link>
                            <span className='bg-primary text-white rounded-full p-1 text-center w-4 h-4 text-xs flex items-center justify-center absolute -top-2 -right-2 '> 0</span>
                        </div>
                        <div className='relative ' >
                            <HiOutlineShoppingBag className='text-2xl hover:text-textColor ' />
                            <span className='bg-primary text-white rounded-full p-1 text-center w-4 h-4 text-xs flex items-center justify-center absolute -top-2 -right-2 '> 0</span>

                        </div>
                        <span>Rs.<span>123</span></span>
                    </div>
                </div>


            </div>
        </>
  )
}

export default Header