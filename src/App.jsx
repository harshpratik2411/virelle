import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import './App.css'
import ProductDetail from './Components/Products/ProductsDetail'  
import MostLovedDetail from './Components/MostLoved/MostLovedDetail'
import ScrollToTop from  './ScrollToTop'
import NewArrival from './Pages/NewArrivals/NewArrival'
import About from './Pages/About'
import Contact from './Pages/Contact'

function App() {
  return (
    <BrowserRouter> 
     <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/most-loved/:id" element={<MostLovedDetail />} />
        <Route path="/new-arrivals" element={<NewArrival />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
