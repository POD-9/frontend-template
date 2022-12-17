import { CartItemInterface } from '../common/types'
import { useProducts } from '../context/ProductsContext'

// import images
import EmptyWish from '../../public/images/EmptyWish.svg'
import WishListItem from '../components/WishListItem'
const WishList = () => {
  const {
    state: { wishlist },
  } = useProducts()
  console.log(wishlist)
  return wishlist.length > 0 ? (
    <div className='sm:p-5 p-3 bg-white'>
      <h1 className='xl:text-4xl lg:text-3xl sm:text-2xl text-xl font-extrabold xl:my-7 lg:my-5 sm:my-3 my-2 mt-0 md:text-left text-center'>My Wish List</h1>
      <div className='flex gap-4'>
        <div className='w-full grid grid-flow-row lg:grid-cols-2 gap-3 '>
          {wishlist.map((product: CartItemInterface, i) => (
            <WishListItem key={i} product={product} />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className='w-full flex sm:justify-center sm:items-center sm:flex-row flex-col-reverse gap-10 py-10'>
      <h1 className='xl:text-5xl lg:text-4xl text-2xl font-extrabold text-center'>Your Wish List is Empty</h1>
      <img className='xl:max-h-[500px] lg:max-h-[400px] max-h-[300px] py-5' src={EmptyWish} alt='' />
    </div>
  )
}

export default WishList
