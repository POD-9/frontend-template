import { CartItemInterface } from "../common/types"
import { useProducts } from "../context/ProductsContext"

// import images
import EmptyWish from '../../public/images/EmptyWish.svg'
import WishListItem from "../components/WishListItem"
const WishList = () => {
  const {
    state: { wishlist },
  } = useProducts()
  console.log(wishlist)
  return (
    (wishlist.length > 0) ?  (
      <div className='p-10'>
              <h1 className='text-5xl font-extrabold my-9'>My Wish List</h1>
          <div className='flex gap-4'>
            <div className='w-1/2'>
              {wishlist.map((product: CartItemInterface, i) => (
                <WishListItem key={i} product={product} />
              ))}
            </div>
            {/* <div className='w-1/2 flex flex-col pl-10'>
              <h2 className='text-2xl font-extrabold my-4'>Cart Totals</h2>
              <div className='flex items-center gap-8 my-5'>
                <h3 className='font-extrabold '>Subtotal</h3>
                <span className='font-bold'>${subtotal}</span>
              </div>
              <div className='flex items-center gap-8 my-5'>
                <h3 className='font-extrabold '>Shipping</h3>
                <span className='font-bold'>$20</span>
              </div>
              <div className='flex items-center gap-14 my-5'>
                <h3 className='font-extrabold '>Total</h3>
                <h3 className='font-extrabold '>${(subtotal + 20).toFixed(2)}</h3>
              </div>
              <button className="rounded bg-[#F86338] text-white p-5 max-w-[500px] w-full hover:bg-white hover:text-[#F86338] border-2 
              font-extrabold
              border-transparent hover:border-[#F86338]">Checkout</button>
            </div> */}
          </div>
        </div>
    ) : (          <div className="w-full flex justify-center items-center gap-10">
            <h1 className="text-5xl font-extrabold">Your Wish List is Empty</h1>
            <img className="max-h-[500px] py-5" src={EmptyWish} alt="" />

          </div>)
    
  )
}

export default WishList