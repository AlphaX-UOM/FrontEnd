import React, { useEffect, useState } from 'react';
import './RoomResult.css';
import RoomResultItem from './RoomResultItem';
import RoomResultContacts from './RoomResultContacts';
import RoomResultFeatures from './RoomResultFeatures';
import RoomResultLanguages from './RoomResultLanguages';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import _ from "lodash";
import RoomRating from './RoomResultRating';

import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import CardContent from '@material-ui/core/CardContent';
import Accordion from 'react-bootstrap/Accordion';
import BedIcon from '@material-ui/icons/KingBed';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import ContactIcon from '@material-ui/icons/Contacts';
import TranslateIcon from '@material-ui/icons/Translate';
import { connect } from 'react-redux';



const RoomResult = (props) => {

    const { check_in, check_out, id } = props;

    // let passedId = props.location.data.id;

    // console.log(passedId);


    const [roomResult, setRoomResult] = useState([]);
    const [loading, setloading] = useState(false);


    useEffect(() => {
        setloading(true);
        Axios
            .get('https://alphax-api.azurewebsites.net/api/hotelsservices/' + id)
            .then((responseData) => {
                console.log(responseData);
                setRoomResult(responseData.data);
                setloading(false);
            })
            .catch(error => {
                console.log(error)
            })


    },
        []
    );



    const roomResultComponent = () => {

        return (

            <div>
                <RoomResultItem
                    id={roomResult.id}
                    name={roomResult.name}
                    roomType={roomResult.roomType}
                    capacity={roomResult.capacity}
                    amenities={roomResult.amenities}
                    pricePerDay={roomResult.pricePerDay}
                    roomImgURL01={roomResult.roomImgURL01}
                    roomImgURL02={roomResult.roomImgURL02}
                    roomImgURL03={roomResult.roomImgURL03}
                    numOfRooms={roomResult.numOfRooms}
                    checkIn={check_in}
                    checkOut={check_out}
                />
            </div>
        );

    }

    const roomResultFeatures = () => {
        return (
            <div>
                <RoomResultFeatures
                    roomfeatures={roomResult.features}
                />
            </div>
        );
    }

    const roomResultContacts = () => {
        return (
            <div>
                <RoomResultContacts
                    pnumber={roomResult.pnumber}
                    contactName={roomResult.contactName}
                    altPnumber={roomResult.altPnumber}
                />
            </div>
        );
    }

    const roomResultLanguages = () => {
        return (
            <div>
                <RoomResultLanguages
                    languages={roomResult.languages}
                />
            </div>
        );
    }

    var sectionStyle = {
        backgroundImage: "url(" + roomResult.hotelImgURL + ")",
        backgroundSize: "cover",
        position: "relative",
        height: "250px",
    };

    var text = {
        backgroundColor: "rgb(0,0,0)",
        backgroundColor: "rgba(0,0,0, 0.4)",
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    }




    return (

        <div className="container-flex" >
            <br />
            <div className="container" style={sectionStyle}>
                <br />
                <div className="container" style={text}>
                    <div className="container" >
                        <br />
                        <h2>{roomResult.name} - {roomResult.roomType}</h2>
                        <br />
                    </div>

                    <div className="container" >
                        <br />
                        <RoomRating
                            id={roomResult.id}
                        />
                        <br />
                    </div>
                </div>
            </div>



            <br />
            <div className="container">

                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header className="roomresult-cardheader">
                            <Accordion.Toggle as={Navbar} variant="light" eventKey="0">
                                <div className="col-1"><BedIcon /></div>
                                  Select number of rooms you want!
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>



                                <React.Fragment>

                                    <div className="container mt-4">

                                        <ul className="list-group">{roomResultComponent()}</ul>

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
                                <Card.Header className="roomresult-cardheader">
                                    <div className="row">
                                        <div className="col-1">
                                            <RoomServiceIcon />
                                        </div>
                                        <div className="col-1">
                                        </div>
                                        <div className="col-10">
                                            Features
                                            </div>
                                    </div>
                                </Card.Header>
                                <CardContent>
                                    {roomResultFeatures()}
                                </CardContent>
                            </Card>
                        </div>
                        <div className="col-6">
                            <Card>
                                <Card.Header className="roomresult-cardheader">
                                    <div className="row">
                                        <div className="col-1">
                                            <ContactIcon />
                                        </div>
                                        <div className="col-1">
                                        </div>
                                        <div className="col-10">
                                            Contacts
                                            </div>
                                    </div>
                                </Card.Header>
                                <CardContent>
                                    {roomResultContacts()}
                                </CardContent>
                            </Card>
                            <br />
                            <Card>
                                <Card.Header className="roomresult-cardheader">
                                    <div className="row">
                                        <div className="col-1">
                                            <TranslateIcon />
                                        </div>
                                        <div className="col-1">
                                        </div>
                                        <div className="col-10">
                                            We Communicate In
                                            </div>
                                    </div>
                                </Card.Header>
                                <CardContent>
                                    {roomResultLanguages()}
                                </CardContent>
                            </Card>

                        </div>
                    </div>
                </div>



                {/* <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Card>
                                <Card.Header>
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
                                    {roomResultFeatures()}
                                </CardContent>
                            </Card>
                        </div>
                        <div className="col-6">
                            <Card>
                                <Card.Header>
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
                                    {roomResultContacts()}
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div> */}



                <br />

            </div>

        </div>
    );

}

const mapStateToProps = (state) => {
    return {


        check_in: state.hotel_input_reducer.check_in,
        check_out: state.hotel_input_reducer.check_out,
        id: state.hotel_input_reducer.selected_roomid,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        //

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomResult);