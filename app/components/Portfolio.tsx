"use client"
import { Tabs } from 'flowbite-react'
import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Flowbite } from 'flowbite-react';
import Image from 'next/image'
import React from 'react'
import port1 from '../../public/portfolio-1.jpg'
import port2 from '../../public/portfolio-2.jpg'
import port3 from '../../public/portfolio-3.jpg'
import port4 from '../../public/portfolio-4.jpg'
import port5 from '../../public/portfolio-5.jpg'
import port6 from '../../public/portfolio-6.jpg'
import port7 from '../../public/portfolio-7.jpg'
import port8 from '../../public/portfolio-8.jpg'
import port9 from '../../public/portfolio-9.jpg'
import Link from 'next/link';
import { LinkIcon, PlusIcon } from '@heroicons/react/24/outline';

const customTheme: CustomFlowbiteTheme = {
  tabs: {
    tablist: {
      tabitem: {
        styles: {
          pills: {
            active: {
              on: "bg-lime-500 sm:px-5 sm:py-2 h-max text-gray-50 rounded-md focus:ring-0 focus:outline-none active:outline-none ",
              off: "hover:bg-lime-500 sm:px-5 sm:py-2 h-max text-gray-950 rounded-md focus:outline-none focus:ring-0 transition ease-in-out duration-500"
            }
          }
        }
      }
    }
  }
};

