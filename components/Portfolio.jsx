import React from 'react'
import Image from 'next/image'

const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center '>
      <h1 className='font-bold text-2xl p-4'>Photos in Europe</h1>
        <div className='grid grid-rows-none md:grid-cols-5 p-4 md:gap-4 '>
            <div className='w-full h-full col-span-2 md:col-span-2 row-span-2'>
                <Image 
                src='https://images.unsplash.com/photo-1646021365166-62e5c782c55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80'
                alt='/'
                layout='responsive'
                width='677'
                height='451'/>
            </div>
            <div className="w-full h-full">
                <Image
                src='https://images.unsplash.com/photo-1628534919722-cb13c2a3b564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='/'
                width='215'
                height='217'
                layout='responsive'
                objectFit='cover'
                />
            </div>
            <div className="w-full h-full">
                <Image
                src='https://images.unsplash.com/photo-1533331639-74f1863c7b3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='/'
                width='215'
                height='217'
                layout='responsive'
                objectFit='cover'
                />
            </div>
            <div className="w-full h-full">
                <Image
                src='https://images.unsplash.com/photo-1547041491-e37577a4b0c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80'
                alt='/'
                width='215'
                height='217'
                layout='responsive'
                objectFit='cover'
                />
            </div>
            <div className="w-full h-full">
                <Image
                src='https://images.unsplash.com/photo-1523902809519-178b006323a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='/'
                width='215'
                height='217'
                layout='responsive'
                objectFit='cover'
                />
            </div>
            <div className="w-full h-full">
                <Image
                src='https://images.unsplash.com/photo-1508840582138-f2e8452373d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='/'
                width='215'
                height='217'
                layout='responsive'
                objectFit='cover'
                />
            </div>
            <div className="w-full h-full">
                <Image
                src='https://images.unsplash.com/photo-1499174549139-68d3f37243b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80'
                alt='/'
                width='215'
                height='217'
                layout='responsive'
                objectFit='cover'
                />
            </div>
      </div>
    </div>
  )
}

export default Portfolio
