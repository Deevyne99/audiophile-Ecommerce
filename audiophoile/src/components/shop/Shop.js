import React from 'react'
import { shop } from '../../data'
import { FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Shop = () => {
  return (
    <section className='py-24'>
      <div className='mx-4 md:mx-14 lg:mx-24 flex gap-y-16 md:flex-row justify-center gap-8 flex-wrap'>
        {shop.map((item, index) => {
          const { id, img, url, name } = item
          return (
            <div
              className='relative flex flex-col w-[300px] h-[180px] space-y-4  bg-grayColor justify-center items-center rounded-md'
              key={id}
            >
              <div className='mx-auto mt-[-50px] bg-transparent '>
                <img className='w-20' src={img} alt='' />
                <div className='bg-black h-[8px] rounded-full w-20 blur-md'></div>
              </div>

              <p className='uppercase font-semibold'>{name}</p>
              <Link className='flex items-center gap-1 uppercase' to={url}>
                shop <FaChevronRight className='font-thin' />
              </Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Shop
