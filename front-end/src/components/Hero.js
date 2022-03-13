import React from 'react';
import {useState,useEffect} from "react";
import Carousel from 'react-bootstrap/Carousel'


const Hero = () => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel className="container" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://a0.muscache.com/im/pictures/miso/Hosting-54326804/original/8297204d-cb91-4c54-8536-debc4ea66379.png"
            style={{height:"80vh"}}
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://a0.muscache.com/im/pictures/miso/Hosting-54326804/original/49f0b9c4-d1c6-42c6-99c0-16a8f82c22e8.png"
            style={{height:"80vh"}}
          />
  
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-100"
            src="https://a0.muscache.com/im/pictures/e4b86662-1ebc-42c9-ae9e-06e2df31fcee.jpg"
            style={{height:"80vh"}}
          />
  
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    );
  }
  

export default Hero;