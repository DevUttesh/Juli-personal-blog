import Link from 'next/link'
import React from 'react'

const PageNav = (props: any) => {
  return (
    <div className='bg-lime-500' >
      <div className='container m-auto p-5 sm:px-12 sm:py-5 text-gray-50 flex justify-between gap-3 items-center ' >
        <h1 className=' text-xl sm:text-3xl mb-0' >{props.name}</h1>
        <div>
          <span className='text-lg' >
            <Link href={'/'} className='no-underline' >Home</Link> / {props.name}
          </span>
        </div>
      </div>
    </div>
  )
}

export default PageNav