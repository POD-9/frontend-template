import PaymentForm from "../components/PaymentForm"
import AddressForm from "../components/AddressForm"
import { useState } from "react"

const Payment = ({ checkoutStatus, setCheckoutStatus }: { checkoutStatus: string, setCheckoutStatus: any }) => {
    const [billingDetails, setBillingDetails] = useState({
        name: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        telephone: "",
        message: "",
      })
      const handleBillingDetails = (e: any) => {
        console.log(e.target.name.value)
        e.preventDefault();
         setBillingDetails({
            ...billingDetails,
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
           if (e.nativeEvent.submitter.name === "next") {
            setCheckoutStatus('Confirmation')
             } else {
            setCheckoutStatus('Delivery')
            }
        }
        const [checked, setChecked] = useState(true)
    return (
      <>
        <PaymentForm />
        {/* check if billing details same as address to deliver to */}
        <div className="flex justify-center items-center">
            <input type="checkbox" name="same-as-delivery" id="same-as-delivery" defaultChecked onChange={() => {setChecked(!checked)} } />
            <label htmlFor="same-as-delivery">Same billing address as delivery address</label>
        </div>
        {checked && <AddressForm onSubmit={handleBillingDetails} default={billingDetails} id={"payment-address-form"} />}
      </>
    )
  }
  
  export default Payment