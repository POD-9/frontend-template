import React from 'react'
import { Link } from 'react-router-dom'
import { ProductItemInterface } from '../common/types'
import Rating from './Rating'
import { useProducts } from '../context/ProductsContext'

// import images
import HeartRed from '../../public/images/HeartRed.svg'
import ChevronOrange from '../../public/images/ChevronOrange.svg'

const ProductCard = (props: ProductItemInterface) => {
  // Getting global context
  const {
    state: { wishlist },
    dispatch,
  } = useProducts()

  // destructure product
  const { image, rating, category, title, price, id } = props
  return (
    <div className='h-96 bg-white w-full rounded-md group cursor-pointer p-4 relative shadow-xl'>
      {wishlist.some((product) => product.id === id) ? (
        <button
          className='p-1 bg-[#FFDDD3] absolute top-3 right-3 rounded hover:bg-[#ffeeef]'
          onClick={() =>
            dispatch({
              type: 'REMOVE_FROM_WISHLIST',
              payload: { image, rating, category, title, price, id },
            })
          }
        >
          <span className='text-xs text-[#F86338]'>Remove</span>
        </button>
      ) : (
        <button
          className='p-1 bg-[#FFDDD3] absolute top-3 right-3 rounded hover:bg-[#ffeeef]'
          onClick={() =>
            dispatch({
              type: 'ADD_TO_WISHLIST',
              payload: { image, rating, category, price, id, title },
            })
          }
        >
          <img src={HeartRed} alt='' />
        </button>
      )}

      <Link to={`/products/${id}`}>
        <div className='h-48  mx-auto flex justify-center items-center'>
          <img
            src={image}
            className='h-40 w-40 group-hover:scale-110 transition duration-300 object-contain'
            alt={title}
          />
        </div>
        <div className='flex flex-col items-center mt-2'>
          <h2 className='text-lg font-extrabold text-center overflow-hidden text-ellipsis product-title'>
            {title}
          </h2>
          <Rating rate={rating.rate} count={rating.count} />
          <h4 className='text-center text-[#9A9AB0] capitalize text-sm my-2'>
            {category}
          </h4>
          <h1 className='text-center text-[#F3692E] font-bold text-xl'>
            $ {price}
          </h1>
        </div>
      </Link>
      <span className='flex gap-2 items-center absolute bottom-3 right-3 p-1 border border-[#F3692E] rounded-lg'>
        <span className='font-extrabold'>View item </span>
        <img src={ChevronOrange} alt='view item' />
      </span>
    </div>
  )
}

export default ProductCard
