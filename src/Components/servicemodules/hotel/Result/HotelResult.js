import React, { useEffect, useState } from 'react';
import './HotelResult.css';
import HotelResultItem from './HotelResultItem';
import HotelResultFeatures from './HotelResultFeatures';
import HotelResultContacts from './HotelResultContacts';
import HotelResultLanguages from './HotelResultLanguages';
import HotelResultComment from './HotelResultComments';
import HotelRating from './HotelResultRating';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import _ from "lodash";

import Table from 'react-bootstrap/Table';
import Navbar from 'react-bootstrap/Navbar';
import Accordion from 'react-bootstrap/Accordion';
import BedIcon from '@material-ui/icons/KingBed';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import ContactIcon from '@material-ui/icons/Contacts';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import TranslateIcon from '@material-ui/icons/Translate';


import Card from 'react-bootstrap/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

import url from '../../../../images/hotel-img/titlebarhotel.jpg'

import { connect } from "react-redux";




const HotelResult = (props) => {

    const { name, checkIn, checkOut, stars } = props;

    console.log("HotelResult" + name);
    console.log("HotelResult" + checkIn);
    console.log("HotelResult" + checkOut);
    console.log("HotelResult" + stars);

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        Axios
            .get('https://alphax-api.azurewebsites.net/api/hotelsservices')
            .then((responseData) => {
                console.log(responseData);
                setRooms(responseData.data);
            })
            .catch(error => {
                console.log(error)
            })


    },
        []
    );


    // const filterRooms = room.filter(item => {
    //     return item.name === passedname
    // }); room.filter(room => room.name === passedname)



    const roomsComponent = () => {
        return rooms.filter(room => room.name === name).map((room) => {
            return (

                <div>
                    <HotelResultItem
                        id={room.id}
                        name={room.name}
                        roomType={room.roomType}
                        capacity={room.capacity}
                        amenities={room.amenities}
                        pricePerDay={room.pricePerDay}
                        numOfRooms={room.numOfRooms}
                        roomImgURL01={room.roomImgURL01}
                        roomImgURL02={room.roomImgURL02}
                        roomImgURL03={room.roomImgURL03}
                        checkIn={checkIn}
                        checkOut={checkOut}
                    />
                </div>
            );
        });
    }

    let group = rooms.filter((ele, ind) => ind === rooms.findIndex(elem => elem.name === ele.name))

    const commentsComponent = () => {
        return group.filter(room => room.name === name).map((room) => {
            return (

                <div>
                    <HotelResultComment
                        id={room.id}
                        name={room.name}
                    />
                </div>
            );
        });
    }

    const ratingsComponent = () => {
        return group.filter(room => room.name === name).map((room) => {
            return (

                <div>
                    <HotelRating
                        id={room.id}
                        name={room.name}
                    />
                </div>
            );
        });
    }





    const roomsFeatures = () => {
        return group.filter(r => r.name === name).map((r) => {
            return (
                <div>
                    <HotelResultFeatures
                        features={r.features}
                    />
                </div>
            );
        });
    }

    const roomsContacts = () => {
        return group.filter(r => r.name === name).map((r) => {
            return (
                <div>
                    <HotelResultContacts
                        pnumber={r.pnumber}
                        contactName={r.contactName}
                        altPnumber={r.altPnumber}
                    />
                </div>
            );
        });
    }

    const roomsLanguage = () => {
        return group.filter(r => r.name === name).map((r) => {
            return (
                <div>
                    <HotelResultLanguages
                        languages={r.languages}
                    />
                </div>
            );
        });
    }

    var sectionStyle1 = {
        backgroundImage: "url(" + url + ")",
        backgroundSize: "cover",
        position: "relative",
        height: "250px",
    };

    var text1 = {
        backgroundColor: "rgb(0,0,0)",
        backgroundColor: "rgba(0,0,0, 0.4)",
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    }


    return (
        <div className="container-flex">
            <br />
           
            <div className="container" style={{sectionStyle1}}>
                <br />
                <div className="container" style={text1}>
                    <div className="container" >
                        <br />
                        <h2>{name}</h2>
                        <br />
                    </div>

                    <div className="container" >
                        <br />
                        {ratingsComponent()}
                        <br />
                    </div>
                </div>
            </div>
            <br />
            <div className="container">

                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header className="hotelresult-cardheader">
                            <Accordion.Toggle as={Navbar} variant="light" eventKey="0">
                                <div className="col-1"><BedIcon style={{ color: "#FFFFFF" }} /></div>
                                  Select room type for you!
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>


                                <React.Fragment>

                                    <div className="container mt-4">

                                        <ul className="list-group">{roomsComponent()}</ul>

                                    </div>
                                </React.Fragment>
                            </Card.Body>


                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <br />

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Card>
                                <Card.Header className="hotelresult-cardheader">
                                    <div className="row">
                                        <div className="col-1">
                                            <RoomServiceIcon style={{ color: "#FFFFFF" }} />
                                        </div>
                                        <div className="col-1">
                                        </div>
                                        <div className="col-10">
                                            Features
                                            </div>
                                    </div>
                                </Card.Header>
                                <CardContent>
                                    {roomsFeatures()}
                                </CardContent>
                            </Card>
                        </div>
                        <div className="col-6">
                            <Card>
                                <Card.Header className="hotelresult-cardheader">
                                    <div className="row">
                                        <div className="col-1">
                                            <ContactIcon style={{ color: "#FFFFFF" }} />
                                        </div>
                                        <div className="col-1">
                                        </div>
                                        <div className="col-10">
                                            Contacts
                                            </div>
                                    </div>
                                </Card.Header>
                                <CardContent>
                                    {roomsContacts()}
                                </CardContent>
                            </Card>
                            <br />
                            <Card>
                                <Card.Header className="hotelresult-cardheader">
                                    <div className="row">
                                        <div className="col-1">
                                            <TranslateIcon style={{ color: "#FFFFFF" }} />
                                        </div>
                                        <div className="col-1">
                                        </div>
                                        <div className="col-10">
                                            We Communicate In
                                            </div>
                                    </div>
                                </Card.Header>
                                <CardContent>
                                    {roomsLanguage()}
                                </CardContent>
                            </Card>

                        </div>
                    </div>
                </div>



                <br />

            </div>

            <br />
            <hr />
            <div className="container">
                <div className="row">
                    <h5>Reviews <ChatBubbleOutlineOutlinedIcon /></h5>
                </div>
                {commentsComponent()}

            </div>

        </div>
    );

}

const mapStateToProps = (state) => {
    return {

        name: state.hotel_input_reducer.name,
        checkIn: state.hotel_input_reducer.checkIn,
        checkOut: state.hotel_input_reducer.checkOut,
        stars: state.hotel_input_reducer.stars,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        //

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HotelResult);

