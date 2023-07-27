import React, { useEffect, useState } from 'react'
import { ProductItemInterface } from '../common/types'
import Banner from '../components/Banner'
import Filters from '../components/Filters'
import LoyaltyDealContainer from '../components/LoyaltyDealContainer'
import TrendingContainer from '../components/TrendingContainer'
import RecommendationsContainer from '../components/RecommendationsContainer'
import DiscoverNewContainer from '../components/DiscoverNewContainer'
import { useProducts } from '../context/ProductsContext'
import Loading from '../components/Loading'

const Home = () => {
  // Destructure products from global state
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
      <Banner
        header='Home Shopping, Your Choice!'
        subHeader='Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
      />
      <LoyaltyDealContainer />
  {
    (products.length > 0) ? (
      <>
      <TrendingContainer />
      <RecommendationsContainer />
      <DiscoverNewContainer />
      </>
    ) : (
        <Loading />
    )
  }

    </>
  )
}

export default Home
