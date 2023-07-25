import Cart from '../pages/Cart'
import CartTotals from '../components/CartTotals'
import Delivery from '../pages/Delivery'
import Payment from '../pages/Payment'
import { useProducts } from '../context/ProductsContext'
// import custom hook
import { useAdder } from '../context/Hooks'
import { useState } from 'react'

// import images
 
const Checkout = () => {
  const {
    state: { cart },
  } = useProducts()

  // Custom hook created to calculate sub total on cart updated
  const subtotal = useAdder(cart)

  const [checkoutStatus, setCheckoutStatus] = useState('Cart')

  return (
    <>
    <div className="grid grid-cols-3 gap-2">
        <div className={"rounded flex items-center justify-center border-[#F86338] text-black py-3 px-5 border-2 flex gap-2 bg-" + 
            (checkoutStatus === 'Cart' ? ("[#F86338]") : ("[#f74c1d]") )
            + " items-center  sm:mt-0"}>Cart
        </div>
        <div className={"rounded flex items-center justify-center border-[#F86338]  text-black py-3 px-5 border-2 flex gap-2 bg-" + 
            (checkoutStatus === "Delivery" ? ("[#F86338]") : ("[#f74c1d]") )
            + " items-center sm:mt-0"}>Delivery
        </div>
        <div className={"rounded flex items-center justify-center border-[#F86338] text-black py-3 px-5 border-2 flex gap-2 bg-" + 
            (checkoutStatus === "Payment" ? ("[#F86338]") : ("[#f74c1d]") )
            + " items-center sm:mt-0"}>Payment
        </div>
    </div>
    <div className="md:flex md:flex-row">
        <div className="md:w-2/3 w-full">
    { checkoutStatus === 'Cart' ? (
        <Cart />
    ) : checkoutStatus === 'Delivery' ? (
        <Delivery />
    ) : checkoutStatus === 'Payment' ? (
        <>
        <Payment />
        </>
    ) : checkoutStatus === 'Confirmation' ? (
        <></>
    ) : <> </> }
    </div>

        <div className="md:w-1/3 w-full xl:pl-10 md:ml-6 ml-0 p-2 border-2 md:border-transparent rounded-lg border-gray-300">
        <CartTotals />
        </div>
    </div>
    <div className="grid grid-cols-2 gap-2 p-2">
        <button className={"rounded bg-white text-[#F86338] lg:p-5 p-3 w-full hover:bg-[#F86338] hover:text-white border-2 font-extrabold border-[#F86338] border-2 hover:border-transparent text-xl" +
            (checkoutStatus === 'Cart' ? (" invisible") : (""))} 
        onClick={() => {
            switch (checkoutStatus) {
                case 'Delivery':
                    setCheckoutStatus('Cart')
                    break
                case 'Payment':
                    setCheckoutStatus('Delivery')
                    break
                default:
                    break
            }
        }}
                >
                ← Back
        </button>
        <button className='rounded bg-[#F86338] text-white lg:p-5 p-3 w-full hover:bg-white hover:text-[#F86338] border-2
                font-extrabold
                border-transparent hover:border-[#F86338] text-xl' form={checkoutStatus === "Payment" ? ("delivery-form") : ""} onClick={() => {
                    switch (checkoutStatus) {
                        case 'Cart':
                            setCheckoutStatus('Delivery')
                            break
                        case 'Delivery':
                            setCheckoutStatus('Payment')
                            break
                        case 'Payment':
                            setCheckoutStatus('Confirmation')
                            break
                        default:
                            break
                    }
                }}
                >
                {checkoutStatus === 'Payment' ? "Pay" : "Next →"}
        </button>

    </div>
    </>
  )
}

export default Checkout
