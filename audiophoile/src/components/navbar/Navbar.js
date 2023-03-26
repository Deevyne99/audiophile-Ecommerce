import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import cart from '../../images/cart.png'
import { FaBars } from 'react-icons/fa'
import Menu from '../menu/Menu'
const Navbar = () => {
  const { links, isSidebarOpen, toggleSideBar } = useGlobalContext()
  return (
    <>
      <header className=' bg-black sticky top-0 z-30 duration-500'>
        <nav className='flex  justify-between mx-4 md:mx-16 lg:mx-24 py-5 text-white items-center '>
          <div className='flex lg:hidden space-x-10 items-center'>
            <button onClick={toggleSideBar}>
              <FaBars className='text-xl hover:text-orange' />
            </button>
            <Link
              to={'/'}
              className='hidden md:flex font-bold text-2xl cursor-pointer'
            >
              audiophile
            </Link>
          </div>
          <Link
            to={'/'}
            className='flex md:hidden lg:flex font-bold text-2xl cursor-pointer'
          >
            audiophile
          </Link>
          <ul className='hidden lg:flex space-x-6 uppercase font-medium '>
            {links.map((link, index) => {
              const { id, text, url } = link
              return (
                <li className='hover:text-orange' key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              )
            })}
          </ul>
          <img src={cart} alt='cart' />
        </nav>
        <div className='h-[1px] lg:mx-24 mx-4 md:mx-16 opacity-50 bg-white'></div>
        {isSidebarOpen && (
          <div className='fixed h-full w-full bg-[#000] opacity-10 z-10'></div>
        )}
      </header>
      {isSidebarOpen && <Menu />}
    </>
  )
}

export default Navbar
