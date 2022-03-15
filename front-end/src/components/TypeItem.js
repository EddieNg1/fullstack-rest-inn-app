import React from 'react';
import { Link } from 'react-router-dom';

const TypeItem = ({id,title,image,type}) => {
    return  (
  
      <div className="card">
  
        <Link to = {`/properties?type=${type}`}> 
            <img className="card-img-top" src={image} alt="" style={{
            height: 200}}/>   
        </Link> 
  
        <div className="card-body">
            <h3 className="card-title" style={{marginBottom:"100px"}}>{type}</h3>
            <div style={{position:"absolute", bottom:"0", marginBottom:"20px"}}>
            <Link to = {`/properties?type=${type}`} className="btn btn-primary">
            More  
          </Link> 
        </div>
        </div>

        
  
    </div>
  
    );
  };
  
  export default TypeItem;