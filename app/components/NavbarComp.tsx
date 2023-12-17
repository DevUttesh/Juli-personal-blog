'use client';
import Link from 'next/link'
import React, { useState } from 'react'

const NavbarComp = () => {

  const [nav, setNav] = useState(false);

  return (
    <nav className='  sticky top-0 bg-white z-10 ' >
      <div className='container m-auto px-1 py-3 md:px-10 md:py-3 flex justify-between items-center' >

        <Link href={'/'} className=' text-lg md:text-2xl font-bold uppercase ' >Your<span className='text-lime-500' >Company</span></Link>

        <div className='flex gap-2 items-center' >


          {/* large screen navbar */}
          <div className='lg:flex lg:gap-5 lg:items-center ' >
            <div className='gap-1 items-center uppercase hidden lg:flex' >
              <Link className=' flex items-center w-20 h-14 justify-center font-semibold hover:text-lime-500 transition ease-in-out duration-500' href={'/'} >Home</Link>
              <div  className=' flex items-center w-20 h-14 justify-center font-semibold hover:text-lime-500 transition ease-in-out duration-500 group relative' href={'/'} >
                about <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
                <div  className='invisible group-hover:visible absolute top-14 left-0 bg-white border-t-4 border-t-lime-500 flex flex-col gap-5 text-gray-950 p-5 shadow-lg shadow-lime-500' >
                  <Link href={'/pages/About/AboutUs'} className='hover:text-lime-500 transition ease-in-out duration-500' >About Us</Link>
                  <Link href={'/pages/About/Team'} className='hover:text-lime-500 transition ease-in-out duration-500'>Team</Link>
                  <Link href={'/pages/About/Testimonials'} className='hover:text-lime-500 transition ease-in-out duration-500'>Testimonials</Link>
                </div>
              </div>
              <Link className=' flex items-center w-20 h-14 justify-center font-semibold hover:text-lime-500 transition ease-in-out duration-500' href={'/pages/Services'} >services</Link>
              <Link className=' flex items-center w-20 h-14 justify-center font-semibold hover:text-lime-500 transition ease-in-out duration-500' href={'/pages/Portfolio'} >portfolio</Link>
              <Link className=' flex items-center w-20 h-14 justify-center font-semibold hover:text-lime-500 transition ease-in-out duration-500' href={'/pages/Pricing'} >pricing</Link>
              <Link className=' flex items-center w-20 h-14 justify-center font-semibold hover:text-lime-500 transition ease-in-out duration-500' href={'/pages/Blog'} >blog</Link>
              <Link className=' flex items-center w-20 h-14 justify-center font-semibold hover:text-lime-500 transition ease-in-out duration-500' href={'/pages/Contact'} >contact</Link>
            </div>

            <div className='flex gap-2 h-max md:gap-5 items-center lg:border-l lg:border-l-gray-600 md:px-5' >
              <Link href={'/'} className='group' >
                <svg className="w-4 h-4 fill-gray-600 group-hover:fill-lime-500 transition ease-in-out duration-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z" />
                </svg>
              </Link>
              <Link href={'/'} className='group'>
                <svg className="w-4 h-4 fill-gray-600 group-hover:fill-lime-500 transition ease-in-out duration-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 19">
                  <path d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" />
                </svg>
              </Link>
              <Link href={'/'} className='group'>
                <svg className="w-4 h-4 fill-gray-600 group-hover:fill-lime-500 transition ease-in-out duration-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 14">
                  <path d="M19.7 3.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.84c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.84A4.225 4.225 0 0 0 .3 3.038a30.148 30.148 0 0 0-.2 3.206v1.5c.01 1.071.076 2.142.2 3.206.094.712.363 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.15 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965c.124-1.064.19-2.135.2-3.206V6.243a30.672 30.672 0 0 0-.202-3.206ZM8.008 9.59V3.97l5.4 2.819-5.4 2.8Z" />
                </svg>
              </Link>
              <Link href={'/'} className='group'>
                <svg className="w-4 h-4 fill-gray-600 group-hover:fill-lime-500 transition ease-in-out duration-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15">
                  <path d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                  <path d="M3 5.012H0V15h3V5.012Z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* mobile device navbar icons  */}
          <div onClick={() => setNav(!nav)} className='cursor-pointer z-10 text-gray-500 lg:hidden' >
            {nav ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            }
          </div>

        </div>


        {/* collpasable navbar on mobile */}
        {nav && (
          <div className=' flex p-5 flex-col bg-gray-50 w-[95%] uppercase absolute top-16 left-0 right-0 m-auto lg:hidden ' >
            <Link className=' flex items-center w-20 h-14 justify-start font-semibold hover:text-lime-500 transition ease-in-out duration-500' href={'/'} >Home</Link>
            <Link suppressHydrationWarning className=' flex items-center w-20 h-14 justify-start font-semibold hover:text-lime-500 transition ease-in-out duration-500 group relative' href={'/'} >
              about <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
              <Link href={'/'} suppressHydrationWarning className='invisible group-hover:visible absolute top-14 left-0 bg-white border-t-4 border-t-lime-500 flex flex-col gap-5 text-gray-950 p-5 shadow-lg shadow-lime-500' >
                <Link href={'/pages/About/AboutUs'} className='hover:text-lime-500 transition ease-in-out duration-500' >About Us</Link>
                <Link href={'/pages/About/Team'} className='hover:text-lime-500 transition ease-in-out duration-500'>Team</Link>
                <Link href={'/pages/About/Testimonials'} className='hover:text-lime-500 transition ease-in-out duration-500'>Testimonials</Link>
              </Link>
            </Link>
            <Link className=' flex items-center w-20 h-14 justify-start font-semibold hover:text-lime-500 transition ease-in-out duration-500' href={'/pages/Services'} >services</Link>
            <Link className=' flex items-center w-20 h-14 justify-start font-semibold hover:text-lime-500 transition ease-in-out duration-500' href={'/pages/Portfolio'} >portfolio</Link>
            <Link className=' flex items-center w-20 h-14 justify-start font-semibold hover:text-lime-500 transition ease-in-out duration-500' href={'/pages/Pricing'} >pricing</Link>
            <Link className=' flex items-center w-20 h-14 justify-start font-semibold hover:text-lime-500 transition ease-in-out duration-500' href={'/pages/Blog'} >blog</Link>
            <Link className=' flex items-center w-20 h-14 justify-start font-semibold hover:text-lime-500 transition ease-in-out duration-500' href={'/pages/Contact'} >contact</Link>
          </div>

        )}

      </div>
    </nav>

  )
}

export default NavbarComp;
