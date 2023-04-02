import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'
import { Link, useNavigate, useLocation } from 'react-router-dom'

const ProductDetails = ({ id }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { single_product, allProducts, singleProduct } = useGlobalContext()
  useEffect(() => {
    // Perform your side effect here
    const fetchData = async () => {
      try {
        await singleProduct(id)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  if (!single_product) {
    return (
      <div>
        <h2>Something went wrong </h2>
        <button
          className='capitalize opacity-50 flex items-start'
          onClick={() => navigate(-1)}
        ></button>
      </div>
    )
  }
  const {
    id: product_id,
    name,
    description,
    img,
    images,
    price,
    size,
    item,
    text,
    data,
  } = single_product
  // const products = allProducts
  //   .filter((item) => item.id !== Number(product_id))
  //   .slice(0, 3)

  // console.log(single_product)

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
        <div className='flex justify-between gap-12 items-start mt-24'>
          <article className='flex flex-col w-1/2 gap-4'>
            <h2 className='uppercase text-2xl font-semibold'>features</h2>
            <p className='w-full text-sm text-black text-opacity-50'>{text}</p>
            <p className='w-full text-sm text-black text-opacity-50'>{data}</p>
          </article>
          <div className='flex flex-col w-1/2 gap-4  items-center '>
            <h2 className='uppercase text-2xl font-semibold '>in the box</h2>
            <div className='flex w-full gap-4 justify-center ml-10 items-center'>
              <div className='flex flex-col gap-1 '>
                {size?.map((item, index) => {
                  // console.log(item)
                  return (
                    <p key={index} className='text-orange text-sm font-bold'>
                      {item}
                    </p>
                  )
                })}
              </div>
              <div className='flex flex-col gap-1 text-sm  text-black text-opacity-50'>
                {item?.map((item, index) => {
                  console.log(item)
                  return (
                    <p key={index} className=''>
                      {item}
                    </p>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <div className='my-16 flex w-sm sm:w-md md:w-lg lg:w-xl justify-center   gap-4 items-center '>
          <div className='flex  flex-col gap-4  h-[470px]  justify-center'>
            <img src={images && images.image1} className='w-[320px]' alt='' />
            <img src={images && images.image3} className='w-[320px]' alt='' />
          </div>
          <div className=''>
            <img
              src={images && images.image2}
              alt=''
              className='h-[430px] object-contain '
            />
          </div>
        </div>
        <div className='flex'></div>
      </div>
    </section>
  )
}

export default ProductDetails
