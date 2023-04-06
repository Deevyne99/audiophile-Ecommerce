import React from 'react'
import user from '../../images/user.png'
const Description = () => {
  return (
    <section className='lg:mx-24 mx-4 md:mx-16 xl:mx-36 mb-24'>
      <div className='flex  flex-col-reverse lg:flex-row justify-between gap-12 items-center'>
        <article className='w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start lg:text-left lg:justify-between '>
          <h3 className='uppercase text-center lg:text-left font-semibold text-3xl lg:text-4xl max-w-sm'>
            Bringing you the <span className='text-orange'>best</span> audio
            gear
          </h3>
          <p className='lg:max-w-md max-w-lg text-center lg:text-start opacity-50 text-sm mt-6 md:mt-10 leading-6'>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </article>
        <div className='lg:bg-userImage bg-userTab h-[300px]  lg:h-[400px]  bg-no-repeat bg-cover bg-center lg:w-1/2 w-full rounded-md'></div>
      </div>
    </section>
  )
}

export default Description
