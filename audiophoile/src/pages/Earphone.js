import React from 'react'
import Header from '../components/header/Header'
import Product from '../components/products/Product'
import { useGlobalContext } from '../components/context'
import Shop from '../components/shop/Shop'
import Description from '../components/description/Description'
const Earphone = () => {
  const { loading } = useGlobalContext()
  if (loading) {
    return (
      <div className=' w-[50px] h-[50px] mx-auto border-[4px] border-b-white border-orange rounded-full animate-spin'></div>
    )
  }
  return (
    <>
      <Header name={'earphones'} />
      <Product name={'earphones'} />
      <Shop />
      <Description />
    </>
  )
}

export default Earphone
