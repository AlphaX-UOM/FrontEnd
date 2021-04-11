import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Title from "./ItemTitle";
import { Container, Col, Row } from "react-bootstrap";
import ItemSlider from "./ItemSlider";
import ItemCheckout from "./ItemCheckout";
import ItemComments from "./ItemComments";
import ItemCheck1 from "./ItemCheck1";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { connect } from "react-redux";
function ItemLanding(props) {
  // console.log("props in itemlanding ->"+props.location.data.id);
  // console.log(props.match.params.id)
  const [total, setTotal] = useState(false);
  const [value, setValue] = useState(0);


  const [eventlist,setEventList]=useState(null);
useEffect(() => {
  fetch(
      `https://alphax-api.azurewebsites.net/api/eventplannerservicecomments` //`https://alphax-api.azurewebsites.net/api/eventplannerservicereservations/${userId}`
  )

      .then((response) => {
          return response.json();
      })
      .then((responseData) => {

          //  setEvent(responseData)
          responseData = responseData.filter(item => item.eventPlannerServiceID === props.match.params.id);
          setValue(responseData.reduce((total,pay1)=>total+ pay1.rating,0))
          responseData= responseData.filter((ele, ind) => ind === responseData.findIndex(elem => elem.userID === ele.userID))
          setTotal(responseData.reduce((total, pay) => total + 1, 0));
          setValue(responseData.reduce((total,pay1)=>total+ pay1.rating,0))
       



      });
}, [props.match.params.id]);

  return (
    <div>
      <Title />
      <div>
        <br />
      </div>

      <Container fluid>
        <Row>
          <Col>
            <ItemSlider userid={props.match.params.id} />
            <div>
         
              <Box component="fieldset" mb={3} borderColor="transparent">
                <center>
                  <Rating
                    name="half-rating-read"
                    value={value/total}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </center>
              </Box>
          
             
            </div>
          </Col>
          <Col>
            <div>
              <br />
            </div>
            <div>
              <br />
            </div>
            <div>
              <br />
            </div>
            <ItemCheck1 userid={props.match.params.id} />
            <div>
              <br />
            </div>
            <div>
              <br />
            </div>
            <div>
              <br />
            </div>

            <div>
              {/* <ItemComments /> */}
            </div>
          </Col>
        </Row>
      </Container>
      <ItemComments add_id={props.match.params.id}/>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    userCred: state.eventpnl.userCred,
  };
};

export default connect(mapStateToProps)(ItemLanding);

