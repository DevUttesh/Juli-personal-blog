'use client';
import { Accordion } from 'flowbite-react';
import PageNav from '@/app/components/PageNav'
import Link from 'next/link'
import React from 'react'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

const PricingPage = () => {

  return (
  
  <section>
      <PageNav name="Pricing" />
      <div className='container p-5 sm:p-12 m-auto' >

        <div className='flex flex-col lg:flex-row items-center justify-center gap-5' >

          <div className='flex flex-col md:flex-row gap-5 w-full' >

            <div className='flex w-full flex-col items-center justify-center gap-3 lg:w-1/2  border shadow-2xl h-max rounded-md ' >

              <h1 className='font-bold text-lg mb-0 text-gray-600 text-center bg-gray-100 w-full py-3 ' >Free</h1>

              <div className='flex flex-col gap-5 items-center justify-center' >
                <p className='text-gray-500 mb-0 ' ><span className='text-4xl text-lime-500 font-bold'><sup className='text-2xl' > $ </sup> 0 </span>/ month</p>
                <p>Aida dere</p>
                <p>Nec feugiat nisl</p>
                <p>Nulla at volutpat dola</p>
                <p className='text-gray-500' ><del>Pharetra massa</del></p>
                <p className='text-gray-500' ><del>Massa ultricies mi</del></p>

              </div>

              <h1 className='font-bold text-sm mb-0 text-gray-600 w-full text-center bg-gray-100 py-6 ' ><Link href={'/'} className='transition ease-in-out duration-200 no-underline bg-lime-500 hover:bg-lime-400 rounded-md text-gray-50 px-8 py-2' >Buy Now</Link></h1>

            </div>

            <div className='flex w-full flex-col items-center justify-center gap-3 lg:w-1/2 border shadow-2xl h-max rounded-md ' >
              <h1 className='font-bold text-lg mb-0 text-gray-50  text-center bg-lime-500 rounded-t-md w-full py-3 ' >Business</h1>

              <div className='flex flex-col gap-5 items-center justify-center' >
                <p className='text-gray-500 mb-0 ' ><span className='text-4xl text-lime-500 font-bold'><sup className='text-2xl' > $ </sup> 19 </span>/ month</p>
                <p>Aida dere</p>
                <p>Nec feugiat nisl</p>
                <p>Nulla at volutpat dola</p>
                <p>Pharetra massa</p>
                <p className='text-gray-500' ><del>Massa ultricies mi</del></p>

              </div>

              <h1 className='font-bold text-sm mb-0 text-gray-600 w-full text-center bg-gray-100 py-6 ' ><Link href={'/'} className='transition ease-in-out duration-200 no-underline bg-lime-500 hover:bg-lime-400 rounded-md text-gray-50 px-8 py-2' >Buy Now</Link></h1>
            </div>

          </div>

          <div className='flex flex-col md:flex-row gap-5 w-full' >

            <div className='flex w-full flex-col items-center justify-center gap-3 lg:w-1/2  border shadow-2xl h-max rounded-md ' >
              <h1 className='font-bold text-lg mb-0 text-gray-600 text-center bg-gray-100 w-full py-3 ' >Developer</h1>

              <div className='flex flex-col gap-5 items-center justify-center' >
                <p className='text-gray-500 mb-0 ' ><span className='text-4xl text-lime-500 font-bold'><sup className='text-2xl' > $ </sup> 29 </span>/ month</p>
                <p>Aida dere</p>
                <p>Nec feugiat nisl</p>
                <p>Nulla at volutpat dola</p>
                <p>Pharetra massa</p>
                <p>Massa ultricies mi</p>

              </div>

              <h1 className='font-bold text-sm mb-0 text-gray-600 w-full text-center bg-gray-100 py-6 ' ><Link href={'/'} className='transition ease-in-out duration-200 no-underline bg-lime-500 hover:bg-lime-400 rounded-md text-gray-50 px-8 py-2' >Buy Now</Link></h1>
            </div>

            <div className='flex w-full flex-col items-center justify-center gap-3 lg:w-1/2  border shadow-2xl h-max rounded-md relative overflow-hidden' >
              <h1 className='font-bold text-lg mb-0 text-gray-600 text-center bg-gray-100 w-full py-3 ' >Ultimate</h1>

              <div className='flex flex-col gap-5 items-center justify-center' >
                <p className='text-gray-500 mb-0 ' ><span className='text-4xl text-lime-500 font-bold'><sup className='text-2xl' > $ </sup> 49 </span>/ month</p>
                <p>Aida dere</p>
                <p>Nec feugiat nisl</p>
                <p>Nulla at volutpat dola</p>
                <p >Pharetra massa</p>
                <p >Massa ultricies mi</p>

              </div>

              <h1 className='font-bold text-sm mb-0 text-gray-600 w-full text-center bg-gray-100 py-6 ' ><Link href={'/'} className='transition ease-in-out duration-200 no-underline bg-lime-500 hover:bg-lime-400 rounded-md text-gray-50 px-8 py-2' >Buy Now</Link></h1>
              <span className='bg-lime-500 text-gray-50 absolute top-5 -right-6 rotate-45 overflow-hidden px-5' >Advanced</span>
            </div>

          </div>

        </div>

      </div>

      <div className='bg-gray-100' >
        <div className='container p-5 sm:p-12 m-auto flex flex-col items-center justify-center gap-16' >

          <h1 className='font-bold text-3xl text-center relative after:absolute after:m-auto after:-bottom-5 after:left-0 after:right-0 after:w-14 after:h-1 after:bg-lime-500 ' >FREQUENTLY ASKED QUESTIONS</h1>

          <Accordion className=' sm:w-4/5 rounded-none border-none divide-none flex flex-col gap-3' >
            <Accordion.Panel className='rounded-none' >
              <Accordion.Title className='focus:ring-0 bg-gray-50 hover:bg-gray-50 rounded-none ' ><div className='w-full flex gap-2 text-gray-950 hover:text-lime-500 transition ease-in-out duration-300' ><div><QuestionMarkCircleIcon className='w-6 h-6 text-gray-500 ' /></div>What is Flowbite?</div></Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                  dropdowns, modals, navbars, and more.
                </p>
                <div className="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to&nbsp;
                  <a
                    href="https://flowbite.com/docs/getting-started/introduction/"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    get started&nbsp;
                  </a>
                  and start developing websites even faster with components on top of Tailwind CSS.
                </div>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel className='rounded-none' >
              <Accordion.Title className='focus:ring-0 bg-gray-50 hover:bg-gray-50 rounded-none ' ><div className='w-full flex gap-2 text-gray-950 hover:text-lime-500 transition ease-in-out duration-300' ><div><QuestionMarkCircleIcon className='w-6 h-6 text-gray-500 ' /></div>Feugiat scelerisque varius morbi enim nunc?</div></Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                  dropdowns, modals, navbars, and more.
                </p>
                <div className="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to&nbsp;
                  <a
                    href="https://flowbite.com/docs/getting-started/introduction/"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    get started&nbsp;
                  </a>
                  and start developing websites even faster with components on top of Tailwind CSS.
                </div>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel className='rounded-none' >
              <Accordion.Title className='focus:ring-0 bg-gray-50 hover:bg-gray-50 rounded-none ' ><div className='w-full flex gap-2 text-gray-950 hover:text-lime-500 transition ease-in-out duration-300' ><div><QuestionMarkCircleIcon className='w-6 h-6 text-gray-500 ' /></div>Dolor sit amet consectetur adipiscing elit?</div></Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                  dropdowns, modals, navbars, and more.
                </p>
                <div className="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to&nbsp;
                  <a
                    href="https://flowbite.com/docs/getting-started/introduction/"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    get started&nbsp;
                  </a>
                  and start developing websites even faster with components on top of Tailwind CSS.
                </div>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel className='rounded-none' >
              <Accordion.Title className='focus:ring-0 bg-gray-50 hover:bg-gray-50 rounded-none ' ><div className='w-full flex gap-2 text-gray-950 hover:text-lime-500 transition ease-in-out duration-300' ><div><QuestionMarkCircleIcon className='w-6 h-6 text-gray-500 ' /></div>Tempus quam pellentesque nec nam aliquam sem et tortor consequat?</div></Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                  dropdowns, modals, navbars, and more.
                </p>
                <div className="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to&nbsp;
                  <a
                    href="https://flowbite.com/docs/getting-started/introduction/"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    get started&nbsp;
                  </a>
                  and start developing websites even faster with components on top of Tailwind CSS.
                </div>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel className='rounded-none' >
              <Accordion.Title className='focus:ring-0 bg-gray-50 hover:bg-gray-50 rounded-none ' ><div className='w-full flex flex-1 gap-2 text-gray-950 hover:text-lime-500 transition ease-in-out duration-300' ><div><QuestionMarkCircleIcon className='w-6 h-6 text-gray-500 ' /></div>Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor?</div></Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                  dropdowns, modals, navbars, and more.
                </p>
                <div className="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to&nbsp;
                  <a
                    href="https://flowbite.com/docs/getting-started/introduction/"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    get started&nbsp;
                  </a>
                  and start developing websites even faster with components on top of Tailwind CSS.
                </div>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </div>

    </section>
  )
}

export default PricingPage