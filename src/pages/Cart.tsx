import { CartItemInterface } from '../common/types'
import Banner from '../components/Banner'
import CartItem from '../components/CartItem'
import { useProducts } from '../context/ProductsContext'
import CartTotals from '../components/CartTotals'
// import custom hook
import { useAdder } from '../context/Hooks'

// import images
import EmptyCart from '/images/EmptyCart.svg'

const Cart = () => {
  const {
    state: { cart },
  } = useProducts()

  // Custom hook created to calculate sub total on cart updated
  const subtotal = useAdder(cart)

  return (
    <>
      {cart.length > 0 ? (
        <div className='p-6'>
          <h1 className='xl:text-4xl lg:text-3xl sm:text-2xl text-xl font-extrabold xl:my-9 lg:my-7 sm:my-5 my-3 mt-0 md:text-left text-center'>
            My Cart
          </h1>
          <div className='flex md:gap-4 gap-1 md:flex-row flex-col'>
            <div className='md:w-full w-full '>
              {cart.map((product: CartItemInterface, i) => (
                <CartItem key={i} product={product} />
              ))}
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
