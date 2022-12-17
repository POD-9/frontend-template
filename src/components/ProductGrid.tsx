
import {
  ProductGridInterface,
  ProductItemInterface,
} from '../common/types'
import ProductCard from './ProductCard'

// import images
import Empty from '../../public/images/Empty.svg'
import { useProducts } from '../context/ProductsContext'
import { useEffect, useState } from 'react'
import Pagination from './Pagination'

const ProductGrid = ({ products }: ProductGridInterface) => {

  // Global state to check what category filtering by
  const {filterState} = useProducts()


    // state to track pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(5);

    // set current page back to one
    useEffect(() => {
      setCurrentPage(1)
    }, [products])
    
  
      // setting up pagination
      // Get current posts
      const indexOfLastProduct = currentPage * productsPerPage;
      const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
      const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

        // Change page
  const paginate = (pageNumber:number) => setCurrentPage(pageNumber);

  return (
    <div className='flex w-full flex-col'> 
    <h1 className='md:text-2xl text-xl text-center capitalize mb-5 font-extrabold'>{filterState.byCategory || 'All Catagories'}</h1>
    {
      (currentProducts.length > 0) ? (
        <div>

        <div className='grid grid-flow-row lg:grid-cols-2 2xl:grid-cols-3 gap-3 gap-cols-1'>
        {currentProducts.map((product: ProductItemInterface) => {
          return (
  
              <ProductCard
                key={product.id}
                id={product.id}
                category={product.category}
                description={product.description}
                image={product.image}
                price={product.price}
                rating={product.rating}
                title={product.title}
              />
            
          )
        })}
      </div>
              <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
        currentPage={currentPage}
      />
        </div>
      ) : (
        <div className='w-full flex justify-center items-center flex-col'>
          <img src={Empty} alt="No data" className='max-w-[500px]'/>
          <h1 className='text-5xl font-extrabold mt-9'>No data found</h1>
        </div>
      )
    }

    </div>
  )
}

export default ProductGrid
