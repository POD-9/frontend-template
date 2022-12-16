import { CartItemInterface } from '../common/types'
import Banner from '../components/Banner'
import CartItem from '../components/CartItem'
import { useProducts } from '../context/ProductsContext'

// import custom hook
import { useAdder } from '../context/Hooks'

// import images
import EmptyCart from '../../public/images/EmptyCart.svg'


const Cart = () => {
  const {
    state: { cart },
  } = useProducts()

  // Custom hook created to calculate sub total on cart updated
  const subtotal = useAdder(cart)
  
  return (
    <>
      <Banner
        header='Our Gallery, Your Dreams!'
        subHeader='Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
      />
      {
        (cart.length > 0) ?  (
          <div className='p-10'>
          <div className='flex gap-5'>
            <span className='font-extrabold'>1. Shopping Cart</span>
            <span className='font-extrabold'>2. Checkout</span>
            <span className='font-extrabold'>3. Order Succeeded</span>
          </div>
          <h1 className='text-5xl font-extrabold my-9'>My Cart</h1>
          <div className='flex gap-4'>
            <div className='w-1/2'>
              {cart.map((product: CartItemInterface, i) => (
                <CartItem key={i} product={product} />
              ))}
            </div>
            <div className='w-1/2 flex flex-col pl-10'>
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
            </div>
          </div>
        </div>
        ) : (
          <div className="w-full flex justify-center items-center gap-10">
            <h1 className="text-5xl font-extrabold">Your cart is empty</h1>
            <img className="max-h-[500px] py-5" src={EmptyCart} alt="" />

          </div>
        )
      }


    </>
  )
}

export default Cart
