import React from 'react'
import Image from 'next/image'

import aboutImage from '../public/about.png'

function About() {
  return (
    <div className='flex flex-col items-center px-7 py-5 bg-slate-900 bg-opacity-50 rounded-xl mx-5 mt-10 max-w-[1920px]'>
        <h1 className='text-3xl font-mono text-white font-bold self-start md:5xl xl:7xl'>Purpose</h1>
        <p className='text-xl font-mono text-white my-4 lg:text-2xl'>Our goal is through our work, can inspire people who are afraid of this "strange" to world sport, and make clear that parkour with the right guidence and discipline can be safe, and turn this action into smiles and hapiness not only for you, but for others!</p>
        <Image src={aboutImage} alt="" className='rounded-xl object-cover md:h-[25rem] xl:h-[30rem] xl:my-3' />
        <p className='text-xl text-white my-3 lg:text-2xl'>World thinks cause of rooftops and weird tricks that parkour leads to harm, that fact converted our sport into something dark and strange for the majority of people. Like other sports, if you start and slowly progress and baby steps you can be an expert without being hurt.</p>
    </div>
  )
}

export default About