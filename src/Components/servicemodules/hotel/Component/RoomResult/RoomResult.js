import React, { useEffect, useState } from 'react';
import './RoomResult.css';
import RoomResultItem from './RoomResultItem';
import RoomResultContacts from './RoomResultContacts';
import RoomResultFeatures from './RoomResultFeatures';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import _ from "lodash";
import RoomRating from './RoomResultRating';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import BedIcon from '@material-ui/icons/KingBed';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import ContactIcon from '@material-ui/icons/Contacts';
import CheckIcon from '@material-ui/icons/Check';
import { connect } from 'react-redux';



const RoomResult = (props) => {

    const { check_in, check_out } = props;

    let passedId = props.location.data.id;

    console.log(passedId);


    const [roomResult, setRoomResult] = useState([]);
    const [loading, setloading] = useState(false);


    useEffect(() => {
        setloading(true);
        Axios
            .get('https://alphax-api.azurewebsites.net/api/hotelsservices/' + passedId)
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
            return(
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

  


    return (
        <div>

            <div className="container">
                <br />
                <h2>{roomResult.name} - {roomResult.roomType}</h2>
                <br />
            </div>

<div className="container">
                <br />
                <RoomRating
                id={roomResult.id}
                />
                <br />
            </div>




            <br />
            <div className="container">

                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
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
                <Accordion>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Navbar} variant="light" eventKey="1">
                                <div className="col-1"><RoomServiceIcon /></div>
                                Facilities
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <div>
                                <List>
                                    {roomResultFeatures()}
                                </List>
                                </div>                               
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <br />
                <Accordion>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Navbar} variant="light" eventKey="2">
                                <div className="col-1"><ContactIcon /></div>
                                Contact
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                {roomResultContacts()}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

                <br />

            </div>

        </div>
    );

}

const mapStateToProps = (state) => {
    return {


        check_in: state.hotel_input_reducer.check_in,
        check_out: state.hotel_input_reducer.check_out,


    };
};

const mapDispatchToProps = dispatch => {
    return {
        //

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomResult);