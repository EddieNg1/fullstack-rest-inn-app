import React,{useState,useEffect} from 'react';
import { useSearchParams } from 'react-router-dom';

import PropertyPageItem from "./PropertyPageItem";


const ResortList = () => {

    const [properties , setProperties] = useState([{
        id:0,
        title:"",
        rentalPrice: 0,
        description:"",
        type:"",
        houseRules:[],
        amenities:[],
        location:"",
        bestSeller:null,
        photoURL : null
      }]);


    const [searchParams, setSearchParams] = useSearchParams();
    let [query, setQuery] = React.useState(searchParams.get("type"))
    var search = '';
    useEffect(()=>{
        if(query !=null){search = `?type=`+query}


        const URL = 'https://powerful-journey-75366.herokuapp.com/properties' + `${search}`
    
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
          
              <h1>All {query!=null ? query+'s' :'Properties'}</h1>
    
              <div className="card-group">
    
              {properties.map(property=>( <PropertyPageItem id={property._id} 
              title={property.title} 
              image={property.photoURL} 
              price={property.rentalPrice} 
              type={property.type} 
              amenities={property.amenities} 
              bestSeller={property.bestSeller}
              location={property.location}/>))}
              
      
              </div>
    
          </div>
    
        </section>
    
      );
};

export default ResortList;
