import React,{useEffect} from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const HomePage = () => {


    return (
      <div>
  
          <Header/>
          <main>
            <Hero/>
            
            {/* <ResortList /> */}
          </main>
          <Footer/>
  
      </div>
    )
  }
  
  export default HomePage