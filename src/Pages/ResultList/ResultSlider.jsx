import React, { useState, useEffect } from 'react';
import ResultComponent from './ResultComponent';
import { CardDeck } from 'react-bootstrap';



function ResultSlider(props) {

  let travellers = props.travellers;
  let budget = props.budget;
  let days = props.days;
  var eventBudget = Math.round(((budget/5)/travellers));
  var transBudget = Math.round((budget/5));
  var guideBudget = Math.round(((budget/5)/days));
  var hotelBudget = Math.round(((budget/5)/days));

  const [transportList, setTransportList] = useState([{tpid:"1",userId:"",name:"",costPerDistance:150,description:"",phoneNumber:"",typesOfVehicles:"",comments:"",notifications:"",user:null},{tpid:"2",userId:"",name:"",costPerDistance:150,description:"",phoneNumber:"",typesOfVehicles:"",comments:"",notifications:"",user:null},{tpid:"3",userId:"",name:"",costPerDistance:150,description:"",phoneNumber:"",typesOfVehicles:"",comments:"",notifications:"",user:null},{tpid:"4",userId:"",name:"",costPerDistance:150,description:"",phoneNumber:"",typesOfVehicles:"",comments:"",notifications:"",user:null},{tpid:"5",userId:"",name:"",costPerDistance:150,description:"",phoneNumber:"",typesOfVehicles:"",comments:"",notifications:"",user:null}]);
  const [tourguideList, settourguideList] = useState([{guideId: "1",userId: "",otherDetails: "",name: "",dob: "",languages: "",phonenNmber: "",costPerDay: 50,comments: "",notifications: "",user: null},{guideId: "1",userId: "",otherDetails: "",name: "",dob: "",languages: "",phonenNmber: "",costPerDay: 50,comments: "",notifications: "",user: null},{guideId: "1",userId: "",otherDetails: "",name: "",dob: "",languages: "",phonenNmber: "",costPerDay: 50,comments: "",notifications: "",user: null},{guideId: "1",userId: "",otherDetails: "",name: "",dob: "",languages: "",phonenNmber: "",costPerDay: 50,comments: "",notifications: "",user: null},{guideId: "1",userId: "",otherDetails: "",name: "",dob: "",languages: "",phonenNmber: "",costPerDay: 50,comments: "",notifications: "",user: null}]);
  const [eventList, seteventList] = useState([{eventId: "",userId: "",eventName: "",date: "",venue: "",price: 20,endTime: null,otherDetails: "",comments: "",notifications: "",user: null},{eventId: "",userId: "",eventName: "",date: "",venue: "",price: 20,endTime: null,otherDetails: "",comments: "",notifications: "",user: null},{eventId: "",userId: "",eventName: "",date: "",venue: "",price: 20,endTime: null,otherDetails: "",comments: "",notifications: "",user: null},{eventId: "",userId: "",eventName: "",date: "",venue: "",price: 20,endTime: null,otherDetails: "",comments: "",notifications: "",user: null},{eventId: "",userId: "",eventName: "",date: "",venue: "",price: 20,endTime: null,otherDetails: "",comments: "",notifications: "",user: null}]);
  const [hotelList, sethotelList] = useState([{hotelId: "",userId: "",hotelName: "",features: "",phoneNumber: "",district: "",venue: "",otherDetails: "",comments: "",notifications: "",price: 150,user: null},{hotelId: "",userId: "",hotelName: "",features: "",phoneNumber: "",district: "",venue: "",otherDetails: "",comments: "",notifications: "",price: 150,user: null},{hotelId: "",userId: "",hotelName: "",features: "",phoneNumber: "",district: "",venue: "",otherDetails: "",comments: "",notifications: "",price: 150,user: null},{hotelId: "",userId: "",hotelName: "",features: "",phoneNumber: "",district: "",venue: "",otherDetails: "",comments: "",notifications: "",price: 150,user: null},{hotelId: "",userId: "",hotelName: "",features: "",phoneNumber: "",district: "",venue: "",otherDetails: "",comments: "",notifications: "",price: 150,user: null}]);
 
  

  useEffect( () => {
   fetch(`https://localhost:44394/api/transportproviders?transvalue=${transBudget}`).then((response) => {
      return response.json();
    }).then(responseData => {
       setTransportList(responseData);
    });
  },[]);
  

  useEffect(() => {
    fetch(`https://localhost:44394/api/tourguides?guideValue=${guideBudget}`).then((response) => {
      return response.json();
    }).then(responseData => {
      settourguideList(responseData);
    });
  }, []);

  

  useEffect(() => {
    fetch(`https://localhost:44394/api/eventplanners?eventValue=${eventBudget}`).then((response) => {
      return response.json();
    }).then(responseData => {
      seteventList(responseData);
    });
  }, []);

  useEffect(() => {
    fetch(`https://localhost:44394/api/hotels?hotelValue=${hotelBudget}`).then((response) => {
      return response.json();
    }).then(responseData => {
      sethotelList(responseData);
    });
  }, []);

  console.log((eventList[(props.id)-1].price * travellers )+(eventList[(props.id)].price * travellers )+(transportList[(props.id)-1].costPerDistance)+(tourguideList[(props.id)-1].costPerDay * days)+ (hotelList[props.id].price * days));

  return (
    <div>
      <CardDeck>
        <ResultComponent
           key={transportList.id}
          event01={eventList[(props.id)-1].eventName}
          event02={eventList[(props.id)].eventName}
          hotel={hotelList[(props.id)-1].hotelName}
          tourguide={tourguideList[(props.id)-1].name}
          transport={transportList[(props.id)-1].name}
          type='Experience'
          transId={transportList[(props.id)-1].tpid}
          tourId={tourguideList[(props.id)-1].guideId}
          event01Id={eventList[(props.id)-1].eventId}
          event02Id={eventList[(props.id)].eventId}
          hotelId={hotelList[(props.id)-1].hotelId}
          price={((eventList[(props.id)-1].price * travellers)+(eventList[(props.id)].price * travellers)+(transportList[(props.id)-1].costPerDistance)+(tourguideList[(props.id)-1].costPerDay * days)+(hotelList[(props.id)-1].price * days))}
          travellers={travellers}
          budget={budget}
          days={days}
        />

         <ResultComponent
          key={transportList[props.id].id}
          event01={eventList[props.id].eventName}
          event02={eventList[(props.id)+1].eventName}
          hotel={hotelList[props.id].hotelName}
          tourguide={tourguideList[props.id].name}
          transport={transportList[props.id].name}
          type='Budget'
          transId={transportList[(props.id)].tpid}
          tourId={tourguideList[(props.id)].guideId}
          event01Id={eventList[(props.id)].eventId}
          event02Id={eventList[(props.id)+1].eventId}
          hotelId={hotelList[(props.id)].hotelId}
          price={((eventList[(props.id)].price * travellers)+(eventList[(props.id)+1].price * travellers)+(transportList[(props.id)].costPerDistance)+(tourguideList[(props.id)].costPerDay * days)+(hotelList[(props.id)].price * days))}
          travellers={travellers}
          budget={budget}
          days={days}
        />

        <ResultComponent
          key={transportList[(props.id)+1].id}
          event01={eventList[(props.id)+1].eventName}
          event02={eventList[(props.id)-1].eventName}
          hotel={hotelList[(props.id)+1].hotelName}
          tourguide={tourguideList[(props.id)+1].name}
          transport={transportList[(props.id)+1].name}
          type='Luxury'
          transId={transportList[(props.id)+1].tpid}
          tourId={tourguideList[(props.id)+1].guideId}
          event01Id={eventList[(props.id)+1].eventId}
          event02Id={eventList[(props.id)-1].eventId}
          hotelId={hotelList[(props.id)+1].hotelId}
          price={((eventList[(props.id)+1].price * travellers)+(eventList[(props.id)-1].price * travellers)+(transportList[(props.id)+1].costPerDistance)+(tourguideList[(props.id)+1].costPerDay * days)+(hotelList[(props.id)+1].price * days))}
          travellers={travellers}
          budget={budget}
          days={days}
        /> 
      
      </CardDeck>
    </div>
  );
}


export default ResultSlider;