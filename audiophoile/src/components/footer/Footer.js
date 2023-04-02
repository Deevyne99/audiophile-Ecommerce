import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import { FaInstagram, FaFacebookSquare, FaTwitter } from 'react-icons/fa'
const Footer = () => {
  const { links } = useGlobalContext()
  return (
    <footer className='bg-footerColor relative py-12 text-white mt-24'>
      <div className='h-[4px] absolute top-0 lg:mx-24 xl:mx-32 md:mx-16 mx-auto left-0 right-0 bg-orange w-[100px]'></div>
      <div className='flex flex-col lg:flex-row justify-center    md:justify-between mx-4 lg:mx-24 md:mx-16 xl:mx-32'>
        <article className='flex flex-col   space-y-8'>
          <Link
            to={'/'}
            className='text-2xl text-center md:text-left font-bold'
          >
            audiophile
          </Link>
          <div>
            <ul className='flex justify-center text-center md:text-left font-medium flex-col md:flex-row lg:hidden md:space-x-6 uppercase space-y-4 md:space-y-0 md:justify-between max-w-md mx-auto md:mx-0 '>
              {links &&
                links.map((link, index) => {
                  const { id, text, url } = link
                  return (
                    <li className='hover:text-orange font-medium' key={id}>
                      <Link to={url}>{text}</Link>
                    </li>
                  )
                })}
            </ul>
          </div>
          <p className='text-white flex justify-center mx-auto md:mx-0 opacity-50 max-w-sm text-center md:text-left md:max-w-md text-sm font-thin'>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p className='text-white hidden lg:flex opacity-50 text-md font-thin'>
            Copyright 2021. All Rights Reserved
          </p>
          <div className='lg:hidden flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 items-center '>
            <p className='text-white text-center md:text-left opacity-50 text-md font-thin'>
              Copyright 2021. All Rights Reserved
            </p>
            <div className='flex space-x-6  justify-center md:justify-between md:ml-auto'>
              <FaFacebookSquare className='hover:text-orange cursor-pointer' />
              <FaTwitter className='hover:text-orange cursor-pointer' />
              <FaInstagram className='hover:text-orange cursor-pointer' />
            </div>
          </div>
        </article>
        <div className='flex flex-col gap-y-24'>
          <div>
            <ul className='hidden lg:flex space-x-6 uppercase font-medium '>
              {links &&
                links.map((link, index) => {
                  const { id, text, url } = link
                  return (
                    <li className='hover:text-orange' key={id}>
                      <Link to={url}>{text}</Link>
                    </li>
                  )
                })}
            </ul>
          </div>
          <div className=' hidden lg:flex space-x-6 ml-auto'>
            <FaFacebookSquare className='hover:text-orange cursor-pointer' />
            <FaTwitter className='hover:text-orange cursor-pointer' />
            <FaInstagram className='hover:text-orange cursor-pointer' />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
