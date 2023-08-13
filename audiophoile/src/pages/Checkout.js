import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useGlobalContext } from '../components/context'

const Checkout = () => {
  const { cart, shipping_fee } = useGlobalContext()
  const navigate = useNavigate()
  const [payment, setPayment] = React.useState()
  return (
    <section className='bg-grayColor '>
      <div className='flex flex-col xl:mx-32 lg:mx-24 mx-4 py-12'>
        <button
          className='capitalize opacity-50 flex items-start mt-6'
          onClick={() => navigate(-1)}
        >
          go back
        </button>
        <div className='flex flex-col md:flex-row gap-6 items-start my-10'>
          <div className='flex flex-col w-full lg:w-2/3 bg-white px-4 py-10 md:px-10 md:py-10 gap-8  rounded-md'>
            <h2 className='text-3xl font-semibold uppercase'>Checkout</h2>
            <form action=''>
              <div className='flex flex-col gap-4'>
                <h5 className='text-orange uppercase font-semibold'>
                  Billing Details
                </h5>
                <div className='flex flex-col md:flex-row gap-8 '>
                  <div className='flex flex-col gap-1 md:w-1/2 lg:w-full'>
                    <label htmlFor='name' className='font-semibold'>
                      Name
                    </label>
                    <input
                      type='text'
                      placeholder='Alexander John'
                      className='p-2  border-[1px] rounded-md w-full'
                    />
                  </div>
                  <div className='flex flex-col gap-1 md:w-1/2 w-full'>
                    <label htmlFor='email' className='font-semibold'>
                      Email Address
                    </label>
                    <input
                      type='email'
                      placeholder='alexander@gmail.com'
                      className='p-2 border-[1px] rounded-md w-full'
                    />
                  </div>
                </div>
                <div className='flex flex-col md:flex-row gap-8'>
                  <div className='flex flex-col gap-1 md:w-1/2 w-full'>
                    <label htmlFor='phone' className='font-semibold'>
                      Phone Number
                    </label>
                    <input
                      type='text'
                      placeholder='+2348148158802'
                      className='p-2 border-[1px] rounded-md w-full '
                    />
                  </div>
                  <div className='w-1/2 '></div>
                </div>
                <div className='w-full mt-6'>
                  <h5 className='text-orange uppercase font-semibold mb-4'>
                    shipping info
                  </h5>
                  <label htmlFor='address' className='font-semibold '>
                    Address
                  </label>
                  <input
                    type='email'
                    placeholder='Zaria Road'
                    className='p-2 border-[1px] rounded-md w-full '
                  />
                </div>
                <div className='flex flex-col md:flex-row gap-8'>
                  <div className='flex flex-col gap-1 w-full md:w-1/2'>
                    <label htmlFor='name' className='font-semibold'>
                      Zip Code
                    </label>
                    <input
                      type='text'
                      placeholder='Alexander John'
                      className='p-2  border-[1px] rounded-md w-full'
                    />
                  </div>
                  <div className='flex flex-col gap-1 w-full md:w-1/2'>
                    <label htmlFor='name' className='font-semibold'>
                      City
                    </label>
                    <input
                      type='text'
                      placeholder='alexander@gmail.com'
                      className='p-2 border-[1px] rounded-md w-full'
                    />
                  </div>
                </div>
                <div className='flex flex-col md:flex-row gap-8'>
                  <div className='flex flex-col gap-1 w-full md:w-1/2'>
                    <label htmlFor='name' className='font-semibold'>
                      Country
                    </label>
                    <input
                      type='text'
                      placeholder='+2348148158802'
                      className='p-2 border-[1px] rounded-md w-full '
                    />
                  </div>
                  <div className='w-1/2 '></div>
                </div>
                <div className='flex flex-col mt-6'>
                  <h5 className='text-orange uppercase font-semibold'>
                    payment details
                  </h5>
                  <div className='flex gap-8'>
                    <div className='w-1/2 '></div>
                    <div className='w-1/2  flex flex-col gap-2'>
                      <div className='flex items-center w-full gap-2 p-2 border-[1px] rounded-md'>
                        <input
                          type='radio'
                          name='eMoney'
                          value='eMoney'
                          id=''
                          onChange={(e) => setPayment(e.target.value)}
                        />
                        <label htmlFor='eMoney'>e-Money</label>
                      </div>
                      <div className='flex items-center w-full gap-2 p-2 border-[1px] rounded-md'>
                        <input
                          type='radio'
                          name='cashDelivery'
                          value='cashDelivery'
                          id=''
                          onChange={(e) => setPayment(e.target.value)}
                        />
                        <label htmlFor='cashDelivery'>Cash on Delivery</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className='flex flex-col w-full md:w-1/3 bg-white rounded-md p-4'>
            {' '}
            hello world
          </div>
        </div>
      </div>
    </section>
  )
}

export default Checkout
