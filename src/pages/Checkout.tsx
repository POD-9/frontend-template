import CheckoutHeader from '../components/CheckoutHeader'
import CheckoutContinueButtons from '../components/CheckoutContinueButtons'
import Cart from '../pages/Cart'
import CartTotals from '../components/CartTotals'
import Delivery from '../pages/Delivery'
import DeliveryDetails from '../components/DeliveryDetails'
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
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    telephone: "",
    message: "",
    paymentMethod: "",
    cardNumber: "",
    cardName: "",
    cardExpiry: "",
    cardCVV: "",
  })

  const handleDeliveryDetails = (e: any) => {
    console.log(e.target.name.value)
    e.preventDefault();
     setDeliveryDetails({
        ...deliveryDetails,
        name: e.target.name.value,
        address1: e.target.address1.value,
        address2: e.target.address2.value,
        city: e.target.city.value,
        state: e.target.state.value,
        zip: e.target.zip.value,
        country: e.target.country.value,
        telephone: e.target.telephone.value,
        message: e.target.message.value
         });
       // setTimeout(() => setCheckoutStatus('Payment'), 1000);
       if (e.nativeEvent.submitter.name === "next") {
        setCheckoutStatus('Payment')
         } else {
        setCheckoutStatus('Cart')
        }


         
    }

  return (
    <>
    <CheckoutHeader checkoutStatus={checkoutStatus} />
    <div className="md:flex md:flex-row">
        <div className="md:w-2/3 w-full">
            { checkoutStatus === 'Cart' ? (
                <Cart />
            ) : checkoutStatus === 'Delivery' ? (
                <Delivery onSubmit={handleDeliveryDetails} default={deliveryDetails} />
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
            { checkoutStatus === 'Payment' ? (
            <DeliveryDetails details={deliveryDetails}/>
            ) : <></>}
        </div>
    </div>
    <CheckoutContinueButtons checkoutStatus={checkoutStatus} setCheckoutStatus={setCheckoutStatus} />
    </>
  )
}

export default Checkout
