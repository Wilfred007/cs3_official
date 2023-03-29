import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = ({heading, message}) => {
  return (
    <>  
      <div className='flex flex-col-reverse md:flex-row item-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img bg-white md: text xl'>
        {/*Overlay*/}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
          <div className='p-5 z-[2] mt-[23rem] text-white'>
            <h2 className='text-5xl font-bold'>{heading}</h2>
            <p className='py-7 text-xl'>{message}</p>
            <div className='py-4 flex space-x-4'>
            <Link href='/About'className='bg-blue-800 py-3 px-8 mt-4 rounded-xl hover:bg-teal-900 transition ease-linear duration-200'>Know More</Link>
          </div>
        </div>

        

    </div>

           <div className='bg-slate-50 mt-0'>
              <div className='justify-center flex items-center text-2xl text-teal-800 mt-10'>
                <h3>Our Culture Element</h3>
                </div>

                <div className='justify-center flex items-center text-5xl font-weight-600 mt-8 text-gray-800'>
                  <h1>We Build Sustainable Solutions </h1>
                </div>
                <div className='justify-center flex items-center text-2xl mt-5 text-gray-600'>
                  <h2>For companies both public ad private on large and small scale businesses</h2>
                  </div>
            </div>
            <div>
  
     <div className="mt-8 grid grid-cols-3 gap-12 items-center px-10 flex-col md:flex-row">
              <div className='w-3/3 flex flex-col justify-center items-center drop-shadow-sm'>
                <h1 className='flex text-2xl font-semibold bg-green-300 rounded items-center justify-center h-24 w-60 mt-10'>Our Mission</h1>
                <p className='text-gray-800 mt-10 mx-10 px-5'>To leverage policies, skills and resources to build cost effective innovation</p>
              </div>

              <div className=''>
                <h1 className='flex text-2xl font-semibold bg-green-300 rounded items-center justify-center h-24 drop-shadow-md'>Our Vision</h1>
                <p className='justify-center text-gray-800 mt-10'>To be Africa leading provider of technology</p>
                </div>

                <div className='justify-center items-center mt-10'>
                  <h1 className=' flex text-2xl font-semibold bg-green-300 rounded items-center justify-center h-24 mt-9'>Our Values</h1>
                 <div>

                  <p className=' text gray-800 justify-center items-center'>Dedication</p>
                  <p className=' text gray-800 justify-center items-center'>Excellence</p>
                  <p className=' text gray-800 justify-center items-center'>Creativity</p>
                  <p className=' text gray-800 justify-center items-center'>Innovation</p>
                  <p className=' text gray-800 justify-center items-center'>Loyalty</p>

                 </div>
                </div>

    </div>
            
            <div className='mt-20 grid-cols-2 gap-5 item-center w-full flex flex-col-reverse md:flex-row md:p-10'>
                  <div className='px-12'>
                    <Image
                     src='/rice.jpg'
                     alt='agromate'
                     width={800}
                     height={800}
                    />
                  </div>

                  <div className=''>
                    <h1 className='text-xl sm:m-auto'>Providing technology for both large firms and MSME</h1>
                    <h2 className='font-bold text-4xl text-gray-800 items-center py-5'>e-Agricultural Programs (Agromate)</h2>
                    <p className='text-gray-800 leading-7 rounded-sm'>AgroMate Nigeria is a food security program, a subsidiary of Central Soft Support Services (CS3). It is a social enterprise that drives ICT4Social innovation and is committed to helping the SDG 1(No Poverty) and 2(Zero Hunger) in Nigeria and beyond.</p>
                    <div className='mt-5'>
                    <Link href='/About' className='bg-teal-400 py-4 px-4 mt-10 rounded-xl hover:bg-teal-500 transition ease-linear duration-200'>Know More</Link>
                    </div>
                  </div>
                </div>

                <div>
                 <div className='justify-center flex items-center text-4xl font-weight-600 mt-8  text-gray-800'>
                  <h1>Some Of Our Works</h1>
                </div>               
              </div>

              <div className='flex flex-col items-center gap-6 px-10 mt-10 md:flex-row'>
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
              <div className='flex flex-col items-center gap-6 px-10 mt-10 md:flex-row'>
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
                    <p className='text-xl text-gray-600 mt-4'>Printing of external mathematical and statistical tables and formula for 2020 SSCE supply</p>
                </div>
              </div>

              <div>
                 <div className='justify-center flex items-center text-4xl font-weight-600 mt-8  text-gray-800 '>
                  <h1>We Biuld Solutions...</h1>
                </div>            
              </div>
            <div className='flex mt-10 px-8 py-8'>
              <Image
                     src='/cpm-logo.png'
                     alt='agromate'
                     width={400}
                     height={500}
                    />
              
              <Image
                     src='/bravura-logo.png'
                     alt='agromate'
                     width={400}
                     height={500}
                    />

              <Image
                     src='/netay.jpg'
                     alt='agromate'
                     width={400}
                     height={500}
                    />

              <Image
                     src='/ncs-logo.png'
                     alt='agromate'
                     width={400}
                     height={500}
                    />
              </div>

              <div className='flex flex-col mt-5 px-8 py-8 md:flex-row'>
              <Image
                     src='/dicon-logo.png'
                     alt='agromate'
                     width={400}
                     height={500}
                    />
              
              <Image
                     src='/oiie-logo.jpg'
                     alt='agromate'
                     width={400}
                     height={500}
                    />

              <Image
                     src='/nhl-logo.png'
                     alt='agromate'
                     width={400}
                     height={500}
                    />

              <Image
                     src='/nitda-logo.png'
                     alt='agromate'
                     width={400}
                     height={500}
                    />
            </div>

              <div className='justify-center flex items-center text-4xl font-weight-600 mt-8    text-gray-800'>
                <h1>Testimonials</h1>
              </div>
              <div className='justify-center flex items-center text-2xl font-weight-600 mt-8    text-gray-800'>
                <h2>What our clients say about us</h2>
              </div>

            <div className=''>
              <div className='flex items-center gap-10 px-10 mt-10 '>
                <div className='px-10 flex flex-col md:flex-row '>
                <Image
                     src='/Dr.henry.jpg'
                     alt='agromate'
                     width={120}
                     height={120}
                    />
                    <div>
                      <h1 className='text-3xl  mt-5    text-gray-800'>Dr. Henry Sariake Dickson</h1>
                        <p className=' flex text-l   text-gray-800'>Former Governor of Bayelsa State</p>
                      <p className=' flex text-l  mt-5    text-gray-800'>CS3 are coordinated young innovators and was instrumental to the restoration agenda for capacity building for Bayelsa, very detailed in project implementation.</p>
                    </div>
                </div>
                <div className='py-10 px-10'>
                <Image
                     src='/Prof Jerry.jpg'
                     alt='agromate'
                     width={150}
                     height={150}
                    
                    />
                    <div>
                      <h1 className=' flex text-3xl font-weight-600 mt-5    text-gray-800'>Prof Jerry Gana</h1>
                      <p className=' flex text-l   text-gray-800'>Nigerian Scholar</p>
                      <p className=' flex text-l  mt-5    text-gray-800'>CS3 are a team of young professionals whose service delivery is excellent, I love to recommend them for business.</p>
                    </div>
                </div>
              </div>
              </div>

             
            </div>

            <div className='justify-center text-center mt-10 pb-10'>
                <p className='underline underline-offset-8'>Central Soft Support Services</p>
              </div>

            </>

  )
}

export default Hero
