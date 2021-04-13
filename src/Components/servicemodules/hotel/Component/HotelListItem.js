import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import HotelResult from '../Result/HotelResult';
// import img1 from "../../../../images/hotel-slideshow/1.jpg"
// import img2 from "../../../../images/hotel-slideshow/3.jpg"
// import img3 from "../../../../images/hotel-slideshow/4.jpg"
// import img4 from "../../../../images/hotel-slideshow/5.jpg"
import './HotelListItem.css'


import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';



const HotelListItem = (props) => {

    console.log("listItem checkin"+props.checkIn);
    
    const [path , setPath] = useState();
    
    const SimpleDialog = (props) => {
        
        const { onClose, open } = props;
       
      
        const handleListItemClick = () => {
          onClose();
        };
      
        return (
          <Dialog  aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Please insert Check In and Check Out days to view available rooms!</DialogTitle>
            <List>
             
                <ListItem button className="avatar" onClick={() => handleListItemClick()}>
                  <ListItemText primary="OK" />
                
                </ListItem>
      
            </List>
          </Dialog>
        );
      }
    
    
    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        if (props.checkIn == '' || props.ckeckOut == '') {
            setOpen(true);
        } else {
            setPath('./hotelResult');
        }

    };

    const handleClose = () => {
        setOpen(false);
    };



    let data = {
        name: props.name,
        checkIn: props.checkIn,
        checkOut: props.checkOut,
    };


    return (
        <div>

            <br />



            <div className="tab-content clearfix container">


                <div className="row" >
                    <div className="tm-recommended-place-wrap">
                        <div className="tm-recommended-place">
                            <div className="">

                                <img src={props.imgURL} className="hotel_img_element" alt="" />


                            </div>
                            <div className="tm-recommended-description-box">
                                <h3 className="tm-recommended-title">{props.name}</h3>
                                <p className="tm-text-highlight"> <strong>{props.district}</strong></p>
                                <p><span className="text-body">Contact Number:</span> {props.pnumber}</p>
                                {/*<p className="tm-text-gray"><Ratings/></p>*/}
                                <p><span className="text-body">Address:</span> {props.venue}</p>
                                <p className="text-body"><span>Average Price per Person:</span> $ {props.pricePerDay}</p>
                                <p><span className="text-body">otherDetails:</span> </p>
                                <p>{props.otherDetails}</p>
                                <Link to={{pathname: path, data:data}}>
                                    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                                        SELECT
                                    </Button>
                                    <SimpleDialog open={open} onClose={handleClose} />
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



            <br />
        </div>
    );

}

export default HotelListItem;

/* 
            district: props.district,
            hotelAddress: props.hotelAddress,
            pNumber: props.pNumber,
            avgPrice: props.avgPrice,
            stars: props.stars*/


{/*<div className="container">*/ }

{/*<div className="row">*/ }
{/*<div className="col-sm-12">*/ }

{/*<Link  className="link textdec" onClick={props.clicked} to={`/hotelList/${props.id}`}>*/ }
{/*<div className="card"  >*/ }
{/*<div className="row no-gutters">*/ }
{/*<div className="col-md-4 img">*/ }
{/*</div>*/ }
{/*<div className="col-md-8">*/ }
{/*<div className="card-body">*/ }
{/*<p>*/ }
{/*<p className="text-success"><h5 className="card-title">{props.hotelName}</h5></p>*/ }
{/*<p className="text-right" >{props.district}</p>*/ }
{/*</p>*/ }
{/*<p className="text-body">{props.otherDetails}</p>*/ }
{/*<p><span className="text-body">Address:</span> {props.venue}</p>*/ }
{/*<p><span className="text-body">Contact Number:</span> {props.pnumber}</p>*/ }
{/*<p className="text-danger"><span>Average Price per Person:</span> {props.pricePerDay}</p>*/ }
{/*<p className="text-right"> <button type="button">Select</button></p>*/ }
{/*</div>*/ }
{/*</div>*/ }
{/*</div>*/ }
{/*</div>*/ }
{/*</Link>*/ }
{/**/ }
{/**/ }
{/*</div>*/ }
{/*</div>*/ }



{/*</div>*/ }


