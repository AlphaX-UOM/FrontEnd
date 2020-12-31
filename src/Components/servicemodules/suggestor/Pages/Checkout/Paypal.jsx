import React, { useState, useEffect, useRef } from "react";
import { Card } from "react-bootstrap";
import Thank from "./Thank";
import { connect } from "react-redux";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid'

function Paypal(props) {
  let reservations = props.reservations;
  
  let total = reservations[0].price*reservations[0].units + reservations[1].price*reservations[1].units + reservations[2].price*reservations[2].units + reservations[3].price*reservations[3].units + reservations[4].price*reservations[4].units;

  // const product = {
  //   // price: props.total,
  //   price: 6,
  //   description: "Payment for Smart Travel System",
  // };

  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const paypalRef = useRef();
  const [str, setStr] = useState();
  const [tra, setTra] = useState(false);
  const [gui, setGui] = useState(false);
  const [ev01, setEv01] = useState(false);
  const [ev02, setEv02] = useState(false);
  const [hot, sethot] = useState(false);
  let GUID = uuidv4();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                  value: total+20,
                  currency_code: 'USD',
                  breakdown: {
                      tax_total: {value: '20', currency_code: 'USD'},
                      item_total: {value: total, currency_code: 'USD'}
                  }
              },
              items: [{
                  name: reservations[0].name,
                  unit_amount: {value: reservations[0].price, currency_code: 'USD'},
                  quantity: reservations[0].units,
                  sku: reservations[0].id
              }, {
                name: reservations[1].name,
                unit_amount: {value: reservations[1].price, currency_code: 'USD'},
                quantity: reservations[1].units,
                sku: reservations[1].id
              },{
                name: reservations[2].name,
                  unit_amount: {value: reservations[2].price, currency_code: 'USD'},
                  quantity: reservations[2].units,
                  sku: reservations[2].id
            },{
              name: reservations[3].name,
                  unit_amount: {value: reservations[3].price, currency_code: 'USD'},
                  quantity: reservations[3].units,
                  sku: reservations[3].id
          },{
            name: reservations[4].name,
                unit_amount: {value: reservations[4].price, currency_code: 'USD'},
                quantity: reservations[4].units,
                sku: reservations[4].id
        }]
          }],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaidFor(true);
          console.log("response from paypal-> " + order);
          console.log("renderrrringggg");
          setStr(order.id);
          console.log("2nd renderrrr");
            
            var parts = [];
            parts.push(order.id.slice(0, 8).toLowerCase());
            parts.push(reservations[0].id.slice(9, 36));
            
            
            // let GUID = "89e74472-5afb-4784-13b9-08d89c0cf5ab";
            console.log("Guid-> "+GUID);
            console.log("3nd renderrrr");

            let paymentData = {
                id: GUID,
                amount: props.total,
                discount: 0,
                date: "2020-09-12T00:00:00",
                userID: "e4d74bf2-e51a-4c18-78ee-08d89bf76381",
              };
          
              let TransData = {
                pickUpTime: "2020-10-11T00:00:00",
                pickUpLocation: "Katunayake AirPort",
                dropOffTime: "2020-10-12T00:00:00",
                dropOffLocation: "Galle Face Colombo",
                vehicleType: "Car",
                transportServiceID: props.reservations[0].id,
                numOfTravellers: props.formdata.travelers,
                checkIn: "2020-10-11T00:00:00",
                checkOut: "2020-10-12T00:00:00",
                price: props.reservations[0].unitTotal,
                userID: "e4d74bf2-e51a-4c18-78ee-08d89bf76381",
                paymentID: GUID,
              };
          
              let guideData = {
                tourGuideServiceID: props.reservations[1].id,
                numOfTravellers: props.formdata.travelers,
                checkIn: "2020-10-11T00:00:00",
                checkOut: "2020-10-12T00:00:00",
                price: props.reservations[1].unitTotal,
                userID: "e4d74bf2-e51a-4c18-78ee-08d89bf76381",
                paymentID: GUID,
              };
          
              let event01Data = {
                eventPlannerServiceID: props.reservations[2].id,
                numOfTravellers: props.formdata.travelers,
                checkIn: "2020-10-11T00:00:00",
                checkOut: "2020-10-12T00:00:00",
                price: props.reservations[2].unitTotal,
                userID: "e4d74bf2-e51a-4c18-78ee-08d89bf76381",
                paymentID: GUID,
              };
          
              let event02Data = {
                eventPlannerServiceID: props.reservations[3].id,
                numOfTravellers: props.formdata.travelers,
                checkIn: "2020-10-11T00:00:00",
                checkOut: "2020-10-12T00:00:00",
                price: props.reservations[3].unitTotal,
                userID: "e4d74bf2-e51a-4c18-78ee-08d89bf76381",
                paymentID: GUID,
              };
          
              let hotelData = {
                noOfRooms: Math.round(props.formdata.travelers / 2),
                hotelsServiceID: props.reservations[4].id,
                numOfTravellers: props.formdata.travelers,
                checkIn: "2020-10-11T00:00:00",
                checkOut: "2020-10-12T00:00:00",
                price: props.reservations[4].unitTotal,
                userID: "e4d74bf2-e51a-4c18-78ee-08d89bf76381",
                paymentID: GUID,
              };
          
            
                axios
                  .post("https://alphax-api.azurewebsites.net/api/payments", paymentData)
                  .then(function (response) {
                    console.log(response);
                  });
          
                console.log("passed payment");
          
                axios
                  .post(
                    "https://alphax-api.azurewebsites.net/api/transportservicereservations",
                    TransData
                  )
                  .then(function (response) {
                    console.log(response);
                  });
          
                console.log("passed transport");
          
                axios
                  .post(
                    "https://alphax-api.azurewebsites.net/api/tourguideservicereservations",
                    guideData
                  )
                  .then(function (response) {
                    console.log(response);
                  });
          
                console.log("passed guide");
          
                axios
                  .post(
                    "https://alphax-api.azurewebsites.net/api/eventplannerservicereservations",
                    event01Data
                  )
                  .then(function (response) {
                    console.log(response);
                  });
          
                console.log("passed event01");
          
                axios
                  .post(
                    "https://alphax-api.azurewebsites.net/api/eventplannerservicereservations",
                    event02Data
                  )
                  .then(function (response) {
                    console.log(response);
                  });
          
                console.log("passed event02");
          
                axios
                  .post(
                    "https://alphax-api.azurewebsites.net/api/hotelsservicereservations",
                    hotelData
                  )
                  .then(function (response) {
                    console.log(response);
                  });
                  console.log("passed hotels");
          
                  console.log("final renderrrr");

          
          
        },
        onError: (err) => {
          setError(err);
          console.error(err);
        },
      })
      .render(paypalRef.current);
  }, [reservations, total]);

  var count = 0;

  if ((paidFor)&&(str)&&(count==0)) {
    count++;


 
    return (
      <div>
        <Thank />
      </div>
    );
  }

  return (
    <div>
      {error && <div>Uh oh, an error occurred! {error.message}</div>}
      <Card
        className="shadow-lg"
        style={{
          display: "inline-block",
          margin: "50px",
          border: "3px solid green",
          padding: "50px",
          left: "450px",
        }}
      >
        <h1>Total = {total+20}USD</h1>

        <div ref={paypalRef} />
      </Card>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    reservations: state.reservations,
    formdata: state.formdata,
    total: state.total,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addResData: (reservations) => {
//       dispatch({ type: "ADD_RESERVATIONS", reservations: reservations });
//     },
//   };
// };

export default connect(mapStateToProps)(Paypal);
