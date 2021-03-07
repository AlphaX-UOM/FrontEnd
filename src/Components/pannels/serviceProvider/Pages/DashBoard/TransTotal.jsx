import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import Typography from '@material-ui/core/Typography';
import {InputLabel} from '@material-ui/core/';
import { Hotel } from '@material-ui/icons';

  function TransportTotal(props)  {
    const [loading, setLoading] = useState(false);
    const [event,setEvent]=useState([]);
    const[eventTotal,setEventTotal]=useState(0);

   let userID=props.userCred.id;



      axios

      .get(`https://alphax-api.azurewebsites.net/api/transportservicereservations/Customers?serid=${userID}`)
      /*  .then((response) => {
        return response.json();
      })*/
      .then((responseData) => {
        console.log(responseData);
       
  
        setEvent(responseData.data);
   //  if(responseData.data.userID===userID)
        setEventTotal(responseData.data.reduce((total,pay)=>total+1,0))
  
        setLoading(false);
  
      });
     
    
    
     
     


    
      return (
        <div>
        <InputLabel>   <h4> Total Transport Reservations</h4></InputLabel>
        <Typography>   <h5> {eventTotal}</h5></Typography>
        </div>
        
        
       

      )

    }
    const mapStateToProps = (state) => {
        return {
            reservations: state.eventpnl.reservations,
            formdata: state.eventpnl.formdata,
            total: state.eventpnl.total,
            userCred: state.eventpnl.userCred
        };
    };
    
    
    export default connect(mapStateToProps)(TransportTotal);
    
    

  