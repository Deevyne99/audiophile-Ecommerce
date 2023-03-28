import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'
import { Link, useNavigate } from 'react-router-dom'

const ProductDetails = ({ id }) => {
  const { single_product, singleProduct } = useGlobalContext()
  const navigate = useNavigate()
  const {
    id: product_id,
    name,
    description,
    img,
    images,
    price,
    features,
  } = single_product
  console.log(images)
  console.log(single_product)
  useEffect(() => {
    singleProduct(id)
  }, [id])
  return (
    <section className='lg:mx-24 md:mx-14 mx-4 py-12'>
      <div className='flex flex-col'>
        <button
          className='capitalize opacity-50 flex items-start'
          onClick={() => navigate(-1)}
        >
          go back
        </button>
        <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-8 md:gap-12 lg:gap-28 mt-10'>
          <div className='flex flex-col items-center justify-center xl:w-1/2 lg:w-1/2 py-12 bg-grayColor w-full sm:w-1/2 md:w-1/2 h-[300px] sm:h-[350px]  rounded-md'>
            <img src={img} className='hover:scale-110 max-w-[200px]' alt='' />
          </div>
          <article className='flex flex-col justify-center w-full  sm:w-1/2 text-center sm:text-left items-center sm:items-start'>
            <p className='uppercase tracking-wide  text-sm font-thin text-orange '>
              new product
            </p>
            <h2 className='text-3xl uppercase font-bold max-w-sm mt-4'>
              {name}
            </h2>
            <p className=' max-w-md md:max-w-sm my-6 md:my-10 text-sm opacity-50'>
              {description}
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails
