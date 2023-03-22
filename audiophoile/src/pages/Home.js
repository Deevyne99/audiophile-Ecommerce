import React from 'react'
import Description from '../components/description/Description'
import Hero from '../components/hero/Hero'
import Introduction from '../components/Introduction/Introduction'
import Shop from '../components/shop/Shop'

const Home = () => {
  return (
    <>
      <Hero />
      <Shop />
      <Introduction />
      <Description />
    </>
  )
}

export default Home
