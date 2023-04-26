import React, { useCallback, useEffect } from 'react'
import { useGlobalContext } from '../context'
import { formatPrice } from '../../utilis/Price'
import { Link, useNavigate } from 'react-router-dom'

const ProductDetails = ({ id }) => {
  const navigate = useNavigate()

  const {
    single_product,
    allProducts,
    singleProduct,
    increaseAmount,
    decreaseAmount,
    amount,
    AddToCart,
  } = useGlobalContext()
  useEffect(() => {
    const fetchData = async () => {
      try {
        await singleProduct(id)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [id])
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
  const products =
    allProducts &&
    allProducts.filter((item) => item.id !== Number(product_id)).slice(0, 3)

  // console.log(products)

  return (
    <section className='lg:mx-24 md:mx-14 mx-4 py-12 xl:mx-36'>
      <div className='flex flex-col'>
        <button
          className='capitalize opacity-50 flex items-start'
          onClick={() => navigate(-1)}
        >
          go back
        </button>
        <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-8 md:gap-12 lg:gap-28 mt-10'>
          <div className='flex flex-col items-center  justify-center xl:w-1/2 lg:w-1/2 py-12 bg-grayColor w-full sm:w-1/2 md:w-1/2 h-[300px] md:h-[400px] sm:h-[350px]  rounded-md'>
            <img
              src={img}
              className='hover:scale-105 sm:hover:scale-110 max-w-[200px]'
              alt=''
            />
          </div>
          <article className='flex flex-col justify-center w-full  sm:w-1/2 text-left sm:text-left  sm:items-start'>
            <p className='uppercase tracking-wide  text-sm font-thin text-orange '>
              new product
            </p>
            <h2 className='text-3xl uppercase font-bold max-w-sm mt-4'>
              {name}
            </h2>
            <p className='max-w-sm sm:max-w-md md:max-w-sm my-t mt-4 sm:mt-6 text-sm opacity-50 leading-6'>
              {description}
            </p>
            <strong className='mt-4 md:mt-6'>{formatPrice(price)}</strong>
            <div className='flex items-center gap-4  max-w-[280px]'>
              <div className='flex bg-grayColor max-w-[120px] p-1 items-center mt-6 '>
                <button
                  className='w-[40px]  text-2xl opacity-25'
                  onClick={decreaseAmount}
                >
                  -
                </button>
                <span className='w-[40px] text-center '>{amount}</span>
                <button
                  className='w-[40px] text-2xl opacity-25'
                  onClick={increaseAmount}
                >
                  +
                </button>
              </div>
              <button
                className='p-2 uppercase bg-orange hover:opacity-75 duration-500 w-[130px] text-white text-center mx-auto sm:mx-0 mt-6'
                onClick={() => AddToCart(product_id, single_product, amount)}
              >
                add to cart
              </button>
            </div>
          </article>
        </div>
        <div className='flex flex-col lg:flex-row justify-between gap-12 items-start mt-24'>
          <article className='flex flex-col w-full lg:w-1/2 gap-4 leading-6'>
            <h2 className='uppercase text-2xl font-semibold'>features</h2>
            <p className='w-full text-sm text-black text-opacity-50'>{text}</p>
            <p className='w-full text-sm text-black text-opacity-50'>{data}</p>
          </article>
          <div className='flex flex-col md:flex-row lg:flex-col  md:w-[500px] lg:w-1/2 gap-4 items-start  lg:items-center  '>
            <h2 className='uppercase text-left md:text-center text-2xl font-semibold w-full '>
              in the box
            </h2>
            <div className='flex w-full gap-4 md:justify-center justify-start ml-0  md:ml-10 md:items-center items-start '>
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
              <div className='flex flex-col gap-1 text-sm  text-black text-opacity-50 '>
                {item?.map((item, index) => {
                  // console.log(item)
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

        <div className='md:my-48 my-16 flex flex-col sm:flex-row    gap-4  '>
          <div className='flex w-full md:w-1/2 flex-col gap-4 h-auto md:h-[470px]  justify-center'>
            <img src={images && images.image1} className='w-full ' alt='' />
            <img src={images && images.image3} className='w-full ' alt='' />
          </div>
          <div className='w-full md:w-1/2'>
            <img src={images && images.image2} alt='' className='w-full' />
          </div>
        </div>
        <div className='flex md:flex-row flex-col gap-8 w-full items-center '>
          {products.map((item, index) => {
            const { name, img } = item
            return (
              <article
                key={index}
                className='flex flex-col items-center  justify-center  gap-4   w-full  '
              >
                <div className='w-full flex bg-grayColor p-8 gap-4 items-center justify-center md:h-[300px] h-[250px] '>
                  <img
                    src={img}
                    className='md:max-w-[120px]  lg:max-w-[150px] max-w-[150px]'
                    alt=''
                  />
                </div>
                <h2 className='text-center font-semibold text-xl'>{name}</h2>
                <Link
                  to={`/product/${item.id}`}
                  // onClick={()}
                  className='p-2 uppercase bg-orange hover:opacity-75 duration-500 w-[130px] text-white text-center mx-auto sm:mx-0'
                >
                  see product
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProductDetails
