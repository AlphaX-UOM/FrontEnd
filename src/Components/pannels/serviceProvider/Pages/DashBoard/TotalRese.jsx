import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import axios from "axios";




 function TotalRese(props) {
  let userId = props.id;

  const [eventList, setEventList] = useState(null);
  const [guideList, setGuideList] = useState(null);
  const [hotelList, setHotelList] = useState(null);
  const [transList, setTransList] = useState(null);

  useEffect(() => {
    fetch(
      `https://alphax-api.azurewebsites.net/api/eventplannerservicereservations` 
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        responseData = responseData.filter(item => item.cancellation == null && item.eventPlannerService.userID === userId);
        setEventList(responseData.reduce((total, pay) => total + 1, 0));
      });
  }, [userId]);


  useEffect(() => {
    fetch(
      `https://alphax-api.azurewebsites.net/api/tourguideservicereservations`   
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        responseData = responseData.filter(item => item.cancellation == null && item.tourGuideService.userID === userId);
        setGuideList(responseData.reduce((total, pay) => total + 1, 0));
      });
  }, [userId]);

    
  useEffect(() => {
    fetch(
      `https://alphax-api.azurewebsites.net/api/hotelsservicereservations`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        responseData = responseData.filter(item => item.cancellation == null && item.hotelsService.userID === userId);
        setHotelList(responseData.reduce((total, pay) => total + 1, 0));
      });
  }, [userId]);

  useEffect(() => {
    fetch(
        `https://alphax-api.azurewebsites.net/api/transportservices` //`https://alphax-api.azurewebsites.net/api/eventplannerservicereservations/${userId}`
    )

        .then((response) => {
            return response.json();
        })
        .then((responseData) => {

            //  setEvent(responseData)
            responseData = responseData.filter(item => item.userID === userId);
            setTransList(responseData.reduce((total, pay) => total + 1, 0));


        });
}, [userId]);







  return (
    <div>
    
    Events : {eventList}
    <br>
    </br>
    Guides : {guideList}
    <br>
    </br>
    Transport : {transList}
    <br>
    </br>
    Hotel : {hotelList}
    </div>
    
  );
}
const mapStateToProps = (state) => {
    return {
        id: state.auth.userId,
    };
};

export default connect(mapStateToProps, null)( TotalRese);