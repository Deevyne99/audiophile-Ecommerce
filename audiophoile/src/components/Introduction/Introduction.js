import React from 'react'
import zx9 from '../../images/zx9-speaker.png'
import { Link } from 'react-router-dom'

const Introduction = () => {
  return (
    <section className='flex flex-col mx-4 md:mx-16 lg:mx-24 pb-8'>
      <div className='flex flex-col lg:flex-row bg-orange px-12 justify-between rounded-md pt-16 items-center'>
        <div>
          <img className='' src={zx9} alt='speaker' />
        </div>
        <article className='flex flex-col space-y-6 text-white'>
          <h2 className='text-4xl font-bold uppercase'>zx9 speakers</h2>
          <p className='max-w-xs font-thin text-md opacity-75'>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link className='p-2 uppercase bg-[#000000] w-[130px] text-center '>
            see product
          </Link>
        </article>
      </div>
    </section>
  )
}

export default Introduction
