import React from 'react';
import { Link } from 'react-router-dom';

const ResortItem = ({id,title,image,price}) => {
    return  (
  
      <div className="card">
  
        <Link to = {`/properties/${id}`}> 
            <img className="card-img-top" src={image} alt=""/>   
        </Link> 
  
        <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">${price} per night</p>
        </div>
  
    </div>
  
    );
  };
  
  export default ResortItem;