import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';




function Account(props) {
    const [serviceProviders, setServiceProviders] = useState({ id: '', firstName: '', lastName: '', password: '', dob: '', address: '', email: '', contact: '', role: '' });
    const UpdateEmployee = (e) => {

        e.preventDefault();



        var axios = require('axios');

        var data = JSON.stringify({ "id": props.userCred.id, "firstName": serviceProviders.firstName, "lastName": serviceProviders.lastName, "password": props.userCred.password, "dob": props.userCred.dob, "address": serviceProviders.address, "email": props.userCred.email, "contact": serviceProviders.contact, "role": props.userCred.role });

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

        setServiceProviders({ ...serviceProviders, [e.target.name]: e.target.value });

    }


    return (
        <div>
                <div className="container">
		<div className="row">
           
			<div className="col-12">
				<div className="card">
					<div className="card-body">
						<div className="card-title mb-4">
							<div className="d-flex justify-content-start">
					
								<div className="middle" style={{width : "70%"}}>
									
									<h2 className="d-block" style={{fontsize: "1.5rem", fontWeight: "bold"}}>{props.userCred.firstName}   {props.userCred.lastName} </h2>
									
								</div>
							</div>
						</div>
                        </div>
                        </div>
                        </div>
                        </div>
                        <div className="row">

                        </div>
                        </div>
    );
            <div className="app flex-row align-items-center">
                
                <Container>
                    
                  <Row className="justify-content-center">
             
                        
                    <Col md="12" lg="10" xl="8">
                            
                      <Card className="mx-4">
                                
                        <CardBody className="p-4">


                                    <Form onSubmit={UpdateEmployee}>
                                    <h4>Edit Details</h4>
                                        <InputGroup className="mb-4">

                                            <label>First Name: </label>

                                            <Input type="text" placeholder={props.userCred.firstName} name="firstName" id="firstName" value={serviceProviders.firstName} onChange={onChange} />

                                        </InputGroup>
                                        <InputGroup className="mb-4">
                                            <label>Last Name: </label>




                                            <Input type="text" placeholder={props.userCred.lastName} name="lastName" id="lastName" value={serviceProviders.lastName} onChange={onChange} />

                                        </InputGroup>
                                        <InputGroup className="mb-4">

                                            <label>Contact Number: </label>




                                            <Input type="text" placeholder={props.userCred.contact} name="contact" id="contact" value={serviceProviders.contact} onChange={onChange} />

                                        </InputGroup>
                                        <InputGroup className="mb-4">

                                            <label>Address: </label>




                                            <Input type="text" placeholder={props.userCred.address} name="address" id="address" value={serviceProviders.address} onChange={onChange} />

                                        </InputGroup>
                                        <CardFooter className="p-4">

                                            <Row>

                                                <Col xs="12" sm="6">

                                                    <Button type="submit" className="btn btn-info mb-1" block><span>Save</span></Button>

                                                </Col>

                                                <Col xs="12" sm="6">

                                                    <Button className="btn btn-info mb-1" block><span>Cancel</span></Button>
                                                </Col>
                                            </Row>

                                        </CardFooter>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
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

