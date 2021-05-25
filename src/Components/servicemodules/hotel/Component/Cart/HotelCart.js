import React from 'react';
import './HotelCart.css';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { addToCart } from "../../../../../store/lib/actions";

import HouseIcon from '@material-ui/icons/House';
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import TodayRoundedIcon from '@material-ui/icons/TodayRounded';
import EventRoundedIcon from '@material-ui/icons/EventRounded';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShoppingCartItcon from '@material-ui/icons/ShoppingCart';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

const HotelCart = (props) => {

  const { add_to_cart } = props;
  const { id, selected_room_name, roomtype, pricePerDay, numofRooms, selected_room_checkIn, selected_room_checkOut, imgURL } = props;


  var today = new Date(),

    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  function numofDays(a, b) {
    var a = new Date(a);
    var b = new Date(b);
    var days = 0;
    console.log(b.getDate() - a.getDate());
    if (a.getMonth() + 1 === b.getMonth() + 1) {
      days = b.getDate() - a.getDate();
      return days;
    }
    else {
      days = (31 - a.getDate()) + b.getDate();
      return days;
    }
  }

  console.log("total" + numofDays(selected_room_checkIn, selected_room_checkOut) * pricePerDay);



  return (
    <Card className="hotelcart_root">
      <div className="hotelcart_detail">
        <CardContent className="hotelcart_content">
          <Typography component="h5" variant="h5" className="hotelcart_title">
            CheckOut Details
                </Typography>
          <hr />

          <List>
            <ListItem>
              <ListItemAvatar>
                <HouseIcon />
              </ListItemAvatar>
              <ListItemText>
                Selected Hotel:
                    </ListItemText>
              <ListItemText>
                {selected_room_name}
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemAvatar>
                <LocalHotelIcon />
              </ListItemAvatar>
              <ListItemText>
                Selected Room Type:
                    </ListItemText>
              <ListItemText>
                {roomtype}
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemAvatar>
                <AddCircleIcon />
              </ListItemAvatar>
              <ListItemText>
                Selected Num.of Rooms:
                    </ListItemText>
              <ListItemText>
                {numofRooms}
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemAvatar>
                <TodayRoundedIcon />
              </ListItemAvatar>
              <ListItemText>
                Check In Date:
                    </ListItemText>
              <ListItemText>
                {selected_room_checkIn}
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemAvatar>
                <EventRoundedIcon />
              </ListItemAvatar>
              <ListItemText>
                Check Out Date:
                    </ListItemText>
              <ListItemText>
                {selected_room_checkOut}
              </ListItemText>
            </ListItem>

          </List>







        </CardContent>
        <div className="hotelcart_control">
          <Link to="/shoppingcart">
            <Button onClick={() => props.add_to_cart(selected_room_name, pricePerDay, id, numofDays(selected_room_checkIn, selected_room_checkOut), date, 'Hotel', ((numofDays(selected_room_checkIn, selected_room_checkOut) * pricePerDay) * numofRooms), numofRooms,
              selected_room_checkIn, '', '', selected_room_checkOut, '', '')}>
              <ShoppingCartItcon className="hotelcart_icon" />
              <Typography>Click Here to Add to Cart</Typography>

            </Button>
          </Link>


        </div>
      </div>
      <CardMedia image={imgURL}
        className="hotelcart_cover"

        title="Live from space album cover"
      />
    </Card>
  );
}

const mapStateToProps = (state) => {
  return {
    id: state.hotel_input_reducer.id,
    selected_room_name: state.hotel_input_reducer.selected_room_name,
    roomtype: state.hotel_input_reducer.roomtype,
    pricePerDay: state.hotel_input_reducer.pricePerDay,
    numofRooms: state.hotel_input_reducer.numofRooms,
    selected_room_checkIn: state.hotel_input_reducer.selected_room_checkIn,
    selected_room_checkOut: state.hotel_input_reducer.selected_room_checkOut,
    imgURL: state.hotel_input_reducer.imgURL,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

    add_to_cart: (item, unit_price, add_id, no_travellers, Current_date, type, total_price, units, checkin_date, checkin_time, checkin_location, checkout_date, checkout_time, checkout_location) => dispatch(addToCart(item, unit_price, add_id, no_travellers, Current_date, type, total_price, units,
      checkin_date, checkin_time, checkin_location, checkout_date, checkout_time, checkout_location))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(HotelCart);