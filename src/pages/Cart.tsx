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
      {cart.length > 0 ? (
        <div className=' 2xl:p-28 lg:p-14 md:p-10 sm:p-8 p-6'>
          <div className='sm:flex gap-5 hidden '>
            <span className='font-extrabold lg:text-xl text-sm'>1. Shopping Cart</span>
            <span className='font-extrabold lg:text-xl text-sm'>2. Checkout</span>
            <span className='font-extrabold lg:text-xl text-sm'>3. Order Succeeded</span>
          </div>
          <h1 className='xl:text-4xl lg:text-3xl sm:text-2xl text-xl font-extrabold xl:my-9 lg:my-7 sm:my-5 my-3 mt-0 md:text-left text-center'>
            My Cart
          </h1>
          <div className='flex md:gap-4 gap-1 md:flex-row flex-col'>
            <div className='md:w-2/3 w-full '>
              {cart.map((product: CartItemInterface, i) => (
                <CartItem key={i} product={product} />
              ))}
            </div>
            <div className='md:w-1/3 w-full xl:pl-10 md:ml-6 ml-0 p-2 border-2 md:border-transparent rounded-lg border-gray-300'>
              <div className='w-full flex flex-col'>
                <h2 className='text-2xl font-extrabold mb-4'>Cart Totals</h2>
                <div className='flex items-center gap-8 md:my-5 my-1'>
                  <h3 className='font-extrabold '>Subtotal</h3>
                  <span className='font-bold'>${subtotal}</span>
                </div>
                <div className='flex items-center gap-8 md:my-5 my-3'>
                  <h3 className='font-extrabold '>Shipping</h3>
                  <span className='font-bold'>$20</span>
                </div>
                <div className='flex items-center gap-14 md:my-5 my-3'>
                  <h3 className='font-extrabold '>Total</h3>
                  <h3 className='font-extrabold '>
                    ${(subtotal + 20).toFixed(2)}
                  </h3>
                </div>
                <button
                  className='rounded bg-[#F86338] text-white lg:p-5 p-3 md:max-w-[500px] w-full hover:bg-white hover:text-[#F86338] border-2 
              font-extrabold
              border-transparent hover:border-[#F86338] text-xl'
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='w-full flex sm:justify-center sm:items-center sm:flex-row flex-col-reverse gap-10 py-10'>
          <h1 className='xl:text-5xl lg:text-4xl text-2xl font-extrabold text-center'>
            Your cart is empty
          </h1>
          <img
            className='xl:max-h-[500px] lg:max-h-[400px] max-h-[300px] py-5'
            src={EmptyCart}
            alt=''
          />
        </div>
      )}
    </>
  )
}

export default Cart
