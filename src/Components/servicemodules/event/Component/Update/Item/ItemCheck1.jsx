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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Badge from "react-bootstrap/Badge";
import MoodBadIcon from '@material-ui/icons/MoodBad';



function ItemCheck1(props) {
  const [quantity, setQuantity] = useState(0);
  const [kidquantity, setkidQuantity] = useState(0);
  
  const[adultTot,setAdultTot]=useState(0);
  const[kidTot,setKidTot]=useState(0);
  const [startDate, setStartDate] = useState(new Date());
    const { add_to_cart} = props;
    const [nameList, setNameList] = useState([]);
    const [value, onChange] = useState(new Date());
    const [myevents,setmyEvents]=useState();

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


    
    useEffect(() => {
      fetch('https://alphax-api.azurewebsites.net/api/eventplannerservicereservations/')
      .then((response) => {
      
        return response.json();
      })
       .then((responseData) => {
    setmyEvents(responseData);
      responseData = responseData.filter(item => item.eventPlannerServiceID === nameList.id && (new Date(item.checkIn).getMonth()+1 ===new Date(startDate).getMonth()+1 & new Date(item.checkIn).getDate() ===new Date(startDate).getDate() &(new Date(item.checkIn).getFullYear() ===new Date(startDate).getFullYear())) );
    
          setAdultTot(responseData.reduce((total, pay) => total + pay.adultTikets, 0));
          setKidTot(responseData.reduce((total, pay) => total + pay.kidTickets, 0));
  
        
     
      //   }
        
       
      });
      console.log("adult tickets=> "+adultTot)

  }, [startDate]);



    const myhandler = (event) => {
   
      setStartDate(event)
     

     

      }
      const isWeekendday = date => {
        const day = date.getDay();
        return day === 0|| day === 6;
      };

      const isWeekday = date => {
        const day = date.getDay();
        return day !== 0 && day !== 6;
      };


    
     

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    var time = new Date(nameList.time);
    var newTime = time.getHours() + ':' + time.getMinutes() 

console.log("event price ->"+nameList.price);
  const increaseQuantity = () => {


    if ((nameList.adultTickets-adultTot)>quantity) {
      let myvar = quantity + 1;
   
    setQuantity(myvar);
    console.log("Quantity increased-> " + quantity);
    } else {
      window.alert("Maximum "+(nameList.adultTickets-adultTot)+" adult tickets are available");
    }
   
  };
  const increaseQuantity1 = () => {
    
    if ((nameList.kidTickets-kidTot)>kidquantity) {
      let myvar2 = kidquantity + 1;
      setkidQuantity(myvar2);
      console.log("Quantity increased-> " + kidquantity);
 
    } else {
      window.alert("Maximum "+(nameList.kidTickets-kidTot)+" kid tickets are available");
    }
   
   // let myvar2=kidquantity+1;
 
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      let myvar = quantity - 1;
      setQuantity(myvar);
      console.log("Quantity decreased-> " + quantity);
    } 
  };
  const decreaseQuantity1 = () => {
    if (kidquantity > 0) {
      let myvar = kidquantity - 1;
      setkidQuantity(myvar);
      console.log("Quantity decreased-> " + kidquantity);
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
        <h3><strong>{nameList.name}</strong></h3>
      <Card className="shadow-sm" style={{ width: "700px" }}>
       
        <Container>
          <Row>
            <br>
            </br>
        
          <Col align="right">
              <h5><Badge pill variant="warning">{nameList.price}$/per Adult</Badge></h5>
            </Col>
            <Col align="right">
              <h5>{nameList.audience==="All"?<Badge pill variant="warning"> ${nameList.pricePerKid} /per( kids below 12)  </Badge>  : <Badge pill variant="danger">Only For Adults</Badge> }</h5>
            </Col>
            <br />
          </Row>
          <Row> </Row>
          <Col><Button variant="secondary"><h5>Select Date </h5></Button></Col>
          <Col>  {nameList.frequency==="weekend"? <Badge pill variant="success"> Only weekends </Badge> : nameList.frequency==="week"? <Badge pill variant="success"> Only week days </Badge>:"" }</Col>
          <Row> </Row>
          <Row>
            
          <Col>
        {nameList.frequency==="weekend"? <DatePicker
               onChange={myhandler}
      selected={startDate}
      minDate={new Date()}
      filterDate={isWeekendday}
   
  
    /> : nameList.frequency==="week"? <DatePicker
    onChange={myhandler}
selected={startDate}
minDate={new Date()}
filterDate={isWeekday}
   


/>: <DatePicker
    onChange={myhandler}
selected={startDate}
minDate={new Date()}

   


/> }
              
             
             
    </Col>
    <Col> <Button variant="secondary"><h5>Time : {newTime}AM</h5></Button></Col>


   
            
          </Row>
          <Row>

            <Col><Button variant="secondary"><h6>Adults </h6></Button></Col>
            <Col><h6> {nameList.audience==="All"?<Button variant="secondary"><h6>Kids </h6></Button> :" " }</h6>
            {/* <h5><Badge pill variant="warning">only {nameList.adultTickets-adultTot} tickets for Adults</Badge></h5>  */}
   
</Col>
          
          </Row>
        
          <Row>
         
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
              <Col></Col>

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
            
                  {(nameList.adultTickets-adultTot)===0 ?<p> Tickets Not Available   <MoodBadIcon/></p>  : 
                  (quantity===0 && kidquantity===0) ? "" : <Link to="/shoppingcart">
                  <button type="button" class="btn btn-success" onClick={()=>nameList.audience==="All"?
                  kidquantity===0? add_to_cart(nameList.name,nameList.price,nameList.id,quantity,date,"EventService",(quantity*nameList.price),quantity):
                  quantity===0? add_to_cart(nameList.name,nameList.pricePerKid,nameList.id,kidquantity,date,"EventService",(kidquantity*nameList.pricePerKid),kidquantity):
                 add_to_cart(nameList.name,nameList.price,nameList.id,quantity,date,"EventService",(quantity*nameList.price),quantity)&add_to_cart(nameList.name,nameList.pricePerKid,nameList.id,kidquantity,date,"EventService",(kidquantity*nameList.pricePerKid),kidquantity):
                add_to_cart(nameList.name,nameList.price,nameList.id,quantity,date,"EventService",(quantity*nameList.price),quantity)

              }>
                  <AddShoppingCartIcon />
                  Add to Cart
                </button>
                </Link>
                     }
              
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
      
        add_to_cart:(item,cost,add_id,no_travellers,date,type,tot,unit) => dispatch(addToCart(item,cost,add_id,no_travellers,date,type,tot,unit))
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (ItemCheck1);