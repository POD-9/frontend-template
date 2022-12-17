import { Dispatch, ReactNode } from "react"

// type for children prop
export interface ProductProviderProps  {
  children: ReactNode
}
export interface ReactChildrenInterface {
  children: ReactNode
}

// /shopping Context Interface
export interface ShoppingContextInterface  {
  state: GlobalStateInterface,
  filterState: FilterStateInterface,
  dispatch: Dispatch<any>,
  filterDispatch: Dispatch<any>
}

export interface GlobalStateInterface {
  products:ProductItemInterface[], 
  cart: CartItemInterface[] ,
  wishlist: CartItemInterface[]
}

export interface FilterStateInterface {
  byCategory : string,
  byPrice: number,
  searchQuery: string
}

export interface CartItemInterface {
  image: string,
  price: number,
  title:string,
  quantity: number,
  id:number
}

// type for products  context
export interface ProductsInterface  {
  products: ProductItemInterface[]
}

export interface BannerInterface {
  header: string,
  subHeader: string
}

// product modal 
export interface ProductItemInterface  {
  id: number,
  category: string,
  description: string,
  image: string,
  price: number,
  title:string
  rating: RatingInterface,
}

// Product Grid Interface
export interface ProductGridInterface {
  products: ProductItemInterface[]
}

// rating modal
export interface RatingInterface {
    rate: number,
    count: number,
    size?: string
}