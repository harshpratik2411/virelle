import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Products from '../Components/Products/Products' 
import Display from '../Components/Display/Display'

const Homepage = () => {
  return (
    <> 
     <div>
       <Navbar/>
       <Hero/> 
        <Products/>
        <Display/>

     </div>

    </>

  )
}

export default Homepage