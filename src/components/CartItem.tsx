import { CartItemInterface } from '../common/types'
import { useProducts } from '../context/ProductsContext'
import { useEffect, useState } from 'react'

// images import
import Trash from '/images/Trash.svg'
import HeartOrange from '/images/HeartOrange.svg'



const CartItem = ({ product }: { product: CartItemInterface }) => {
  const { image, price, title, quantity, id } = product

  // getting global state
  const {
    dispatch,
  } = useProducts()


  // state to track input change
  const [qty, setQty] = useState(quantity)

  // dispatching quanity change
  useEffect(() => {
    if(qty > 0) {
      dispatch({
        type: 'CHANGE_PRODUCT_QTY',
        payload: {
          id: id,
          quantity: qty
        }
      })
    }

  }, [qty])
  
  return (
    <div className='flex sm:gap-5 gap-2 justify-start items-center md:mb-8 mb-2 lg:max-w-[750px] sm:max-w-[650px] border-2 border-gray-300 rounded-lg p-3'>
      <div className='w-52'>
        <img
          src={image}
          alt=''
          className='sm:w-44 w-32 h-32 sm:h-52 rounded-lg object-contain'
        />
      </div>
      <div className='flex flex-col justify-end w-full'>
        <h1 className='text-xl xl:text-2xl font-extrabold mb-3 overflow-hidden text-ellipsis product-title text-left'>
          {title}
        </h1>
        <div className='flex items-center gap-5 '>
          <span className='font-extrabold hidden sm:inline-block'>Quantity &nbsp; :</span>
          <div className='custom-number-input h-10 w-32'>
            <div className='flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1'>
              <button
                data-action='decrement'
                className=' bg-white text-gray-600 hover:text-gray-700 hover:bg-gray-300 h-full w-20 rounded-l cursor-pointer outline-none disabled:opacity-30'
                disabled={qty <= 1}
                onClick={() => setQty(prev => (prev - 1))}
              >
                <span className='m-auto text-2xl font-thin'>−</span>
              </button>
              <div
                      
                      className='text-center w-full bg-white font-semibold text-md  flex items-center text-gray-700  outline-none
                      justify-center
                      '
                      
                    >{qty}</div>
              <button
                data-action='increment'
                className='bg-white text-gray-600 hover:text-gray-700 hover:bg-gray-300 h-full w-20 rounded-r cursor-pointer'
                onClick={() => setQty(prev => prev + 1)}
              >
                <span className='m-auto text-2xl font-thin'>+</span>
              </button>
            </div>
          </div>
        </div>
        <div className='flex lg:items-center justify-between mt-6 lg:flex-row flex-col items-start'>
          <h1 className='text-[#F86338] font-extrabold xl:text-4xl lg:text-3xl sm:text-2xl text-xl'>$ {price}</h1>
          <div className='flex gap-3 lg:mt-0 mt-3'>
            <button
              className='border-2 border-[#F86338] px-3 py-2 text-[#F86338] rounded-xl hover:bg-slate-200'
              onClick={() =>
                dispatch({
                  type: 'REMOVE_FROM_CART',
                  payload: product,
                })
              }
            >
              <img src={Trash} alt='remove' />
            </button>
            <button className='border-2 border-[#F86338] rounded-xl px-3 py-2 text-[#F86338] flex gap-1 hover:bg-slate-200'
            onClick={() =>
              dispatch({
                type: 'ADD_TO_WISHLIST',
                payload: product,
              })
            }
            >
              Wishlist <img src={HeartOrange} alt='wishlist' />
            </button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default CartItem
