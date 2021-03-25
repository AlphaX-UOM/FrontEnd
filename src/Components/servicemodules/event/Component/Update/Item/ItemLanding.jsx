import React from "react";
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

function ItemLanding(props) {
  // console.log("props in itemlanding ->"+props.location.data.id);
  // console.log(props.match.params.id)
  const [value, setValue] = React.useState(3);

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
                    name="simple-controlled"
                    value={value}
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
      <ItemComments />
    </div>
  );
}

export default ItemLanding;
