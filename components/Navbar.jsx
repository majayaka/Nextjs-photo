import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

function Navbar() {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('tranparent');
    const [textColor, setTextColor] = useState('white');

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const changeColor = () => {
            if(window.scrollY >= 90) {
                setColor('#ffffff')
                setTextColor('#000000')
            } else {
                setColor('transparent')
                setTextColor('#ffffff')
            }
        };
        window.addEventListener('scroll', changeColor)
    }, []);


  return (
    <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
            <Link href='/'>
                <h1 style={{color:`${textColor}`}} className='font-bold text-4xl'>KoHey</h1>
            </Link>
            <ul style={{color:`${textColor}`}} className='hidden sm:flex '>
                <li className='p-4'>
                    <Link href='/'>HOME</Link>
                </li>
                <li className='p-4'>
                    <Link href='/#gallery'>IN ASIA</Link>
                </li>
                <li className='p-4'>
                    <Link href='/work'>IN EUROPE</Link>
                </li>
                <li className='p-4'>
                    <Link href='/contact'>CONTACT</Link>
                </li>
            </ul>

            {/* Mobile Button */}
            <div onClick={handleNav} className='sm:block sm:hidden z-10'>
                {nav ? (
                <AiOutlineClose size={20} style={{color:`${textColor}`}}/>
                ) : (
                     <AiOutlineMenu size={20} style={{color:`${textColor}`}}/>
                )}
            </div>
            {/* Mobile Menu */}
            <div className={
                nav 
                ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in dration-300' 
                : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in dration-300'
                }
            >
                <ul>
                <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/'>HOME</Link>
                </li>
                <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/#gallery'>IN ASIA</Link>
                </li>
                <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/work'>IN EUROPE</Link>
                </li>
                <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/contact'>CONTACT</Link>
                </li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
