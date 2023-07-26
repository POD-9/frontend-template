
const CheckoutContinueButtons = ({ checkoutStatus, setCheckoutStatus }: { checkoutStatus: string, setCheckoutStatus: any}) => {
    return (
        <div className="grid grid-cols-2 gap-2 p-2">
        <button className={"rounded bg-white text-[#F86338] lg:p-5 p-3 w-full hover:bg-[#F86338] hover:text-white border-2 font-extrabold border-[#F86338] border-2 hover:border-transparent text-xl" +
            (checkoutStatus === 'Cart' ? (" invisible") : (checkoutStatus === 'Delivery' ? (" hidden") : ("")))} 
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
        <button className={"rounded bg-[#F86338] text-white lg:p-5 p-3 w-full hover:bg-white hover:text-[#F86338] border-2 font-extrabold border-transparent hover:border-[#F86338] text-xl" + 
            (checkoutStatus === "Delivery" ? (" hidden") : (""))} onClick={() => {
                    switch (checkoutStatus) {
                        case 'Cart':
                            setCheckoutStatus('Delivery')
                            break
                        default:
                            break
                    }
                }}
                >
                {checkoutStatus === 'Payment' ? "Pay" : "Next →"}
        </button>
        <button name="back" className={"rounded bg-white text-[#F86338] lg:p-5 p-3 w-full hover:bg-[#F86338] hover:text-white border-2 font-extrabold border-[#F86338] border-2 hover:border-transparent text-xl" + 
            (checkoutStatus !== "Delivery" ? (" hidden") : (""))}
        type="submit" form="delivery-form"
        >
                ← Back
        </button>
        <button name="next" className={"rounded bg-[#F86338] text-white lg:p-5 p-3 w-full hover:bg-white hover:text-[#F86338] border-2 font-extrabold border-transparent hover:border-[#F86338] text-xl" + 
            (checkoutStatus !== "Delivery" ? (" hidden") : (""))}
        type="submit" form="delivery-form"
        >
                Next →
        </button>
        </div>
    )
}
export default CheckoutContinueButtons;