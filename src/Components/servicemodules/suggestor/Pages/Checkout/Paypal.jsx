import React, { useState, useEffect, useRef } from "react";
import { Card } from "react-bootstrap";
import Thank from "./Thank";
import { connect } from "react-redux";
import axios from "axios";

function Paypal(props) {
  //     let tranId = props.location.data.transportId;
  //     let guideId = props.location.data.guidePlanId;
  //     let event01Id = props.location.data.event01PlanId;
  //     let event02Id = props.location.data.event02PlanId;
  //     let hotelId = props.location.data.hotelPlanId;

  //   const [mytransportList, setmyTransportList] = useState([]);
  //   const [mytourguideList, setmytourguideList] = useState([]);
  //   const [myevent01List, setmyevent01List] = useState([]);
  //   const [myevent02List, setmyevent02List] = useState([]);
  //   const [myhotelList, setmyhotelList] = useState([]);

  //   useEffect( () => {
  //     fetch(`https://alphax-api.azurewebsites.net/api/transportproviders/${tranId}`).then((response) => {
  //        return response.json();
  //      }).then(responseData => {
  //         setmyTransportList(responseData);
  //      });
  //    },[tranId]);

  //    useEffect(() => {
  //      fetch(`https://alphax-api.azurewebsites.net/api/tourguides/${guideId}`).then((response) => {
  //        return response.json();
  //      }).then(responseData => {
  //         setmytourguideList(responseData);
  //      });
  //    }, [guideId]);

  //    useEffect(() => {
  //      fetch(`https://alphax-api.azurewebsites.net/api/eventplanners/${event01Id}`).then((response) => {
  //        return response.json();
  //      }).then(responseData => {
  //         setmyevent01List(responseData);
  //      });
  //    }, [event01Id]);

  //    useEffect(() => {
  //     fetch(`https://alphax-api.azurewebsites.net/api/eventplanners/${event02Id}`).then((response) => {
  //       return response.json();
  //     }).then(responseData => {
  //        setmyevent02List(responseData);
  //     });
  //   }, [event02Id]);

  //    useEffect(() => {
  //      fetch(`https://alphax-api.azurewebsites.net/api/hotels/${hotelId}`).then((response) => {
  //        return response.json();
  //      }).then(responseData => {
  //         setmyhotelList(responseData);
  //      });
  //    }, [hotelId]);

  // let travellers = props.location.data.travellers;
  // let days = props.location.data.days;

  //    let cart = ((myevent01List.price * travellers)+(myevent02List.price * travellers)+(mytransportList.costPerDistance)+(mytourguideList.costPerDay * days)+(myhotelList.price * days));
  //    let total = cart+20;

  const product = {
    // price: props.total,
    price: 5,
    description: "Payment for Smart Travel System",
  };

  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const paypalRef = useRef();
  const [str, setStr] = useState("07099369D1814234M");
  const [tra, setTra] = useState(true);
  const [gui, setGui] = useState(true);
  const [ev01, setEv01] = useState(true);
  const [ev02, setev02] = useState(true);
  const[hot,sethot] = useState(true); 

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: product.description,
                amount: {
                  currency_code: "USD",
                  value: product.price,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaidFor(true);
          console.log("response from paypal-> " + order.id);
          setStr(order.id);
        },
        onError: (err) => {
          setError(err);
          console.error(err);
        },
      })
      .render(paypalRef.current);
  }, [product.description, product.price]);

  if (paidFor) {
    // console.log("string -> "+str);
    // var parts = [];
    // parts.push(str.slice(0, 8));
    // parts.push(str.slice(8, 12));
    // parts.push(str.slice(12, 16));
    // parts.push(str.slice(16, 20));
    // parts.push(str.slice(20, 32));
    // var GUID = parts.join("-");
    let GUID = "89e74472-5afb-4784-13b9-08d89c0cf5ab";

    let paymentData = {
      id: GUID,
      amount: props.total,
      discount: 0,
      date: "2020-09-12T00:00:00",
      userID: "e4d74bf2-e51a-4c18-78ee-08d89bf76381",
    };

    axios
      .post("https://alphax-api.azurewebsites.net/api/payments", paymentData)
      .then(function (response) {
        console.log(response);
      });

      if(tra){
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

    axios
      .post("https://alphax-api.azurewebsites.net/api/transportservicereservations", TransData)
      .then(function (response) {
        console.log(response);
      });
      setTra(false);
      console.log("passed transport");

      }

      if(gui){
      let guideData = {
        tourGuideServiceID: props.reservations[1].id,
        numOfTravellers: props.formdata.travelers,
        checkIn: "2020-10-11T00:00:00",
        checkOut: "2020-10-12T00:00:00",
        price: props.reservations[1].unitTotal,
        userID: "e4d74bf2-e51a-4c18-78ee-08d89bf76381",
        paymentID: GUID
      };

      axios
      .post("https://alphax-api.azurewebsites.net/api/tourguideservicereservations", guideData)
      .then(function (response) {
        console.log(response);
      });
      setGui(false);
      console.log("passed guide");
    }

    if(ev01){
      let event01Data = {
        
        eventPlannerServiceID: props.reservations[2].id,
        numOfTravellers: props.formdata.travelers,
        checkIn: "2020-10-11T00:00:00",
        checkOut: "2020-10-12T00:00:00",
        price: props.reservations[2].unitTotal,
        userID: "e4d74bf2-e51a-4c18-78ee-08d89bf76381",
        paymentID: GUID
      };

      axios
      .post("https://alphax-api.azurewebsites.net/api/eventplannerservicereservations", event01Data)
      .then(function (response) {
        console.log(response);
      });
      setEv01(false);
      console.log("passed event01");
    }

    if(ev02){
      let event02Data = {
        
        eventPlannerServiceID: props.reservations[3].id,
        numOfTravellers: props.formdata.travelers,
        checkIn: "2020-10-11T00:00:00",
        checkOut: "2020-10-12T00:00:00",
        price: props.reservations[3].unitTotal,
        userID: "e4d74bf2-e51a-4c18-78ee-08d89bf76381",
        paymentID: GUID
      };

      axios
      .post("https://alphax-api.azurewebsites.net/api/eventplannerservicereservations", event02Data)
      .then(function (response) {
        console.log(response);
      });
      setev02(false);
      console.log("passed event02");
    }

      if(hot){
      let hotelData = {
        
        noOfRooms: Math.round(props.formdata.travelers/2),
        hotelsServiceID: props.reservations[4].id,
        numOfTravellers: props.formdata.travelers,
        checkIn: "2020-10-11T00:00:00",
        checkOut: "2020-10-12T00:00:00",
        price: props.reservations[4].unitTotal,
        userID: "e4d74bf2-e51a-4c18-78ee-08d89bf76381",
        paymentID: GUID
      };

      axios
      .post("https://alphax-api.azurewebsites.net/api/hotelsservicereservations", hotelData)
      .then(function (response) {
        console.log(response);
      });
      sethot(false);
      console.log("passed hotel");
    }

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
        <h1>Total = {product.price}USD</h1>

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
