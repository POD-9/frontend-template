
import { useProducts } from '../context/ProductsContext'
// import custom hook
import { useAdder } from '../context/Hooks'

// import images

const CartTotals = () => {
  const {
    state: { cart },
  } = useProducts()

  // Custom hook created to calculate sub total on cart updated
  const subtotal = useAdder(cart)

  return (
            <div className='md:w-full w-full xl:pl-10 md:ml-6 ml-0 p-2 border-2 md:border-transparent rounded-lg border-gray-300'>
              <div className='w-full flex flex-col'>
                <h2 className='text-2xl font-extrabold mb-4'>Cart Totals</h2>
                <div className='flex items-center grid grid-cols-2 gap-3'>
                  <h3 className='font-extrabold '>Subtotal</h3>
                  <span className='font-bold'>£{subtotal.toFixed(2)}</span>
                </div>
                <div className='flex items-center grid grid-cols-2 gap-3'>
                  <h3 className='font-extrabold '>Shipping</h3>
                  <span className='font-bold'>£20.00</span>
                </div>
                <div className='flex items-center grid grid-cols-2 gap-3'>
                  <h3 className='font-extrabold '>VAT</h3>
                  <span className='font-bold'>£20.00</span>
                </div>
                <div className='flex items-center grid grid-cols-2 gap-3'>
                  <h3 className='font-extrabold '>Total</h3>
                  <h3 className='font-extrabold '>
                    £{(subtotal + 20 + 20).toFixed(2)}
                  </h3>
                </div>
            </div>
            </div>
  )
}

export default CartTotals
