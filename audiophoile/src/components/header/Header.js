import React from 'react'

const Header = ({ name }) => {
  return (
    <section className='bg-black flex py-10 md:py-16'>
      <h2 className='uppercase font-semibold text-3xl text-center mx-auto text-white '>
        {name}
      </h2>
    </section>
  )
}

export default Header
