import React from 'react';

const CheckoutHeader = ({ checkoutStatus }) => {
    return (
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

    )
}

export default CheckoutHeader;