import React, { useState } from 'react'
import SearchBox from './SearchBox'

// import images
import Filter from '../../public/images/Filter.svg'
import Chevron from '../../public/images/Chevron.svg'
import { useProducts } from '../context/ProductsContext'

const Filters = ({ categories }: { categories: string[] }) => {
  // state for price range filter
  const [range, setRange] = useState('5')

  const { filterDispatch } = useProducts()

  return (
    <div className='2xl:w-1/3 lg:w-2/5 2xl:px-5 md:w-1/2 w-full border-2 md:border-transparent border-black-300 p-2 rounded -lg'>
      <SearchBox
        bgColor='bg-transparent'
        border='border-zinc-500 focus:shadow focus:shadow-orange-100'
      />
      <div className='flex flex-col'>
        <div className='flex justify-between items-center w-full mt-5'>
          <h1 className='md:text-2xl text-xl font-extrabold'>Price</h1>
          <img src={Filter} alt='' />
        </div>
        <div className='flex flex-col w-full my-6'>
          <input
            type='range'
            value={range}
            onChange={(e) => {
              setRange(e.target.value)
              filterDispatch({
                type: 'FILTER_BY_PRICE',
                payload: e.target.value,
              })
            }}
            className='w-full h-1 bg-gray-200 rounded- appearance-none cursor-pointer range-sm  mb-3 accent-black'
            min='1'
            max='999'
            step='100'
          />
          <label className='text-sm font-medium text-[#11142D] flex justify-between items-center'>
            <span className='text-base'>Range</span>
            <span className='text-base'>${range}-$1000</span>
          </label>
        </div>

        <h1 className='text-xl md:text-xl font-extrabold mt-6 mb-3 sm:text-left text-center'>
          Product Categories
        </h1>
        {/* {All category button} */}
        <button
          className='flex justify-between items-center my-2 cursor-pointer hover:bg-zinc-300 p-3 rounded-lg'
          onClick={() =>
            filterDispatch({
              type: 'FILTER_BY_CATEGORY',
              payload: '',
            })
          }
        >
          <h4 className='font-extrabold capitalize md:text-lg text-base'>
            All Category
          </h4>
          <img src={Chevron} alt='Chveron right' />
        </button>
        {/* {Caterogry of prodcuts listing} */}
        {categories.map((category: string, i) => {
          return (
            <button
              className='flex justify-between items-center my-2 cursor-pointer hover:bg-slate-200 p-3 rounded-lg'
              key={i}
              onClick={() =>
                filterDispatch({
                  type: 'FILTER_BY_CATEGORY',
                  payload: category,
                })
              }
            >
              <h4 className='font-extrabold capitalize md:text-lg text-base'>
                {category}
              </h4>
              <img src={Chevron} alt='Chveron right' />
            </button>
          )
        })}

        <button
          className='w-full md:py-4 py-2 rounded bg-black text-white font-extrabold text-lg mt-7 border-2 border-transparent hover:bg-gray-800 active:border-black active:bg-transparent active:text-black'
          onClick={() =>
            filterDispatch({
              type: 'CLEAR_ALL-FILTERS',
            })
          }
        >
          Clear Filters
        </button>
      </div>
    </div>
  )
}

export default Filters
