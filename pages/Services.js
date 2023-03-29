import React from 'react'
import Image from 'next/image'

function Services() {
  return (
    <>
    <div className='flex flex-col md:flex-row items-center justify-center  h-screen mb-12 p-10'>
    <div className='w-1/2'>
        <h1 className='font-bold text-5xl items-center text-gray-800'>Best solutions for your business</h1>
        <p className='mt-6 text-gray-500 text-2xl'>A quick view of industry specific problems solved with design by the awesome team at CS3.</p>
    </div>
    <div>
    <Image
          src="/implementation.png"
          alt="Picture of the author"
          width={500}
          height={500}
          className=''
          />
    </div>
    
</div>

<div>
<h1 className='items-center justify-center font-bold text-4xl text-gray-800 mx-10 mt-10 mb-10'>We Provide Technology Support</h1>
<p className='mt-6 text-gray-500 text-2xl mx-10 items-center w-1/4'>If you don’t know where you are going. How can you expect to get there. This brought our success story.</p>
</div>
<div>
<div className='w-1/2 mx-10 pt-10'>
        <h1 className='font-bold text-5xl items-center text-gray-800'>Our Capabilities</h1>
    </div>
</div>

<div className='flex flex-col md:flex-row items-center justify-center mt-10 p-10'>
<div>
    <h1 className='font-bold text-3xl items-center text-blue-800'>Networking & IT Consulting</h1>
    <p className='pt-10 text-xl text-gray-800 p-10'>CS3 Solutions offers a breadth and depth of IT network consulting expertise that will ensure your IT plan is implemented correctly the first time and all the time</p>
</div>

<div>
    <h1 className='font-bold text-3xl items-center text-blue-800'>Training & Skills Gap Development</h1>
    <p className='pt-10 text-xl text-gray-800 p-10'>We design professional looking yet simple websites. Our designs are search engine and user friendly.
    </p>
</div>

<div>
    <h1 className='font-bold text-3xl items-center text-blue-800'>e-Government Solutions</h1>
    <p className='pt-10 text-xl text-gray-800 p-10'>we work with technology companies who specialize in government domains and who understand the complexities of bringing governmental departments together electronically in one place</p>
</div>
</div>

<div className='flex flex-col md:flex-row items-center justify-center mt-10 p-10'>
<div>
    <h1 className='font-bold text-3xl items-center text-blue-800 p-10'>Data Protetion & Compliance Operations</h1>
    <p className='pt-10 text-xl text-gray-800 p-10'>Data Protection compliance is the globally accepted practice of ensuring that sensitive data collected by organisations and businesses are organised and managed in a manner that</p>
</div>

<div>
    <h1 className='font-bold text-3xl items-center text-blue-800'>Software & Hardware Development</h1>
    <p className='pt-10 text-xl text-gray-800 p-10'>We have extensive experience and knowledge of embedded software technologies as well as application, and mobile languages.</p>
</div>

<div>
    <h1 className='font-bold text-3xl items-center text-blue-800 p-10'>Provision of Clean Energy</h1>
    <p className='pt-10 text-xl text-gray-800 p-10'>Clean energy is energy that comes from renewable, zero-emission sources that do not degrade the atmosphere when utilised, as well as energy preserved by energy efficiency regulations.</p>
</div>


</div>
<div className='justify-center text-center mt-10 pb-10'>
                <p className='underline underline-offset-8'>Central Soft Support Services</p>
 </div>

</>
  )
}

export default Services