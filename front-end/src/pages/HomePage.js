import React,{useEffect} from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Bestseller from '../components/Bestseller';
import PropertyTypeList from '../components/PropertyTypeList';

const HomePage = () => {


    return (
      <div>
  
          <Header/>
          <main>
            <Hero/>
            <PropertyTypeList />
            <Bestseller/>
          </main>
          <Footer/>
  
      </div>
    )
  }
  
  export default HomePage