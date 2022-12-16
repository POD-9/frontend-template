import { Link } from 'react-router-dom'
import SearchBox from './SearchBox'

// importing icons
import BrandLogo from '../../public/images/Dealerz.svg'
import Phone from '../../public/images/Phone.svg'
import Truck from '../../public/images/Truck-Delivery.svg'
import Heart from '../../public/images/Heart.svg'
import Cart from '../../public/images/Cart.svg'
import User from '../../public/images/User.svg'
import Bell from '../../public/images/Bell.svg'
import { useProducts } from '../context/ProductsContext'

const Header = () => {
  // Getting global context
  const {
    state: { cart, wishlist },
  } = useProducts()
  return (
    <header>
      <div className='bg-white flex w-full justify-between px-10 h-24 items-center'>
        <Link to={'/'}>
          <img src={BrandLogo} alt='Dealerz' className='max-h-12' />
        </Link>
        <div className='flex'>
          <Link to={'/notdone'}>
            <div className='flex items-center justify-center cursor-pointer'>
              <img src={Phone} alt='phone' />
              <span className='ml-1 font-bold'>Call Center</span>
            </div>
          </Link>
          <Link to={'/notdone'}>
            <div className='flex items-center justify-center ml-6 cursor-pointer'>
              <img src={Truck} alt='shipping and returns' />
              <span className='ml-2 font-bold'>Shipping & Returns</span>
            </div>
          </Link>
        </div>
      </div>
      <div className='flex w-full items-center px-10 h-24 justify-between focus:outline-none gap-5'>
        <ul className='flex gap-3'>
        <Link to={'/'}>
          <li className='cursor-pointer font-bold'>Shop</li>
        </Link>
          <Link to={'/notdone'}>
            <li className='cursor-pointer font-bold'>Promo</li>
          </Link>
          <Link to={'/notdone'}>
            <li className='cursor-pointer font-bold'>About</li>
          </Link>
          <Link to={'/notdone'}>
            <li className='cursor-pointer font-bold'>Blog</li>
          </Link>
        </ul>

        <div className='w-3/6'>
          <SearchBox bgColor='bg-white' border='border-transparent' />
        </div>

        <div className='flex gap-4'>
          <Link to={'/wishlist'}>
            <span className='relative'>
              <img className='cursor-pointer h-8' src={Heart} alt='wishlist' />
              {wishlist.length > 0 && (
                <span className='absolute bg-[#F86338] text-white rounded-full py-1 px-2 text-xs flex items-center justify-center top-[-15px] right-[-5px] font-bold w-5 h-5'>
                  {wishlist.length}
                </span>
              )}
            </span>
          </Link>
          <Link to={'/cart'}>

            <span className='relative'>
              <img className='cursor-pointer h-8' src={Cart} alt='Cart' />
              {cart.length > 0 && (
                <span className='absolute bg-[#F86338] text-white rounded-full py-1 px-2 text-xs flex items-center justify-center top-[-15px] right-[-5px] font-bold w-5 h-5'>
                  {cart.length}
                </span>
              )}
            </span>
          </Link>

          <Link to={'/notdone'}>
            <img className='cursor-pointer h-8' src={User} alt='User' />
          </Link>
          <Link to={'/notdone'}>
            <img className='cursor-pointer h-8' src={Bell} alt='Notification' />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
