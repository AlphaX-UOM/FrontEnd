import React, { useState, useEffect } from 'react';
import ResultComponent from './ResultComponent';
import { CardDeck } from 'react-bootstrap';



function ResultSlider(props) {

  const [transportList, setTransportList] = useState([{tpid:"1",userId:"",name:"",costPerDistance:150,description:"",phoneNumber:"",typesOfVehicles:"",comments:"",notifications:"",user:null},{tpid:"2",userId:"",name:"",costPerDistance:150,description:"",phoneNumber:"",typesOfVehicles:"",comments:"",notifications:"",user:null},{tpid:"3",userId:"",name:"",costPerDistance:150,description:"",phoneNumber:"",typesOfVehicles:"",comments:"",notifications:"",user:null},{tpid:"4",userId:"",name:"",costPerDistance:150,description:"",phoneNumber:"",typesOfVehicles:"",comments:"",notifications:"",user:null},{tpid:"5",userId:"",name:"",costPerDistance:150,description:"",phoneNumber:"",typesOfVehicles:"",comments:"",notifications:"",user:null}]);
  const [tourguideList, settourguideList] = useState([{guideId: "1",userId: "",otherDetails: "",name: "",dob: "",languages: "",phonenNmber: "",costPerDay: 50,comments: "",notifications: "",user: null},{guideId: "1",userId: "",otherDetails: "",name: "",dob: "",languages: "",phonenNmber: "",costPerDay: 50,comments: "",notifications: "",user: null},{guideId: "1",userId: "",otherDetails: "",name: "",dob: "",languages: "",phonenNmber: "",costPerDay: 50,comments: "",notifications: "",user: null},{guideId: "1",userId: "",otherDetails: "",name: "",dob: "",languages: "",phonenNmber: "",costPerDay: 50,comments: "",notifications: "",user: null},{guideId: "1",userId: "",otherDetails: "",name: "",dob: "",languages: "",phonenNmber: "",costPerDay: 50,comments: "",notifications: "",user: null}]);
  const [eventList, seteventList] = useState([{eventId: "",userId: "",eventName: "",date: "",venue: "",price: 20,endTime: null,otherDetails: "",comments: "",notifications: "",user: null},{eventId: "",userId: "",eventName: "",date: "",venue: "",price: 20,endTime: null,otherDetails: "",comments: "",notifications: "",user: null},{eventId: "",userId: "",eventName: "",date: "",venue: "",price: 20,endTime: null,otherDetails: "",comments: "",notifications: "",user: null},{eventId: "",userId: "",eventName: "",date: "",venue: "",price: 20,endTime: null,otherDetails: "",comments: "",notifications: "",user: null},{eventId: "",userId: "",eventName: "",date: "",venue: "",price: 20,endTime: null,otherDetails: "",comments: "",notifications: "",user: null}]);
  const [hotelList, sethotelList] = useState([{hotelId: "",userId: "",hotelName: "",features: "",phoneNumber: "",district: "",venue: "",otherDetails: "",comments: "",notifications: "",user: null},{hotelId: "",userId: "",hotelName: "",features: "",phoneNumber: "",district: "",venue: "",otherDetails: "",comments: "",notifications: "",user: null},{hotelId: "",userId: "",hotelName: "",features: "",phoneNumber: "",district: "",venue: "",otherDetails: "",comments: "",notifications: "",user: null},{hotelId: "",userId: "",hotelName: "",features: "",phoneNumber: "",district: "",venue: "",otherDetails: "",comments: "",notifications: "",user: null},{hotelId: "",userId: "",hotelName: "",features: "",phoneNumber: "",district: "",venue: "",otherDetails: "",comments: "",notifications: "",user: null}]);
 
  

  useEffect( () => {
   fetch('https://localhost:44394/api/transportproviders').then((response) => {
      return response.json();
    }).then(responseData => {
       setTransportList(responseData);
    });
  },[]);
  

  useEffect(() => {
    fetch('https://localhost:44394/api/tourguides').then((response) => {
      return response.json();
    }).then(responseData => {
      settourguideList(responseData);
    });
  }, []);

  

  useEffect(() => {
    fetch('https://localhost:44394/api/eventplanners').then((response) => {
      return response.json();
    }).then(responseData => {
      seteventList(responseData);
    });
  }, []);

  useEffect(() => {
    fetch('https://localhost:44394/api/hotels').then((response) => {
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
        /> 
      
      </CardDeck>
    </div>
  );
}


export default ResultSlider;