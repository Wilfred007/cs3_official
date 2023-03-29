import Link from 'next/link'
import React, {useState} from 'react'
import Image from 'next/image'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {

  const [nav, setNav]  = useState (false)

  const handleNav = () => {
    setNav (!nav)
  }




  return (
    <div className='fixed top-0 w-full z-10 ease-in duration-300'>
      <div className='max-w-[1400px] m-auto flex justify-between items-center p-4 text-white bg-teal-600'>
      <Image
         src='/cs3-logo.png'
         alt='agromate'
        width={70}
         height={70}
         />
      <Link href="/"><h1 className='font-bold text-2xl'></h1></Link>

       <ul className='hidden sm:flex'>
      <li className='p-4'>
        <Link href="/">Home</Link>
      </li>
      <li className='p-4 hover'>
        <Link href="/About">About Us</Link>
      </li>
      <li className='p-4'>
        <Link href="/Services">Services</Link>
      </li>
      <li className='p-4'>
        <Link href="/portfolio">Portfolio</Link>
      </li>
      <li className='p-4'>
        <Link href="/">Teams</Link>
      </li>
      <li className='p-4 text '>
        <Link href="/">Contact</Link>
      </li>
    </ul> 

    
    {/* Mobile Button*/}
    <div className='block sm:hidden z-10' onClick={handleNav}>  
      {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
    </div>

     {/* Mobile Menu*/}
     
    <div className={nav? 'sm:hidden absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' : 'sm:hidden absolute top-0 right-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
     <ul>
      <li className='p-4 text-3xl hover:text-gray-500 cursor:hover'>
        <Link href="/">Home</Link>
      </li>
      <li className='p-4 text-3xl hover:text-gray-500'>
        <Link href="/About">About Us</Link>
      </li>
      <li className='p-4 text-3xl hover:text-gray-500'>
        <Link href="/Services">Services</Link>
      </li>
      <li className='p-4 text-3xl hover:text-gray-500'>
        <Link href="/portfolio">Porfolio</Link>
      </li><li className='p-4 text-3xl hover:text-gray-500'>
        <Link href="/">Contact</Link>
      </li>
      </ul>
      </div>
     
    </div>
    </div>
  )
}

export default Navbar