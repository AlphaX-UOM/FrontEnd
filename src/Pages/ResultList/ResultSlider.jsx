import React, { useState, useEffect } from 'react';
import ResultComponent from './ResultComponent';
import { CardDeck } from 'react-bootstrap';
import { connect } from 'react-redux'



function ResultSlider(props) {
  console.log(props);
  console.log("travellers -> "+props.formdata.travelers);

  let travellers = props.formdata.travelers;
  let budget = props.formdata.budget;
  let days = props.formdata.days;
  var eventBudget = Math.round(((budget/5)/travellers));
  var transBudget = Math.round((budget/5));
  var guideBudget = Math.round(((budget/5)/days));
  var hotelBudget = Math.round(((budget/5)/days));

  const [transportList, setTransportList] = useState([{tpid:"1",userId:"",name:"",costPerDistance:150,description:"",phoneNumber:"",typesOfVehicles:"",comments:"",notifications:"",user:null},{tpid:"2",userId:"",name:"",costPerDistance:150,description:"",phoneNumber:"",typesOfVehicles:"",comments:"",notifications:"",user:null},{tpid:"3",userId:"",name:"",costPerDistance:150,description:"",phoneNumber:"",typesOfVehicles:"",comments:"",notifications:"",user:null},{tpid:"4",userId:"",name:"",costPerDistance:150,description:"",phoneNumber:"",typesOfVehicles:"",comments:"",notifications:"",user:null},{tpid:"5",userId:"",name:"",costPerDistance:150,description:"",phoneNumber:"",typesOfVehicles:"",comments:"",notifications:"",user:null}]);
  const [tourguideList, settourguideList] = useState([{guideId: "1",userId: "",otherDetails: "",name: "",dob: "",languages: "",phonenNmber: "",costPerDay: 50,comments: "",notifications: "",user: null},{guideId: "1",userId: "",otherDetails: "",name: "",dob: "",languages: "",phonenNmber: "",costPerDay: 50,comments: "",notifications: "",user: null},{guideId: "1",userId: "",otherDetails: "",name: "",dob: "",languages: "",phonenNmber: "",costPerDay: 50,comments: "",notifications: "",user: null},{guideId: "1",userId: "",otherDetails: "",name: "",dob: "",languages: "",phonenNmber: "",costPerDay: 50,comments: "",notifications: "",user: null},{guideId: "1",userId: "",otherDetails: "",name: "",dob: "",languages: "",phonenNmber: "",costPerDay: 50,comments: "",notifications: "",user: null}]);
  const [eventList, seteventList] = useState([{eventId: "",userId: "",eventName: "",date: "",venue: "",price: 20,endTime: null,otherDetails: "",comments: "",notifications: "",user: null},{eventId: "",userId: "",eventName: "",date: "",venue: "",price: 20,endTime: null,otherDetails: "",comments: "",notifications: "",user: null},{eventId: "",userId: "",eventName: "",date: "",venue: "",price: 20,endTime: null,otherDetails: "",comments: "",notifications: "",user: null},{eventId: "",userId: "",eventName: "",date: "",venue: "",price: 20,endTime: null,otherDetails: "",comments: "",notifications: "",user: null},{eventId: "",userId: "",eventName: "",date: "",venue: "",price: 20,endTime: null,otherDetails: "",comments: "",notifications: "",user: null}]);
  const [hotelList, sethotelList] = useState([{hotelId: "",userId: "",hotelName: "",features: "",phoneNumber: "",district: "",venue: "",otherDetails: "",comments: "",notifications: "",price: 150,user: null},{hotelId: "",userId: "",hotelName: "",features: "",phoneNumber: "",district: "",venue: "",otherDetails: "",comments: "",notifications: "",price: 150,user: null},{hotelId: "",userId: "",hotelName: "",features: "",phoneNumber: "",district: "",venue: "",otherDetails: "",comments: "",notifications: "",price: 150,user: null},{hotelId: "",userId: "",hotelName: "",features: "",phoneNumber: "",district: "",venue: "",otherDetails: "",comments: "",notifications: "",price: 150,user: null},{hotelId: "",userId: "",hotelName: "",features: "",phoneNumber: "",district: "",venue: "",otherDetails: "",comments: "",notifications: "",price: 150,user: null}]);
 
  console.log("event-> "+eventBudget);
  console.log("trans-> "+transBudget);
  console.log("guide-> "+guideBudget);
  console.log("hotel-> "+hotelBudget);
  

  useEffect( () => {
   fetch(`https://alphax-api.azurewebsites.net/api/transportproviders?transvalue=${transBudget}`).then((response) => {
      return response.json();
    }).then(responseData => {
       setTransportList(responseData);
    });
  },[]);
  

  useEffect(() => {
    fetch(`https://alphax-api.azurewebsites.net/api/tourguides?guideValue=${guideBudget}`).then((response) => {
      return response.json();
    }).then(responseData => {
      settourguideList(responseData);
    });
  }, []);

  

  useEffect(() => {
    fetch(`https://alphax-api.azurewebsites.net/api/eventplanners?eventValue=${eventBudget}`).then((response) => {
      return response.json();
    }).then(responseData => {
      seteventList(responseData);
    });
  }, []);

  useEffect(() => {
    fetch(`https://alphax-api.azurewebsites.net/api/hotels?hotelValue=${hotelBudget}`).then((response) => {
      return response.json();
    }).then(responseData => {
      sethotelList(responseData);
    });
  }, []);


  return (
    <div>
      <CardDeck>
        <ResultComponent
           key={transportList.id}
          event01={eventList[(props.idss)-1].eventName}
          event02={eventList[(props.idss)].eventName}
          hotel={hotelList[(props.idss)-1].hotelName}
          tourguide={tourguideList[(props.idss)-1].name}
          transport={transportList[(props.idss)-1].name}
          type='Experience'
          transId={transportList[(props.idss)-1].tpid}
          tourId={tourguideList[(props.idss)-1].guideId}
          event01Id={eventList[(props.idss)-1].eventId}
          event02Id={eventList[(props.idss)].eventId}
          hotelId={hotelList[(props.idss)-1].hotelId}
          price={((eventList[(props.idss)-1].price * travellers)+(eventList[(props.idss)].price * travellers)+(transportList[(props.idss)-1].costPerDistance)+(tourguideList[(props.idss)-1].costPerDay * days)+(hotelList[(props.idss)-1].price * days))}
          travellers={travellers}
          budget={budget}
          days={days}
        />

         <ResultComponent
          key={transportList[props.idss].id}
          event01={eventList[props.idss].eventName}
          event02={eventList[(props.idss)+1].eventName}
          hotel={hotelList[props.idss].hotelName}
          tourguide={tourguideList[props.idss].name}
          transport={transportList[props.idss].name}
          type='Budget'
          transId={transportList[(props.idss)].tpid}
          tourId={tourguideList[(props.idss)].guideId}
          event01Id={eventList[(props.idss)].eventId}
          event02Id={eventList[(props.idss)+1].eventId}
          hotelId={hotelList[(props.idss)].hotelId}
          price={((eventList[(props.idss)].price * travellers)+(eventList[(props.idss)+1].price * travellers)+(transportList[(props.idss)].costPerDistance)+(tourguideList[(props.idss)].costPerDay * days)+(hotelList[(props.idss)].price * days))}
          travellers={travellers}
          budget={budget}
          days={days}
        />

        <ResultComponent
          key={transportList[(props.idss)+1].id}
          event01={eventList[(props.idss)+1].eventName}
          event02={eventList[(props.idss)-1].eventName}
          hotel={hotelList[(props.idss)+1].hotelName}
          tourguide={tourguideList[(props.idss)+1].name}
          transport={transportList[(props.idss)+1].name}
          type='Luxury'
          transId={transportList[(props.idss)+1].tpid}
          tourId={tourguideList[(props.idss)+1].guideId}
          event01Id={eventList[(props.idss)+1].eventId}
          event02Id={eventList[(props.idss)-1].eventId}
          hotelId={hotelList[(props.idss)+1].hotelId}
          price={((eventList[(props.idss)+1].price * travellers)+(eventList[(props.idss)-1].price * travellers)+(transportList[(props.idss)+1].costPerDistance)+(tourguideList[(props.idss)+1].costPerDay * days)+(hotelList[(props.idss)+1].price * days))}
          travellers={travellers}
          budget={budget}
          days={days}
        /> 
      
      </CardDeck>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      formdata: state.formdata,
      slider:state.slider
  }
}

export default connect(mapStateToProps)(ResultSlider);