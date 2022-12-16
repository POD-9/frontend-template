import React, { useState } from 'react'
import SearchBox from './SearchBox'

// import images
import Filter from '../../public/images/Filter.svg'
import Chevron from '../../public/images/Chevron.svg'
import { useProducts } from '../context/ProductsContext'

const Filters = ({ categories }: { categories: string[] }) => {
  // state for price range filter
  const [range, setRange] = useState('5')

  const {

    filterDispatch,
  } = useProducts()

  return (
    <div className='w-80 px-5'>
      <SearchBox
        bgColor='bg-transparent'
        border='border-zinc-500 focus:shadow focus:shadow-orange-100'
      />
      <div className='flex flex-col'>
        <div className='flex justify-between items-center w-full mt-5'>
          <h1 className='text-2xl font-extrabold'>Price</h1>
          <img src={Filter} alt='' />
        </div>
        <div className='flex flex-col w-full my-6'>
          <input
            type='range'
            value={range}
            onChange={(e) => 
              {
                setRange(e.target.value)
                filterDispatch({
              type: 'FILTER_BY_PRICE',
              payload: e.target.value
              })}
          }
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

        <h1 className='text-2xl font-extrabold mt-6 mb-3'>
          Product Categories
        </h1>
        {/* {Caterogry of prodcuts listing} */}
        {categories.map((category: string, i) => {
          return (
            <button
              className='flex justify-between items-center my-2 cursor-pointer hover:bg-slate-200 p-3 rounded-lg'
              key={i}
              onClick={() => filterDispatch({
                type: 'FILTER_BY_CATEGORY',
                payload: category
              })}
            >
              <h4 className='font-extrabold capitalize text-lg'>{category}</h4>
              <img src={Chevron} alt='Chveron right' />
            </button>
          )
        })}

<button
              className='flex justify-between items-center my-2 cursor-pointer hover:bg-slate-200 p-3 rounded-lg'
              
              onClick={() => filterDispatch({
                type: 'FILTER_BY_CATEGORY',
                payload: ''
              })}
            >
              <h4 className='font-extrabold capitalize text-lg'>All Category</h4>
              <img src={Chevron} alt='Chveron right' />
            </button>

        <button className="w-full py-4 rounded bg-black text-white font-extrabold text-lg mt-7 border-2 border-transparent hover:bg-gray-800 active:border-black active:bg-transparent active:text-black" onClick={() => filterDispatch({
          type: 'CLEAR_ALL-FILTERS'
        })}>Clear Filters</button>
      </div>
    </div>
  )
}

export default Filters
