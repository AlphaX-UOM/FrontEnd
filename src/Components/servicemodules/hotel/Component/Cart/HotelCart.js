import React from 'react';
import './HotelCart.css';
import image from '../../../../../images/hotel-img/deluxe-room.jpg';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { addToCart } from "../../../../../store/lib/actions";


import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShoppingCartItcon from '@material-ui/icons/ShoppingCart';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const HotelCart = (props) => {

  const { add_to_cart} = props;

  

    let id = props.location.data.id;
    let name = props.location.data.name;
    let roomType = props.location.data.roomType;
    let pricePerDay = props.location.data.pricePerDay;
    let numofRooms = props.location.data.numofRooms;
    let checkIn = props.location.data.checkIn;
    let checkOut = props.location.data.checkOut;

    var today = new Date(),

        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    function numofDays(a,b) {
      var a = new Date(a);
      var b = new Date(b);
      var days = 0;
     console.log(b.getDate() - a.getDate());
      if(a.getMonth()+1===b.getMonth()+1){
        days = b.getDate() - a.getDate();
        return days;
      }
      else{
        days = (31 - a.getDate()) + b.getDate();
        return days;
      }
    }

    console.log("total"+numofDays(checkIn,checkOut)*pricePerDay);


    
        return (
          <Card className="hotelcart_root">
            <div className="hotelcart_detail">
              <CardContent className="hotelcart_content">
                <Typography component="h5" variant="h5" className="hotelcart_title">
                  CheckOut Details
                </Typography>
                    Selected Hotel: {name}
                <Typography component="h6">
                </Typography>
                    Selected RoomType: {roomType}
                <Typography component="h6">
                    Selected Num.of Rooms: {numofRooms}
                </Typography>
                <Typography component="h6">
                    Check In Date: {checkIn}
                </Typography>
                <Typography component="h6">
                    Check Out Date: {checkOut}
                </Typography>
                
                
              </CardContent>
              <div className="hotelcart_control">
                <Link to="/shoppingcart">
                <Button onClick={()=> props.add_to_cart(name, pricePerDay, id,'',date,'Hotel', (numofDays(checkIn,checkOut)*pricePerDay),numofRooms,
                          checkIn,'','',checkOut,'','')}>
                <ShoppingCartItcon className="hotelcart_icon" />
                    <Typography>Click Here to Add to Cart</Typography>
                  
                </Button>
                </Link>
                
                
              </div>
            </div>
            <CardMedia
              className="hotelcart_cover"
              image={image}
              title="Live from space album cover"
            />
          </Card>
        );
}

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {

    add_to_cart:(item, unit_price, add_id, no_travellers,Current_date,type,total_price,units,checkin_date,checkin_time,checkin_location,checkout_date,checkout_time,checkout_location) => dispatch(addToCart(item, unit_price, add_id, no_travellers,Current_date,type,total_price,units,
      checkin_date,checkin_time,checkin_location,checkout_date,checkout_time,checkout_location))
  };
};


export default connect(mapStateToProps,mapDispatchToProps)(HotelCart);