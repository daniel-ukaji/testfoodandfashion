import Link from 'next/link'
import React from 'react'
import {BsArrowRight} from 'react-icons/bs'


function SubBanner() {
  return (
    <div className='flex flex-col justify-center pb-10 mt-20 max-w-6xl mx-auto mb-10 bg-[#212121]'>
        <h1 className={`  mb-5 text-center font-bold text-3xl mt-14 text-white`}>IF YOU WANT TO BE A VENDOR AT THE EVENT</h1>
        <div className='flex justify-center items-center'>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfzb4MDLbbwQc7PGBdfjAW6pDvSivc2juc-hE8OMrYMRx518w/viewform?usp=sf_link" target="_blank" className='flex justify-center items-center text-black bg-white px-10 py-4 shadow-md rounded-md font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>
                <BsArrowRight className="mr-2" /> Apply Now
            </Link>
        </div>
    </div>
  )
}

export default SubBanner