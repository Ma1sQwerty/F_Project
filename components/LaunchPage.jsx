import React from 'react'

import Slide1 from '../public/slides/3.png'

function LaunchPage() {
  console.log(Slide1);
  
  return (
    <div className='max-w-[1920px]'>
        <div className={`flex justify-between bg-[url('http://192.168.1.21:3000/_next/static/media/3.a1a6347d.png')] bg-center h-80 my-5 mx-5 bg-cover w-[calc(100vw-2.5rem)] mx-auto px-2 rounded-xl md:h-[30rem] md:w-[calc(100vw-5rem)] xl:h-[40rem]`}>
          <div className='font-bold z-10 cursor-default'>
            <h1 className='text-7xl text-white'>
              J
              <span className='font-outline-2 text-transparent hover:text-white transition-colors duration-200'>U</span>
              M
              <span className='font-outline-2 text-transparent hover:text-white transition-colors duration-200'>P</span>
            </h1>
            <h1 className='text-5xl text-white'>
              <span className='font-outline-2 text-transparent hover:text-white transition-colors duration-200'>P</span>
              A
              <span className='font-outline-2 text-transparent hover:text-white transition-colors duration-200'>T</span>
              RAS
            </h1>
          </div>
          <p className='self-end font-mono text-white md:text-xl xl:text-2xl'>~ Patras Parkour Team ~</p>
        </div>
    </div>
    );
}

export default LaunchPage