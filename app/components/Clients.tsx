import Image from 'next/image'
import React from 'react'
import client1 from '../../public/client-1.png'
import client2 from '../../public/client-2.png'
import client3 from '../../public/client-3.png'
import client4 from '../../public/client-4.png'
import client5 from '../../public/client-5.png'
import client6 from '../../public/client-6.png'
import client7 from '../../public/client-7.png'
import client8 from '../../public/client-8.png'

const Clients = () => {
  return (
    <section className=' container h-max m-auto sm:px-10 sm:p-10 p-5' >
      <div className='flex flex-col sm:flex-row ' >
        <div className='flex-1 border flex items-center justify-center py-3 lg:px-10 lg:py-7 ' ><div className='w-28 hover:scale-110 transition-all ease-in-out delay-200 duration-200 grayscale hover:grayscale-0 ' ><Image src={client1} alt='client1' /></div></div>
        <div className='flex-1 border flex items-center justify-center py-3 lg:px-10 lg:py-7 ' ><div className='w-28 hover:scale-110 transition-all ease-in-out delay-200 duration-200 grayscale hover:grayscale-0 ' ><Image src={client2} alt='client1' /></div></div>
        <div className='flex-1 border flex items-center justify-center py-3 lg:px-10 lg:py-7 ' ><div className='w-28 hover:scale-110 transition-all ease-in-out delay-200 duration-200 grayscale hover:grayscale-0 ' ><Image src={client3} alt='client1' /></div></div>
        <div className='flex-1 border flex items-center justify-center py-3 lg:px-10 lg:py-7 ' ><div className='w-28 hover:scale-110 transition-all ease-in-out delay-200 duration-200 grayscale hover:grayscale-0 ' ><Image src={client4} alt='client1' /></div></div>
      </div>
      <div className='flex flex-col sm:flex-row ' >
        <div className='flex-1 border flex items-center justify-center py-3 lg:px-10 lg:py-7 ' ><div className='w-28 hover:scale-110 transition-all ease-in-out delay-200 duration-200 grayscale hover:grayscale-0 ' ><Image src={client5} alt='client1' /></div></div>
        <div className='flex-1 border flex items-center justify-center py-3 lg:px-10 lg:py-7 ' ><div className='w-28 hover:scale-110 transition-all ease-in-out delay-200 duration-200 grayscale hover:grayscale-0 ' ><Image src={client6} alt='client1' /></div></div>
        <div className='flex-1 border flex items-center justify-center py-3 lg:px-10 lg:py-7 ' ><div className='w-28 hover:scale-110 transition-all ease-in-out delay-200 duration-200 grayscale hover:grayscale-0 ' ><Image src={client7} alt='client1' /></div></div>
        <div className='flex-1 border flex items-center justify-center py-3 lg:px-10 lg:py-7 ' ><div className='w-28 hover:scale-110 transition-all ease-in-out delay-200 duration-200 grayscale hover:grayscale-0 ' ><Image src={client8} alt='client1' /></div></div>
      </div>
    </section>
  )
}

export default Clients