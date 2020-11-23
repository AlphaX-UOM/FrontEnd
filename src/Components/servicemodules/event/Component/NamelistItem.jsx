import React from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import './NameListItem.css';
   



const NamelistItem =(props)=> {
    let itemdetail =  {
                    
         name :props.name,
         cost :props.cost,
         details :props.details,
         venue :props.venue,
         comments :props.comments,
         notifications :props.notifications,
                       
        };
        
    
    
    
    return (
      
       <div>
           
        <ul>
              <div className="card" style={{backgroundColor: '#597C2B'}}></div>
            <li className="list-group-item shadow-sm" style={{backgroundColor: '#06466e'}}>
            <Link
                                to={{ pathname: "/eventdetails", data:itemdetail}}
                                className="link textdec" >
                <div className="row align-items-center" style={{backgroundColor:'#06466e'}}>
                    <div className="col-6">
                        <div className="card" style={{height:'15rem', width:'20rem'}}>
                        <img src="https://www.srilankadaytours.com/images/MUTHURAJAWELA/vsig_images/20140702_102433_687_412_72.jpg" alt="profile"/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card" style={{backgroundColor:'gold'}}>
                           

                                <h4> {props.name}</h4>


                                <p>Cost :{props.cost}</p>
                                <p>Details :{props.details}</p>
                                <p>venue:{props.venue}</p>
                                
                           
                        </div>

                    </div>
                </div>
                </Link>
            </li>
            <br/>
        </ul>
      <br/>
      </div>
     
     
      

    );



}
export default NamelistItem;