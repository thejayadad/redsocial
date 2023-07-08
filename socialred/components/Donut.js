'use client'
import React from 'react'
import Img from "../public/pic.png"
import Image from 'next/image'

const Donut = () => {
  return (
    <div className=''>
    <div className="relative 
       before:absolute
       before:h-full before:w-full
       before:rounded-3xl
       before:z-10
       hover:before:bg-gray-600 
       before:opacity-50
       before:overflow-hidden
       cursor-pointer">
        <Image 
        src={Img}
        className='rounded-3xl 
        cursor-pointer relative z-0 h-96'
        alt="Main Image"
        />
   <h2 className='font-bold 
        text-[18px] hover:before:mb-1 hover:before:mt-2'>Title</h2>
       </div>
    
    </div>
  )
}

export default Donut