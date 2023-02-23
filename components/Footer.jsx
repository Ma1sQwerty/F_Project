import React from 'react'
import Logo from '../public/NavLogo.png'
import Instagram from '../public/SocialMedia/instagram.png'
import Youtube from '../public/SocialMedia/youtube.png'
import Tiktok from '../public/SocialMedia/tiktok.png'
import {  } from '@heroicons/react/24/outline'
import Link from 'next/link'

function Footer() {
  return (
    <div className='flex flex-col items-center py-10 max-w-[1920px]'>
        <img src={Logo.src} alt="" className='h-40' />
        <h1 className='text-xl font-bold text-white mb-5'>ALSO FIND US HERE!</h1>
        <div className='flex justify-around'>
          <Link href='https://www.youtube.com/@JumPatras'><img src={Instagram.src} alt="" className='h-16 mx-5 cursor-pointer hover:scale-110 transition-transform duration-200'/></Link>
          <Link href='https://www.instagram.com/jump.patras/'><img src={Youtube.src} alt="" className='h-16 mx-5 cursor-pointer hover:scale-110 transition-transform duration-200'/></Link>
          <Link href='https://www.tiktok.com/@jump.patras'><img src={Tiktok.src} alt="" className='h-16 mx-5 cursor-pointer hover:scale-110 transition-transform duration-200'/></Link>
        </div>
    </div>
  )
}

export default Footer