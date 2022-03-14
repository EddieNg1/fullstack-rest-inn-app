import React, {useEffect} from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import PropertyList from "../components/PropertyList";

const PropertyListingPage = () => {

  return (
    <div >

    <Header/>
    <main>
      <PropertyList />
    </main>
    <Footer/>

</div>
  )
}

export default PropertyListingPage