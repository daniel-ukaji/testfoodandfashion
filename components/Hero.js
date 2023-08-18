import Image from 'next/image';
import React from 'react';
import heroImage from '@/public/heroimage.jpg';
import {BsArrowRight} from 'react-icons/bs'
import Link from 'next/link';

function Hero() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] bg-black'>
        <div className='image-container'>
          <Image 
              src={heroImage}
              layout="fill"
              objectFit="cover"
              alt=''
              className="opacity-50"
          />
        </div>
        <div className='blur-overlay absolute top-1/2 w-full text-center'>
            <p className='text-sm sm:text-5xl font-extrabold text-white'>CHEVRON FOOD & FASHION FAIR</p>
            <p className='text-sm sm:text-3xl font-extrabold text-white'>28-30 SEPTEMBER 2023</p>

          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfzb4MDLbbwQc7PGBdfjAW6pDvSivc2juc-hE8OMrYMRx518w/viewform?usp=sf_link" target="_blank">
            <div>
              <button href="" className=' text-white bg-black px-10 py-4 shadow-md rounded-md font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>
                  Apply Now
              </button>
            </div>
          </Link>
        </div>
        
    </div>
  );
}

export default Hero;
