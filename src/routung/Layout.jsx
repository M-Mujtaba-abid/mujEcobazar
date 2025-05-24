import React from 'react'
import Footer from "../footer/Footer"
import CheckoutPage from '../component/CheckoutPage'
import ViewMorePro from '../differentProduct/ViewMorePro'
import AboutUs from '../pages/AboutUs'
import BlogPage from '../pages/BlogPage'
import TopNavbar from '../component/TopNavbar'
import LogoNavbar from '../component/LogoNavbar'
import Navbar  from '../component/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../component/Home'
import ContactUs from '../pages/ContactUs'
import Cart from '../pages/Cart'

const Layout = () => {
  return (
    <div>
         <TopNavbar/>
      <LogoNavbar/>
      <Navbar/>
     
      
      
      <Routes>
 <Route path='/' element={<Home/>} />
        <Route  path='/ContactUs'  element={<ContactUs/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path='/CheckoutPage' element={<CheckoutPage />}/>
        <Route path='/ViewMoreProduct' element={<ViewMorePro/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
        <Route path="/blog" element={<BlogPage />} />
      
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default Layout
