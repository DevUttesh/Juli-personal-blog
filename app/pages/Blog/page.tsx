"use client"
import PageNav from '@/app/components/PageNav'
import Image from 'next/image'
import React from 'react'
import blog1 from '../../../public/blog-1.jpg'
import blog2 from '../../../public/blog-2.jpg'
import blog3 from '../../../public/blog-3.jpg'
import blog4 from '../../../public/blog-4.jpg'
import Link from 'next/link'
import rblog1 from '../../../public/blog-recent-1.jpg'
import rblog2 from '../../../public/blog-recent-2.jpg'
import rblog3 from '../../../public/blog-recent-3.jpg'
import rblog4 from '../../../public/blog-recent-4.jpg'
import { ChatBubbleLeftEllipsisIcon, ClockIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline'

const BlogPage = () => {

  return (
    <section>
      <PageNav name="Blog" />
      <div className='flex flex-col lg:flex-row gap-5 container m-auto p-5 sm:p-12 ' >
        <div className='lg:w-[70%] ' >
          <div className='shadow-2xl ' >
            <div>
              <Image className=' h-[200px] sm:h-[500px]' src={blog1} alt='blog1' />
            </div>
            <div className='p-5 flex flex-col gap-5' >
              <Link href={'/'} className='no-underline text-2xl font-bold ' >
                Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia
              </Link>
              <div className='flex flex-wrap justify-start gap-2 w-auto h-max text-gray-600' >
                <div className='flex items-center gap-2' ><UserIcon className='w-5 h-5 ' /> John Doe</div>
                <div className='flex items-center gap-2' ><ClockIcon className='w-5 h-5 ' /> Jan 1, 2020</div>
                <div className='flex items-center gap-2' ><ChatBubbleLeftEllipsisIcon className='w-5 h-5 ' /> 12 Comments</div>
              </div>
              <p>Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.</p>
              <button className='bg-lime-500 text-white font-semibold px-5 py-2 block ml-auto rounded-md' >Read More</button>
            </div>
          </div>
          <div className='shadow-2xl ' >
            <div>
              <Image className='h-[200px] sm:h-[500px]' src={blog2} alt='blog1' />
            </div>
            <div className='p-5 flex flex-col gap-5' >
              <Link href={'/'} className='no-underline text-2xl font-bold ' >
                Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia
              </Link>
              <div className='flex flex-wrap justify-start gap-2 w-auto h-max text-gray-600' >
                <div className='flex items-center gap-2' ><UserIcon className='w-5 h-5 ' /> John Doe</div>
                <div className='flex items-center gap-2' ><ClockIcon className='w-5 h-5 ' /> Jan 1, 2020</div>
                <div className='flex items-center gap-2' ><ChatBubbleLeftEllipsisIcon className='w-5 h-5 ' /> 12 Comments</div>
              </div>
              <p>Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.</p>
              <button className='bg-lime-500 text-white font-semibold px-5 py-2 block ml-auto rounded-md' >Read More</button>
            </div>
          </div>
          <div className='shadow-2xl ' >
            <div>
              <Image className='h-[200px] sm:h-[500px]' src={blog3} alt='blog1' />
            </div>
            <div className='p-5 flex flex-col gap-5' >
              <Link href={'/'} className='no-underline text-2xl font-bold ' >
                Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia
              </Link>
              <div className='flex flex-wrap justify-start gap-2 w-auto h-max text-gray-600' >
                <div className='flex items-center gap-2' ><UserIcon className='w-5 h-5 ' /> John Doe</div>
                <div className='flex items-center gap-2' ><ClockIcon className='w-5 h-5 ' /> Jan 1, 2020</div>
                <div className='flex items-center gap-2' ><ChatBubbleLeftEllipsisIcon className='w-5 h-5 ' /> 12 Comments</div>
              </div>
              <p>Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.</p>
              <button className='bg-lime-500 text-white font-semibold px-5 py-2 block ml-auto rounded-md' >Read More</button>
            </div>
          </div>
          <div className='shadow-2xl ' >
            <div>
              <Image className='h-[200px] sm:h-[500px]' src={blog4} alt='blog1' />
            </div>
            <div className='p-5 flex flex-col gap-5' >
              <Link href={'/'} className='no-underline text-2xl font-bold ' >
                Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia
              </Link>
              <div className='flex flex-wrap justify-start gap-2 w-auto h-max text-gray-600' >
                <div className='flex items-center gap-2' ><UserIcon className='w-5 h-5 ' /> John Doe</div>
                <div className='flex items-center gap-2' ><ClockIcon className='w-5 h-5 ' /> Jan 1, 2020</div>
                <div className='flex items-center gap-2' ><ChatBubbleLeftEllipsisIcon className='w-5 h-5 ' /> 12 Comments</div>
              </div>
              <p>Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.</p>
              <button className='bg-lime-500 text-white font-semibold px-5 py-2 block ml-auto rounded-md' >Read More</button>
            </div>
          </div>

        </div>
        <div className='lg:w-[30%] h-max shadow-2xl p-8 flex flex-col gap-5' >
          <h1 className='text-xl font-bold' >Search</h1>
          <div className='relative' >
            <input type="search" className='w-full p-3 focus:outline-none border' />
            <span className='absolute right-0 top-0 bottom-0 bg-lime-500 p-3 text-gray-50 ' ><MagnifyingGlassIcon className='w-5 h-6' /></span>
          </div>
          <h1 className='text-xl font-bold' >Categories</h1>
          <div>
            <p className='text-lg' >General <span className='text-gray-400 hover:text-lime-500 ' >(25)</span></p>
            <p className='text-lg' >Lifestyle <span className='text-gray-400 hover:text-lime-500 ' >(12)</span></p>
            <p className='text-lg' >Travel  <span className='text-gray-400 hover:text-lime-500 ' >(5)</span></p>
            <p className='text-lg' >Design <span className='text-gray-400 hover:text-lime-500 ' >(23)</span></p>
            <p className='text-lg' >Creative  <span className='text-gray-400 hover:text-lime-500 ' >(17)</span></p>
            <p className='text-lg' >Educaion  <span className='text-gray-400 hover:text-lime-500 ' >(9)</span></p>
          </div>

          <h1 className='text-xl font-bold' >Recent Posts</h1>

          <div className='flex flex-col gap-3' >
            <div className='flex gap-2 ' >
              <div>
                <Image src={rblog1} className='w-32' alt='sblog1' />
              </div>
              <div>
                <Link href={'/'} className='font-bold text-base hover:text-lime-500 transition ease-in-out duration-500 ' >Nihil blanditiis at in nihil autem</Link>
                <p className='text-gray-500' >Jan 1, 2020</p>
              </div>
            </div>
            <div className='flex gap-2 ' >
              <div>
                <Image src={rblog2} className='w-32' alt='sblog1' />
              </div>
              <div>
                <Link href={'/'} className='font-bold text-base hover:text-lime-500 transition ease-in-out duration-500 ' >Nihil blanditiis at in nihil autem</Link>
                <p className='text-gray-500' >Jan 1, 2020</p>
              </div>
            </div>
            <div className='flex gap-2 ' >
              <div>
                <Image src={rblog3} className='w-32' alt='sblog1' />
              </div>
              <div>
                <Link href={'/'} className='font-bold text-base hover:text-lime-500 transition ease-in-out duration-500 ' >Nihil blanditiis at in nihil autem</Link>
                <p className='text-gray-500' >Jan 1, 2020</p>
              </div>
            </div>
            <div className='flex gap-2 ' >
              <div>
                <Image src={rblog4} className='w-32' alt='sblog1' />
              </div>
              <div>
                <Link href={'/'} className='font-bold text-base hover:text-lime-500 transition ease-in-out duration-500 ' >Nihil blanditiis at in nihil autem</Link>
                <p className='text-gray-500' >Jan 1, 2020</p>
              </div>
            </div>
            <div className='flex gap-2 ' >
              <div>
                <Image src={rblog1} className='w-32' alt='sblog1' />
              </div>
              <div>
                <Link href={'/'} className='font-bold text-base hover:text-lime-500 transition ease-in-out duration-500 ' >Nihil blanditiis at in nihil autem</Link>
                <p className='text-gray-500' >Jan 1, 2020</p>
              </div>
            </div>
          </div>
          <h1 className='text-xl font-bold' >Tags</h1>
          <div className='flex gap-2 flex-wrap' >
            <span className='border hover:bg-lime-500 hover:text-gray-50 px-3 py-2' >App</span>
            <span className='border hover:bg-lime-500 hover:text-gray-50 px-3 py-2' >IT</span>
            <span className='border hover:bg-lime-500 hover:text-gray-50 px-3 py-2' >Bussiness</span>
            <span className='border hover:bg-lime-500 hover:text-gray-50 px-3 py-2' >Mac</span>
            <span className='border hover:bg-lime-500 hover:text-gray-50 px-3 py-2' >Design</span>
            <span className='border hover:bg-lime-500 hover:text-gray-50 px-3 py-2' >Office</span>
            <span className='border hover:bg-lime-500 hover:text-gray-50 px-3 py-2' >Creative</span>
            <span className='border hover:bg-lime-500 hover:text-gray-50 px-3 py-2' >Studio</span>
            <span className='border hover:bg-lime-500 hover:text-gray-50 px-3 py-2' >Smart</span>
            <span className='border hover:bg-lime-500 hover:text-gray-50 px-3 py-2' >Tips</span>
            <span className='border hover:bg-lime-500 hover:text-gray-50 px-3 py-2' >Marketing</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogPage