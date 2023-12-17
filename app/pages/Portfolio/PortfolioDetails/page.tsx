import PageNav from '@/app/components/PageNav'
import Slider from '@/app/components/Slider'
import Link from 'next/link'
import React from 'react'
import slide1 from '../../../../public/slide-1.jpg'
import slide2 from '../../../../public/slide-2.jpg'
import slide3 from '../../../../public/slide-3.jpg'

const PortfolioDetailPage = () => {
    return (
        <section>
            <PageNav name="PortfolioDetails" />

            <div className='container m-auto p-5 sm:p-12' >
                <div className='flex flex-col lg:flex-row gap-5' >
                    <div className='lg:w-4/6 h-fit' >
                        <Slider className="h-[30vh] md:h-[70vh] rounded-none" overlayDiv="hidden" href1={slide1} href2={slide2} href3={slide3} />
                    </div>
                    <div className='flex-1 flex flex-col gap-5' >
                        <h1 className='font-bold text-xl' >Project information</h1>
                        <div>
                            <p><span className='font-bold text-lg' >Category: </span>Web design</p>
                            <p><span className='font-bold text-lg'>Client:  </span> ASU Company</p>
                            <p><span className='font-bold text-lg'>Project date:</span> 01 March, 2020</p>
                            <Link href={'/'} className='text-lime-500'><span className='font-bold text-lg hover:text-gray-950 text-gray-950'>Project URL: </span>www.example.com</Link>
                        </div>
                        <h1 className='font-bold text-2xl' >This is an example of portfolio detail</h1>

                        <p className='text-gray-600 text-xl' >Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PortfolioDetailPage