import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { config, urlFor } from '../sanity'

function Tshirts(tshirts) {
      
  return (
    <div>
        <h1 className='text-5xl text-center my-10 font-mono font-semibold text-white'>MERCH</h1>
        <div className='grid grid-cols-2 w-fit mx-auto md:grid-cols-3 xl:grid-cols-4'>
          {tshirts.props.map((tshirt) => {
            return (
              <Link key={tshirt.slug.current} href={`tshirts/${tshirt.slug.current}`} className="flex flex-col w-fit mx-5 bg-slate-800 my-5 rounded-xl border-2 border-blue-600 hover:scale-[101%] transition-all cursor-pointer sm:mx-10 md:mx-5 xl:mx-10">
                <Image className='w-52 p-4 sm:w-60 2xl:w-72' src={urlFor(tshirt.image[1]).url()} />
                <div className='px-2 py-1 xl:px-3'>
                  <h1 className='text-md font-bold font-mono text-white md:text-lg xl:text-xl'>{tshirt.title}</h1>
                  <h2 className='text-white font-semibold font-mono '>{tshirt.price} €</h2>
                </div>
              </Link>
            )
          })}
        </div>
    </div>
  )
}

export default Tshirts