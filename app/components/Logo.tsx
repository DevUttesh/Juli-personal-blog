import Image from 'next/image'
import React from 'react'
import logo from '../../public/logo.png.webp'

const Logo = () => {
  return (
    <div className='flex justify-center p-4' >
      <Image src={logo} alt='logo' />
    </div>
  )
}

export default Logo