import React from 'react'
import { FaBars } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
      <div className='px-8 border-y-[1px] hidden laptop:flex items-center justify-start gap-4'>
          <div className='laptop:flex justify-start items-center gap-2 p-4 bg-secondary rounded-t-xl text-white  '>
              <FaBars />
              <div className='flex justify-between items-center gap-28 '>
                  <span>All Categories</span>
                  <IoIosArrowDown />
              </div>
          </div>

          <div className='flex gap-6' >
              <Link className='hover:text-primary ' >All Products</Link>
              <Link className='hover:text-primary ' >All Appliances</Link>
              <Link className='hover:text-primary ' >All Electronics</Link>
              <Link className='hover:text-primary ' >Clearance Sale</Link>
          </div>
          
      </div>
  )
}

export default NavBar