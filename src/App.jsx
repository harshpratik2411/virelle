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
import Success from './Pages/Success'
import Womens from './Pages/Womens/Womens'
import Mens from './Pages/Mens/Mens'
import CollectionDetails from './Pages/Collections/CollectionDetails'
import Collections from './Pages/Collections/Collections'

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
        <Route path="/success" element={<Success />} />
        <Route path="/women" element={<Womens />} />
        <Route path="/men" element={<Mens />} />
       <Route path="/collections" element={<Collections />} />
     <Route path="/collections/:id" element={<CollectionDetails />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes> 
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
