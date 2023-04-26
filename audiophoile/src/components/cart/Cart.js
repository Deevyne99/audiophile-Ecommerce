import React from 'react'
import { useGlobalContext } from '../context'
import { formatPrice } from '../../utilis/Price'
import { Link } from 'react-router-dom'
const Cart = () => {
  const { cart, total_items, OpenCart, ClearCart } = useGlobalContext()
  return (
    <div className='fixed flex-col max-w-[400px] left-0 p-6 top-24  md:top-24 lg:right-36 right-0 z-40 md:right-16 bg-white rounded-md flex transition-all duration-100 mx-auto md:mx-0 md:left-auto'>
      <div className='flex justify-between w-full  items-center '>
        <strong className='capitalize'>cart ({total_items})</strong>
        <button type='button' onClick={ClearCart}>
          Remove all
        </button>
      </div>
      <article className='flex flex-col mt-10'>
        <div className='w-full flex-col flex gap-4'>
          {cart.map((item, index) => {
            return (
              <div
                className='flex justify-between gap-2 w-full items-center'
                key={index}
              >
                <div className='flex gap-2 items-center'>
                  <div className='bg-grayColor p-2 rounded-md'>
                    <img src={item.img} alt='' className='w-[50px]' />
                  </div>
                  <div>
                    <p className='text-sm uppercase'>{item.name}</p>
                    <p>{formatPrice(item.price)}</p>
                  </div>
                </div>
                <div>
                  <div className='flex bg-grayColor max-w-[70px] p-1 items-center  '>
                    <button className='w-[40px]  text-2xl opacity-25'>-</button>
                    <span className='w-[40px] text-center '>{item.amount}</span>
                    <button className='w-[40px] text-2xl opacity-25'>+</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <Link
          to={'/checkout'}
          className='uppercase p-3 w-full bg-orange hover:opacity-75 duration-500  text-white text-center mx-auto sm:mx-0 mt-6'
          onClick={OpenCart}
        >
          checkout
        </Link>
      </article>
    </div>
  )
}

export default Cart
