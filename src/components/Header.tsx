import { Link } from 'react-router-dom'
import SearchBox from './SearchBox'

import { useProducts } from '../context/ProductsContext'
import { useGeoLocation } from '../context/Hooks'

// importing icons
import BrandLogo from '../../public/images/Dealerz.svg'
import Phone from '../../public/images/Phone.svg'
import Truck from '../../public/images/Truck-Delivery.svg'
import Heart from '../../public/images/Heart.svg'
import Cart from '../../public/images/Cart.svg'
import User from '../../public/images/User.svg'
import Bell from '../../public/images/Bell.svg'
import Location from '../../public/images/Location.svg'

const Header = () => {
  // Getting global context
  const {
    state: { cart, wishlist },
  } = useProducts()

  // Get geolocation data
  const { locationData } = useGeoLocation()

  return (
    <header>
      <div className='bg-white flex w-full justify-between lg:px-10 md:px-5 px-2 md:24 sm:h-20 h-16 items-center'>
        <Link to={'/'}>
          <img src={BrandLogo} alt='Dealerz' className='max-h-12' />
        </Link>
        <div className='flex '>
          {locationData && (
            <div className='flex items-center justify-center  mr-5 min-w-fit'>
              <img className='h-6 w-6' src={Location} alt='phone' />
              <span className='ml-1 font-bold flex gap-1'>
                {locationData?.city},
                <span className='hidden sm:block'>
                  {locationData?.country_name}
                </span>
                <span className='sm:hidden block'>{locationData?.country_code}</span>
              </span>
            </div>
          )}
          <Link to={'/notdone'}>
            <div className='flex items-center justify-center cursor-pointer'>
              <img src={Phone} alt='phone' />
              <span className='ml-1 font-bold hidden md:block'>
                Call Center
              </span>
            </div>
          </Link>
          <Link to={'/notdone'}>
            <div className='flex items-center justify-center ml-6 cursor-pointer'>
              <img src={Truck} alt='shipping and returns' />
              <span className='ml-2 font-bold hidden md:block'>
                Shipping & Returns
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div
        className='flex sm:flex-row justify-around
       flex-row w-full items-center md:px-10 px-2 md:24 h-20  sm:justify-between focus:outline-none gap-5 sm:flex-nowrap flex-wrap'
      >
        <ul className='flex sm:gap-3 gap-5'>
          <Link to={'/'}>
            <li className='cursor-pointer font-extrabold'>Shop</li>
          </Link>
          <Link to={'/notdone'}>
            <li className='cursor-pointer font-extrabold'>Promo</li>
          </Link>
          <Link to={'/notdone'}>
            <li className='cursor-pointer font-extrabold'>About</li>
          </Link>
          <Link to={'/notdone'}>
            <li className='cursor-pointer font-extrabold'>Blog</li>
          </Link>
        </ul>

        <div className='w-3/6 hidden sm:block'>
          <SearchBox bgColor='bg-white' border='border-transparent' />
        </div>

        <div className='flex sm:gap-4 gap-5'>
          <Link to={'/wishlist'}>
            <span className='relative '>
              <img className='cursor-pointer h-6' src={Heart} alt='wishlist' />
              {wishlist.length > 0 && (
                <span className='absolute bg-[#F86338] text-white rounded-full py-1 px-2 text-xs flex items-center justify-center top-[-15px] right-[-5px] font-bold w-5 h-5'>
                  {wishlist.length}
                </span>
              )}
            </span>
          </Link>
          <Link to={'/cart'}>
            <span className='relative '>
              <img className='cursor-pointer h-6' src={Cart} alt='Cart' />
              {cart.length > 0 && (
                <span className='absolute bg-[#F86338] text-white rounded-full py-1 px-2 text-xs flex items-center justify-center top-[-15px] right-[-5px] font-bold w-5 h-5'>
                  {cart.length}
                </span>
              )}
            </span>
          </Link>

          <Link to={'/notdone'}>
            <img className='cursor-pointer h-6' src={User} alt='User' />
          </Link>
          <Link to={'/notdone'}>
            <img className='cursor-pointer h-6' src={Bell} alt='Notification' />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
