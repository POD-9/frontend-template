import { CartItemInterface } from '../common/types'
import { useProducts } from '../context/ProductsContext'
import { useEffect, useState } from 'react'

// images import
import Trash from '../../public/images/Trash.svg'
import HeartOrange from '../../public/images/HeartOrange.svg'



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
    <div className='flex gap-5 justify-start items-center my-9 '>
      <div className='w-52'>
        <img
          src={image}
          alt=''
          className='w-52 h-52 rounded-lg object-contain'
        />
      </div>
      <div className='flex flex-col justify-start w-full'>
        <h1 className='text-2xl font-extrabold mb-3 overflow-hidden text-ellipsis product-title '>
          {title}
        </h1>
        <div className='flex items-center gap-5'>
          <span className='font-extrabold'>Quantity &nbsp; :</span>
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
        <div className='flex items-center justify-between mt-6'>
          <h1 className='text-[#F86338] font-extrabold text-5xl'>$ {price}</h1>
          <div className='flex gap-3'>
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
