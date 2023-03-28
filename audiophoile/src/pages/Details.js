import React from 'react'
import { useParams } from 'react-router-dom'
import ProductDetails from '../components/product-details/ProductDetails'
const Details = () => {
  const { id } = useParams()
  return (
    <>
      <ProductDetails id={id} />
    </>
  )
}

export default Details
