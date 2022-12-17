import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductItemInterface } from '../common/types'
import Loading from '../components/Loading'
import Rating from '../components/Rating'

import { useProducts } from '../context/ProductsContext'

// import images
import HeartOrange from '../../public/images/HeartOrange.svg'
import ShoppingOrange from '../../public/images/ShoppingOrange.svg'

const ProductDetail = () => {
  // Take ID from route parameter
  let { productid } = useParams()

  // State for  setting product and destructure
  const [product, setProduct] = useState({} as ProductItemInterface)
  const { image, rating, category, title, price, description, id } = product

  // state to track input change
  const [qty, setQty] = useState(1)

  // Getting global context
  const {
    state: { cart, wishlist },
    dispatch,
  } = useProducts()

  // Calling api to fetch product by id
  useEffect(() => {
    const fetchProduct = async () => {
      const resp = await fetch(`https://fakestoreapi.com/products/${productid}`)
      const data = await resp.json()

      if (data) setProduct(data)
    }

    fetchProduct()

    return () => {
      // Write abort controller
    }
  }, [id])

  return (
    <>
      {Object.keys(product).length > 0 ? (
        <div className='sm:p-10 p-5 relative z-10 '>
          <div className='max-w-7xl m-auto'>
            <h1 className='md:text-2xl sm:text-xl  font-extrabold capitalize md:my-5 my-2'>
              {category}
            </h1>

            <div className='flex w-full md:justify-between md:flex-row flex-col  items-center'>
              <div className='w-3/6'>
                <img
                  className='xl:max-h-[500px] lg:max-h-[450px] md:max-h-[400px] sm:max-h-[300px] max-h-[200px] m-auto object-contain'
                  src={image}
                  alt={title}
                />
              </div>
              <div className='flex flex-col w-full md:w-3/6 mt-5 md:mt-0'>
                <h1 className='font-extrabold overflow-hidden text-ellipsis text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl  lg:text-4xl product-title sm:product-title-full'>
                  {title}
                </h1>
                <div className='sm:my-5 my-2'>
                  <Rating
                    rate={rating.rate}
                    count={rating.count}
                    size='lg:h-7 h-5'
                  />
                </div>

                <h1 className='text-left text-[#F3692E] font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-6xl sm:my-5 my-2'>
                  ${price}
                </h1>

                <h4 className='text-2xl font-extrabold'>Product Details</h4>
                <p className='text-[#666666] '>{description}</p>

                <div className='flex justify-between items-center my-3'>
                  <h4 className='font-extrabold'>Quantity</h4>

                  <div className='custom-number-input h-10 w-32'>
                    <div className='flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1'>
                      <button
                        data-action='decrement'
                        className=' bg-white text-gray-600 hover:text-gray-700 hover:bg-gray-300 h-full w-20 rounded-l cursor-pointer outline-none disabled:opacity-30'
                        disabled={qty <= 1}
                        onClick={() => setQty((prev) => prev - 1)}
                      >
                        <span className='m-auto text-2xl font-thin'>−</span>
                      </button>
                      <div
                        className='text-center w-full bg-white font-semibold text-md  flex items-center text-gray-700  outline-none
                      justify-center
                      '
                      >
                        {qty}
                      </div>
                      <button
                        data-action='increment'
                        className='bg-white text-gray-600 hover:text-gray-700 hover:bg-gray-300 h-full w-20 rounded-r cursor-pointer'
                        onClick={() => setQty((prev) => prev + 1)}
                      >
                        <span className='m-auto text-2xl font-thin'>+</span>
                      </button>
                    </div>
                  </div>

                  <h4 className='font-extrabold text-[#F3692E] hidden sm:block'>Add Note</h4>
                </div>

                <div className='flex justify-between items-center my-3'>
                  <h4 className='font-extrabold'>Subtotal</h4>
                  <h4 className='font-extrabold'>
                    ${(qty * price).toFixed(2)}
                  </h4>
                </div>

                <div className='flex items-center justify-center gap-5 flex-wrap sm:flex-row flex-row mt-5'>
                  {wishlist.some((product) => product.id === id) ? (
                    <button
                      className='rounded border-[#F86338] text-[#F86338] py-3 px-5 border-2 flex gap-2 items-center hover:bg-zinc-200'
                      onClick={() =>
                        dispatch({
                          type: 'REMOVE_FROM_WISHLIST',
                          payload: product,
                        })
                      }
                    >
                      <span>Remove from wishlist</span>
                      <img src={HeartOrange} alt='wishlist' />
                    </button>
                  ) : (
                    <button
                      className='rounded border-[#F86338] text-[#F86338] py-3 px-5 border-2 flex gap-2 items-center hover:bg-zinc-200'
                      onClick={() =>
                        dispatch({
                          type: 'ADD_TO_WISHLIST',
                          payload: product,
                        })
                      }
                    >
                      <span>Wishlist</span>
                      <img src={HeartOrange} alt='wishlist' />
                    </button>
                  )}

                  {cart.some((product) => product.id === id) ? (
                    <button
                      className='rounded border-transparent text-white py-3 px-5 border-2 flex gap-2 
                    bg-[#F86338] items-center hover:bg-[#f74c1d]  sm:mt-0'
                      onClick={() =>
                        dispatch({
                          type: 'REMOVE_FROM_CART',
                          payload: product,
                        })
                      }
                    >
                      <span>Remove from Cart</span>
                      <img src={ShoppingOrange} alt='Remove from cart' />
                    </button>
                  ) : (
                    <button
                      className='rounded border-transparent text-white py-3 px-5 border-2 flex gap-2 
                    bg-[#F86338] items-center hover:bg-[#f74c1d]  sm:mt-0'
                      onClick={() =>
                        dispatch({
                          type: 'ADD_TO_CART',
                          payload: { product: product, quantity: qty },
                        })
                      }
                    >
                      <span>Add to Cart</span>
                      <img src={ShoppingOrange} alt='Add to cart' />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute content-[''] top-0 left-0 w-full h-1/2 bg-white dual-bg"></div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default ProductDetail
