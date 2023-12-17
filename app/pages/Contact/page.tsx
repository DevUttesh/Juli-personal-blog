import PageNav from '@/app/components/PageNav'
import { DevicePhoneMobileIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { MapPinIcon } from '@heroicons/react/24/outline'
import React from 'react'

const ContactPage = () => {
  return (
    <section>
      <PageNav name="Contact" />
      
      <div>
        <iframe className='w-full ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.3612811034654!2d-74.00871262507447!3d40.710062637735945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sin!4v1702455271719!5m2!1sen!2sin" width="600" height="450" loading="lazy"></iframe>
      </div>

      <div className='container m-auto p-5 sm:p-12 flex flex-col gap-10 '>

        <div className='flex flex-col lg:flex-row gap-5 w-full lg:w-[80%] shadow-xl p-5 m-auto ' >
          <div className='w-full lg:w-1/3 flex gap-5' >
            <div>
              <div className='rounded-full border-[1px] border-lime-500 hover:bg-lime-500 p-3 text-lime-500 hover:text-gray-50 ' >
                <MapPinIcon className=' flex items-center justify-center w-7 h-7' />
              </div>
            </div>
            <div className='flex-1' >
              <h1 className='font-bold text-xl' >Locaiton :</h1>
              <p>
                A108 Adam Street<br />
                New York, NY 535022
              </p>
            </div>
          </div>
          <div className='w-full lg:w-1/3 flex gap-5' >
            <div className='' >
              <div className='rounded-full border-[1px] border-lime-500 hover:bg-lime-500 p-3 text-lime-500 hover:text-gray-50 ' >
                <EnvelopeIcon className=' flex items-center justify-center w-7 h-7' />
              </div>
            </div>
            <div className='flex-1' >
              <h1 className='font-bold text-xl' >Email:</h1>
              <p>
                info@example.com
                contact@example.com
              </p>
            </div>
          </div>
          <div className='w-full lg:w-1/3 flex gap-5' >
            <div className='' >
              <div className='rounded-full border-[1px] border-lime-500 hover:bg-lime-500 p-3 text-lime-500 hover:text-gray-50 ' >
                <DevicePhoneMobileIcon className=' flex items-center justify-center w-7 h-7' />
              </div>
            </div>
            <div className='flex-1' >
              <h1 className='font-bold text-xl' >Call:</h1>
              <p>
                +1 5589 55488 51<br />
                +1 5589 22475 14
              </p>
            </div>
          </div>

        </div>

        <form className='flex flex-col gap-5 lg:w-[80%] shadow-xl p-10 m-auto ' >
          <div className='flex flex-col lg:flex-row w-full gap-5' >
            <input type="text" placeholder='Your Name' className='flex-1 w-full rounded-md p-3 focus:ring-0 focus:border-[2px] focus:border-lime-500 ' />
            <input type="email" placeholder='Your Email' className='flex-1 w-full border rounded-md p-3 focus:ring-0 focus:border-[2px] focus:border-lime-500' />
          </div>
          <input type="text" placeholder='Subject' className='border rounded-md p-3 focus:ring-0 focus:border-[2px] focus:border-lime-500' />
          <textarea name="Message" id="" placeholder='Message' className='border rounded-md p-3 focus:ring-0 focus:border-[2px] focus:border-lime-500' ></textarea>
          <button className='bg-lime-500 px-5 py-2 block m-auto rounded-md text-white  ' >Send Message</button>
        </form>

      </div>



    </section>
  )
}

export default ContactPage