import React, { useState, useEffect } from 'react';
import ResultComponent from './ResultComponent';
import { CardDeck } from 'react-bootstrap';
import { connect } from 'react-redux'



function ResultSlider(props) {
  console.log(props);
  console.log("travellers -> "+props.formdata.travelers);

  let travellers = props.formdata.travelers;
  let hotelcouple = Math.round(travellers/2);
  let budget = props.formdata.budget;
  let days = props.formdata.days;
  var eventBudget = Math.round(((budget/37)/travellers));
  var transBudget = Math.round(((budget*5)/37)/days);
  var guideBudget = Math.round((((budget*5)/37)/days));
  var hotelBudget = Math.round((((budget*25)/37)/(days*hotelcouple)));
  //1 room for 2 persons.
  //Transport service for max 3 person.

  const [transportList, setTransportList] = useState();
  const [tourguideList, settourguideList] = useState();
  const [eventList, seteventList] = useState();
  const [hotelList, sethotelList] = useState();
 
  console.log("event-> "+eventBudget);
  console.log("trans-> "+transBudget);
  console.log("guide-> "+guideBudget);
  console.log("hotel-> "+hotelBudget);
  

  useEffect( () => {
   fetch(`https://alphax-api.azurewebsites.net/api/transportservices?transvalue=${transBudget}`).then((response) => {
      return response.json();
    }).then(responseData => {
       setTransportList(responseData);
    });
  },[]);
  

  useEffect(() => {
    fetch(`https://alphax-api.azurewebsites.net/api/tourguideservices?guideValue=${guideBudget}`).then((response) => {
      return response.json();
    }).then(responseData => {
      settourguideList(responseData);
    });
  }, []);

  

  useEffect(() => {
    fetch(`https://alphax-api.azurewebsites.net/api/eventplannerservices?eventValue=${eventBudget}`).then((response) => {
      return response.json();
    }).then(responseData => {
      seteventList(responseData);
    });
  }, []);

  useEffect(() => {
    fetch(`https://alphax-api.azurewebsites.net/api/hotelsservices?hotelValue=${hotelBudget}`).then((response) => {
      return response.json();
    }).then(responseData => {
      sethotelList(responseData);
    });
  }, []);


  if(transportList === undefined){
    return <>Still loading...</>
  }
  if(tourguideList === undefined){
    return <>Still loading...</>
  }
  if(eventList === undefined){
    return <>Still loading...</>
  }
  if(hotelList === undefined){
    return <>Still loading...</>
  }
// console.log("Price for the first -> "+((eventList[(props.idss)-1].price * travellers)+(eventList[(props.idss)].price * travellers)+(transportList[(props.idss)-1].pricePerDay)+(tourguideList[(props.idss)-1].costPerDay * days)+(hotelList[(props.idss)-1].pricePerDay * days * hotelcouple)));
// console.log("price for event01-> "+eventList[(props.idss)-1].price * travellers);
// console.log("price for event02-> "+eventList[(props.idss)].price * travellers);
// console.log("price for transport-> "+transportList[(props.idss)-1].pricePerDay);
// console.log("price for guide-> "+tourguideList[(props.idss)-1].costPerDay * days);
// console.log("price for hotel-> "+hotelList[(props.idss)-1].pricePerDay * days * hotelcouple);
// console.log("days ->"+days);
// console.log("hotelcouple -> "+hotelcouple);
// console.log("hotelobject -> "+hotelList[(props.idss)-1].hotelName);
// console.log("hotel index -> "+hotelList[(props.idss)-1].price);





  return (
    <div>
      <CardDeck>
        <ResultComponent
           key={transportList.id}
          event01={eventList[(props.idss)-1].name}
          event02={eventList[(props.idss)].name}
          hotel={hotelList[(props.idss)-1].name}
          tourguide={tourguideList[(props.idss)-1].name}
          transport={transportList[(props.idss)-1].name}
          type='Experience'
          transId={transportList[(props.idss)-1].id}
          tourId={tourguideList[(props.idss)-1].id}
          event01Id={eventList[(props.idss)-1].id}
          event02Id={eventList[(props.idss)].id}
          hotelId={hotelList[(props.idss)-1].id}
          price={((eventList[(props.idss)-1].price * travellers)+(eventList[(props.idss)].price * travellers)+(transportList[(props.idss)-1].pricePerDay)+(tourguideList[(props.idss)-1].costPerDay * days)+(hotelList[(props.idss)-1].pricePerDay * days * hotelcouple))}
          travellers={travellers}
          budget={budget}
          days={days}
        />

         <ResultComponent
          key={transportList[props.idss].id}
          event01={eventList[props.idss].name}
          event02={eventList[(props.idss)+1].name}
          hotel={hotelList[props.idss].name}
          tourguide={tourguideList[props.idss].name}
          transport={transportList[props.idss].name}
          type='Budget'
          transId={transportList[(props.idss)].id}
          tourId={tourguideList[(props.idss)].id}
          event01Id={eventList[(props.idss)].id}
          event02Id={eventList[(props.idss)+1].id}
          hotelId={hotelList[(props.idss)].id}
          price={((eventList[(props.idss)].price * travellers)+(eventList[(props.idss)+1].price * travellers)+(transportList[(props.idss)].pricePerDay)+(tourguideList[(props.idss)].costPerDay * days)+(hotelList[(props.idss)].pricePerDay * days * hotelcouple))}
          travellers={travellers}
          budget={budget}
          days={days}
        />

        <ResultComponent
          key={transportList[(props.idss)+1].id}
          event01={eventList[(props.idss)+1].name}
          event02={eventList[(props.idss)-1].name}
          hotel={hotelList[(props.idss)+1].name}
          tourguide={tourguideList[(props.idss)+1].name}
          transport={transportList[(props.idss)+1].name}
          type='Luxury'
          transId={transportList[(props.idss)+1].id}
          tourId={tourguideList[(props.idss)+1].id}
          event01Id={eventList[(props.idss)+1].id}
          event02Id={eventList[(props.idss)-1].id}
          hotelId={hotelList[(props.idss)+1].id}
          price={((eventList[(props.idss)+1].price * travellers)+(eventList[(props.idss)-1].price * travellers)+(transportList[(props.idss)+1].pricePerDay)+(tourguideList[(props.idss)+1].costPerDay * days)+(hotelList[(props.idss)+1].pricePerDay * days * hotelcouple))}
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