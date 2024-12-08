import React from 'react'
import Link from 'next/link';
import {
    FaRegUser,
    FaShoppingCart,
    FaRegHeart,
    FaSearch,
  } from "react-icons/fa";
const SecondHeader = () => {
    return (
        <header>
          {/* Main Navigation Bar */}<div className="bg-white shadow py-4">
            <div className="container mx-auto px-4 flex justify-between items-center text-lg w-full">
            
              {/* Brand Name */}
              <h3 className="text-[#252B42] font-bold  ${montserrat.className} text-[24px] leading-8 tracking-[0.1px] ">Furniro</h3>
    
              {/* Navigation Links */}
              <nav className="flex space-x-6 items-center">
                <Link href="/" className="hover:text-blue-500 font-bold text-[14px] ${montserrat.className} text-[#737373] tracking-[0.2px]">
                  Home
                </Link>
                <Link href="/shop" className="hover:text-blue-500 font-bold text-[14px] ${montserrat.className} text-[#737373] tracking-[0.2px]">
                  Shop
                </Link>
               
                <Link href="/blog" className="hover:text-blue-500 font-bold text-[14px] ${montserrat.className} text-[#737373] tracking-[0.2px]">
                  Blog
                </Link>
                <Link href="/contact" className="hover:text-blue-500 font-bold text-[14px] ${montserrat.className} text-[#737373] tracking-[0.2px]">
                  Contact
                </Link>
               
              </nav>
    
              {/* Login/Register & Cart Options */}
              <div className="flex space-x-6 items-center text-sm text-black">
                <Link href="/login" className="flex items-center hover:text-black font-bold text-[14px] ${montserrat.className} tracking-[0.2px]">
                  <FaRegUser className="mr-1 h-5 w-5"/> 
                </Link>
                <FaSearch className="hover:text-black cursor-pointer h-6 w-6" />
                <FaShoppingCart className="hover:text-black cursor-pointer h-6 w-6" />
                <FaRegHeart className="hover:text-black cursor-pointer h-6 w-6" />
              </div>
            </div>
          </div>
        </header>
      );
    }
        
      
export default SecondHeader;

