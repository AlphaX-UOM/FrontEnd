
import { Link } from "react-router-dom";
import { Carousel } from 'react-bootstrap';
import React, { useState, useEffect } from "react";
function ItemSlider(props) {
  const [nameList, setNameList] = useState([]);


  useEffect(() => {
      fetch(
          'https://alphax-api.azurewebsites.net/api/eventplannerservices/' +
          props.userid
      )
          .then((res) => res.json())
          .then((data) => {
              setNameList(data);
          });
  }, []);



  return (
    <div>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={nameList.imgURL}
      width="100%" 
      height="500px"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media-cdn.tripadvisor.com/media/photo-w/1c/72/14/ca/fearless-but-respectful.jpg"
      width="100%" 
      height="500px"
      alt="Third slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media-cdn.tripadvisor.com/media/photo-w/1c/72/14/c7/loved-seeing-my-son-experience.jpg"
      width="100%" 
      height="500px"
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
    </div>
  );
}



export default ItemSlider;