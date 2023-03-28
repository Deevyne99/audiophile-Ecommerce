import React, { useState } from 'react'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'
const Product = ({ name }) => {
  // console.log(name)

  const { filteredProducts, getProducts, allProducts, loading } =
    useGlobalContext()
  console.log(filteredProducts)
  React.useEffect(() => {
    getProducts(name)
  })

  return (
    <section className='md:mx-16 mx-4 lg:mx-24 pt-16 md:pt-24 pb-10'>
      <div className='flex flex-col gap-20'>
        {filteredProducts.map((items, index) => {
          const { id, name, description, img } = items
          return (
            <div
              key={id}
              className={`flex flex-col md:flex-row justify-between gap-4 md:gap-12 lg:gap-28 ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className='flex flex-col items-center justify-center xl:w-1/2 lg:w-1/2 py-12 bg-grayColor sm:w-full md:w-1/2 h-[350px] lg:h-[350px]  rounded-md'>
                <img
                  className='hover:scale-110 max-w-[200px] '
                  src={img}
                  alt=''
                />
                <div className='bg-black h-2 mt-2  w-24 blur-md'></div>
              </div>
              <article className='flex flex-col justify-center w-full md:w-1/2 text-center md:text-left items-center md:items-start'>
                <p className='uppercase tracking-wide  text-sm font-thin text-orange '>
                  new product
                </p>
                <h2 className='text-3xl uppercase font-bold max-w-sm mt-4'>
                  {name}
                </h2>
                <p className=' max-w-md md:max-w-sm my-6 md:my-10 text-sm opacity-50'>
                  {description}
                </p>
                <Link className='p-2 uppercase bg-orange hover:opacity-75 duration-500 w-[130px] text-white text-center mx-auto md:mx-0'>
                  see product
                </Link>
              </article>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Product
