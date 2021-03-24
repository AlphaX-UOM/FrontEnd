import React, { useState, useEffect, useRef } from "react";
import { Card } from "react-bootstrap";
import Thank from "./Thank";
import { connect } from "react-redux";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

function Paypal(props) {
  let displayTotal = props.total;
  // const items = useSelector(state => state.items);
  // let itemsCart = props.items;
  // const [Ttotal, setTotal] = useState(
  //   itemsCart[0].quantity * itemsCart[0].number +
  //     itemsCart[1].quantity * itemsCart[1].number +
  //     itemsCart[2].quantity * itemsCart[2].number +
  //     itemsCart[3].quantity * itemsCart[3].number +
  //     itemsCart[4].quantity * itemsCart[4].number
  // );

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
    var totals = props.total;
    var myItems = [];
    for (var i = 0; i < props.items.length; i++) {
      myItems[i] = {
        name: props.items[i].details,
        unit_amount: {
          value: props.items[i].total_price,
          currency_code: "USD",
        },
        quantity: 1,
        sku: props.items[i].add_id,
      };
    }

    console.log(myItems);

    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: totals + 20,
                  currency_code: "USD",
                  breakdown: {
                    tax_total: { value: "20", currency_code: "USD" },
                    item_total: { value: totals, currency_code: "USD" },
                  },
                },
                items: myItems,
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaidFor(true);
          console.log(
            "response from paypal->" +
              order.purchase_units[0].payments.captures[0].id
          );
          console.log("renderrrringggg");
          setStr(order.id);
          var today = new Date();
          var checkin = new Date(props.items[0].checkin_date);
          var checkout = new Date(props.items[0].checkout_date);

          const apiUrlPay111 = `https://vvisit-d6347-default-rtdb.firebaseio.com/test.json`;

          axios.put(apiUrlPay111, order).then((response) => {
            if (response.status === 200) {
              console.log("Data Saved");
            }
          });

          const firePaymentData = GUID;
          const apiUrlPay = `https://vvisit-d6347-default-rtdb.firebaseio.com/payments/${firePaymentData}.json`;
          const firePay = {
            custId: props.userCred.id,
            custName: props.userCred.firstName + " " + props.userCred.lastName,
            payId: firePaymentData,
            payPalReturn: order.purchase_units[0].payments.captures[0].id,
          };

          axios.put(apiUrlPay, firePay).then((response) => {
            if (response.status === 200) {
              console.log("Data Saved");
            }
          });

          //posting payment data

          let paymentData = {
            id: GUID,
            amount: totals + 20,
            discount: 0,
            date: today,
            userID: props.userCred.id,
          };

          axios
            .post(
              "https://alphax-api.azurewebsites.net/api/payments",
              paymentData
            )
            .then(function(response) {
              console.log(response);
            });

          //looping starts here

          for (var i = 0; i < props.items.length; i++) {
            if (props.items[i].type === "Transport") {
              const fireResId = uuidv4();
              const apiUrl = `https://vvisit-d6347-default-rtdb.firebaseio.com/reservations/${fireResId}.json`;
              const fireTrans = {
                custId: props.userCred.id,
                custName:
                  props.userCred.firstName + " " + props.userCred.lastName,
                serId: props.items[i].add_id,
                serName: props.items[i].details,
                bookedDate: checkin,
                createdDate: new Date(),
                custRead: "no",
                serRead: "no",
                resId: fireResId,
              };

              axios.put(apiUrl, fireTrans).then((response) => {
                if (response.status === 200) {
                  console.log("Transport reservation to firebase");
                }
              });

              let TransData = {
                pickUpTime: checkin,
                pickUpLocation: props.items[i].checkin_location,
                dropOffTime: checkout,
                dropOffLocation: props.items[i].checkout_location,
                vehicleType: props.items[i].details,
                transportServiceID: props.items[i].add_id,
                numOfTravellers: props.items[i].no_travellers,
                checkIn: checkin,
                checkOut: checkout,
                price: props.items[i].total_price,
                userID: props.userCred.id,
                paymentID: GUID,
              };

              axios
                .post(
                  "https://alphax-api.azurewebsites.net/api/transportservicereservations",
                  TransData
                )
                .then(function(response) {
                  console.log(response);
                });
            } else if (props.items[i].type === "GuideService") {
              const fireResIdg = uuidv4();
              const apiUrlg = `https://vvisit-d6347-default-rtdb.firebaseio.com/reservations/${fireResIdg}.json`;
              const fireGuide = {
                custId: props.userCred.id,
                custName:
                  props.userCred.firstName + " " + props.userCred.lastName,
                serId: props.items[i].add_id,
                serName: props.items[i].details,
                bookedDate: checkin,
                createdDate: new Date(),
                custRead: "no",
                serRead: "no",
                resId: fireResIdg,
              };

              axios.put(apiUrlg, fireGuide).then((response) => {
                if (response.status === 200) {
                  console.log("Guide reservation to firebase");
                }
              });

              let guideData = {
                tourGuideServiceID: props.items[i].add_id,
                numOfTravellers: props.items[i].no_travellers,
                checkIn: checkin,
                checkOut: checkout,
                price: props.items[i].total_price,
                userID: props.userCred.id,
                paymentID: GUID,
              };

              axios
                .post(
                  "https://alphax-api.azurewebsites.net/api/tourguideservicereservations",
                  guideData
                )
                .then(function(response) {
                  console.log(response);
                });
            } else if (props.items[i].type === "EventService") {
              const fireResIde01 = uuidv4();
              const apiUrle01 = `https://vvisit-d6347-default-rtdb.firebaseio.com/reservations/${fireResIde01}.json`;
              const fireEvent01 = {
                custId: props.userCred.id,
                custName:
                  props.userCred.firstName + " " + props.userCred.lastName,
                serId: props.items[i].add_id,
                serName: props.items[i].details,
                bookedDate: checkin,
                createdDate: new Date(),
                custRead: "no",
                serRead: "no",
                resId: fireResIde01,
              };

              axios.put(apiUrle01, fireEvent01).then((response) => {
                if (response.status === 200) {
                  console.log("Event reservation to firebase");
                }
              });

              let eventData = {
                eventPlannerServiceID: props.items[i].add_id,
                numOfTravellers: props.items[i].no_travellers,
                checkIn: checkin,
                checkOut: checkout,
                price: props.items[i].total_price,
                userID: props.userCred.id,
                paymentID: GUID,
              };

              axios
                .post(
                  "https://alphax-api.azurewebsites.net/api/eventplannerservicereservations",
                  eventData
                )
                .then(function(response) {
                  console.log(response);
                });
            } else if (props.items[i].type === "HotelService") {
              const fireResIdh = uuidv4();
              const apiUrlh = `https://vvisit-d6347-default-rtdb.firebaseio.com/reservations/${fireResIdh}.json`;
              const fireHotel = {
                custId: props.userCred.id,
                custName:
                  props.userCred.firstName + " " + props.userCred.lastName,
                serId: props.items[i].add_id,
                serName: props.items[i].details,
                bookedDate: checkin,
                createdDate: new Date(),
                custRead: "no",
                serRead: "no",
                resId: fireResIdh,
              };

              axios.put(apiUrlh, fireHotel).then((response) => {
                if (response.status === 200) {
                  console.log("Hotel reservation to firebase");
                }
              });

              let hotelData = {
                noOfRooms: Math.round(props.items[i].no_travellers / 2),
                hotelsServiceID: props.items[i].add_id,
                numOfTravellers: props.items[i].no_travellers,
                checkIn: checkin,
                checkOut: checkout,
                price: props.items[i].total_price,
                userID: props.userCred.id,
                paymentID: GUID,
              };

              axios
                .post(
                  "https://alphax-api.azurewebsites.net/api/hotelsservicereservations",
                  hotelData
                )
                .then(function(response) {
                  console.log(response);
                });
            }
          }

          // localStorage.removeItem("name of localStorage variable you want to remove");
          window.localStorage.clear();
        },
        onError: (err) => {
          setError(err);
          console.error(err);
        },
      })
      .render(paypalRef.current);
  }, []);

  var count = 0;


  if (paidFor && str && count == 0) {
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
        <h1>Total = {displayTotal + 20}USD</h1>

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
    userCred: state.eventpnl.userCred,
    items: state.onlineStoreApp.items,
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
