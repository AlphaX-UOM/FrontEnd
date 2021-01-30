import React,{useState} from 'react';
import { Card,DropdownButton,Dropdown } from 'react-bootstrap';


import 'react-calendar/dist/Calendar.css';

function NameListMenu(){


    return(
        <div>
          
           <div>
               
           <Card style={{ width: '15rem' },{height: '60rem'}}>
          <Card.Img variant="top" src='img/img-2.svg' />
           <Card.Body>
           <Card.Title>Select Your Guide</Card.Title>

           <DropdownButton id="dropdown-basic-button" title="Language" style={{padding:'10px'}}>
           <Dropdown.Item href="#/action-1">English</Dropdown.Item>
           <Dropdown.Item href="#/action-2">Spanish</Dropdown.Item>
           <Dropdown.Item href="#/action-3">Chinees</Dropdown.Item>
           <Dropdown.Item href="#/action-3">Hindi</Dropdown.Item>
      
           </DropdownButton>
           
           <DropdownButton id="dropdown-basic-button" title="Rating" style={{padding:'10px'}}>
           <Dropdown.Item href="#/action-1">5 Star</Dropdown.Item>
           <Dropdown.Item href="#/action-2">4 Star</Dropdown.Item>
           <Dropdown.Item href="#/action-3">3 Star</Dropdown.Item>
           <Dropdown.Item href="#/action-3">2 Star</Dropdown.Item>
           <Dropdown.Item href="#/action-3">1 Star</Dropdown.Item>
           </DropdownButton>
           
           </Card.Body>
          
            <Card.Body>
           
            </Card.Body>
            </Card>
           </div>
          
        </div>
       
    );
    




}


export default NameListMenu;