"use client"
import PageNav from '@/app/components/PageNav'
import { Button, Tabs } from 'flowbite-react'
import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Flowbite } from 'flowbite-react';
import Image from 'next/image'
import React from 'react'
import port1 from '../../../public/portfolio-1.jpg'
import port2 from '../../../public/portfolio-2.jpg'
import port3 from '../../../public/portfolio-3.jpg'
import port4 from '../../../public/portfolio-4.jpg'
import port5 from '../../../public/portfolio-5.jpg'
import port6 from '../../../public/portfolio-6.jpg'
import port7 from '../../../public/portfolio-7.jpg'
import port8 from '../../../public/portfolio-8.jpg'
import port9 from '../../../public/portfolio-9.jpg'
import 'lightbox.js-react/dist/index.css'
import { SlideshowLightbox, initLightboxJS } from 'lightbox.js-react'
import Link from 'next/link';
import { LinkIcon, PlusIcon } from '@heroicons/react/24/outline';
import Portfolio from '@/app/components/Portfolio';

const customTheme: CustomFlowbiteTheme = {
  // button: {
  //   color: {
  //     primary: 'bg-blue-500 hover:bg-red-600',
  //   },
  // },
  tabs: {
    tablist: {
      tabitem: {
        styles: {
          pills: {
            active: {
              on: "bg-lime-500 px-5 py-2 h-max text-gray-50 rounded-md focus:ring-0 focus:outline-none active:outline-none ",
              off: "hover:bg-lime-500 px-5 py-2 h-max text-gray-950 rounded-md focus:outline-none focus:ring-0 transition ease-in-out duration-500"
            }
          }
        }
      }
    }
  }
};

const PortfolioPage = () => {
  return (
    <section suppressHydrationWarning ><PageNav name="Portfolio" />
      <div className='container m-auto sm:p-12' >
        <div className="overflow-x-auto" >

          <Portfolio />

          <SlideshowLightbox className='container grid grid-cols-3 gap-2 mx-auto' showThumbnails={true}>
            <Image className='w-full rounded' src={port1} alt='port1' />
            <Image className='w-full rounded' src={port1} alt='port1' />
            <Image className='w-full rounded' src={port1} alt='port1' />
          </SlideshowLightbox>
          
        </div>
      </div>
    </section>
  )
}

export default PortfolioPage
