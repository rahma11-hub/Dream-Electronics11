import React from 'react'
import NavBar from './Components/Navbar/NavBar'
import Hero from './Components/Hero/Hero'
import Baner from './Components/Baner/Baner'
import Products from './Components/Products/Products'
import Footer from './Components/Footer/Footer'
import TopProducts from './Components/Products/TopProducts'
import NewProducts from './Components/Products/NewProducts'
import {Route, Routes} from 'react-router-dom'
import Contact from './Components/Contact/Contact'
import PropUp from './Components/Shared/PropUp'

// import {Routes, Route} from 'react-router-dom'
 
const App = () => {
  return (
  //  <>
  //   <div className='overflow-x-hidden'>
  //     {/* <Responsive/> */}
  //   <NavBar/>
    // <Hero/>
    // <TopProducts/>
    // <Products/>
    // <NewProducts/>
    // <Baner/>
    // <Footer/>
  //   </div>
  //  </>
  // )
  <>
  <div>
    <NavBar/>
    <Hero/>
    <Baner/>
    <TopProducts/>
    <Products/>
    <NewProducts/>
    <Contact/>
    <PropUp/>
    {/* <Routes>
      <Route path="/Hero" element={<Hero/>}/> 
      <Route path="/Topproducts" element={<TopProducts/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/baner" element={<Baner/>}/>
      <Route path="/NewProducts" element={<NewProducts/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes> */}
     
    <Footer/>
  </div>
  
    </>
  )
}

export default App;
