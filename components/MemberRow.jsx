import React from 'react'

function MemberROw({Image, Name, Quote, Inverted}) {
    return (
        <div>
            {
                !Inverted ? (
                    <div className='flex w-[calc(100vw-3rem)] my-10 rounded-2xl mx-auto h-52 bg-slate-800 border-2 border-blue-700 md:h-80 xl:h-96 2xl:h-[30rem]'>
                        <Image src={Image} alt="" className='w-1/2 rounded-xl object-cover object-center' />
                        <div className='flex flex-col w-1/2 items-center justify-center'>
                            <h1 className='text-white text-xl font-mono text-center md:text-2xl xl:text-5xl font-semibold'>{Name}</h1>
                            <h2 className='text-white text-sm font-mono text-center my-3 w-3/4 md:text-lg lg:text-xl xl:text-3xl'>{Quote}</h2>
                        </div>
                    </div>
                ) : 
                (
                    <div className='flex w-[calc(100vw-3rem)] my-10 rounded-2xl mx-auto h-52 bg-slate-800 border-2 border-blue-700 md:h-80 xl:h-96 2xl:h-[30rem]'>
                        <div className='flex flex-col w-1/2 items-center justify-center'>
                            <h1 className='text-white text-xl font-mono text-center md:text-2xl xl:text-5xl font-semibold'>{Name}</h1>
                            <h2 className='text-white text-sm font-mono text-center my-3 w-3/4 md:text-lg lg:text-xl xl:text-3xl'>{Quote}</h2>
                        </div>
                        <Image src={Image} alt="" className='w-1/2 rounded-xl object-cover object-center' />
                    </div>
                )
 			}
        </div>
    )
}

export default MemberROw