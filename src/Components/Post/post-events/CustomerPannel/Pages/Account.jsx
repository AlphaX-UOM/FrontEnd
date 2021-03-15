import React, { useState } from 'react';
import { connect } from "react-redux";
import Picture from './Picture';
import {  Button, Input,CardFooter, Form, Col, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

import { InputLabel } from '@material-ui/core';

import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';


function Account(props) {

    const [Customers, setCustomers] = useState({ id: '', firstName: '', lastName: '', password: '', dob: '', address: '', email: '', contact: '', role: '' });
    const UpdateEmployee = (e) => {

        e.preventDefault();



        var axios = require('axios');

        var data = JSON.stringify({ "id": props.userCred.id, "firstName": Customers.firstName, "lastName": Customers.lastName, "password": props.userCred.password, "dob": props.userCred.dob, "address": Customers.address, "email": props.userCred.email, "contact": Customers.contact, "role": props.userCred.role });

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




    };
    const onChange = (e) => {

        e.persist();

        setCustomers({ ...Customers, [e.target.name]: e.target.value });

    }
    return (

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Card>
                      <CardContent>
                            <div className="card-title mb-4">
                                <div className="d-flex justify-content-start">
                                    <Picture />
                                    <div className="middle" style={{ width: "70%" }}>

                                     <InputLabel>  <h2 className="d-block" style={{ fontsize: "1.5rem", fontWeight: "bold" }}>{props.userCred.firstName}   {props.userCred.lastName} </h2></InputLabel> 

                                    </div>
                                </div>
                            </div>


                        </CardContent>
                    </Card>
                </div>
            </div>

            <hr>
            </hr>


            <div className="col-12">



                <Row className="justify-content-left">


                    <Col sm="12">

                        <Card className="mx-4">

                            <CardContent className="p-4">


                                <Form onSubmit={UpdateEmployee}>
                               <InputLabel><h4>Edit Details</h4></InputLabel>    
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

                                    </CardFooter>
                                </Form>
                            </CardContent>
                        </Card>


                    </Col>
               

                </Row>

            </div>

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