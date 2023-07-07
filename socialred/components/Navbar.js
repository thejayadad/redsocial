
"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import logo from "../public/logo.png"
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className='flex justify-between 
    gap-3 md:gap-2 items-center p-6 '>
        <Image
            className='hover:bg-gray-300 p-2 rounded-full cursor-pointer'
            width={100} height={80}
            alt='logo'
            src={logo}
        />
        <nav>
            <ul>
                <li>
                <Link href={'/create-post'} className='font-semibold p-3 px-6
                    bg-gray-300
                    rounded-full text-[25px]' 
                >Create</Link>
                <button className='font-semibold p-3 px-4
                bg-gray-300
                rounded-full text-[25px]' 
            >Logout</button>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar