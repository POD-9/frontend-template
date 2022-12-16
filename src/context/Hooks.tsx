import { useEffect, useReducer, useState } from "react";
import { CartItemInterface } from "../common/types";

export const useAdder = (cart: CartItemInterface[]) => {

    // Hook for calculating the total
    const [subtotal, setSubtotal] = useState(0)

    useEffect(() => {
      setSubtotal(parseFloat(cart.reduce((accumulate, current) => accumulate + current.price * current.quantity,0).toFixed(2)))
    
  
    }, [ cart])

    return subtotal
}

