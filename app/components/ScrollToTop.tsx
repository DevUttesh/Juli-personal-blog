"use client"
import Link from 'next/link'
import React from 'react'

const Top = () => {

    return (
    <div className='rounded-md fixed  bottom-8 right-5 animate-bounce delay-75 duration-75 ' >
        <Link href={'/'} className=' bg-green-500 rounded-md text-white font-bold text-lg px-3 py-2 w-12  ' >
            ^
        </Link>
    </div>
  )
}

export default Top