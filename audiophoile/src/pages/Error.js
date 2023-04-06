import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <section className='my-14'>
      <div className='flex flex-col gap-10 mt-12'>
        <h1 className='text-7xl font-bold text-center '>404</h1>
        <p className='text-center opacity-50'>
          Oops this page could not be found...
        </p>
        <Link
          to={`/`}
          // onClick={()}
          className='p-2  bg-orange hover:opacity-75 duration-500 w-[130px] text-white text-center mx-auto  capitalize'
        >
          back home
        </Link>
      </div>
    </section>
  )
}

export default Error
