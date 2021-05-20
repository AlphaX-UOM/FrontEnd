import { Container } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import CategoryItem from './CategoryItem';
import { Row } from 'react-bootstrap';
import { CardDeck } from 'reactstrap';
import RowingIcon from '@material-ui/icons/Rowing';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
function CategoryList() {

  let Categories = [
    {
      id:1,
      type:"Boat Safari",
      name:'Boat Safaries',
      img:'data:image/png;base64,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',
      link: 'path'
    },
    {
      id:2,
      type:"Beach Party",
      name:" Beaches (Diving ,Snorkeling,surfing)",
      
      img: 'https://png.pngtree.com/png-vector/20190425/ourmid/pngtree-beach-icon-vector-illustration-in-line-style-for-any-purpose-png-image_981872.jpg',
      link: 'path'
    },
    {
      id:3,
      type:"Nature",
      name:'Nature ',
      img: 'https://www.freeiconspng.com/uploads/elephant-icon-6.png',
      link: 'path'
    },
    {
      id:4,
      type:"Pilgrims Tour",
      name:'Pilgrims',
      img: 'https://images.all-free-download.com/images/graphiclarge/buddhist_stupa_6824856.jpg',
      link: 'path'
    },
    {
      id:5,
      type:"Museaum",
      name:'Museums',
      img: 'https://icon-library.com/images/museum-icon/museum-icon-26.jpg',
      link: 'path'
    },
    {
      id:6,
      type:"Camping",
      name:'Hiking & Camping',
      img: 'https://i.pinimg.com/originals/76/e1/b2/76e1b21c634a695b66c4dfec8692d5b1.jpg',
      link: 'path'
    },
    {
      id:7,
      type:"Culture",
      name:'Culture & Foods',
      img: 'https://www.kindpng.com/picc/m/66-669503_dinner-food-kitchen-meal-restaurant-icon-meal-icon.png',
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
      <center>
      <div class="container-fluid py-2"style={{ width: "90rem" }}>
      <h3 class="font-weight-light">Browse by Category</h3>
      <center>
      <div class="d-flex flex-row flex-nowrap justify-content-center"> 
          {categoryListComponent()}
          </div>

      </center>
   

          <p></p>  
      
     
      </div>
      </center>
      
  
          
      
    </div>
  );
}



export default CategoryList;