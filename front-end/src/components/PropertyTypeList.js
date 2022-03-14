
import React from 'react';
import {useState,useEffect} from 'react';
// import {Link} from "react-router-dom";
import TypeItem from './TypeItem';





const PropertyTypeList = () => {
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
      

    var types = [];

    useEffect(()=>{

        const URL = 'https://powerful-journey-75366.herokuapp.com/properties/types'
    
        fetch(URL)
        .then(response=>response.json())
        .then(json=>{
            setProperties(json.data)
        })
        
        .catch(err=>console.log(err))

    }, [])



    return (
        <section >
          <div className= "container" style={{marginTop:"30px"}}>
          
              <h1>Property Types</h1>
    
              <div className="card-group">
    
              
              {properties.map(property=>( <TypeItem id={property._id} title={property.title} image ={property.photoURL} type={property.type} />))}
                  
        
                
      
      
              </div>
    
          </div>
    
        </section>
    
      );

};

export default PropertyTypeList;