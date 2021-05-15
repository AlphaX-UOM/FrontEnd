import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import './RoomResultItem.css';

import Card from '@material-ui/core/Card';
import Carousel from 'react-bootstrap/Carousel';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';

import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import CheckIcon from '@material-ui/icons/Check';



const RoomResultItem = (props) => {


    const [numofRooms, setNumofRooms] = useState();
    const [bookings, setBookings] = useState([]);

    // const amenity = props.amenities.split(",");

    // const amenitylist = amenity.map((item) =>
    //     <ListItem style={{ padding: "1px" }}>
    //         <ListItemAvatar>
    //             <CheckIcon />
    //         </ListItemAvatar>
    //         <ListItemText style={{ fontSize: "10px" }}>
    //             {item}
    //         </ListItemText>
    //     </ListItem>
    // );

    useEffect(() => {
        Axios
            .get('https://alphax-api.azurewebsites.net/api/hotelsservicereservations/HotelRes?arrival=' + props.checkIn + '&&departure=' + props.checkOut + '&&serveId=' + props.id)
            .then((responseData) => {
                console.log("booking")
                console.log(responseData);
                setBookings(responseData.data);
            })
            .catch(error => {
                console.log(error)
            })


    },
        []
    );

    const totalBookings = 0;

    const count = () => {
        if (bookings === null) {
            return totalBookings;
        } else {
            return bookings.map((booking) => {
                return (
                    totalBookings = totalBookings + booking.numofRooms
                );
            });
        }
    }

    const handleNumofRooms = (event) => {
        setNumofRooms(event.target.value);
        console.log("numofrooms : " + event.target.value)
    }

    const [path, setPath] = useState();

    const SimpleDialog = (props) => {

        const { onClose, open } = props;


        const handleListItemClick = () => {
            onClose();
        };

        return (
            <Dialog aria-labelledby="simple-dialog-title" open={open}>
                <DialogContentText id="alert-dialog-description" style={{ padding: "10px" }}>
                    Please enter the number of rooms you wish to reserve.
            </DialogContentText>


                <Button onClick={() => handleListItemClick()} color="primary">
                    ok
                </Button>


            </Dialog>
        );
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        if (numofRooms == '' || numofRooms == 0) {
            setOpen(true);
        } else {
            setPath('./hotelCart');
        }

    };

    const handleClose = () => {
        setOpen(false);
    };

    const amenitylist = typeof props.amenities === "string" ? props.amenities.split(',') : ""

    const amenityitem = Object.entries(amenitylist).map(([key, value]) => {
        return (
            <ListItem>
                <ListItemAvatar>
                <CheckIcon />
                </ListItemAvatar>
                <ListItemText>
                    {value}
                </ListItemText>
            </ListItem>
        );

    });


    let data = {
        id: props.id,
        name: props.name,
        roomType: props.roomType,
        pricePerDay: props.pricePerDay,
        numofRooms: numofRooms,
        checkIn: props.checkIn,
        checkOut: props.checkOut,
        imgURL: props.imgURL,
    }


    return (
        <div>
            <Card>
                <div className="row" style={{ padding: "20px" }}>

                    <div className="col-sm-5" >
                        <Carousel className="carousel" >
                            <Carousel.Item>
                                <img src={props.roomImgURL02}
                                    className="d-block w-100"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <p>{props.roomType}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={props.roomImgURL03}
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <p>{props.roomType}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={props.roomImgURL01}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <p>{props.roomType}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                        <br />
                        <div>
                            <PeopleAltIcon /> Number of Guests: {props.capacity}
                        </div>
                    </div>

                    <div className="col-sm-7">

                        <div className="row">
                            <div className="col-sm-8"></div>
                            <div className="col-sm-4">
                                <Chip
                                    icon={<AttachMoneyIcon />}
                                    label={props.pricePerDay}
                                    color="primary"
                                    size="medium"
                                />
                            </div>
                        </div>

                        <div>
                            <h4>{props.roomType}</h4>
                        </div>
                        <hr />


                        <br />


                        <div className="row">
                            <div className="col-sm-6">
                                Amenities:
        <List>
                                    {amenityitem}
                                </List>
                            </div>
                            <div className="col-sm-6">
                                <p style={{ color: "red" }}>Select Number of rooms you want</p>
                                <div>
                                    <input type="number" min="0" className="roomresultitem-form-control button-room" aria-label="Username" aria-describedby="basic-addon1"
                                        onChange={handleNumofRooms} max={props.numOfRooms - count()} />
                                </div>

                                <br />
                                <div>
                                    <Link to={{ pathname: path, data: data }}>
                                        <Button variant="outlined" color="green"
                                            onClick={() => {
                                                handleClickOpen();
                                            }}>
                                            Reserve Rooms
                </Button>
                                        <SimpleDialog open={open} onClose={handleClose} />
                                    </Link>

                                </div>

                            </div>

                        </div>


                    </div>
                </div>


            </Card>


            <br />
            <br />







        </div>




    );
}

export default RoomResultItem;