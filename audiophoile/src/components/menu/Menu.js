import React from 'react'

import { shop } from '../../data'
import { FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Menu = () => {
  return (
    <section className='fixed lg:hidden duration-600 z-30 py-24 bg-white w-full rounded-b-lg'>
      <div className=' mx-4 flex-col md:mx-14 lg:mx-24 flex gap-y-16 md:flex-row justify-center gap-8 items-center'>
        {shop.map((item, index) => {
          const { id, img, url, name } = item
          return (
            <div
              className='relative flex flex-col group w-full sm:w-full md:w-[320px] lg:w-[400px] h-[180px] space-y-4  bg-grayColor justify-center items-center rounded-md'
              key={id}
            >
              <div className='mx-auto mt-[-50px] bg-transparent '>
                <img
                  className='w-20 hover:scale-110 duration-300'
                  src={img}
                  alt=''
                />
                <div className='bg-black h-4 rounded-full w-20 blur-md'></div>
              </div>

              <p className='uppercase  font-semibold'>{name}</p>
              <Link
                className='flex group-hover:text-orange cursor-pointer items-center gap-1 uppercase'
                to={url}
              >
                shop <FaChevronRight className='font-thin hov' />
              </Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Menu
