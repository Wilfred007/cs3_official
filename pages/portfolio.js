import React from 'react'
import Image from 'next/image'

function portfolio() {
  return (
    <>
    <div className='flex flex-col md:flex-row items-center justify-center  h-screen mb-12 p-10'>
    <div className='w-1/2'>
        <h1 className='font-bold text-5xl items-center text-gray-800'>Our Projects</h1>
        <p className='mt-6 text-gray-500 text-2xl'>A quick view of industry specific problems solved with design by the awesome team at Keystroke.</p>
    </div>
    <div>
    <Image
          src="/cartoon tech.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
          className=''
          />
    </div>  
    </div>

    <h1 className='font-bold text-5xl items-center text-gray-800 mt-10 mx-10 mb-10'>Our Projects</h1>

    <div className='flex flex-col md:flex-row items-center gap-6 px-10 mt-10'>
                <div> 
                <Image
                     src='/nitda.png'
                     alt='agromate'
                     width={400}
                     height={500}
                    />
                    <p className='text-3xl font-bold mt-5'>Nitda Academy</p>
                    <p className='text-xl text-gray-600 mt-4'>Web Application</p>
                </div>
                <div> 
                <Image
                     src='/yin.png'
                     alt='agromate'
                     width={400}
                     height={500}
                    />
                    <p className='text-3xl font-bold mt-5'>Young Innovators of Nigeria</p>
                    <p className='text-xl text-gray-600 mt-4'>Web Application</p>
                </div>
                <div> 
                <Image
                     src='/imperium.png'
                     alt='agromate'
                     width={400}
                     height={500}
                    />
                    <p className='text-3xl font-bold mt-5'>Imperium Industries Limited</p>
                    <p className='text-xl text-gray-600 mt-4'>IT technical partner for the company</p>
                </div>
              </div>
              <div className='flex flex-col md:flex-row items-center gap-6 px-10 mt-10'>
                <div> 
                <Image
                     src='/NDC.png'
                     alt='agromate'
                     width={400}
                     height={500}
                    />
                    <p className='text-3xl font-bold mt-5'>Nigeria Defence College</p>
                    <p className='text-xl text-gray-600 mt-4'>Technical partner for the purchase and installation of ICT equipment (Language translator and interpretation equipment)</p>
                </div>
                <div> 
                <Image
                     src='/NHL.png'
                     alt='agromate'
                     width={400}
                     height={500}
                    />
                    <p className='text-3xl font-bold mt-5'>Navy Holdings NHL</p>
                    <p className='text-xl text-gray-600 mt-4'>Development of information management system for the NHL development and maintenance of the NHL official website</p>
                </div>
                <div> 
                <Image
                     src='/Neco-2.jpeg'
                     alt='agromate'
                     width={400}
                     height={500}
                    />
                    <p className='text-3xl font-bold mt-5'>Neco</p>
                    <p className='text-xl text-gray-600 mt-4'>Printng of external mathematical and statistical tables and formula for 2020 SSCE supply</p>
                </div>
              </div>

              <div className='justify-center text-center mt-10 pb-10'>
                <p className='underline underline-offset-8'>Central Soft Support Services</p>
            </div>
              </>

 )
}

export default portfolio