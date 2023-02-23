import React, { useState } from 'react'
import { config, urlFor } from '../../sanity'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { XMarkIcon } from '@heroicons/react/24/solid';

function Tshirt(tshirt) {    
    const [index, setIndex] = useState(0)
    const [order, setOrder] = useState(false)
  return (
    <div className='bg-gradient-to-tr from-slate-800 to-neutral-900'>
        <Navbar />
        <div className='flex flex-col sm:flex-row mx-auto'>
            <div className='flex flex-col justify-between bg-neutral-900 mx-5 p-4 rounded-3xl sm:w-1/2 sm:h-[28rem] md:h-[35rem] xl:w-1/3'>
                <img className='h-[30rem] my-5 mx-auto sm:h-72 md:h-96' src={urlFor(tshirt.tshirt.image[index]).url()} alt="" />
                <div className='flex my-3 space-x-5'>
                    {tshirt.tshirt.image.map((img, key) => {
                        return (
                            <button onClick={() => setIndex(key)}>
                                <img className="w-20 border-2 border-neutral-500 bg-neutral-800 p-2 my-2 rounded-xl sm:w-16 sm:my-0 sm:p-1" src={urlFor(img).url()} alt="" />
                            </button>
                        )
                    })}
                </div>
            </div>
            <div>
                <h1 className='text-2xl font-mono font-semibold text-white m-5 md:text-4xl'>{tshirt.tshirt.title}</h1>
                <h1 className='text-2xl font-mono font-semibold text-cyan-700 m-5 md:text-3xl md:my-4'>{tshirt.tshirt.price}€ </h1>
                <button onClick={() => setOrder((prev) => !prev)} className='px-4 py-2 border-2 border-cyan-700 text-2xl text-white rounded-2xl mx-3 font-mono font-semibold sm:my-10 hover:bg-cyan-700 transition-colors duration-200 md:my-20 md:text-3xl md:px-5'>BUY NOW</button>
            </div>
        </div>
        <div className={`${order ? 'flex' : 'hidden'} justify-center absolute h-screen w-screen bg-black bg-opacity-60 top-0 right-0`}>
            <div className='bg-slate-800 flex flex-col my-20 py-50 px-16 rounded-xl'>
                <h1 className='text-4xl font-mono font-bold text-white m-5'>Fill the form below!</h1>
                <div className='flex flex-col mx-5 my-5'>
                    <label className='text-xl text-white font-mono'>First Name:</label>
                    <input type="text" className='px-2 h-12 text-2xl rounded-xl border-2 border-blue-300 focus:border-blue-600 outline-none transition-all duration-200'/>
                </div>
                <div className='flex flex-col mx-5 my-5'>
                    <label className='text-xl text-white font-mono'>Last Name:</label>
                    <input type="text" className='h-10 text-2xl rounded-xl border-2 border-blue-300 focus:border-blue-600 outline-none transition-all duration-200'/>
                </div>
                <div className='flex flex-col mx-5 my-5'>
                    <label className='text-xl text-white font-mono'>Postal Code:</label>
                    <input type="text" className='px-2 h-12 text-2xl rounded-xl border-2 border-blue-300 focus:border-blue-600 outline-none transition-all duration-200'/>
                </div>
                <div className='flex flex-col mx-5 my-5'>
                    <label className='text-xl text-white font-mono'>Town:</label>
                    <input type="text" className='px-2 h-12 text-2xl rounded-xl border-2 border-blue-300 focus:border-blue-600 outline-none transition-all duration-200'/>
                </div>
                <div className='flex flex-col mx-5 my-5'>
                    <label className='text-xl text-white font-mono'>Adress:</label>
                    <input type="text" className='px-2 h-12 text-2xl rounded-xl border-2 border-blue-300 focus:border-blue-600 outline-none transition-all duration-200'/>
                </div>
                <div className='flex flex-col mx-5'>
                    <label className='text-xl text-white font-mono'>Other information:</label>
                    <input type="text" className='px-2 h-12 text-2xl rounded-xl border-2 border-blue-300 focus:border-blue-600 outline-none transition-all duration-200'/>
                </div>
            </div>
        </div>
        <XMarkIcon onClick={() => setOrder((prev) => !prev)} color='white' className={`${order ? 'block' : 'hidden'} h-10 w-10 cursor-pointer absolute right-0 top-0 m-5`} />
        <Footer />
    </div>
  )
}

export default Tshirt

export const getStaticPaths = async () => {
    const query = `*[_type ==  "thirt"]{
        _id,
        slug {
            current
        }
    }`

    const tshirts = await config.fetch(query)

    const paths = tshirts.map((tshirt) => ({
        params: {
            slug: tshirts.slug.current
        }
    }))

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps =async ({params}) => {
    const query = `*[_type == "tshirt" && slug.current == $slug][0]{
        title,
        image,
        slug,
        price,
    }`


    const tshirt = await config.fetch(query, {
        slug: params?.slug,
    })

    if(!tshirt) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            tshirt,
        },
        revalidate: 60
    }
}