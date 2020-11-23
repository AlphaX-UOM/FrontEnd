import React, {  useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Namelist from './Namelist';
import EventDetails from './Pages/eventdetails';
import payment from './Pages/payment';
import axios from 'axios';


function Main ()  {
  
    return (
      <div style={{backgroundImage:'https://media-cdn.tripadvisor.com/media/photo-s/10/a9/d7/82/elephant-safari-at-sigiriya.jpg'}}>
       
      <div className='container-fluid ' style={{backgroundColor:'#597C2B'}} >
     
      <h1 >Welcome To Event Planner</h1>
      <Router>



        <Switch>

        <Route path='/eventdetails' component={EventDetails} />
        <Route path='/payment' component={payment} />
            <Route path='/namelist'><Namelist/></Route>


        </Switch>

      </Router>
      </div>
   
      </div>
     
     
  
    );
  }
  
  export default Main;