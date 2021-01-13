import { Container } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import CategoryItem from './CategoryItem';
import { Row } from 'react-bootstrap';
import { CardDeck } from 'reactstrap';

function CategoryList() {

  let Categories = [
    {
      id:1,
      type:"Boat Safari",
      name:'Boat Safaries',
      img: 'https://media-cdn.tripadvisor.com/media/photo-s/15/07/00/e3/madu-river-boat-safari.jpg',
      link: 'path'
    },
    {
      id:2,
      type:"Beach Party",
      name:'Beach Parties',
      img: 'https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2018/05/miami1.jpg',
      link: 'path'
    },
    {
      id:3,
      type:"Camping",
      name:'Nature and Parks',
      img: 'https://www.touropia.com/gfx/d/best-places-to-visit-in-sri-lanka/yala_national_park.jpg?v=1',
      link: 'path'
    },
    {
      id:4,
      type:"Pilgrims Tour",
      name:'Pilgrims Tours',
      img: 'https://s3.india.com/wp-content/uploads/2018/08/Dambulla-photo-1.jpg',
      link: 'path'
    },
    {
      id:5,
      type:"Pilgrims Tour",
      name:'Museums',
      img: 'https://storage.googleapis.com/checkfront-rogue.appspot.com/accounts/cf-94884/images/2020/large-LK94000763-E-6-1589107246382.jpg?alt=media&generation=1589107127578572',
      link: 'path'
    },
    {
      id:6,
      type:"Boat Safari",
      name:'Fun & Games',
      img: 'https://www.srilankatravelandtourism.com/places-sri-lanka/kitulgala/kitulgala-images/kitulgala-10-sri-lanka.jpg',
      link: 'path'
    },
    {
      id:7,
      type:"Boat Safari",
      name:'Fun & Games',
      img: 'https://www.srilankatravelandtourism.com/places-sri-lanka/kitulgala/kitulgala-images/kitulgala-10-sri-lanka.jpg',
      link: 'path'
    }
  ]


  const categoryListComponent = () => {
    return Categories.map((aCat) => {
      return (
        <CategoryItem
          key={aCat.id}
          name={aCat.name}
          url={aCat.img}
          type={aCat.type}
        />
      );
    });
  };


  return (
    <div>
      
      <div class="container-fluid py-2">
      <h3 class="font-weight-light">Browse by Category</h3>
      <div class="d-flex flex-row flex-nowrap"> 
          {categoryListComponent()}
          </div>

          <p></p>  
      
      <h3 class="text-uppercase"  style={{ color:"black" }}>Explore SRI LANKA</h3>
      </div>
          
      
    </div>
  );
}



export default CategoryList;