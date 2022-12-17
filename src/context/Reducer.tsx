import { CartItemInterface, GlobalStateInterface } from '../common/types'

// initializer function for retreving from localstorage if data is present

// const initialState = {
//   products: products,
//   cart: [],
//   wishlist:[]
// }

export const globalInitializer = (initialValue:GlobalStateInterface) => {
  const cartItems:CartItemInterface[] = JSON.parse(localStorage.getItem('cartItems') || '[]')
  const wishItems: CartItemInterface[] = JSON.parse(localStorage.getItem('wishItems') || '[]')

  return {
    products: initialValue.products,
    cart: cartItems || initialValue.cart,
    wishlist: wishItems || initialValue.wishlist
  }
}

export const productReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_PRODUCTS':
      return { ...state, products: action.payload }
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, { ...action.payload.product, quantity: action.payload.quantity  }],
      }
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cart: state.cart.filter(
            (item: CartItemInterface) => item.id !== action.payload.id
          ),
        }
    case 'ADD_TO_WISHLIST':
      return {
        ...state,
        wishlist: [...state.wishlist, { ...action.payload, quantity: 1 }],
      }
    case 'REMOVE_FROM_WISHLIST':
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (item: CartItemInterface) => item.id !== action.payload.id
        ),
      }

    case 'CHANGE_PRODUCT_QTY':
      return {
        ...state,
        cart: state.cart.filter((product: CartItemInterface) => product.id === action.payload.id ? (product.quantity = action.payload.quantity) : product.quantity)
      }
    default:
      return state
  }
}


export const filterReducer = (state:any, action:any) => {
  switch (action.type) {
    case 'FILTER_BY_CATEGORY':
      return {
        ...state,
        byCategory: action.payload
      }
    case 'FILTER_BY_PRICE':
      return {
        ...state,
        byPrice: action.payload
      }
    case 'FILTER_BY_SEARCH':
      return {
        ...state,
        searchQuery: action.payload
      }
    case 'CLEAR_ALL-FILTERS':
      return {
        byCategory: '',
        byPrice: 0,
        searchQuery: ''
      }
    default: 
      return state
  }
}