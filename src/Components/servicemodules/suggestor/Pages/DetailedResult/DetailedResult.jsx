import React, { useState, useEffect } from "react";
import { Card, CardColumns } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";
import { connect } from "react-redux";
import Spinner from '../ResultList/Spinner';
import { addToCart } from "../../../../../store/lib/actions";

function DetailedResultPage(props) {

  const { add_to_cart} = props;

var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  let tranId = props.selectId.transportId;
  let guideId = props.selectId.guidePlanId;
  let event01Id = props.selectId.event01PlanId;
  let event02Id = props.selectId.event02PlanId;
  let hotelId = props.selectId.hotelPlanId;

  const [mytransportList, setmyTransportList] = useState([]);
  const [mytourguideList, setmytourguideList] = useState([]);
  const [myevent01List, setmyevent01List] = useState([]);
  const [myevent02List, setmyevent02List] = useState([]);
  const [myhotelList, setmyhotelList] = useState([]);

  let [cart, setCart] = useState([]);
  // let localCart = localStorage.getItem("cart");

  useEffect(() => {
    fetch(
      `https://alphax-api.azurewebsites.net/api/transportservices/${tranId}`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setmyTransportList(responseData);
      });
  }, [tranId]);

  useEffect(() => {
    fetch(`https://alphax-api.azurewebsites.net/api/tourguideservices/${guideId}`)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setmytourguideList(responseData);
      });
  }, [guideId]);

  useEffect(() => {
    fetch(`https://alphax-api.azurewebsites.net/api/eventplannerservices/${event01Id}`)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setmyevent01List(responseData);
      });
  }, [event01Id]);

  useEffect(() => {
    fetch(`https://alphax-api.azurewebsites.net/api/eventplannerservices/${event02Id}`)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setmyevent02List(responseData);
      });
  }, [event02Id]);

  useEffect(() => {
    fetch(`https://alphax-api.azurewebsites.net/api/hotelsservices/${hotelId}`)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setmyhotelList(responseData);
      });
  }, [hotelId]);

  let reservations = [
    {
      id: tranId,
      name: mytransportList.name,
      price: mytransportList.pricePerDay,
      condition:"no. of passengers not considered, max no. of 3 passengers are permited",
      units: props.formdata.days,
      unitTotal: props.formdata.days * mytransportList.pricePerDay,
      serID: mytransportList.userID
    },
    {
      id: guideId,
      name: mytourguideList.name,
      price: mytourguideList.costPerDay,
      condition:"no. of customers are not considered",
      units: props.formdata.days,
      unitTotal: mytourguideList.costPerDay * props.formdata.days,
      serID: mytourguideList.userID
    },
    {
      id: event01Id,
      name: myevent01List.name,
      price: myevent01List.price,
      condition:"No refunds",
      units: props.formdata.travelers,
      unitTotal: myevent01List.price * props.formdata.travelers,
      serID: myevent01List.userID
    },
    {
      id: event02Id,
      name: myevent02List.name,
      price: myevent02List.price,
      condition:"No refunds",
      units: props.formdata.travelers,
      unitTotal: myevent02List.price * props.formdata.travelers,
      serID: myevent02List.userID
    },
    {
      id: hotelId,
      name: myhotelList.name,
      price: myhotelList.pricePerDay * props.formdata.days,
      condition:"2 customers per room considered",
      units: Math.round((props.formdata.travelers)/2),
      unitTotal: myhotelList.pricePerDay * props.formdata.days * (Math.round((props.formdata.travelers)/2)),
      serID:myhotelList.userID
    }
  ];





  const addItem = (item) => {
    //create a copy of our cart state, avoid overwritting existing state
    let cartCopy = [...reservations];

    //assuming we have an ID field in our item
    let { id } = item;

    //look for item in cart array
    let existingItem = cartCopy.find((cartItem) => cartItem.id == id);

    //if item already exists
    if (existingItem) {
      // this cause doubling the unit value initially ->  existingItem.units += item.units; //update item
    } else {
      //if item doesn't exist, simply add it
      cartCopy.push(item);
    }

    //update app state
    //  setCart(cartCopy);
      
    //make cart a string and store in local space
    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart);
  };


  const handleFormData = () => {
    props.addResData(reservations);
    reservations.map((item) => {
      addItem(item);
    });
let type = 'TransportService';
let checkin = props.formdata.checkin;
let checkout = props.formdata.checkout;
let totalUnit = mytransportList.pricePerDay*props.formdata.days;
let number = props.formdata.days;

    props.add_to_cart(mytransportList.name,mytransportList.pricePerDay, tranId,props.formdata.travelers,date,checkin,checkout,type,props.formdata.days,totalUnit,number);
    
    type = 'GuideService';
    totalUnit=mytourguideList.costPerDay*props.formdata.days;
    props.add_to_cart(mytourguideList.name,mytourguideList.costPerDay, guideId,props.formdata.travelers,date,checkin,checkout,type,props.formdata.days,totalUnit,number);
    
    type = 'EventService';
    totalUnit = myevent01List.price;
    number = 1;
    props.add_to_cart(myevent01List.name,myevent01List.price, event01Id,props.formdata.travelers,date,checkin,checkout,type,props.formdata.days,totalUnit,number);
    
    type = 'EventService';
    totalUnit = myevent02List.price;
    props.add_to_cart(myevent02List.name,myevent02List.price, event02Id,props.formdata.travelers,date,checkin,checkout,type,props.formdata.days,totalUnit,number);
    

    type = 'HotelService';
    totalUnit = myhotelList.pricePerDay * props.formdata.days * (Math.round((props.formdata.travelers)/2));
    number = props.formdata.days * (Math.round((props.formdata.travelers)/2));
    props.add_to_cart(myhotelList.name,myhotelList.pricePerDay, hotelId,props.formdata.travelers,date,checkin,checkout,type,props.formdata.days,totalUnit,number);

  };


  if((mytransportList.id === undefined)||(mytourguideList.id === undefined)||(myevent01List.id === undefined)||(myevent02List.id === undefined)||(myhotelList.id === undefined)){
    return(
        <Spinner />
    )
}



  return (
    <div>
      <div>
        <Card bg="warning">
          <CardColumns>
            <Card>
              <Card.Img
                variant="top"
                src="https://alawaeltravelandtourism.com/wp-content/uploads/2020/07/Madu-River-Boat-Safari.jpg"
              />
              <Card.Body>
                <Card.Title>Event -: {myevent01List.name}</Card.Title>
                <Card.Text>{myevent01List.otherDetails}</Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <Rating name="read-only" value={5} readOnly />
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://assets.vogue.com/photos/5a5fc7df5323061b7968b63b/16:9/w_2288,h_1287,c_limit/00-promo-sri-lanka.jpg"
              />
              <Card.Body>
                <Card.Title>
                  Transport Provider -: {mytransportList.name}
                </Card.Title>
                <Card.Text>{mytransportList.description}</Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <Rating name="read-only" value={5} readOnly />
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://res.cloudinary.com/comtech/image/upload/v1490467981/vslt/banner-slide4.jpg"
              />
              <Card.Body>
                <Card.Title>Event -: {myevent02List.name}</Card.Title>
                <Card.Text>{myevent02List.otherDetails}</Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <Rating name="read-only" value={5} readOnly />
              </Card.Footer>
            </Card>
            <Card bg="primary" text="purple" className="text-center p-3">
              <blockquote className="blockquote mb-0 card-body">
                <p>
                  This package includes many more events and destinations.
                  Select the package to
                  <p>
                    <Link to="/shoppingcart">
                      <button class="btn btn-warning" onClick={handleFormData}>
                        Get Started!
                      </button>
                    </Link>
                  </p>
                </p>
              </blockquote>
            </Card>
            <Card className="text-center" bg="success">
              <Card.Body>
                <Card.Text>
                  You can edit the package or go-back to see other suggestions
                  or skip to plan yourself.
                  <p></p>
                  <p>
                    <div className="container">
                      <div className="row">
                        <div className="col-4">
                          <Link to="/result">
                            <button class="btn btn-primary">Go Back</button>
                          </Link>
                        </div>
                        <div className="col-4">
                          <Link to="/payment">
                            <button
                              class="btn btn-success"
                              onClick={handleFormData}
                            >
                              Edit
                            </button>
                          </Link>
                        </div>
                        <div className="col-4">
                          <Link to="/">
                            <button class="btn btn-danger">Skip</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img src="https://theluxuryeditor.com/wp-content/uploads/2018/07/109055465.jpg" />
            </Card>
            <Card className="text-center">
              <Card.Title>Hotel :- {myhotelList.name}</Card.Title>
              <blockquote className="blockquote mb-0 card-body">
                <p>{myhotelList.features}</p>
              </blockquote>
              <Card.Footer className="text-center">
                <Rating name="read-only" value={5} readOnly />
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://www.worldtravelguide.net/wp-content/uploads/2019/03/shu-gen-Sri-Lanka-on-wooden-sign-269107001-1440x823.jpg"
              />
              <Card.Body>
                <Card.Title>Tour Guide -: {mytourguideList.name}</Card.Title>
                <Card.Text>{mytourguideList.otherDetails}</Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <Rating name="read-only" value={5} readOnly />
              </Card.Footer>
            </Card>
          </CardColumns>
        </Card>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    selectId: state.eventpnl.selectId,
    formdata: state.eventpnl.formdata,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addResData: (reservations) => {
      dispatch({ type: "ADD_RESERVATIONS", reservations: reservations });
    },
    add_to_cart:(item,price,add_id,no_travellers,date,checkin,checkout,type,days,totalUnit,number) => {
      dispatch(addToCart(item,price,add_id,no_travellers,date,checkin,checkout,type,days,totalUnit,number));
    },
    add_to_cart:(item,price,add_id,no_travellers,date,checkin,checkout,type,days,totalUnit,number) => {
      dispatch(addToCart(item,price,add_id,no_travellers,date,checkin,checkout,type,days,totalUnit,number));
    },
    add_to_cart:(item,price,add_id,no_travellers,date,checkin,checkout,type,days,totalUnit,number) => {
      dispatch(addToCart(item,price,add_id,no_travellers,date,checkin,checkout,type,days,totalUnit,number));
    },
    add_to_cart:(item,price,add_id,no_travellers,date,checkin,checkout,type,days,totalUnit,number) => {
      dispatch(addToCart(item,price,add_id,no_travellers,date,checkin,checkout,type,days,totalUnit,number));
    },
    add_to_cart:(item,price,add_id,no_travellers,date,checkin,checkout,type,days,totalUnit,number) => {
      dispatch(addToCart(item,price,add_id,no_travellers,date,checkin,checkout,type,days,totalUnit,number));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailedResultPage);
