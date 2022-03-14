import React from 'react';
import { Link } from 'react-router-dom';

const PropertyPageItem = ({id,title,image,price,location,bestSeller,type}) => {
    

    return  (
  
        <div className="container">
        <div className="row" style={{marginTop:"30px"}}>
          
          <div className='col-md-4'>
          <Link to = {`/properties/${id}`}> 
            <img className="card-img-top" src={image} alt="" style={{
            height: 200}}/>   
           </Link>
            </div>
            <div className='col-md-4'>
                <h2>{title}</h2>    
                <p>{location}</p>
                <p>Type: {type}</p>
            </div>
            <div className='col-md-4'>
                <h3>Price: ${price}</h3>

                <Link style={{marginBottom:"30px"}} to = {`/properties/${id}`} className="btn btn-success" >
                More Info 
                </Link> 
                <div >{bestSeller ? 'Bestseller' : ''}</div>
            </div>
        </div>
        

        
  
    </div>
  
    );
  };
  
  export default PropertyPageItem;