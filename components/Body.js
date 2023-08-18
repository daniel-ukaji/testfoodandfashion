import Image from 'next/image'
import React from 'react'
import otherImage from '@/public/otherimage.jpg'
import herohero from '@/public/herohero.jpg'
import sideimage from '@/public/sideimage.jpg'
import lastimage from '@/public/lastimage.jpg'


function Body() {
  return (
    <div className="max-w-6xl mx-auto mt-20">
        <div className="flex justify-center items-center space-x-5">
            <div className="w-1/2 mt-10">
                <h1 className="font-bold text-2xl">CHEVRON FOOD & FASHION FAIR</h1>
                <h1 className="font-bold text-2xl mb-10">28-30 SEPTEMBER 2023</h1>
                <p className="mb-5">Melbourne Fashion Week (M/FW) features a program celebrating and supporting the best in Australian fashion including runways in unexpected and impressive locations, talks with experts, hands-on workshops, pop-up fashion moments, immersive experiences, and more.</p>
               </div>

            <div className="relative w-[600px] h-[400px] border">
                <Image src={lastimage} alt="" layout="fill" objectFit="cover" height=""  className="" />
            </div>
        </div>
    </div>
  )
}

export default Body