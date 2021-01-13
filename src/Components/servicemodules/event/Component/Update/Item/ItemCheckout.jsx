import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";

function ItemCheckout() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    let myvar = quantity + 1;
    setQuantity(myvar);
    console.log("Quantity increased-> " + quantity);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      let myvar = quantity - 1;
      setQuantity(myvar);
      console.log("Quantity decreased-> " + quantity);
    } else {
      window.alert("Quantity must be at least one.");
    }
  };

  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <Card className="shadow-sm" style={{ width: "530px" }}>
        <Container>
          <Row>
            <br />
          </Row>
          <Row>
            <Col>
              <h5>Select Date and Travelers</h5>
            </Col>
            <Col align="right">
              <h4>20$</h4>
            </Col>
          </Row>
          <Row>
            <br />
          </Row>
          <Row>
            <Col>
              <form className={classes.container} noValidate>
                <TextField
                  id="datetime-local"
                  label="Select Date and Time"
                  type="datetime-local"
                  defaultValue="2017-05-24T10:30"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </Col>
            <Col>
              <TableCell align="right">
                <Button
                  style={{
                    maxWidth: "20px",
                    maxHeight: "20px",
                    minWidth: "20px",
                    minHeight: "20px",
                    background:
                      "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                    color: "white",
                  }}
                  onClick={increaseQuantity}
                >
                  +
                </Button>
                <Button
                  variant="contained"
                  disabled
                  style={{
                    maxWidth: "20px",
                    maxHeight: "20px",
                    minWidth: "20px",
                    minHeight: "20px",
                    color: "black",
                  }}
                >
                  <EmojiPeopleIcon /> * {quantity}
                </Button>
                <Button
                  style={{
                    maxWidth: "20px",
                    maxHeight: "20px",
                    minWidth: "20px",
                    minHeight: "20px",
                    background:
                      "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                    color: "white",
                  }}
                  onClick={decreaseQuantity}
                >
                  -
                </Button>
              </TableCell>
            </Col>
            <Col>
              <Button variant="outlined" color="secondary">
                <Brightness4Icon />
                Options
              </Button>
            </Col>
          </Row>
          <Row>
            <Col></Col>
            <Col xs={5}>
              <div>
                <div>
                  <br />
                </div>
                <button type="button" class="btn btn-warning">
                  <AddShoppingCartIcon />
                  Add to Cart
                </button>
              </div>
            </Col>
            <Col></Col>
          </Row>
          <div>
            <br />
          </div>
          <div>
            <ul>
              <li>No refunds for tickets</li>
              <li>Low Price Guarantee</li>
              <li>Reserve Now & Pay Later</li>
            </ul>
          </div>
        </Container>
      </Card>
    </div>
  );
}

export default ItemCheckout;
