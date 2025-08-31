import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import './App.css'
import ProductDetail from './Components/Products/ProductsDetail'  
import MostLovedDetail from './Components/MostLoved/MostLovedDetail'
import ScrollToTop from  './ScrollToTop'
import NewArrival from './Pages/NewArrivals/NewArrival'
import About from './Pages/About'
import Contact from './Pages/Contact'
import { CartProvider } from './CartContext/CartContext' 
import Cart from './Pages/Cart'

function App() {
  return (
    <BrowserRouter>  
     <CartProvider>
     <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/most-loved/:id" element={<MostLovedDetail />} />
        <Route path="/new-arrivals" element={<NewArrival />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes> 
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
