import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { connect } from "react-redux";
import Spinner from "../../ResultList/Spinner";
import ErrorPage from "../../../Error/ErrorPage";
import Card from './components/Card';
import websites from './websites';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  min-height: -webkit-fill-available; /* mobile viewport bug fix */
  overflow-x: auto;
  scroll-behavior: smooth;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding-left: calc(50vw - 160px);

  /* Fake padding-right */
  &::after {
    content: '';
    position: relative;
    display: block;
    flex-shrink: 0;
    width: calc(50vw - 160px);
    height: 1px;
  }

  > button {
    margin-right: 40px;
  }

  /* Hide the others cards */
  > button:not(:first-child) {
    visibility: visible; /* switch to 'visible' */
  }
`;

function CardList(props) {

  let travellers = props.formdata.travelers;
  let hotelcouple = Math.round(travellers / 2);
  let budget = props.formdata.budget;
  let days = props.formdata.days;
  let Checkin = props.formdata.Checkin;
  let Checkout = props.formdata.Checkout;
  var eventBudget = Math.round(budget / 37 / travellers);
  var transBudget = Math.round((budget * 5) / 37 / days);
  var guideBudget = Math.round((budget * 5) / 37 / days);
  var hotelBudget = Math.round((budget * 25) / 37 / (days * hotelcouple));
  //1 room for 2 persons.
  //Transport service for max 3 person.

  const [transportList, setTransportList] = useState();
  const [tourguideList, settourguideList] = useState();
  const [eventList, seteventList] = useState();
  const [hotelList, sethotelList] = useState();
 

  useEffect(() => {
    fetch(
      `https://alphax-api.azurewebsites.net/api/transportservices/Sug?arrival=${Checkin}&&departure=${Checkout}&&transValue=${transBudget}`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setTransportList(responseData);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://alphax-api.azurewebsites.net/api/tourguideservices/Sug?arrival=${Checkin}&&departure=${Checkout}&&guideValue=${guideBudget}`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        settourguideList(responseData);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://alphax-api.azurewebsites.net/api/eventplannerservices/SugDefault?arrival=${Checkin}&&departure=${Checkout}&&eventValue=${eventBudget}`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        seteventList(responseData);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://alphax-api.azurewebsites.net/api/hotelsservices/Sug?arrival=${Checkin}&&departure=${Checkout}&&hotelValue=${hotelBudget}`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        sethotelList(responseData);
      });
  }, []);

  if (transportList === undefined) {
    return <Spinner />;
  }
  if (tourguideList === undefined) {
    return <Spinner />;
  }
  if (eventList === undefined) {
    return <Spinner />;
  }
  if (hotelList === undefined) {
    return <Spinner />;
  }
 


  const cardListComponent = () => {
    var dataObject = [];
    for(var i=0;i<5;i++) {
      dataObject[i] = [];
        dataObject[i][0]=transportList[i];
        dataObject[i][1]=tourguideList[i];
        dataObject[i][2]=hotelList[i];
        dataObject[i][3]=eventList[i];
        dataObject[i][4]=eventList[i+1];
        dataObject[i][5]=websites[i];
    }
    
    return dataObject.map((dataObject, index) => {
      console.log("transport description -> "+dataObject[0]);
      return (
        <Card
          key={index}
          hexa={dataObject[5].hexa}
          title={dataObject[5].title}
          description01={dataObject[0].name}
          transId={dataObject[0].id}
          description02={dataObject[1].name}
          tourId={dataObject[1].id}
          description03={dataObject[2].name}
          hotelId={dataObject[2].id}
          description04={dataObject[3].name}
          event01Id={dataObject[3].id}
          description05={dataObject[4].name}
          event02Id={dataObject[4].id}
          travellers={travellers}
          budget={budget}
          days={days}
          image={dataObject[5].image}
          price={
            dataObject[3].price * travellers +
            dataObject[4].price * travellers +
            dataObject[0].pricePerDay +
            dataObject[1].costPerDay * days +
            dataObject[2].pricePerDay * days * hotelcouple
          }
        />
      );
    });
  };


   try {
  return (
    <Page>
      <Grid>
          {cardListComponent()}
        </Grid>
    </Page>
  );
  } catch (e) {
    return <ErrorPage />;
  }
}


const mapStateToProps = (state) => {
  return {
    formdata: state.eventpnl.formdata
  };
};

export default connect(mapStateToProps)(CardList);
