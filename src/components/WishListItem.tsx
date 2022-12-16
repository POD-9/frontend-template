import { CartItemInterface } from "../common/types"
import { useProducts } from "../context/ProductsContext"

// images import
import Trash from '../../public/images/Trash.svg'
import Cart from '../../public/images/Cart.svg'
const WishListItem = ({ product }: { product: CartItemInterface }) => {
  const { image, price, title, quantity, id } = product

  // getting global state
  const {
    dispatch,
  } = useProducts()
  return (
    <div className='flex gap-5 justify-start items-center my-9 '>
      <div className='w-44'>
        <img
          src={image}
          alt=''
          className='w-44 h-52 rounded-lg object-contain'
        />
      </div>
      <div className='flex flex-col justify-start w-full px-3'>
        <h1 className='text-xl font-extrabold mb-3 overflow-hidden text-ellipsis product-title '>
          {title}
        </h1>

        <div className='flex items-center justify-between mt-6'>
          <h1 className='text-[#F86338] font-extrabold text-3xl'>$ {price}</h1>
          <div className='flex gap-3'>
            <button
              className='border-2 border-[#F86338] px-3 py-2 text-[#F86338] rounded-xl hover:bg-slate-200'
              onClick={() =>
                dispatch({
                  type: 'REMOVE_FROM_WISHLIST',
                  payload: { image, price, title, quantity, id }
                })
              }
            >
              <img src={Trash} alt='remove' />
            </button>
            <button className='border-2 border-black rounded-xl px-3 py-2 text-black flex gap-1 hover:bg-slate-200 items-center'
            onClick={() => {
              dispatch({
                type: 'ADD_TO_CART',
                payload: {product:product,
                  quantity: 1}
              })
              dispatch({
                type: 'REMOVE_FROM_WISHLIST',
                payload: { image, price, title, quantity, id }
              })
            }
              
            }
            >
              <span className="text-lg font-extrabold">
              Add to Cart
              </span>
               <img src={Cart} alt='Add to cart' />
            </button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default WishListItem