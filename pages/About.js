import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <>
    <div className='flex flex-col items-center justify-center  h-screen mb-12 p-10 md:flex-row md:h-screen'>
        <div className='w-1/2'>
            <h1 className='font-bold text-5xl items-center text-gray-800'>Africa fastest growing agency</h1>
            <p className='mt-6 text-gray-500 text-2xl'>We design and develop web and mobile applications for clients worldwide</p>
        </div>
        <div>
        <Image
              src="/testing.png"
              alt="Picture of the author"
              width={500}
              height={500}
              className=''
              />
        </div>
        
    </div>

    <div className='flex flex-col items-center p-10 mb-5 md:flex-row'>
    <div>
        <Image
              src="/about.jpg"
              alt="Picture of the author"
              width={800}
              height={800}
              className=''
              />
        </div> 
        <div className='items-center p-10 w-1/2 '>
            <h1 className='font-bold text-5xl items-center text-gray-800'>About Us</h1>
            <p className='mt-6 text-gray-500 text-2xl'>Our national strategic partnerships for development of the IT innovation ecosystem in Nigeria and e-government initiatives to serve as a catalyst for national development and other ICT related business. CS3 is a company built by young innovators of Nigeria in 2019 to develop projects and promote the Nigerian technology innovation ecosystem.</p>
        </div>
         
    </div>

    <div className='justify-center mx-10'>
        <h1 className='font-bold text-4xl text-gray-800 items-center'>Why You Should Know About Us</h1>
    </div>

    <div className='flex flex-col items-center justify-center mt-10 md:flex-row'>
        <div className='bg-gray-200 mx-5 rounded'>
            <h1 className='items-center justify-center font-bold text-2xl text-gray-800 mx-10'>Our Mission</h1>
            <p className='mt-6 text-gray-500 text-2xl'>To leverafe policies, skills and resources to build cost effective innovation</p>
        </div>

        <div className='bg-gray-200 mx-5 rounded md:mx-3'>
            <h1 className='items-center justify-center font-bold text-2xl text-gray-800 mx-10'>Our Vision</h1>
            <p className='mt-6 text-gray-500 text-2xl'>To be the leading technology in Africa</p>
        </div>

        <div className='bg-gray-200 mx-5 rounded'>
            <h1 className='items-center justify-center font-bold text-2xl text-gray-800 mx-10'>Our Values</h1>
            <p className='mt-6 text-gray-500 text-2xl' >Dedication - Excellence - Creativity - Innovation - Loyalty</p>
        </div>
    </div>

    <div>
        <h1 className='items-center justify-center font-bold text-2xl text-gray-800 mx-10 mt-10'>Management Board</h1>
    </div>

    <div className='flex flex-col mt-10 p-10 md:flex-row'>
    <div>
    <Image
              src="/andrew.jpg"
              alt="Picture of the author"
              width={400}
              height={400}
              className=''
              />
        <h4 className='font-bold text-xl text-blue-800 mt-5 mb-5'>Andrew Abu</h4>
        <h3 className='font-bold text-xl text-gray-800 mt-5 mb-5'>Executive Consultant/CEO</h3>
        <p className='mt-6 text-gray-500 text-2xl'>Andrew Abu is a serial technology entreprenuer with over 10 years of experience in building technolog start up companies, consulting for both public and private companies in organizational effectiveness and IT management,</p>
    </div>

    <div>
    <Image
              src="/cs3-mayowa.jpg"
              alt="Picture of the author"
              width={400}
              height={400}
              className=''
              />
        <h4 className='font-bold text-xl text-blue-800 mt-5 mb-5'>Ajiboye Mayowa Adelayo</h4>
        <h3 className='font-bold text-xl text-gray-800 mt-5 mb-5'>Director Research And Innovation</h3>
        <p className='mt-6 text-gray-500 text-2xl'>Andrew Abu is a serial technology entreprenuer with over 10 years of experience in building technolog start up companies, consulting for both public and private companies in organizational effectiveness and IT management,</p>
    </div>

    <div>
    <Image
              src="/lydia.jpg"
              alt="Picture of the author"
              width={400}
              height={400}
              className=''
              />
        <h4 className='font-bold text-xl text-blue-800 mt-5 mb-5'>Lydia Mang</h4>
        <h3 className='font-bold text-xl text-gray-800 mt-5 mb-5'>Chief Operating Officer</h3>
        <p className='mt-6 text-gray-500 text-2xl'>Andrew Abu is a serial technology entreprenuer with over 10 years of experience in building technolog start up companies, consulting for both public and private companies in organizational effectiveness and IT management,</p>
    </div>
    </div>

    <div className='items-center justify-center' >
        <h1 className='items-center justify-center font-bold text-4xl text-gray-800 mx-10 mt-10 '>Our Development Process</h1>
        <p className='items-center justify-center text-xl mx-10 text-gray-800 mt-5 w-1/2'>We carry out comprehensive software development strategy to ensure a perfect design and functionalities</p>
    </div>
    <div className='flex flex-col items-center md:flex-row'>
    <Image
              src="/analysis2.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
              className='mt-10 mx-10 rounded'
              /> 
    <div className='w-1/2'>
    <h1 className='font-bold text-4xl '>Analysis</h1> 
    <p className='mt-6 text-gray-500 text-2xl'>This stage is conducted by our senior team members. Gathering detailed and precise information for the quality assurance analysis, this stage gives us clearer picture of the scope of the entire project and the anticipated issues, opportunities, and directives which triggered the project.
    </p>
    </div>
    </div>

    <div className='flex flex-col md:flex-row items-center'>
    
    <div className='w-1/2'>
    <h1 className='font-bold text-4xl mx-10 '>Planning</h1> 
    <p className='mt-6 text-gray-500 text-2xl mx-10'>The team determines the cost and resources required for implementing the analyzed requirements. We determine the feasibility of the project and how they can implement the project successfully with the lowest risk in mind.
    </p>
    </div>
    <Image
              src="/planning2.jpg"
              alt="Picture of the author"
              width={500}
              height={600}
              className='mt-10 mx-10 rounded'
              /> 
    </div>

    <div className='flex flex-col items-center md:flex-row'>
    <Image
              src="/design2.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
              className='mt-10 mx-10 rounded'
              /> 
    <div className='w-1/2'>
    <h1 className='font-bold text-4xl mx-10 '>Design</h1> 
    <p className='mt-6 text-gray-500 text-2xl'>This stage is conducted by our senior team members. Gathering detailed and precise information for the quality assurance analysis, this stage gives us clearer picture of the scope of the entire project and the anticipated issues, opportunities, and directives which triggered the project.
    </p>
    </div>
    </div>

    <div className='flex flex-col items-center md:flex-row'>
    
    <div className='w-1/2'>
    <h1 className='font-bold text-4xl mx-10 '>Implementation</h1> 
    <p className='mt-6 text-gray-500 text-2xl mx-10'>This stage is conducted by our senior team members. Gathering detailed and precise information for the quality assurance analysis, this stage gives us clearer picture of the scope of the entire project and the anticipated issues, opportunities, and directives which triggered the project.
    </p>
    </div>
    <Image
              src="/implementation2.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
              className='mt-10 mx-10 rounded'
              /> 
    </div>

    <div className='flex flex-col items-center md:flex-row'>
    <Image
              src="/maintenance2.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
              className='mt-10 mx-10 rounded'
              /> 
    <div className='w-1/2'>
    <h1 className='font-bold text-4xl '>Testing</h1> 
    <p className='mt-6 text-gray-500 text-2xl'>This stage is conducted by our senior team members. Gathering detailed and precise information for the quality assurance analysis, this stage gives us clearer picture of the scope of the entire project and the anticipated issues, opportunities, and directives which triggered the project.
    </p>
    </div>
    </div>

    <div className='flex flex-col items-center md:flex-row'>
    <Image
              src="/testing2.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
              className='mt-10 mx-10 rounded'
              /> 
    <div className='w-1/2'>
    <h1 className='font-bold text-4xl mx-10'>Maintenance</h1> 
    <p className='mt-6 text-gray-500 text-2xl'>This stage is conducted by our senior team members. Gathering detailed and precise information for the quality assurance analysis, this stage gives us clearer picture of the scope of the entire project and the anticipated issues, opportunities, and directives which triggered the project.
    </p>
    </div>
    </div>


    <div className='justify-center text-center mt-10 pb-10'>
                <p className='underline underline-offset-8'>Central Soft Support Services</p>
              </div>    

    <div>
        
    </div>
    </>
  )
}

export default About