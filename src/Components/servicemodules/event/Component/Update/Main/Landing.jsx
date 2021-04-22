import React from "react";
import { Link } from "react-router-dom";
import Title from './Title';

import CategoryList from './CategoryList';
import EventList from './EventList';
import Date from './Date';
import Map from '../Category/SriLanka/map'
function Landing() {



  return (
    <div>
       
     
    
        <CategoryList />
        <br>
        </br>
        <br>
        </br>
        <div>
        <Link
                      
                        to="/categorylanding1"
                      
                      >
                         <Map/>
        
                      </Link>
     
        </div>
        <div>
        
            
            
        <EventList />
      
        </div>
      
      
    </div>
  );
}



export default Landing;
