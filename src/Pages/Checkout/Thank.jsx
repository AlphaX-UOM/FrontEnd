import  React, { useState, useEffect } from 'react';
import axios from 'axios';

function Thank(props) {
  
   
  
    console.log("thank you page props ->"+props);
  
    
    const [reservationList, setreservationList] = useState();
    const [paymentList, setpaymentList] = useState();
  
  
    useEffect(() => {
        fetch(`https://alphax-api.azurewebsites.net/api/reserves`).then((response) => {
          return response.json();
        }).then(responseData => {
          setreservationList(responseData.length);
        });
      }, []);
      console.log("reservations -> "+reservationList);
  

    useEffect(() => {
      fetch(`https://alphax-api.azurewebsites.net/api/payments`).then((response) => {
        return response.json();
      }).then(responseData => {
        setpaymentList(responseData.length);
      });
    }, []);
    console.log("payments -> "+paymentList);
  

    // const axios = require('axios')

    console.log("thank page reservations -> "+props);


    let transReserveData = {
        bookingId: String(reservationList+1),
        customerId: 'u0002',
        serviceId: props.data.transportId,
        noOfTraveller: props.data.travellers
     }
     

    axios.post('https://alphax-api.azurewebsites.net/api/reserves',transReserveData)
      .then(response => {
        console.log(response)
      })


    

      let guideReserveData = {
        bookingId: String(reservationList+2),
        customerId: 'u0002',
        serviceId: props.data.guidePlanId,
        noOfTraveller: props.data.travellers
     }

    axios.post('https://alphax-api.azurewebsites.net/api/reserves',guideReserveData)
      .then(function (response) {
        console.log(response);
      })

      let event01ReserveData = {
        bookingId: String(reservationList+3),
        customerId: 'u0002',
        serviceId: props.data.event01PlanId,
        noOfTraveller: props.data.travellers
     }

    axios.post('https://alphax-api.azurewebsites.net/api/reserves',event01ReserveData)
      .then(function (response) {
        console.log(response);
      })

      let event02ReserveData = {
        bookingId: String(reservationList+4),
        customerId: 'u0002',
        serviceId: props.data.event02PlanId,
        noOfTraveller: props.data.travellers
     }

    axios.post('https://alphax-api.azurewebsites.net/api/reserves',event02ReserveData)
      .then(function (response) {
        console.log(response);
      })

      let hotelReserveData = {
        bookingId: String(reservationList+5),
        customerId: 'u0002',
        serviceId: props.data.hotelPlanId,
        noOfTraveller: props.data.travellers
     }

    axios.post('https://alphax-api.azurewebsites.net/api/reserves',hotelReserveData)
      .then(function (response) {
        console.log(response);
      })

      let paymentData = {
        billNo: String(paymentList+1),
        amount: props.data.sum,
        customerId: 'u0002'
     }

    axios.post('https://alphax-api.azurewebsites.net/api/payments',paymentData)
      .then(function (response) {
        console.log(response);
      })





    return (
        <div>
            <div className="container-fluid" style={{ backgroundColor: "#15ff00f" }}>
                <div class="card shadow-lg" style={{ height: '550px', width: '1000px',backgroundColor: "#3277dd" }}>
                    <div className="row">
                        <div className="col-7">
                            <img class="card-img" src="http://exemplaryvoyages.com/images/srilanka-map.png" alt="Cardupper" style={{ height: '500px', width: '400px' }} />
                        </div>
                        <div className="col-5">
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <div class="card bg-warning  text-center p-3">
                                <blockquote class="blockquote mb-0">
                                    <p>Thank you for your Payment</p>
                                </blockquote>
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            <div class="card bg-warning  text-center p-3">
                                <blockquote class="blockquote mb-0">
                                    <p>Enjoy your Vacation!</p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Thank;