const Portfolio = () => {

  return (
    <section suppressHydrationWarning >
      <div className='container m-auto p-3 sm:p-12' >
        <div className="overflow-x-auto" >

          <Flowbite theme={{ theme: customTheme }} >
            <Tabs suppressHydrationWarning aria-label="Pills" style="pills" className='flex justify-center on '>
              <Tabs.Item active title="All">
                <div className="text-sm text-gray-500 dark:text-gray-400"><div className='flex flex-col sm:flex-row gap-5' >
                  {/* column 1 */}
                  <div className='flex flex-col gap-5 sm:w-1/3' >
                    <div className='h-max group relative' >
                      <Image src={port1} alt='port1' />

                      <div className=' invisible group-hover:visible flex absolute bottom-5 p-5 bg-opacity-70 left-0 right-0 bg-gray-50 w-[90%]  items-center justify-between m-auto' >
                        <div className='z-10' >
                          <h1 className='font-bold text-xl text-gray-950' >App 1</h1>
                          <p>App</p>
                        </div>
                        <div className='flex gap-3' >
                          <Link href={'/'} >
                            <PlusIcon className='w-5 h-5 text-gray-950 hover:text-lime-500 transition ease-in-out duration-700' />
                          </Link>
                          <Link href={`/pages/Portfolio/PortfolioDetails`} >
                            <LinkIcon className='w-5 h-5 text-gray-950 hover:text-lime-500 transition ease-in-out duration-700' />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className='h-max group relative' >
                      <Image src={port4} alt='port1' />

                      <div className=' invisible group-hover:visible flex absolute bottom-5 p-5 bg-opacity-70 left-0 right-0 bg-gray-50 w-[90%]  items-center justify-between m-auto' >
                        <div className='z-10' >
                          <h1 className='font-bold text-xl text-gray-950' >App 1</h1>
                          <p>App</p>
                        </div>
                        <div className='flex gap-3' >
                          <Link href={'/'} >
                            <PlusIcon className='w-5 h-5 text-gray-950 hover:text-lime-500 transition ease-in-out duration-700' />
                          </Link>
                          <Link href={`/pages/Portfolio/PortfolioDetails`} >
                            <LinkIcon className='w-5 h-5 text-gray-950 hover:text-lime-500 transition ease-in-out duration-700' />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className='h-max group relative' >
                      <Image src={port7} alt='port1' />

                      <div className=' invisible group-hover:visible flex absolute bottom-5 p-5 bg-opacity-70 left-0 right-0 bg-gray-50 w-[90%]  items-center justify-between m-auto' >
                        <div className='z-10' >
                          <h1 className='font-bold text-xl text-gray-950' >App 1</h1>
                          <p>App</p>
                        </div>
                        <div className='flex gap-3' >
                          <Link href={'/'} >
                            <PlusIcon className='w-5 h-5 text-gray-950 hover:text-lime-500 transition ease-in-out duration-700' />
                          </Link>
                          <Link href={`/pages/Portfolio/PortfolioDetails`} >
                            <LinkIcon className='w-5 h-5 text-gray-950 hover:text-lime-500 transition ease-in-out duration-700' />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* column 2 */}
                  <div className='flex flex-col gap-5 sm:w-1/3' >
                    <div className='h-max group relative' >
                      <Image src={port2} alt='port1' />

                      <div className=' invisible group-hover:visible flex absolute bottom-5 p-5 bg-opacity-70 left-0 right-0 bg-gray-50 w-[90%]  items-center justify-between m-auto' >
                        <div className='z-10' >
                          <h1 className='font-bold text-xl text-gray-950' >App 1</h1>
                          <p>App</p>
                        </div>
                        <div className='flex gap-3' >
                          <Link href={'/'} >
                            <PlusIcon className='w-5 h-5 text-gray-950 hover:text-lime-500 transition ease-in-out duration-700' />
                          </Link>
                          <Link href={`/pages/Portfolio/PortfolioDetails`} >
                            <LinkIcon className='w-5 h-5 text-gray-950 hover:text-lime-500 transition ease-in-out duration-700' />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className='h-max group relative' >
                      <Image src={port5} alt='port1' />

                      <div className=' invisible group-hover:visible flex absolute bottom-5 p-5 bg-opacity-70 left-0 right-0 bg-gray-50 w-[90%]  items-center justify-between m-auto' >
                        <div className='z-10' >
                          <h1 className='font-bold text-xl text-gray-950' >App 1</h1>
                          <p>App</p>
                        </div>
                        <div className='flex gap-3' >
                          <Link href={'/'} >
                            <PlusIcon className='w-5 h-5 text-gray-950 hover:text-lime-500 transition ease-in-out duration-700' />
                          </Link>
                          <Link href={`/pages/Portfolio/PortfolioDetails`} >
                            <LinkIcon className='w-5 h-5 text-gray-950 hover:text-lime-500 transition ease-in-out duration-700' />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className='h-max group relative' >
                      <Image src={port8} alt='port1' />

                      <div className=' invisible group-hover:visible flex absolute bottom-5 p-5 bg-opacity-70 left-0 right-0 bg-gray-50 w-[90%]  items-center justify-between m-auto' >
                        <div className='z-10' >
                          <h1 className='font-bold text-xl text-gray-950' >App 1</h1>
                          <p>App</p>
                        </div>
                        <div className='flex gap-3' >
                          <Link href={'/'} >
                            <PlusIcon className='w-5 h-5 text-gray-950 hover:text-lime-500 transition ease-in-out duration-700' />
                          </Link>
                          <Link href={`/pages/Portfolio/PortfolioDetails`} >
                            <LinkIcon className='w-5 h-5 text-gray-950 hover:text-lime-500 transition ease-in-out duration-700' />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* column 3 */}
                  <div className='flex flex-col gap-5 sm:w-1/3' >
                    <div className='h-max group relative' >
                      <Image src={port3} alt='port1' />

                      <div className=' invisible group-hover:visible flex absolute bottom-5 p-5 bg-opacity-70 left-0 right-0 bg-gray-50 w-[90%]  items-center justify-between m-auto' >
                        <div className='z-10' >
                          <h1 className='font-bold text-xl text-gray-950' >App 1</h1>
                          <p>App</p>
                        </div>
                        <div className='flex gap-3' >
                          <Link href={'/'} >
                            <PlusIcon className='w-5 h-5 text-gray-950 hover:text-lime-500 transition ease-in-out duration-700' />
                          </Link>
                          <Link href={`/pages/Portfolio/PortfolioDetails`} >
                            <LinkIcon className='w-5 h-5 text-gray-950 hover:text-lime-500 transition ease-in-out duration-700' />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className='h-max group relative' >
                      <Image src={port6} alt='port1' />

                      <div className=' invisible group-hover:visible flex absolute bottom-5 p-5 bg-opacity-70 left-0 right-0 bg-gray-50 w-[90%]  items-center justify-between m-auto' >
                        <div className='z-10' >
                          <h1 className='font-bold text-xl text-gray-950' >App 1</h1>
                          <p>App</p>
                        </div>
                        <div className='flex gap-3' >
                          <Link href={'/'} >
                            <PlusIcon className='w-5 h-5 text-gray-950 hover:text-lime-500 transition ease-in-out duration-700' />
                          </Link>
                          <Link href={`/pages/Portfolio/PortfolioDetails`} >
                            <LinkIcon className='w-5 h-5 text-gray-950 hover:text-lime-500 transition ease-in-out duration-700' />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className='h-max group relative' >
                      <Image src={port9} alt='port1' />

                      <div className=' invisible group-hover:visible flex absolute bottom-5 p-5 bg-opacity-70 left-0 right-0 bg-gray-50 w-[90%]  items-center justify-between m-auto' >
                        <div className='z-10' >
                          <h1 className='font-bold text-xl text-gray-950' >App 1</h1>
                          <p>App</p>
                        </div>
                        <div className='flex gap-3' >
                          <Link href={'/'} >
                            <PlusIcon className='w-5 h-5 text-gray-950 hover:text-lime-500 transition ease-in-out duration-700' />
                          </Link>
                          <Link href={`/pages/Portfolio/PortfolioDetails`} >
                            <LinkIcon className='w-5 h-5 text-gray-950 hover:text-lime-500 transition ease-in-out duration-700' />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                </div>
              </Tabs.Item>
              <Tabs.Item title="App">

                <div className="text-sm text-gray-500 dark:text-gray-400"><div className='flex flex-col sm:flex-row gap-5' >
                  {/* column 1 */}
                  <div className='flex flex-col gap-5 sm:w-1/3' >
                    <div className='h-max group relative' >
                      <Image src={port1} alt='port1' />

                      <div className=' invisible group-hover:visible flex absolute bottom-5 p-5 bg-opacity-70 left-0 right-0 bg-gray-50 w-[90%]  items-center justify-between m-auto' >
                        <div className='z-10' >
                          <h1 className='font-bold text-xl text-gray-950' >App 1</h1>
                          <p>App</p>
                        </div>
                        <div className='flex gap-3' >
                          <Link href={'/'} >
                            <PlusIcon className='w-5 h-5 text-gray-950 hover:text-lime-500 transition ease-in-out duration-700' />
                          </Link>
                          <Link href={`/pages/Portfolio/PortfolioDetails`} >
                            <LinkIcon className='w-5 h-5 text-gray-950 hover:text-lime-500 transition ease-in-out duration-700' />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* column 2 */}
                  <div className='flex flex-col gap-5 sm:w-1/3' >
                    <div className='h-max group relative' >
                      <Image src={port3} alt='port1' />

                      <div className=' invisible group-hover:visible flex absolute bottom-5 p-5 bg-opacity-70 left-0 right-0 bg-gray-50 w-[90%]  items-center justify-between m-auto' >
                        <div className='z-10' >
                          <h1 className='font-bold text-xl text-gray-950' >App 1</h1>
                          <p>App</p>
                        </div>
                        <div className='flex gap-3' >
                          <Link href={'/'} >
                            <PlusIcon className='w-5 h-5 text-gray-950 hover:text-lime-500 transition ease-in-out duration-700' />
                          </Link>
                          <Link href={`/pages/Portfolio/PortfolioDetails`} >
                            <LinkIcon className='w-5 h-5 text-gray-950 hover:text-lime-500 transition ease-in-out duration-700' />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* column 3 */}
                  <div className='flex flex-col gap-5 sm:w-1/3' >
                    <div className='h-max group relative' >
                      <Image src={port6} alt='port1' />

                      <div className=' invisible group-hover:visible flex absolute bottom-5 p-5 bg-opacity-70 left-0 right-0 bg-gray-50 w-[90%]  items-center justify-between m-auto' >
                        <div className='z-10' >
                          <h1 className='font-bold text-xl text-gray-950' >App 1</h1>
                          <p>App</p>
                        </div>
                        <div className='flex gap-3' >
                          <Link href={'/'} >
                            <PlusIcon className='w-5 h-5 text-gray-950 hover:text-lime-500 transition ease-in-out duration-700' />
                          </Link>
                          <Link href={`/pages/Portfolio/PortfolioDetails`} >
                            <LinkIcon className='w-5 h-5 text-gray-950 hover:text-lime-500 transition ease-in-out duration-700' />
                          </Link>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
                </div>

              </Tabs.Item>
              <Tabs.Item title="Card">
                <div className="text-sm text-gray-500 dark:text-gray-400"><div className='flex flex-col sm:flex-row gap-5' >
                  {/* column 1 */}
                  <div className='flex flex-col gap-5 sm:w-1/3' >
                    <div className='h-max group relative' >
                      <Image src={port4} alt='port1' />

                      <div className=' invisible group-hover:visible flex absolute bottom-5 p-5 bg-opacity-70 left-0 right-0 bg-gray-50 w-[90%]  items-center justify-between m-auto' >
                        <div className='z-10' >
                          <h1 className='font-bold text-xl text-gray-950' >App 1</h1>
                          <p>App</p>
                        </div>
                        <div className='flex gap-3' >
                          <Link href={'/'} >
                            <PlusIcon className='w-5 h-5 text-gray-950 hover:text-lime-500 transition ease-in-out duration-700' />
                          </Link>
                          <Link href={`/pages/Portfolio/PortfolioDetails`} >
                            <LinkIcon className='w-5 h-5 text-gray-950 hover:text-lime-500 transition ease-in-out duration-700' />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* column 2 */}
                  <div className='flex flex-col gap-5 sm:w-1/3' >
                    <div className='h-max group relative' >
                      <Image src={port7} alt='port1' />

                      <div className=' invisible group-hover:visible flex absolute bottom-5 p-5 bg-opacity-70 left-0 right-0 bg-gray-50 w-[90%]  items-center justify-between m-auto' >
                        <div className='z-10' >
                          <h1 className='font-bold text-xl text-gray-950' >App 1</h1>
                          <p>App</p>
                        </div>
                        <div className='flex gap-3' >
                          <Link href={'/'} >
                            <PlusIcon className='w-5 h-5 text-gray-950 hover:text-lime-500 transition ease-in-out duration-700' />
                          </Link>
                          <Link href={`/pages/Portfolio/PortfolioDetails`} >
                            <LinkIcon className='w-5 h-5 text-gray-950 hover:text-lime-500 transition ease-in-out duration-700' />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* column 3 */}
                  <div className='flex flex-col gap-5 sm:w-1/3' >
                    <div className='h-max group relative' >
                      <Image src={port8} alt='port1' />

                      <div className=' invisible group-hover:visible flex absolute bottom-5 p-5 bg-opacity-70 left-0 right-0 bg-gray-50 w-[90%]  items-center justify-between m-auto' >
                        <div className='z-10' >
                          <h1 className='font-bold text-xl text-gray-950' >App 1</h1>
                          <p>App</p>
                        </div>
                        <div className='flex gap-3' >
                          <Link href={'/'} >
                            <PlusIcon className='w-5 h-5 text-gray-950 hover:text-lime-500 transition ease-in-out duration-700' />
                          </Link>
                          <Link href={`/pages/Portfolio/PortfolioDetails`} >
                            <LinkIcon className='w-5 h-5 text-gray-950 hover:text-lime-500 transition ease-in-out duration-700' />
                          </Link>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
                </div>
              </Tabs.Item>
              <Tabs.Item title="Web">
                <div className="text-sm text-gray-500 dark:text-gray-400"><div className='flex flex-col sm:flex-row gap-5' >
                  {/* column 1 */}
                  <div className='flex flex-col gap-5 sm:w-1/3' >
                    <div className='h-max group relative' >
                      <Image src={port2} alt='port1' />

                      <div className=' invisible group-hover:visible flex absolute bottom-5 p-5 bg-opacity-70 left-0 right-0 bg-gray-50 w-[90%]  items-center justify-between m-auto' >
                        <div className='z-10' >
                          <h1 className='font-bold text-xl text-gray-950' >App 1</h1>
                          <p>App</p>
                        </div>
                        <div className='flex gap-3' >
                          <Link href={'/'} >
                            <PlusIcon className='w-5 h-5 text-gray-950 hover:text-lime-500 transition ease-in-out duration-700' />
                          </Link>
                          <Link href={`/pages/Portfolio/PortfolioDetails`} >
                            <LinkIcon className='w-5 h-5 text-gray-950 hover:text-lime-500 transition ease-in-out duration-700' />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* column 2 */}
                  <div className='flex flex-col gap-5 sm:w-1/3' >
                    <div className='h-max group relative' >
                      <Image src={port5} alt='port1' />

                      <div className=' invisible group-hover:visible flex absolute bottom-5 p-5 bg-opacity-70 left-0 right-0 bg-gray-50 w-[90%]  items-center justify-between m-auto' >
                        <div className='z-10' >
                          <h1 className='font-bold text-xl text-gray-950' >App 1</h1>
                          <p>App</p>
                        </div>
                        <div className='flex gap-3' >
                          <Link href={'/'} >
                            <PlusIcon className='w-5 h-5 text-gray-950 hover:text-lime-500 transition ease-in-out duration-700' />
                          </Link>
                          <Link href={`/pages/Portfolio/PortfolioDetails`} >
                            <LinkIcon className='w-5 h-5 text-gray-950 hover:text-lime-500 transition ease-in-out duration-700' />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* column 3 */}
                  <div className='flex flex-col gap-5 sm:w-1/3' >
                    <div className='h-max group relative' >
                      <Image src={port9} alt='port1' />

                      <div className=' invisible group-hover:visible flex absolute bottom-5 p-5 bg-opacity-70 left-0 right-0 bg-gray-50 w-[90%]  items-center justify-between m-auto' >
                        <div className='z-10' >
                          <h1 className='font-bold text-xl text-gray-950' >App 1</h1>
                          <p>App</p>
                        </div>
                        <div className='flex gap-3' >
                          <Link href={'/'} >
                            <PlusIcon className='w-5 h-5 text-gray-950 hover:text-lime-500 transition ease-in-out duration-700' />
                          </Link>
                          <Link href={`/pages/Portfolio/PortfolioDetails`} >
                            <LinkIcon className='w-5 h-5 text-gray-950 hover:text-lime-500 transition ease-in-out duration-700' />
                          </Link>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
                </div>
              </Tabs.Item>
            </Tabs>
          </Flowbite>

        </div>
      </div>
    </section>
  )
}

export default Portfolio
