'use client';
import React from 'react'
import { Carousel } from 'flowbite-react';
import Image from 'next/image';

const Slider = (props:any) => {
  return (
    <div>
      <div>
        <Carousel className={props.className} >

          <div className='relative w-full flex items-center justify-center' >
            <div className='rounded-none h-full ' >
              <Image src={props.href1} alt="..." className='rounded-none' />
            </div>
            <div className={props.overlayDiv} >
              <h1 className=' font-semibold text-sm sm:font-bold sm:text-3xl text-gray-50 ' >Welcome to Company</h1>
              <p className='text-gray-50 text-sm ' >Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
              <button className='text-gray-50 border border-lime-500  hover:bg-lime-500 block m-auto p-1 sm:px-5 sm:py-2 rounded-sm transition ease-in-out duration-500' >Read More</button>
            </div>
          </div>

          <div className='relative w-full flex items-center justify-center' >
            <div className='rounded-none' >
              <Image src={props.href2} alt="..." className='rounded-none'/>
            </div>
            <div className={props.overlayDiv} >
              <h1 className='font-bold text-3xl text-gray-50 ' >Welcome to Company</h1>
              <p className='text-gray-50' >Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
              <button className='text-gray-50 border border-lime-500  hover:bg-lime-500 block m-auto px-5 py-2 rounded-sm transition ease-in-out duration-500' >Read More</button>
            </div>
          </div>

          <div className='relative w-full flex items-center justify-center' >
            <div>
              <Image src={props.href3} alt="..." className='rounded-none' />
            </div>
            <div className={props.overlayDiv} >
              <h1 className='font-bold text-3xl text-gray-50 ' >Welcome to Company</h1>
              <p className='text-gray-50' >Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
              <button className='text-gray-50 border border-lime-500  hover:bg-lime-500 block m-auto px-5 py-2 rounded-sm transition ease-in-out duration-500' >Read More</button>
            </div>
          </div>

        </Carousel>
      </div>

    </div>
  )
}

export default Slider
