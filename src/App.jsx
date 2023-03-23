//import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Product from './pages/product/Product'
/*import Services from './pages/services/Services'*/
import Shop from'./pages/shop/Shop'
import Contact from './pages/contact/Contact'
import NotFound from './pages/notfound/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='product' element={<Product/>}></Route>
        {/* <Route path='services' element={<Services/>}></Route> */}
        <Route path='shop' element={<Shop/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
  </BrowserRouter>
  )
}

export default App