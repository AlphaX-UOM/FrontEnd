import React,{useState} from 'react';
import { Card,DropdownButton,Dropdown } from 'react-bootstrap';
import guide from '../../../../../images/guide-img/img/img-2.svg';
import './formlist.css'


function NameListMenu(){
const [language,setLanguage]=useState('')

const handleInputlanguage = (event) => {
    setLanguage(language => event.target.value);
}

    
   
    return(
        <div>
          
           <div styles={{alignItems: 'center'}}>
               
           <Card style={{ width: '10rem', height: '60rem', backgroundColor:'gray'}}>
           <div>
          <Card.Img variant="top" src={guide} style={{ height: '100px' , padding: '10px'}}/>
          </div>
           <Card.Body>
           <Card.Title>Select Your Guide</Card.Title>
           <div styles={{alignItems: 'center',justifyContent: 'space-between'}}>
           <div style={{ padding: '10px'}}>
           <select className='form-input-g' id="language" placeholder='Search' onChange={handleInputlanguage}  > 
          <option value="Hindi">Language</option>
          <option value="Spanish">Spanish</option>
          <option value="Chinees">Chinees</option>
          <option value="English">English</option>
          <option value="French">French</option>
          </select>
           </div>
           <div style={{ padding: '10px'}}>
           <select className='form-input-g' id="rating" placeholder='Search'  > 
          <option value="all">Rating</option>
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          </select>
           </div>
           <div style={{ padding: '10px'}}>
           <select className='form-input-g' id="price" placeholder='Search'  > 
          <option value="all">Price</option>
          <option value="500">500</option>
          <option value="300">300</option>
          <option value="200">200</option>
          <option value="100">100</option>
          </select>
           </div>
           </div>
           </Card.Body>
           
            <Card.Body>
           
            </Card.Body>
            </Card>
           </div>
          
        </div>
       
    );
    




}


export default NameListMenu;

