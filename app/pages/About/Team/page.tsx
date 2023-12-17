import PageNav from '@/app/components/PageNav'
import Team from '@/app/components/Team'
import React from 'react'

const TeamPage = () => {
  return (
    <section>

      <PageNav name="Team" />
      <div className='container m-auto p-5 sm:p-12 h-max flex flex-col gap-5' >
        <h1 className='font-bold text-3xl text-center relative after:absolute after:m-auto after:-bottom-5 after:left-0 after:right-0 after:w-14 after:h-1 after:bg-lime-500 ' >OUR TEAM</h1>
        <p className='text-gray-500 text-center mt-8' >Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>

        <Team />
        
      </div>
    </section>

  )
}

export default TeamPage