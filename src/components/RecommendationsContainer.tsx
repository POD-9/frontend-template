import { Link } from 'react-router-dom'
import { ProductItemInterface } from '../common/types'
import { useProducts } from '../context/ProductsContext'
import { useEffect, useState } from 'react'
import ProductGrid from './ProductGrid'
import Filters from './Filters'
import Loading from './Loading'

const RecommendationsCard = () => {
  const {
    state: { products },
    filterState: { byCategory, byPrice, searchQuery },
  } = useProducts()

  // filtering data through given filters
  const transformProducts = () => {
    let filteredProducts = products
    if(byCategory) {
      filteredProducts = filteredProducts.filter((product:ProductItemInterface) => (product.category === byCategory))
    }

    if(byPrice) {
      filteredProducts = filteredProducts.filter((product:ProductItemInterface) => (product.price > byPrice))
    }

    if(searchQuery) {
      filteredProducts = filteredProducts.filter((product:ProductItemInterface) => (product.title.toLowerCase().includes(searchQuery.toLowerCase())) )
    }

    return filteredProducts
  }

  // state to track catagories
  const [categories, setCategories] = useState<string[]>([])

  // Extract categories if new api call is done
  useEffect(() => {
    const cat = [...new Set(products.map((item) => item.category))]
    setCategories(cat)
  }, [products])



  return (
    <>
      <div className={"items-stretch flex flex-row w-full  border-[#34aeeb] text-black py-3 px-5 border-2 flex gap-2 bg-[#34aeeb]" + 
            " items-center  sm:mt-0"}>
        <div className="flex justify-end w-2/3">
          <div className={"bg-white text-[#f86338] lg:p-3 p-2 w-full border-2 font-extrabold border-transparent text-l"}>
            <h3 className="text-black text-xl">Things we think you'll love</h3>
          </div>
        </div>
        <div className="flex justify-end w-1/3">
          <button name="viewDeal" className={"bg-[#f86338] text-white lg:p-3 p-2 w-full hover:bg-white hover:text-[#f86338] border-2 font-extrabold border-transparent hover:border-[#f86338] text-l"}>
          <Link to="/notdone"> View more → </Link>
          </button>
        </div>
      </div>
      <div className="bg-[#34aeeb] flex flex-row grid md:grid-cols-6 grid-cols-3 gap-1 justify-center p-2">
        <div className="flex bg-white justify-center">
          Product 1
        </div>
        <div className="flex bg-white justify-center">
          Product 2
        </div>
        <div className="flex bg-white justify-center">
          Product 3
        </div>
        <div className="flex bg-white justify-center">
          Product 4
        </div>
        <div className="flex bg-white justify-center">
          Product 5
        </div>
        <div className="flex bg-white justify-center">
          Product 6
        </div>
      </div>
      {
    (products.length > 0) ? (
      <>
        <ProductGrid products={transformProducts()} />
      </>
    ) : (
        <Loading />
    )
  }
    </>
  )
}

export default RecommendationsCard
