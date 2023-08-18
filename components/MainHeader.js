import React from 'react'
import logo from '@/public/logo.png'
import Image from 'next/image'


function MainHeader() {
  return (
    <div className="bg-white p-2 flex justify-between items-center">
        <div className="flex items-center">
            <div>
                <Image src={logo} alt="" width="60" height="60" />
            </div>
            <h1 className="font-bold text-xl text-black">
                CHEVRON CEMCS
            </h1>
        </div>
        <div className="flex space-x-5">
            <button className="border px-5 bg-black text-white rounded-md py-2">Login</button>
            <button className="border px-5 bg-[#0B2D71] text-white rounded-md py-2">Sign Up</button>
        </div>
    </div>
  )
}

export default MainHeader