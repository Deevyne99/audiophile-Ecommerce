import React from 'react'
//import earphone from '../../images/earphone-bg.png'
import smallEarphone from '../../images/earphone-bg-small2.png'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <section className='bg-black  w-full max-h-sm relative md:py-36 md:pb-64 sm:py-8 sm:pt-32 pt-24 py-8 duration-700'>
      <div className='flex flex-col md:flex-row md:justify-between md:mx-16 mx-4 lg:mx-24'>
        <article
          className={`flex  absolute md:relative items-center top-24 md:top-0 z-10  flex-col space-y-8 text-white md:mx-0 mx-auto left-0 right-0 md:items-start  justify-center `}
        >
          <p className='uppercase tracking-wide opacity-50 text-sm font-thin'>
            new product
          </p>
          <h2 className='text-4xl uppercase tracking-wider font-bold max-w-sm text-center md:text-left'>
            XX99 Mark II Headphones
          </h2>
          <p className='opacity-50 text-sm font-thin max-w-[350px] text-center md:text-left'>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link
            className='p-2 uppercase bg-orange w-[130px] text-center'
            to={'/headphones'}
          >
            see product
          </Link>
        </article>
        <div className='relative  flex md:absolute  lg:right-64 top-[-10px] sm:top-[0px] md:right-16   bg-black max-w-xs flex-shrink mx-auto md:top-36'>
          <img
            className='hidden md:flex md:max-w-sm lg:max-w-lg max-w-xs animate-bounce'
            src={smallEarphone}
            alt='earphone'
          />
          <img
            className='flex animate-bounce  sm:ml-[-50px]  sm:max-w-[450px] md:hidden bg-black'
            src={smallEarphone}
            alt=''
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
