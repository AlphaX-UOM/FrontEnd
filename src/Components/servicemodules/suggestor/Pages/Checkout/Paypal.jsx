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
          console.log("response from paypal->" + order.purchase_units[0].payments.captures[0].id);
          console.log("renderrrringggg");
          setStr(order.id);

          
              const apiUrlPay111 = `https://vvisit-d6347-default-rtdb.firebaseio.com/test.json`;
              

              axios
                .put(apiUrlPay111, order)
                .then((response) => {
                  if(response.status === 200){
                    console.log('Data Saved');
                  }
                });

            let paymentData = {
                id: GUID,
                amount: props.total,
                discount: 0,
                date: "2020-09-12T00:00:00",
                userID: props.userCred.id,
              };


              const firePaymentData = GUID;
              const apiUrlPay = `https://vvisit-d6347-default-rtdb.firebaseio.com/payments/${firePaymentData}.json`;
              const firePay = {
                  custId : props.userCred.id,
                  custName : props.userCred.firstName + " "+ props.userCred.lastName,
                  payId : firePaymentData,
                  payPalReturn : order.purchase_units[0].payments.captures[0].id
              };

              axios
                .put(apiUrlPay, firePay)
                .then((response) => {
                  if(response.status === 200){
                    console.log('Data Saved');
                  }
                });



          
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
                userID: props.userCred.id,
                paymentID: GUID,
              };

              const fireResId = uuidv4();
              const apiUrl = `https://vvisit-d6347-default-rtdb.firebaseio.com/reservations/${fireResId}.json`;
              const fireTrans = {
                  custId : props.userCred.id,
                  custName : props.userCred.firstName + " "+ props.userCred.lastName,
                  serId : props.reservations[0].serID,
                  serName : props.reservations[0].name,
                  bookedDate : "2020-10-11T00:00:00",
                  createdDate : new Date(),
                  custRead : "no",
                  serRead : "no",
                  resId : fireResId
              };

              axios
                .put(apiUrl, fireTrans)
                .then((response) => {
                  if(response.status === 200){
                    console.log('Data Saved');
                  }
                });
          
              let guideData = {
                tourGuideServiceID: props.reservations[1].id,
                numOfTravellers: props.formdata.travelers,
                checkIn: "2020-10-11T00:00:00",
                checkOut: "2020-10-12T00:00:00",
                price: props.reservations[1].unitTotal,
                userID: props.userCred.id,
                paymentID: GUID,
              };

              const fireResIdg = uuidv4();
              const apiUrlg = `https://vvisit-d6347-default-rtdb.firebaseio.com/reservations/${fireResIdg}.json`;
              const fireGuide = {
                  custId : props.userCred.id,
                  custName : props.userCred.firstName + " "+ props.userCred.lastName,
                  serId : props.reservations[1].serID,
                  serName : props.reservations[1].name,
                  bookedDate : "2020-10-11T00:00:00",
                  createdDate : new Date(),
                  custRead : "no",
                  serRead : "no",
                  resId : fireResIdg
              };

              axios
                .put(apiUrlg, fireGuide)
                .then((response) => {
                  if(response.status === 200){
                    console.log('Data Saved');
                  }
                });


          
              let event01Data = {
                eventPlannerServiceID: props.reservations[2].id,
                numOfTravellers: props.formdata.travelers,
                checkIn: "2020-10-11T00:00:00",
                checkOut: "2020-10-12T00:00:00",
                price: props.reservations[2].unitTotal,
                userID: props.userCred.id,
                paymentID: GUID,
              };


              const fireResIde01 = uuidv4();
              const apiUrle01 = `https://vvisit-d6347-default-rtdb.firebaseio.com/reservations/${fireResIde01}.json`;
              const fireEvent01 = {
                  custId : props.userCred.id,
                  custName : props.userCred.firstName + " "+ props.userCred.lastName,
                  serId : props.reservations[2].serID,
                  serName : props.reservations[2].name,
                  bookedDate : "2020-10-11T00:00:00",
                  createdDate : new Date(),
                  custRead : "no",
                  serRead : "no",
                  resId : fireResIde01
              };

              axios
                .put(apiUrle01, fireEvent01)
                .then((response) => {
                  if(response.status === 200){
                    console.log('Data Saved');
                  }
                });


          
              let event02Data = {
                eventPlannerServiceID: props.reservations[3].id,
                numOfTravellers: props.formdata.travelers,
                checkIn: "2020-10-11T00:00:00",
                checkOut: "2020-10-12T00:00:00",
                price: props.reservations[3].unitTotal,
                userID: props.userCred.id,
                paymentID: GUID,
              };


              const fireResIde02 = uuidv4();
              const apiUrle02 = `https://vvisit-d6347-default-rtdb.firebaseio.com/reservations/${fireResIde02}.json`;
              const fireEvent02 = {
                  custId : props.userCred.id,
                  custName : props.userCred.firstName + " "+ props.userCred.lastName,
                  serId : props.reservations[3].serID,
                  serName : props.reservations[3].name,
                  bookedDate : "2020-10-11T00:00:00",
                  createdDate : new Date(),
                  custRead : "no",
                  serRead : "no",
                  resId : fireResIde02
              };

              axios
                .put(apiUrle02, fireEvent02)
                .then((response) => {
                  if(response.status === 200){
                    console.log('Data Saved');
                  }
                });



          
              let hotelData = {
                noOfRooms: Math.round(props.formdata.travelers / 2),
                hotelsServiceID: props.reservations[4].id,
                numOfTravellers: props.formdata.travelers,
                checkIn: "2020-10-11T00:00:00",
                checkOut: "2020-10-12T00:00:00",
                price: props.reservations[4].unitTotal,
                userID: props.userCred.id,
                paymentID: GUID,
              };

              const fireResIdh = uuidv4();
              const apiUrlh = `https://vvisit-d6347-default-rtdb.firebaseio.com/reservations/${fireResIdh}.json`;
              const fireHotel = {
                  custId : props.userCred.id,
                  custName : props.userCred.firstName + " "+ props.userCred.lastName,
                  serId : props.reservations[4].serID,
                  serName : props.reservations[4].name,
                  bookedDate : "2020-10-11T00:00:00",
                  createdDate : new Date(),
                  custRead : "no",
                  serRead : "no",
                  resId : fireResIdh
              };

              axios
                .put(apiUrlh, fireHotel)
                .then((response) => {
                  if(response.status === 200){
                    console.log('Data Saved');
                  }
                });



          
            
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
    reservations: state.eventpnl.reservations,
    formdata: state.eventpnl.formdata,
    total: state.eventpnl.total,
    userCred : state.eventpnl.userCred
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
