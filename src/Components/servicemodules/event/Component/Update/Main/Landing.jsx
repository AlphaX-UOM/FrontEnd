import React from "react";
import { Link } from "react-router-dom";
import Title from './Title';

import CategoryList from './CategoryList';
import EventList from './EventList';
import Date from './Date';

function Landing() {



  return (
    <div>
        <Title />
     
    
        <CategoryList />
        <br>
        </br>
        <br>
        </br>
        <div>
      <center><Date/></center>
        </div>
        <div>
        
            
            
        <EventList />
      
        </div>
        <p>This is Event Landing</p>
      
    </div>
  );
}



export default Landing;
