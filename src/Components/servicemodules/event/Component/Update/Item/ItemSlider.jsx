import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from 'react-bootstrap';

function ItemSlider() {



  return (
    <div>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media-cdn.tripadvisor.com/media/photo-w/1c/72/14/cb/notice-the-moray-coming.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media-cdn.tripadvisor.com/media/photo-w/1c/72/14/ca/fearless-but-respectful.jpg"
      alt="Third slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media-cdn.tripadvisor.com/media/photo-w/1c/72/14/c7/loved-seeing-my-son-experience.jpg"
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
    </div>
  );
}



export default ItemSlider;