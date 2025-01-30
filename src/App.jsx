import React from 'react'
import LogoNavbar from './component/LogoNavbar'
import TopNavbar from './component/TopNavbar'
import Navbar from './component/Navbar'
import BannerPage from './component/BannerPage'
import PopularCategories from './component/PopularCategories'
import PopularProduct from './differentProduct/PopularProduct'
import ThreCards from './differentProduct/ThreCards'
import HotDeals from './differentProduct/HotDeals'
import FeatureProductBanner from './differentProduct/FeatureProductBanner'
import ClientTestominals from './differentProduct/ClientTestominals'
import Instagram from './differentProduct/Instagram'
import { Route, Routes } from 'react-router-dom'
import ContactUs from './pages/ContactUs'
import Cart from './pages/Cart'
import Home from './component/Home'
import Footer from "./footer/Footer"
import CheckoutPage from './component/CheckoutPage'
import ViewMorePro from './differentProduct/ViewMorePro'
import AboutUs from './pages/AboutUs'
const App = () => {
  return (
    <div>
      <TopNavbar/>
      <LogoNavbar/>
      <Navbar/>
       {/* <Home/> */}
      
      {/* <h1>hy</h1> */}
      <Routes>
 <Route path='/' element={<Home/>} />
        <Route  path='/ContactUs'  element={<ContactUs/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path='/CheckoutPage' element={<CheckoutPage />}/>
        <Route path='/ViewMoreProduct' element={<ViewMorePro/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
      
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App
