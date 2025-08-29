import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Products from '../Components/Products/Products'

const Homepage = () => {
  return (
    <> 
     <div>
       <Navbar/>
       <Hero/> 
        <Products/>

     </div>

    </>

  )
}

export default Homepage