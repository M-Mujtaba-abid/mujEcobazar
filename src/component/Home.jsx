import React from 'react'
import BannerPage from './BannerPage'
import PopularCategories from './PopularCategories'
import ThreCards from '../differentProduct/ThreCards'
import HotDeals from '../differentProduct/HotDeals'
import FeatureProductBanner from '../differentProduct/FeatureProductBanner'
import Instagram from '../differentProduct/Instagram'
import ClientTestominals from '../differentProduct/ClientTestominals'
import PopularProduct from '../differentProduct/PopularProduct'

const Home = () => {
  return (
    <div>
       <BannerPage/>
      <PopularCategories/>
      <PopularProduct/>
      <ThreCards/>
      <HotDeals/>
      <FeatureProductBanner/>
      <ClientTestominals/>
      <Instagram/>
    </div>
  )
}

export default Home
