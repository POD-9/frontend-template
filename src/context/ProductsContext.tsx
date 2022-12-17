import { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { CartItemInterface, GlobalStateInterface, ProductItemInterface, ProductProviderProps, ShoppingContextInterface } from '../common/types';
// import reducer
import { filterReducer, globalInitializer, productReducer } from './Reducer';

// create a context for all products
const ProductContext = createContext({} as ShoppingContextInterface);


const ProductProvider = ({children} : ProductProviderProps) => {
  // product state with all products
  const [products, setProducts] = useState<ProductItemInterface[]>([])
  // fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      const resp = await fetch('https://fakestoreapi.com/products')
      const data = await resp.json()
      
      if(data)
        setProducts(data)
        dispatch({type:'ADD_PRODUCTS', payload: data})
    }

    fetchProducts()
  
    return () => {
      // Abort controller for failed fetch
      // Write later
    }
  }, [])


  // Create a reducer and intialise with empty cart and list of all the products
  const [state, dispatch] = useReducer(productReducer, {
    products: products,
    cart: new Array<CartItemInterface>(),
    wishlist:new Array<CartItemInterface>()
  }, globalInitializer)

  // Use effect to track and save cart and wishlist data to local storage
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(state.cart))
    localStorage.setItem('wishItems', JSON.stringify(state.wishlist))
  }, [state.cart, state.wishlist])
  


  // Reducer to filter by parameters

  const [filterState, filterDispatch] = useReducer(filterReducer,{
    byCategory: '',
    byPrice: 0,
    searchQuery: ''
  })
  
  return (
    <ProductContext.Provider value={{state, dispatch, filterState, filterDispatch}}>{children}</ProductContext.Provider>
  )
}

// getter function for context
 function useProducts() {
  const context = useContext(ProductContext)
  
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductsProvider')
  }
  return context
}

export {useProducts, ProductProvider}