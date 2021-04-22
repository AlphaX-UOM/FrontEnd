import React, { useEffect, useState } from 'react';
import './RoomResult.css';
import RoomResultItem from './RoomResultItem';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import _ from "lodash";

import Table from 'react-bootstrap/Table';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import BedIcon from '@material-ui/icons/KingBed';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import ContactIcon from '@material-ui/icons/Contacts';
import { connect } from 'react-redux';



const RoomResult = (props) =>{

    const { check_in, check_out } = props;

    let passedId = props.location.data.id;
    
    console.log(passedId);
    

    const [roomResult, setRoomResult] = useState([]);
    const [loading, setloading] = useState(false);
    const [search, setSearch] = useState('');

    useEffect(() => {
        setloading(true);
        Axios
            .get('https://alphax-api.azurewebsites.net/api/hotelsservices/'+passedId)
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
                        features={roomResult.features}
                        pricePerDay={roomResult.pricePerDay}
                        checkIn={check_in}
                        checkOut={check_out}
                    />
                </div>
            );
   
    }

    return (
        <div>

            <div className="container">
                <br/>
                <h2>{roomResult.name} - {roomResult.roomType}</h2>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-3">Ratings: </div>
                    <div className="col-4">Stars: </div>
                    <div className="col-3"></div>
                    <div className="col-1"></div>
                </div>
            </div>






            <br />
            <div className="container">

                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Navbar} variant="light" eventKey="0">
                                <div className="col-1"><BedIcon/></div>
                                  Select room type for you!
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <br />
                                <div className="container">

                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th className="tableName">Room Name</th>
                                                <th className="tableGuests">Number of Guests</th>
                                                <th className="tableSpecs">Specs</th>
                                                <th className="tablePrice">Price Per Day</th>
                                                <th className="a">Select num of rooms</th>
                                                <th className="b"></th>
                                            </tr>
                                        </thead>
                                    </Table>
                                </div>


                                <React.Fragment>

                                    <div className="container mt-4">

                                        <ul className="list-group">{roomResultComponent()}</ul>

                                    </div>
                                </React.Fragment>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                    <br/>
                <Accordion>
                    <Card>
                    <Card.Header>
                            <Accordion.Toggle as={Navbar} variant="light" eventKey="1">
                            <div className="col-1"><RoomServiceIcon/></div>
                                Facilities
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                List of Facilities 
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                    <br/>
                <Accordion>
                    <Card>
                    <Card.Header>
                            <Accordion.Toggle as={Navbar} variant="light" eventKey="2">
                            <div className="col-1"><ContactIcon/></div>
                                Contact 
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                Contact Details
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

                    <br/>

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