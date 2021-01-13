import React, {  useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Namelist from './Namelist';
import EventDetails from './Pages/eventdetails';
import payment from './Pages/payment';



function Main ()  {
  
    return (
      <div >
       
      <div className='container-fluid ' >
     
      <h1 > Event Planner</h1>
      <Router>



        <Switch>

        <Route path='/eventdetails' component={EventDetails} />
        <Route path='/payment' component={payment} />
            <Route path='/'><Namelist/></Route>


        </Switch>

      </Router>
      </div>
   
      </div>
     
     
  
    );
  }
  
  export default Main;