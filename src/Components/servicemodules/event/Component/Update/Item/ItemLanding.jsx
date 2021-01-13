import React from "react";
import { Link } from "react-router-dom";
import Title from './ItemTitle';
import { Container,Col,Row } from 'react-bootstrap';
import ItemSlider from './ItemSlider';
import ItemCheckout from './ItemCheckout';

function ItemLanding(props) {

console.log("props ->"+props);

  return (
    <div>
        <Title />
        <div><br/></div>
        
        <Container fluid>
            <Row>
                <Col xs={10} md={7}>
                    <ItemSlider />
                </Col>
                <Col xs={8} md={4}>
                    <div><br/></div>
                    <div><br/></div>
                    <div><br/></div>
                    <ItemCheckout/>
                </Col>
            </Row>
        </Container>
        
        <p style={{textAlign:"center", fontStyle:'italic'}}>Welcome to the ItemLanding</p>
    </div>
  );
}



export default ItemLanding;