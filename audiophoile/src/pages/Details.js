import React from 'react'
import { useParams } from 'react-router-dom'
import Description from '../components/description/Description'
import ProductDetails from '../components/product-details/ProductDetails'
import Shop from '../components/shop/Shop'
const Details = () => {
  const { id } = useParams()
  return (
    <>
      <ProductDetails id={id} />
      <Shop />
      <Description />
    </>
  )
}

export default Details
