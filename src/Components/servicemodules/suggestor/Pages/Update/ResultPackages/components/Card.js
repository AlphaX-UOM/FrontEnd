import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux'

const cardWidth = 400;
const borderRadius = 8;
const transition = 'all 0.45s ease';

const Screenshot = styled.figure`
  z-index: 200;
  position: relative;
  margin: 0;
  padding: 0;
  width: ${cardWidth}px;
  height: 200px;
  background: url(${(props) => props.image}) 0 0 no-repeat;
  background-size: cover;
  border-radius: ${borderRadius}px ${borderRadius}px 0 0;
  overflow: hidden;
  backface-visibility: hidden;
  transition: ${transition};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0);
    transition: ${transition};
  }
`;

const Content = styled.div`
  z-index: 200;
  position: relative;
  padding: 20px 20px 30px;
`;

const Title = styled.span`
  display: block;
  margin-bottom: 4px;
  font-size: 1.25em;
  font-weight: 500;
  transition: ${transition};
`;

const Description = styled.span`
  display: block;
  font-size: 1em;
  color: #877D7D;
  transition: ${transition};
  transition-delay: 0.04s;
`;

const BottomBar = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 10px;
  background: ${(props) => props.background && props.background};
  border-radius: 0 0 ${borderRadius}px ${borderRadius}px;
  transition: ${transition};
`;

const Style = styled.button`
  position: relative;
  flex-shrink: 0;
  width: ${cardWidth}px;
  text-align: left;
  background: #ffffff;
  border-radius: ${borderRadius}px;
  cursor: pointer;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.12), 0 20px 20px -10px rgba(0, 0, 0, 0.125);
  transition: ${transition};

  &:hover {
    transform: scale(1.04);

    ${Title},
    ${Description},
    ${BottomBar} {
      transform: scale(0.92);
    }

    ${Title} {
      transform: translateY(-10px);
    }

    ${Description} {
      transform: translateY(-12px);
    }

    ${BottomBar} {
      border-radius: ${borderRadius - 2}px;
      transform: translateY(-14px) scale(0.9);
    }

    ${Screenshot} {
      transform: translateY(4px) scale(0.92);
      border-radius: ${borderRadius - 2}px;

      &::before {
        background: rgba(0, 0, 0, 0.1);
      }
    }
  }
`;


function Card(props) {

  let history = useHistory();

  const handlePackageData = (event) => {
    let selectId = {
      transportId: event.transId,
      guidePlanId: event.tourId,
      event01PlanId: event.event01Id,
      event02PlanId: event.event02Id,
      hotelPlanId: event.hotelId,
      travellers: event.travellers,
      budget: event.budget,
      days: event.days
    }

    props.addIdData(selectId);
    props.addTotalData(props.price);
    console.log(event);
    
    history.push("/packagedetails");
  };


  return (
    <Style value={props} onClick={() => handlePackageData(props)}>
      <Screenshot image={props.image} />
      <Content>
        <Title><span class="badge bg-warning">{props.price}$</span></Title>
        <br />
        <br />
        <Description><span class="badge rounded-pill bg-primary text-dark">Transport Service</span>{props.description01}</Description>
        <br />
        <Description><span class="badge rounded-pill bg-success text-dark">Guide Service</span>{props.description02}</Description>
        <br />
        <Description><span class="badge rounded-pill bg-danger text-dark">Hotel</span>{props.description03}</Description>
        <br />
        <Description><span class="badge rounded-pill bg-info text-dark">Event 01</span>{props.description04}</Description>
        <br />
        <Description><span class="badge rounded-pill bg-info text-dark">Event 02</span>{props.description05}</Description>
        <br />
        <BottomBar background={props.hexa} />
      </Content>
    </Style>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addIdData: (selectId) => { dispatch({ type: 'ADD_SELECTED_DATA', selectId: selectId }) },
    addTotalData: (total) => {
      dispatch({ type: "ADD_PAYPAL_DATA", total: total });
    }
  }
}


export default connect(null, mapDispatchToProps)(Card);