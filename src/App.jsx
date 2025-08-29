import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import './App.css'
import ProductDetail from './Components/Products/ProductsDetail'  
import MostLovedDetail from './Components/MostLoved/MostLovedDetail'
import ScrollToTop from  './ScrollToTop'

function App() {
  return (
    <BrowserRouter> 
     <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/most-loved/:id" element={<MostLovedDetail />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
