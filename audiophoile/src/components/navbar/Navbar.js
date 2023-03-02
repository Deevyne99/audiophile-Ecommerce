import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex justify-between'>
      <Link to={'/'}>Home</Link>
      <Link to={'/earphones'}>earphones</Link>
      <Link to={'/speakers'}>speakers</Link>
      <Link to={'/headphones'}>headphones</Link>
      <Link to={'/product-details'}>details</Link>
      <Link to={'/checkout'}>checkout</Link>
    </div>
  )
}

export default Navbar
