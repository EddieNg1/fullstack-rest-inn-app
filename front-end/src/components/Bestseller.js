import React from 'react';
import {useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import PropertyItem from "./PropertyItem";




const Bestseller = () => {
    const [properties , setProperties] = useState([{
        id:0,
        title:"",
        rentalPrice: 0,
        description:"",
        type:"",
        houseRules:[],
        amenities:[],
        location:"",
        Bestseller:null,
        photoURL : null
      }]);

    useEffect(()=>{

        const URL = 'http://localhost:8080/properties?bestSeller=true'
        //MAKE AN AJAX request
    
        fetch(URL)
        .then(response=>response.json())
        .then(json=>{
            setProperties(json.data)
        })
        .catch(err=>console.log(err))
    }, [])

    return (
        <section >
          <div className= "container">
          
              <h1>Bestsellers</h1>
    
              <div className="card-group">
    
              {properties.map(property=>( <PropertyItem id={property._id} title={property.title} image ={property.photoURL} price={property.price} />))}
              
                  
        
                
      
      
              </div>
    
          </div>
    
        </section>
    
      );

};

export default Bestseller;