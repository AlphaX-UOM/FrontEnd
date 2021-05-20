import React,{Component, useState }  from 'react';
import { connect } from "react-redux";
import { Container, Col, Row } from 'react-bootstrap';




function DateLeft(props){


 const[audience,setAudience]=useState();
 const[price,setPrice]=useState();

 const Changehandler = (event) => {
    setAudience(event.target.value);
    props.addAudData(event.target.value);
  };

  
 const ChangePrice = (event) => {
  setPrice(event.target.value);
  props.pricedData(event.target.value);
};



        return (

            <div>
          
                <Row>
        <Col>
                <div className="form-row tm-search-form-row">
                  <div className="form-group tm-form-group tm-form-group-pad tm-form-group-1">
                    <label htmlFor="inputCity"> Audience</label>
                    <select className="form-control tm-select"  name="audience"  onChange={Changehandler}>
                                        <option value="All">All</option>
                                        <option value="family">Family</option>
                                        <option value="21+">21+</option>
                                 
                                        

                                    </select>

                   
                  </div>

            </div>
            </Col>
            <Col>
           
                  <div className="form-group tm-form-group tm-form-group-pad tm-form-group-1">
                    <label htmlFor="inputCity">Price</label>
                    <select className="form-control tm-select"  name="price"  onChange={ChangePrice}>
                                        <option value="All">All</option>
                                        <option value="5000-">Less than $5000</option>
                                        <option value="5000+">Greater than $5000</option>
                                        

                                    </select>

                   
                  </div>
                  </Col>
            </Row>
            </div>
           
         

        );

    }
    const mapStateToProps = (state) => {
        return {
          mapdata: state.eventpnl.auddata,
          
        };
      };


    const mapDispatchToProps = (dispatch) => {
        return {
          addAudData: (auddata) => {
            dispatch({ type: "ADD_EVENT_AUD_DATA", auddata: auddata });
          },
          pricedData: (pricedata) => {
            dispatch({ type: "ADD_PRICE_DATA", pricedata: pricedata });
          },
        };
      };
      
      export default connect(mapStateToProps, mapDispatchToProps)(DateLeft);
