import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
import Button1 from 'react-bootstrap/Button';
import Brightness4Icon from "@material-ui/icons/Brightness4";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../../../../store/lib/actions";
import connect from "react-redux/es/connect/connect";
import DatePicker from 'react-date-picker';
import Badge from "react-bootstrap/Badge";



function ItemCheck1(props) {
  const [quantity, setQuantity] = useState(1);
  const [kidquantity, setkidQuantity] = useState(1);
    const { add_to_cart} = props;
    const [nameList, setNameList] = useState([]);
    const [value, onChange] = useState(new Date());

    useEffect(() => {
        fetch(
            'https://alphax-api.azurewebsites.net/api/eventplannerservices/' +
            props.userid
        )
            .then((res) => res.json())
            .then((data) => {
                setNameList(data);
            });
    }, []);

    // var today = new Date(),
    //     date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    var today = new Date(nameList.date);
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

console.log("event price ->"+nameList.price);
  const increaseQuantity = () => {
    let myvar = quantity + 1;
   // let myvar2=kidquantity+1;
    setQuantity(myvar);
    console.log("Quantity increased-> " + quantity);
  };
  const increaseQuantity1 = () => {
    let myvar = kidquantity + 1;
   // let myvar2=kidquantity+1;
    setkidQuantity(myvar);
    console.log("Quantity increased-> " + kidquantity);
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
  const decreaseQuantity1 = () => {
    if (kidquantity > 1) {
      let myvar = kidquantity - 1;
      setkidQuantity(myvar);
      console.log("Quantity decreased-> " + kidquantity);
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
      width: 400,
    },
  }));

  const classes = useStyles();



  const dispatch = useDispatch();
  const add = (item, quantity,kidquantity) => {
    dispatch(addToCart(item, quantity,kidquantity));
  };


  return (
    <div>
      <Card className="shadow-sm" style={{ width: "700px" }}>
        <Container>
          <Row>
            <br>
            </br>
          <h4><strong>{nameList.name}</strong></h4>
          <Col align="right">
              <h5><Badge pill variant="warning">{nameList.price}$/per Adult</Badge></h5>
            </Col>
            <Col align="right">
              <h5>{nameList.audience==="All"?<Badge pill variant="warning"> ${nameList.pricePerKid} /per Kid  </Badge>  : <Badge pill variant="danger">Only For Adults</Badge> }</h5>
            </Col>
            <br />
          </Row>
          <Row>
            <Col>
              <h5> Date </h5>
             
      {/* <DatePicker
        onChange={onChange}
        value={value}
      /> */}
   
            </Col>
            <Col><h6>Number of Adults</h6></Col>
            <Col><h6> {nameList.audience==="All"? "Number of Kids" :" " }</h6></Col>
          
          </Row>
        
          <Row>
            {/* <Col>
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
            </Col> */}
            <Col>
     {date}
      
            </Col>
            <Col>
              
              <TableCell align="right">
                <Button
                  style={{
                    maxWidth: "20px",
                    maxHeight: "20px",
                    minWidth: "10px",
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
              {nameList.audience==="All"? <TableCell align="right">
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
                  onClick={increaseQuantity1}
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
                  <EmojiPeopleIcon /> * {kidquantity}
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
                  onClick={decreaseQuantity1}
                >
                  -
                </Button>
              </TableCell> :" " }

          
              
            </Col>
            <Col>
             
            </Col>
          </Row>
          <Row>
            <Col></Col>
            <Col xs={5}>
              <div>
                <div>
                  <br />
                </div>
                <Link to="/shoppingcart">
                <button type="button" class="btn btn-success" onClick={()=>nameList.audience==="All"?add_to_cart(nameList.name,nameList.price,nameList.id,quantity,date,"Event",(quantity*nameList.price),quantity)&add_to_cart(nameList.name,nameList.pricePerKid,nameList.id,kidquantity,date,"Event",(kidquantity*nameList.pricePerKid),kidquantity):
                add_to_cart(nameList.name,nameList.price,nameList.id,quantity,date,"Event",(quantity*nameList.price),quantity)

              }>
                  <AddShoppingCartIcon />
                  Add to Cart
                </button>
                </Link>
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
const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // addEventData: (eventData) => { dispatch({type: 'ADD_Event_DATA', eventData: eventData} )}
        add_to_cart:(item,cost,add_id,no_travellers,date,type,tot,unit) => dispatch(addToCart(item,cost,add_id,no_travellers,date,type,tot,unit))
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (ItemCheck1);
