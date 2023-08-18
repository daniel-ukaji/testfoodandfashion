import React from 'react'
import logo from '@/public/logo.png'
import Image from 'next/image'


function Presented() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col justify-center items-center mt-20 mb-5 border-b-2 pb-14 border-black">
        <h1 className="mb-3">Presented by</h1>
        <div>
            <Image src={logo} alt="" width="200" height="200"  />
        </div>
    </div>
  )
}

export default Presented