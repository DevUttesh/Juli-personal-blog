import { CheckIcon } from '@heroicons/react/24/outline'
import React from 'react'

const About = () => {
  return (
    <section className='container min-h-[60vh] m-auto p-5 sm:p-12 ' >
      <div className='flex flex-col gap-3 sm:flex-row h-full' >
        <div className='flex-1 flex flex-col gap-5' >
          <h1 className='font-bold text-3xl sm:text-5xl ' >EUM IPSAM LABORUM DELENITI VELITENA</h1>
          <p className='text-2xl' >Voluptatem dignissimos provident quasi corporis voluptates sit assum perenda sruen jonee trave</p>
        </div>
        <div className='flex-1 flex flex-col  gap-5' >
          <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          <div className='flex gap-2' ><div className='relative' ><CheckIcon className='w-5 h-5 text-lime-500' /><CheckIcon className='w-5 h-5 text-lime-500 absolute top-0 left-1' /></div> Ullamco laboris nisi ut aliquip ex ea commodo consequa</div>
          <div className='flex gap-2' ><div className='relative' ><CheckIcon className='w-5 h-5 text-lime-500' /><CheckIcon className='w-5 h-5 text-lime-500 absolute top-0 left-1' /></div> Ullamco laboris nisi ut aliquip ex ea commodo consequa</div>
          <div className='flex gap-2' ><div className='relative' ><CheckIcon className='w-5 h-5 text-lime-500' /><CheckIcon className='w-5 h-5 text-lime-500 absolute top-0 left-1' /></div> Ullamco laboris nisi ut aliquip ex ea commodo consequa</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </section>
  )
}

export default About