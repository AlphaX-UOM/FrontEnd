import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import Picture from './Picture';
import { Button, Input, CardFooter, Form, Col, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

import { InputLabel } from '@material-ui/core';

import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';


function Account(props) {
    const [eventTotal, setEventTotal] = useState(null);
    const [guideTotal, setGuideTotal] = useState(null);
    const [transTotal, setTransTotal] = useState(null);
    const [hotelTotal, setHotelTotal] = useState(null);

    const [Customers, setCustomers] = useState({ id: '', firstName: '', lastName: '', password: '', dob: '', address: '', email: '', contact: '', role: '' });
    let userId = props.myId;
    useEffect(() => {
        fetch(
            `https://alphax-api.azurewebsites.net/api/eventplannerservicereservations?userID=${userId}` //`https://alphax-api.azurewebsites.net/api/eventplannerservicereservations/${userId}`
        )
            .then((response) => {
                return response.json();
            })
            .then((responseData) => {

                //  setEvent(responseData)
                setEventTotal(responseData.reduce((total, pay) => total + 1, 0));
            });
    }, [userId]);
    useEffect(() => {
        fetch(
            `https://alphax-api.azurewebsites.net/api/tourguideservicereservations?userId=${userId}` //`https://alphax-api.azurewebsites.net/api/eventplannerservicereservations/${userId}`
        )
            .then((response) => {
                return response.json();
            })
            .then((responseData) => {

                //  setEvent(responseData)
                setGuideTotal(responseData.reduce((total, pay) => total + 1, 0));
            });
    }, [userId]);
    useEffect(() => {
        fetch(
            `https://alphax-api.azurewebsites.net/api/tourguideservicereservations?userId=${userId}` //`https://alphax-api.azurewebsites.net/api/eventplannerservicereservations/${userId}`
        )
            .then((response) => {
                return response.json();
            })
            .then((responseData) => {

                //  setEvent(responseData)
                setGuideTotal(responseData.reduce((total, pay) => total + 1, 0));
            });
    }, [userId]);
    useEffect(() => {
        fetch(
            `https://alphax-api.azurewebsites.net/api/hotelsservicereservations?userId=${userId}` //`https://alphax-api.azurewebsites.net/api/eventplannerservicereservations/${userId}`
        )
            .then((response) => {
                return response.json();
            })
            .then((responseData) => {

                //  setEvent(responseData)
                setHotelTotal(responseData.reduce((total, pay) => total + 1, 0));
            });
    }, [userId]);
    useEffect(() => {
        fetch(
            `https://alphax-api.azurewebsites.net/api/transportservicereservations?userId=${userId}` //`https://alphax-api.azurewebsites.net/api/eventplannerservicereservations/${userId}`
        )
            .then((response) => {
                return response.json();
            })
            .then((responseData) => {

                //  setEvent(responseData)
                setTransTotal(responseData.reduce((total, pay) => total + 1, 0));
            });
    }, [userId]);
    const actualname = props.userCred.firstName;
    const actuallast = props.userCred.lastName;
    const actuualTel = props.userCred.contact;
    const actuuaadd = props.userCred.address;
  


    const UpdateEmployee = (e) => {

        e.preventDefault();
      console.log(Customers.firstName)
      if(Customers.firstName==="")
      {
          console.log("Hello")
      }

        var axios = require('axios');

        var data = JSON.stringify({ "id": props.userCred.id, "firstName": Customers.firstName === "" ? actualname : Customers.firstName, "lastName": Customers.lastName === "" ? actuallast : Customers.lastName, "password": props.userCred.password, "dob": props.userCred.dob, "address": Customers.address === "" ? actuuaadd : Customers.address, "email": props.userCred.email, "contact": Customers.contact === "" ? actuualTel : Customers.contact, "role": props.userCred.role,"imgURL":props.userCred.imgURL });

        var config = {
            method: 'put',
            url: `https://alphax-api.azurewebsites.net/api/users/${props.userCred.id}`,
            headers: {
                'Content-Type': 'application/json',

            },
            data: data
        };
        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

        alert("Updated Successfully!")


    };
    const onChange = (e) => {

        e.persist();

        setCustomers({ ...Customers, [e.target.name]: e.target.value });

    }
    return (

        <div className="container">
            <center>
                <div className="row">
                    <div className="col-3" md={3}>


                        <div >

                            <div className="d-flex justify-content-start">
                                <Picture />
                                <div className="middle" style={{ width: "70%" }}>



                                </div>
                            </div>
                        </div>




                    </div>

                    <div className="col-2">

                    </div>

                    <div className="col-6">


                        <div >
                            <InputLabel><h2>{props.userCred.firstName}  {props.userCred.lastName}</h2></InputLabel>

                        </div>



                    </div>




                </div>


                <br>
                </br>

                <div className="row">

                    <div className="col-3">
                        <Card>
                            <CardContent>
                                <div >
                                    <InputLabel>Events Reservations</InputLabel>
                                    <InputLabel>{eventTotal}</InputLabel>

                                </div>


                            </CardContent>
                        </Card>

                    </div>

                    <div className="col-3">
                        <Card>
                            <CardContent>
                                <div >
                                    <InputLabel>Transport Reservations</InputLabel>
                                    {transTotal}

                                </div>


                            </CardContent>
                        </Card>

                    </div>

                    <div className="col-3">
                        <Card>
                            <CardContent>
                                <div >
                                    <InputLabel>Guide Reservations</InputLabel>
                                    {guideTotal}

                                </div>


                            </CardContent>
                        </Card>

                    </div>

                    <div className="col-3">
                        <Card>
                            <CardContent>
                                <div >
                                    <InputLabel>Hotels Reservations</InputLabel>
                                    {hotelTotal}
                                </div>


                            </CardContent>
                        </Card>

                    </div>


                </div>
                <br></br>

                <div className="row">

                    <div className="col-6">









                        <Card >

                            <CardContent >


                                <Form onSubmit={UpdateEmployee}>
                                    {/* <InputLabel><h4>Edit Details</h4></InputLabel>    
                               <hr>
                               </hr>
                                    <InputGroup className="mb-4">

                                        <InputLabel>First Name:    </InputLabel>

                                        <Input type="text" placeholder={props.userCred.firstName} name="firstName" id="firstName" value={Customers.firstName} onChange={onChange} />

                                    </InputGroup>
                                    <InputGroup className="mb-4">
                                        <InputLabel>Last Name:   </InputLabel>




                                        <Input type="text" placeholder={props.userCred.lastName} name="lastName" id="lastName" value={Customers.lastName} onChange={onChange} />

                                    </InputGroup>
                                    <InputGroup className="mb-4">

                                    <InputLabel>Contact Number: </InputLabel>




                                        <Input type="text" placeholder={props.userCred.contact} name="contact" id="contact" value={Customers.contact} onChange={onChange} />

                                    </InputGroup>
                                    <InputGroup className="mb-4">

                                    <InputLabel>Address: </InputLabel>




                                        <Input type="text" placeholder={props.userCred.address} name="address" id="address" value={Customers.address} onChange={onChange} />

                                    </InputGroup>
                                    <CardFooter className="p-4">

                                        <Row>

                                            <Col xs="12" sm="6">

                                                <Button type="submit" className="btn btn-info mb-1" block><span>Update</span></Button>

                                            </Col>

                                            <Col xs="12" sm="6">

                                                <Button className="btn btn-info mb-1" block><span>Cancel</span></Button>
                                            </Col>
                                        </Row>

                                    </CardFooter> */}
                                    <InputLabel>  <h4 className="d-block" style={{ fontsize: "1.5rem", fontWeight: "bold" }}>Edit Details</h4></InputLabel>


                                    <div className="form-row row">

                                        <label htmlFor="your-Fist-name"> First Name</label>
                                        <Input type="text" placeholder={props.userCred.firstName} name="firstName" id="firstName" value={Customers.firstName} onChange={onChange} />

                                    </div>
                                    <br></br>

                                    <div className="form-row row">
                                        <label htmlFor="your-Last-name"> Last Name</label>
                                        <Input type="text" placeholder={props.userCred.lastName} name="lastName" id="lastName" value={Customers.lastName} onChange={onChange} />

                                    </div>
                                    <br></br>
                                    <div className="form-row row">
                                        <label htmlFor="telephone"> Telephone</label>

                                        <Input type="text" placeholder={props.userCred.contact} name="contact" id="contact" value={Customers.contact} onChange={onChange} />
                                    </div>
                                    <br></br>
                                    <div className="form-row row">
                                        <label htmlFor="address"> Address</label>

                                        <Input type="text" placeholder={props.userCred.address} name="address" id="address" value={Customers.address} onChange={onChange} />
                                    </div>
                                    <br></br>

                                    <Row>

                                    </Row>
                                    <Row>
                                        <div className="form-row row">
                                            <br>
                                            </br>
                                            <br></br>


                                            <Col xs="12" sm="12">


                                            </Col>

                                            <Col xs="30" sm="12">
                                                <center>
                                                    <Button type="submit" className="btn btn-info mb-1" block><span>Update</span></Button>
                                                </center>



                                            </Col>
                                        </div>
                                    </Row>




                                </Form>
                            </CardContent>
                        </Card>






                    </div>

                </div>
            </center>
        </div>



    );
}
const mapStateToProps = (state) => {
    return {
        reservations: state.eventpnl.reservations,
        formdata: state.eventpnl.formdata,
        total: state.eventpnl.total,
        userCred: state.eventpnl.userCred
    };
};


export default connect(mapStateToProps)(Account);;