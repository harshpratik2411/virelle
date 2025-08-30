import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Products from '../Components/Products/Products' 
import Display from '../Components/Display/Display'
import MostLoved from '../Components/MostLoved/MostLoved'
import BottomBanner from '../Components/BottomBanner/BottomBanner'
const Homepage = () => {
  return (
    <> 
     <div>
       <Navbar/>
       <Hero/> 
        <Products/>
        <Display/>
        <MostLoved/>
        <BottomBanner/>

     </div>

    </>

  )
}

export default Homepage