import React from 'react'
import Banner from '../Components/Banner/Banner'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'


const Shop = () => {
  return (
    <div className = 'Shop'>
      <Banner/>
      <Popular/>
      <Offers/>
      <NewCollections/>
    </div>
  )
}

export default Shop
