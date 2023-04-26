import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import cart from '../../images/cart.png'
import { FaBars } from 'react-icons/fa'
import Menu from '../menu/Menu'
import Cart from '../cart/Cart'
const Navbar = () => {
  const {
    links,
    isSidebarOpen,
    toggleSideBar,
    total_items,
    OpenCart,
    isCartOpen,
  } = useGlobalContext()
  return (
    <>
      <header className=' bg-black sticky top-0 z-30 duration-500'>
        <nav className='flex  justify-between mx-4 md:mx-16 lg:mx-24 py-5 text-white items-center xl:mx-36'>
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
          <div className=' flex'>
            <button className='relative' onClick={OpenCart}>
              <img src={cart} alt='cart' />
              {total_items > 0 && (
                <span className='absolute right-[-10px] top-[-14px] bg-orange h-[24px] w-[24px] text-white rounded-full text-center flex items-center justify-center'>
                  {total_items}
                </span>
              )}
              {/* {console.log(total_items)} */}
            </button>
          </div>
        </nav>
        <div className='h-[1px] lg:mx-24 mx-4 xl:mx-36 md:mx-16 opacity-50 bg-white'></div>
        {isSidebarOpen && (
          <div className='fixed h-full w-full bg-[#000] opacity-10 z-10'></div>
        )}
        {isCartOpen && (
          <div className='fixed h-full w-full bg-[#000] opacity-10 z-10'></div>
        )}
      </header>
      {isSidebarOpen && <Menu />}
      {isCartOpen && <Cart />}
    </>
  )
}

export default Navbar
