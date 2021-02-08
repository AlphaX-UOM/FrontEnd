import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container,Col,Row } from 'react-bootstrap';
import CategoryRightList from './CategoryRightList';
import CategoryLeftFilter from './CategoryLeftFilter';
import Title from '../Main/Title';
import Date from '../Main/Date';
import { connect } from 'react-redux'

function CategoryLanding(props) {


let type = props.type;
console.log("selected type->"+props.type);




  return (
    <div>
        <Title />
        <Date />
        <div><p><br/></p></div>
        <Container>
  <Row>
  <Col xs={6} md={4}>
      <CategoryLeftFilter />
    </Col>
    <Col xs={12} md={8}>
      <CategoryRightList type={type}/>
    </Col>
    
  </Row>
  </Container>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
      type: state.eventpnl.type
  }
}


export default connect(mapStateToProps)(CategoryLanding);