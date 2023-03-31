import React from 'react'

const Hero = ({heading, message}) => {
  return (
    <div className='flex items-center justify-center h-screen mb-[10rem] bg-fixed bg-center bg-cover custom-img'>
        {/* Overlay */}
        <div className='absolute overlay top-0 left-0 bottom-0' />
        <div className="p-5 text-white z-[8] mt-[-5rem]">
            <h2 className='text-5xl font-bold'>{heading}</h2>
            <p className='py-5 text-xl'>{message}</p>
            <button className='px-8 py-2 border '>Book</button>
        </div>
    </div>
  )
}

export default Hero
