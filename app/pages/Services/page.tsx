import PageNav from '@/app/components/PageNav'
import Service from '@/app/components/Service'
import { BuildingStorefrontIcon } from '@heroicons/react/24/outline'
import React from 'react'

const ServicesPage = () => {
  return (
    <section>

      <PageNav name="Services" />

      <div className='container m-auto p-5 sm:p-12 h-max flex flex-col gap-5 ' >

        <Service/>

        <h1 className='font-bold text-3xl text-center relative after:absolute after:m-auto after:-bottom-5 after:left-0 after:right-0 after:w-14 after:h-1 after:bg-lime-500 ' >FEATURES</h1>

        <p className='text-gray-500 text-center mt-8' >Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>

        <div className='flex flex-col gap-5' >
          <div className='flex flex-col sm:flex-row flex-wrap gap-5' >
            <div className='flex-1 flex items-center justify-center gap-3 sm:w-1/4 h-16 shadow-xl  border' >
              <BuildingStorefrontIcon className='w-9 h-9 text-orange-500 ' />
              <h1 className='font-bold text-base' >
                Lorem Ipsum
              </h1>
            </div>
            <div className='flex-1 flex items-center justify-center gap-3 sm:w-1/4 h-16 shadow-xl  border' >
              <BuildingStorefrontIcon className='w-9 h-9 text-orange-500 ' />
              <h1 className='font-bold text-base' >
                Lorem Ipsum
              </h1>
            </div>
            <div className='flex-1 flex items-center justify-center gap-3 sm:w-1/4 h-16 shadow-xl  border' >
              <BuildingStorefrontIcon className='w-9 h-9 text-orange-500 ' />
              <h1 className='font-bold text-base' >
                Lorem Ipsum
              </h1>
            </div>
            <div className='flex-1 flex items-center justify-center gap-3 sm:w-1/4 h-16 shadow-xl  border' >
              <BuildingStorefrontIcon className='w-9 h-9 text-orange-500 ' />
              <h1 className='font-bold text-base' >
                Lorem Ipsum
              </h1>
            </div>

          </div>
          <div className='flex flex-col sm:flex-row flex-wrap gap-5' >
            <div className='flex-1 flex items-center justify-center gap-3 sm:w-1/4 h-16 shadow-xl  border' >
              <BuildingStorefrontIcon className='w-9 h-9 text-orange-500 ' />
              <h1 className='font-bold text-base' >
                Lorem Ipsum
              </h1>
            </div>
            <div className='flex-1 flex items-center justify-center gap-3 sm:w-1/4 h-16 shadow-xl  border' >
              <BuildingStorefrontIcon className='w-9 h-9 text-orange-500 ' />
              <h1 className='font-bold text-base' >
                Lorem Ipsum
              </h1>
            </div>
            <div className='flex-1 flex items-center justify-center gap-3 sm:w-1/4 h-16 shadow-xl  border' >
              <BuildingStorefrontIcon className='w-9 h-9 text-orange-500 ' />
              <h1 className='font-bold text-base' >
                Lorem Ipsum
              </h1>
            </div>
            <div className='flex-1 flex items-center justify-center gap-3 sm:w-1/4 h-16 shadow-xl  border' >
              <BuildingStorefrontIcon className='w-9 h-9 text-orange-500 ' />
              <h1 className='font-bold text-base' >
                Lorem Ipsum
              </h1>
            </div>

          </div>
          <div className='flex flex-col sm:flex-row flex-wrap gap-5' >
            <div className='flex-1 flex items-center justify-center gap-3 sm:w-1/4 h-16 shadow-xl  border' >
              <BuildingStorefrontIcon className='w-9 h-9 text-orange-500 ' />
              <h1 className='font-bold text-base' >
                Lorem Ipsum
              </h1>
            </div>
            <div className='flex-1 flex items-center justify-center gap-3 sm:w-1/4 h-16 shadow-xl  border' >
              <BuildingStorefrontIcon className='w-9 h-9 text-orange-500 ' />
              <h1 className='font-bold text-base' >
                Lorem Ipsum
              </h1>
            </div>
            <div className='flex-1 flex items-center justify-center gap-3 sm:w-1/4 h-16 shadow-xl  border' >
              <BuildingStorefrontIcon className='w-9 h-9 text-orange-500 ' />
              <h1 className='font-bold text-base' >
                Lorem Ipsum
              </h1>
            </div>
            <div className='flex-1 flex items-center justify-center gap-3 sm:w-1/4 h-16 shadow-xl  border' >
              <BuildingStorefrontIcon className='w-9 h-9 text-orange-500 ' />
              <h1 className='font-bold text-base' >
                Lorem Ipsum
              </h1>
            </div>

          </div>
        </div>


      </div>

    </section>
  )
}

export default ServicesPage