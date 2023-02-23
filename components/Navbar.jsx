import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'


import NavLogo from '../public/NavLogo.png'

import { Bars3BottomRightIcon } from '@heroicons/react/24/solid'

function Navbar() {
    const [NavToggle, ToggleNavToggle] = useState(true)

  return (
    <div className='flex justify-between items-center max-w-[1920px]'>
        <Image src={NavLogo} alt='' className='h-28 w-28 mx-3' />
        {/* Phone */}
        <Bars3BottomRightIcon className={`mx-5 text-white h-10 w-10 cursor-pointer ${NavToggle ? 'rotate-0' : 'rotate-180'} transition-all duration-300 md:hidden`} onClick={() => ToggleNavToggle((prev) => !prev)} />
        <ul className={`absolute flex flex-col items-center justify-center ${NavToggle ? 'right-[-15rem]' : 'right-0'} top-24 border-2 border-blue-900 mx-5 h-44 bg-neutral-900 rounded-xl transition-all duration-300 md:hidden`}>
            <Link href='/' className='mx-5 text-2xl my-2 font-bold text-white'>Home</Link>
            <Link href='/blogs' className='mx-5 text-2xl my-2 font-bold text-white'>Blogs</Link>
            <Link href='/blogs' className='mx-5 text-2xl my-2 font-bold text-white'>More</Link>
        </ul>
        {/* Other Devices */}
        <ul className={`hidden md:flex`}>
            <Link href='/' className='mx-5 text-2xl my-2 font-mono text-white'>Home</Link>
            <Link href='/blogs' className='mx-5 text-2xl my-2 font-mono text-white'>Blogs</Link>
            <Link href='/blogs' className='mx-5 text-2xl my-2 font-mono text-white'>More</Link>
        </ul>
    </div>
  )
}

export default Navbar