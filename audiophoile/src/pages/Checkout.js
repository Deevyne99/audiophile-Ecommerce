import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useGlobalContext } from '../components/context'
import { formatPrice } from '../utilis/Price'
import Shape from '../images/Shape.png'

const Checkout = () => {
  const { cart, shipping_fee, total_amount } = useGlobalContext()
  console.log(cart)
  const navigate = useNavigate()
  const initialState = {
    name: '',
    email: '',
    address: '',
    phone: '',
    zipCode: '',
    city: '',
    country: '',
    card: '',
    pin: '',
  }
  const [payment, setPayment] = React.useState()
  const [formValues, setFormValues] = useState(initialState)
  const [isSubmit, setIsSubmit] = useState(false)
  const [cash, setCash] = useState(true)
  const [eMoney, setEmoney] = useState(false)

  const [formErrors, setFormErrors] = useState({})
  // const checkout = async () => {
  //   await fetch('http://localhost:4000/purchase', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ items: cart }),
  //   })
  //     .then((response) => {
  //       return response.json()
  //     })
  //     .then((response) => {
  //       if (response.url) {
  //         window.location.assign(response.url) // Forwarding user to Stripe
  //       }
  //     })
  // }
  const cashTransaction = () => {
    setCash(true)
    setEmoney(false)
  }
  const eTransaction = () => {
    setEmoney(true)
    setCash(false)
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues))
    setIsSubmit(true)
  }
  const validate = (values) => {
    const errors = {}
    if (!values.name) {
      errors.name = 'Name is required'
    }
    if (!values.email) {
      errors.email = 'Email is required'
    }
    if (!values.phone) {
      errors.phone = 'Phone Number is required'
    }
    if (!values.address) {
      errors.address = 'address is required'
    }
    if (!values.zipCode) {
      errors.zipCode = 'zipcode is required'
    }
    if (!values.city) {
      errors.city = 'city is required'
    }
    if (!values.country) {
      errors.country = 'country is required'
    }
    if (!values.card) {
      errors.card = 'Card is required'
    }
    if (!values.pin) {
      errors.pin = 'Pin is required'
    }
    return errors
  }

  useEffect(() => {
    console.log(formErrors)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues)
    }
  }, [formErrors, isSubmit])
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
          <div className='flex flex-col w-full md:w-2/3 lg:w-2/3 bg-white px-4 py-10 md:px-10 md:py-10 gap-8  rounded-md'>
            <h2 className='text-3xl font-semibold uppercase'>Checkout</h2>
            <form action=''>
              <div className='flex flex-col gap-4'>
                <h5 className='text-orange uppercase font-semibold'>
                  Billing Details
                </h5>
                <div className='flex flex-col md:flex-row gap-8'>
                  <div className='flex flex-col gap-1 w-full md:w-1/2'>
                    <label
                      htmlFor='name'
                      className='font-semibold flex justify-between'
                    >
                      Name
                      <small className='text-[#CD2C2C] ml-auto '>
                        {formErrors.name}
                      </small>
                    </label>
                    <input
                      type='text'
                      placeholder='Alexander John'
                      className={`p-2  border-[1px] rounded-md w-full ${
                        formErrors.name ? 'border-[#cd2c2c] border-[2px]' : ''
                      }`}
                      name='name'
                      value={formValues.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='flex flex-col gap-1 w-full md:w-1/2'>
                    <label
                      htmlFor='name'
                      className='font-semibold flex justify-between'
                    >
                      Email
                      <small className='text-[#CD2C2C] ml-auto '>
                        {formErrors.email}
                      </small>
                    </label>
                    <input
                      type='email'
                      placeholder='alexander@gmail.com'
                      className={`p-2  border-[1px] rounded-md w-full ${
                        formErrors.name ? 'border-[#cd2c2c] border-[2px]' : ''
                      }`}
                      name='email'
                      value={formValues.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className='flex flex-col md:flex-row gap-8'>
                  <div className='flex flex-col gap-1 md:w-1/2 w-full'>
                    <label
                      htmlFor='name'
                      className='font-semibold flex justify-between'
                    >
                      Phone Number
                      <small className='text-[#CD2C2C] ml-auto '>
                        {formErrors.phone}
                      </small>
                    </label>
                    <input
                      type='number'
                      placeholder='+2348148158802'
                      className={`p-2  border-[1px] rounded-md w-full ${
                        formErrors.phone ? 'border-[#cd2c2c] border-[2px]' : ''
                      }`}
                      name='phone'
                      value={formValues.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='w-1/2 '></div>
                </div>
                <div className='w-full mt-6'>
                  <h5 className='text-orange uppercase font-semibold mb-4'>
                    shipping info
                  </h5>
                  <label
                    htmlFor='name'
                    className='font-semibold flex justify-between'
                  >
                    Address
                    <small className='text-[#CD2C2C] ml-auto '>
                      {formErrors.address}
                    </small>
                  </label>
                  <input
                    type='text'
                    placeholder='Zaria Road'
                    className={`p-2  border-[1px] rounded-md w-full ${
                      formErrors.address ? 'border-[#cd2c2c] border-[2px]' : ''
                    }`}
                    name='address'
                    value={formValues.address}
                    onChange={handleChange}
                  />
                </div>
                <div className='flex flex-col md:flex-row gap-8'>
                  <div className='flex flex-col gap-1 w-full md:w-1/2'>
                    <label
                      htmlFor='name'
                      className='font-semibold flex justify-between'
                    >
                      ZipCode
                      <small className='text-[#CD2C2C] ml-auto '>
                        {formErrors.zipCode}
                      </small>
                    </label>
                    <input
                      type='text'
                      placeholder='Alexander John'
                      className={`p-2  border-[1px] rounded-md w-full ${
                        formErrors.zipCode
                          ? 'border-[#cd2c2c] border-[2px]'
                          : ''
                      }`}
                      name='zipCode'
                      value={formValues.zipCode}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='flex flex-col gap-1 w-full md:w-1/2'>
                    <label
                      htmlFor='name'
                      className='font-semibold flex justify-between'
                    >
                      City
                      <small className='text-[#CD2C2C] ml-auto '>
                        {formErrors.city}
                      </small>
                    </label>
                    <input
                      type='text'
                      placeholder='alexander@gmail.com'
                      className={`p-2  border-[1px] rounded-md w-full ${
                        formErrors.city ? 'border-[#cd2c2c] border-[2px]' : ''
                      }`}
                      name='city'
                      value={formValues.city}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className='flex flex-col md:flex-row gap-8'>
                  <div className='flex flex-col gap-1 w-full md:w-1/2'>
                    <label
                      htmlFor='name'
                      className='font-semibold flex justify-between'
                    >
                      Country
                      <small className='text-[#CD2C2C] ml-auto '>
                        {formErrors.country}
                      </small>
                    </label>
                    <input
                      type='text'
                      placeholder='Nigeria'
                      className={`p-2  border-[1px] rounded-md w-full ${
                        formErrors.country
                          ? 'border-[#cd2c2c] border-[2px]'
                          : ''
                      }`}
                      name='country'
                      value={formValues.country}
                      onChange={handleChange}
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
                        <div
                          className='flex items-center gap-2'
                          onClick={() => eTransaction()}
                        >
                          <div className='w-[20px] flex justify-center items-center h-[20px] rounded-[50%] border-[1px]'>
                            <div
                              className={`w-[10px] h-[10px] rounded-[50%] border-[1px] ${
                                eMoney ? 'bg-[#D87D4A]' : ''
                              }`}
                            ></div>
                          </div>{' '}
                          e-money
                        </div>
                      </div>
                      <div className='flex items-center w-full gap-2 p-2 border-[1px] rounded-md'>
                        <div
                          className='flex items-center gap-2'
                          onClick={() => cashTransaction()}
                        >
                          <div className='w-[20px] flex justify-center items-center h-[20px] rounded-[50%] border-[1px]'>
                            <div
                              className={`w-[10px] h-[10px] rounded-[50%] border-[1px] ${
                                cash ? 'bg-[#D87D4A]' : ''
                              }`}
                            ></div>
                          </div>{' '}
                          Cash on Delivery
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {cash && (
                <div className='mt-12 flex flex-col md:flex-row gap-6  md:gap-12 items-center leading-6 text-sm text-[#000] opacity-50'>
                  <img src={Shape} alt='' />
                  <p>
                    The ‘Cash on Delivery’ option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                  </p>
                </div>
              )}

              {eMoney && (
                <div className='flex flex-col md:flex-row gap-8 mt-12'>
                  <div className='flex flex-col gap-1 w-full md:w-1/2'>
                    <label
                      htmlFor='name'
                      className='font-semibold flex justify-between'
                    >
                      e-Money Number
                      <small className='text-[#CD2C2C] ml-auto '>
                        {formErrors.card}
                      </small>
                    </label>
                    <input
                      type='text'
                      placeholder='Alexander John'
                      className={`p-2  border-[1px] rounded-md w-full ${
                        formErrors.card ? 'border-[#cd2c2c] border-[2px]' : ''
                      }`}
                      name='card'
                      value={formValues.card}
                      onChange={handleChange}
                    />
                  </div>

                  <div className='flex flex-col gap-1 w-full md:w-1/2'>
                    <label
                      htmlFor='name'
                      className='font-semibold flex justify-between'
                    >
                      e-Money Pin
                      <small className='text-[#CD2C2C] ml-auto '>
                        {formErrors.pin}
                      </small>
                    </label>
                    <input
                      type='email'
                      placeholder='alexander@gmail.com'
                      className={`p-2  border-[1px] rounded-md w-full ${
                        formErrors.pin ? 'border-[#cd2c2c] border-[2px]' : ''
                      }`}
                      name='pin'
                      value={formValues.pin}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              )}
            </form>
          </div>
          <article className='flex flex-col w-full md:w-2/5 bg-white rounded-md p-4 gap-4'>
            <h2 className='uppercase font-bold'>summary</h2>
            {cart.map((item, index) => {
              const { img, name, price, amount } = item
              return (
                <div className='flex   justify-between ' key={index}>
                  <div className='flex items-center gap-4'>
                    <div className='bg-grayColor p-2 rounded-md'>
                      <img src={img} alt='' className='w-[50px]' />
                    </div>
                    <div className='flex-col flex gap-2'>
                      <p className='font-bold'>{name}</p>
                      <p>${price}</p>
                    </div>
                  </div>
                  <p>x{amount}</p>
                </div>
              )
            })}
            <div className='flex justify-between'>
              <p className='text-[#000] opacity-50 '>TOTAL</p>
              <p className='font-bold'>{formatPrice(total_amount)}</p>
            </div>
            <div className='flex justify-between'>
              <p className='text-[#000] opacity-50 '>SHIPPING</p>
              <p className='font-bold'>{formatPrice(shipping_fee)}</p>
            </div>
            <div className='flex justify-between'>
              <p className='text-[#000] opacity-50 '>VAT(Included)</p>
              <p className='font-bold'>{formatPrice(total_amount / 5)}</p>
            </div>
            <div className='flex justify-between'>
              <p className='text-[#000] opacity-50 '>GRAND TOTAL</p>
              <p className='font-bold text-[#D87D4A]'>
                {formatPrice(total_amount + 50)}
              </p>
            </div>
            <button
              className='uppercase p-3 w-full bg-orange hover:opacity-75 duration-500  text-white text-center mx-auto sm:mx-0 mt-6'
              onClick={handleSubmit}
              type='button'
            >
              continue
            </button>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Checkout
