import { useEffect, useReducer, useState } from 'react'
import { CartItemInterface } from '../common/types'

// Hook for calculating the total of all the items
export const useAdder = (cart: CartItemInterface[]) => {
  const [subtotal, setSubtotal] = useState(0)

  useEffect(() => {
    setSubtotal(
      parseFloat(
        cart
          .reduce(
            (accumulate, current) =>
              accumulate + current.price * current.quantity,
            0
          )
          .toFixed(2)
      )
    )
  }, [cart])

  return subtotal
}

// Custom hook for getting users geolocation to display on header

export const useGeoLocation = () => {
  const [locationData, setLocationData] = useState<any>(null)

  useEffect(() => {
    const fetchGeo = async () => {
      const response = await fetch('https://ipapi.co/json')
      const jsonData = await response.json()
      if(jsonData)
        setLocationData(jsonData)
    }
  
    fetchGeo();
  }, [])

  return {locationData}
  
}