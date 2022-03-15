import React, { useState,useEffect } from 'react'
import Header from '../components/Header';
import Footer  from '../components/Footer';
import { useParams } from 'react-router-dom';


const PropertyDescriptionPage = () => {

    const [properties , setProperties] = useState([{
        _id:0,
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

      
    const {id} = useParams()
    console.log(id)
    
    useEffect(()=>{
          

    var URL = `https://powerful-journey-75366.herokuapp.com/properties/`+`${id}`


    fetch(URL)
    .then(response=>response.json())

    .then(json=>{
        setProperties(json.result)
    })
    .catch(err=>console.log(err))
    

   },[])
  return (
    <div >
     
    <Header/>
    <div className="container-fluid">
        <div className="row" style={{marginTop:"30px"}}>
          
        <div className='col-md-12'>
        <h1>{properties.title}</h1> 
        </div>
          <div className='col-md-5'>

            <img  src={properties.photoURL} alt="" style={{
            height: 300}}/>   

            </div>
            <div className='col-md-3'>
                   
                <h3>{properties.location}</h3>
                <p>Type: {properties.type}</p>
                <p>{properties.description}</p>
            </div>
            <div className='col-md-3'>
                <h3>Price: ${properties.rentalPrice}</h3>
                <div >{properties.bestSeller ? 'Bestseller' : ''}</div>
                <p>House Rules: {properties.houseRules}</p>
                <p>Amenities: {properties.amenities}</p>
            </div>
        </div>
        

        
  
    </div>
    <Footer/>

</div>
  )
}

export default PropertyDescriptionPage