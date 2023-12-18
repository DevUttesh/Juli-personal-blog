import PageNav from '@/app/components/PageNav'
import Image from 'next/image'
import React from 'react'
import test1 from '../../../../public/testimonials-1.jpg'
import test2 from '../../../../public/testimonials-2.jpg'
import test3 from '../../../../public/testimonials-3.jpg'
import test4 from '../../../../public/testimonials-4.jpg'
import test5 from '../../../../public/testimonials-5.jpg'
import test6 from '../../../../public/testimonials-6.jpg'

const TestimonialsPage = () => {
  return (
    <section>

      <PageNav name="Testimonials" />

      <div className='container m-auto p-5 sm:p-12 h-max' >

        <div className='flex flex-col gap-5' >
          {/* row 1 */}
          <div className='flex flex-col sm:flex-row gap-5' >
            <div className='shadow-lg p-5 sm:px-14 sm:py-16' >
              <div className='float-left' ><Image className='w-20 h-20 rounded-full me-4' src={test1} alt='test1' /></div>
              <div>
                <h1 className='font-bold text-xl' >Saul Goodman</h1>
                <p className='text-sm font-semibold text-gray-400 ' >Ceo & Founder</p>
                <div className='text-gray-600' >
                  <div className='gap-3' >

                    <div><sup className='me-3'>
                      <svg className="w-6 h-6 inline-block rotate-180 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                      </svg>
                    </sup>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper<sub>
                        <svg className="w-6 ms-2 h-6 inline-block text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                        </svg>
                      </sub></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='shadow-lg p-5 sm:px-14 sm:py-16' >
              <div className='float-left' ><Image className='w-20 h-20 rounded-full me-4' src={test2} alt='test1' /></div>
              <div>
                <h1 className='font-bold text-xl' >Saul Goodman</h1>
                <p className='text-sm font-semibold text-gray-400 ' >Ceo & Founder</p>
                <div className='text-gray-600' >
                  <div className='gap-3' >

                    <div><sup className='me-3'>
                      <svg className="w-6 h-6 inline-block rotate-180 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                      </svg>
                    </sup>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper<sub>
                        <svg className="w-6 ms-2 h-6 inline-block text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                        </svg>
                      </sub></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* row 2 */}
          <div className='flex flex-col sm:flex-row gap-5' >
            <div className='shadow-lg p-5 sm:px-14 sm:py-16' >
              <div className='float-left' ><Image className='w-20 h-20 rounded-full me-4' src={test3} alt='test1' /></div>
              <div>
                <h1 className='font-bold text-xl' >Saul Goodman</h1>
                <p className='text-sm font-semibold text-gray-400 ' >Ceo & Founder</p>
                <div className='text-gray-600' >
                  <div className='gap-3' >

                    <div><sup className='me-3'>
                      <svg className="w-6 h-6 inline-block rotate-180 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                      </svg>
                    </sup>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper<sub>
                        <svg className="w-6 ms-2 h-6 inline-block text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                        </svg>
                      </sub></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='shadow-lg p-5 sm:px-14 sm:py-16' >
              <div className='float-left' ><Image className='w-20 h-20 rounded-full me-4' src={test4} alt='test1' /></div>
              <div>
                <h1 className='font-bold text-xl' >Saul Goodman</h1>
                <p className='text-sm font-semibold text-gray-400 ' >Ceo & Founder</p>
                <div className='text-gray-600' >
                  <div className='gap-3' >

                    <div><sup className='me-3'>
                      <svg className="w-6 h-6 inline-block rotate-180 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                      </svg>
                    </sup>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper<sub>
                        <svg className="w-6 ms-2 h-6 inline-block text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                        </svg>
                      </sub></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* row 3 */}
          <div className='flex flex-col sm:flex-row gap-5' >
            <div className='shadow-lg p-5 sm:px-14 sm:py-16' >
              <div className='float-left' ><Image className='w-20 h-20 rounded-full me-4' src={test5} alt='test1' /></div>
              <div>
                <h1 className='font-bold text-xl' >Saul Goodman</h1>
                <p className='text-sm font-semibold text-gray-400 ' >Ceo & Founder</p>
                <div className='text-gray-600' >
                  <div className='gap-3' >

                    <div><sup className='me-3'>
                      <svg className="w-6 h-6 inline-block rotate-180 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                      </svg>
                    </sup>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper<sub>
                        <svg className="w-6 ms-2 h-6 inline-block text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                        </svg>
                      </sub></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='shadow-lg p-5 sm:px-14 sm:py-16' >
              <div className='float-left' ><Image className='w-20 h-20 rounded-full me-4' src={test6} alt='test1' /></div>
              <div>
                <h1 className='font-bold text-xl' >Saul Goodman</h1>
                <p className='text-sm font-semibold text-gray-400 ' >Ceo & Founder</p>
                <div className='text-gray-600' >
                  <div className='gap-3' >

                    <div><sup className='me-3'>
                      <svg className="w-6 h-6 inline-block rotate-180 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                      </svg>
                    </sup>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper<sub>
                        <svg className="w-6 ms-2 h-6 inline-block text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                        </svg>
                      </sub></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default TestimonialsPage