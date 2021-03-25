
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
      src={nameList.imgURL02}
      width="100%" 
      height="500px"
      alt="Third slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={nameList.imgURL03}
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