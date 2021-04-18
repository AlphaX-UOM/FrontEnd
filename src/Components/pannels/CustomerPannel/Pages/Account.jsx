import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import Picture from './Picture';
import { Button, Input, CardFooter, Form, Col, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import Container from './PhotoEdit/container';
import Contan2 from './DetailsEdit/container';
import Typography from '@material-ui/core/Typography';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { InputLabel } from '@material-ui/core';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import Image from 'react-bootstrap/Image'
import HomeIcon from '@material-ui/icons/Home';



function Account(props) {
    let userId = props.myId;


    const triggerText = 'Change Photo';
    const onSubmit = (event) => {
        event.preventDefault(event);


    };


    const triggerText1 = 'Edit Details';
    const onSubmit1 = (event) => {
        event.preventDefault(event);


    };
    const [users, setUsers] = useState([]);
    const [eventTotal, setEventTotal] = useState(null);
    const [guideTotal, setGuideTotal] = useState(null);
    const [transTotal, setTransTotal] = useState(null);
    const [hotelTotal, setHotelTotal] = useState(null);

    useEffect(() => {
        fetch(
            `https://alphax-api.azurewebsites.net/api/users/${userId}` //`https://alphax-api.azurewebsites.net/api/eventplannerservicereservations/${userId}`
        )

            .then((response) => {
                return response.json();
            })
            .then((responseData) => {

                //  setEvent(responseData)

                setUsers(responseData);
                console.log(responseData)
                props.addUserData(responseData);

            });
    }, []);


    const [Customers, setCustomers] = useState({ id: '', firstName: '', lastName: '', password: '', dob: '', address: '', email: '', contact: '', role: '' });


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
    const actualname = users.firstName;
    const actuallast = users.lastName;
    const actuualTel = users.contact;
    const actuuaadd = users.address;



    const UpdateEmployee = (e) => {

        e.preventDefault();
        console.log(Customers.firstName)
        if (Customers.firstName === "") {
            console.log("Hello")
        }

        var axios = require('axios');

        var data = JSON.stringify({ "id": users.id, "firstName": Customers.firstName === "" ? actualname : Customers.firstName, "lastName": Customers.lastName === "" ? actuallast : Customers.lastName, "password": users.password, "dob": users.dob, "address": Customers.address === "" ? actuuaadd : Customers.address, "email": users.email, "contact": Customers.contact === "" ? actuualTel : Customers.contact, "role": users.role, "imgURL": users.imgURL });

        var config = {
            method: 'put',
            url: `https://alphax-api.azurewebsites.net/api/users/${users.id}`,
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
                    <div class="col-sm-2" >


                        <div className="row" >
                            <div>
                                <Image src={users.imgURL} alt="img1" style={{ width: "255px", height: "225px" }} roundedCircle></Image>
                                <div>
                                    <Container triggerText={triggerText} onSubmit={onSubmit} data={props.myId} />

                                </div>




                            </div>




                        </div>







                    </div>
                    <div class="col-sm-1">


                    </div>

              


                    
                    <div class="col-sm-8 ">
                    <form  onSubmit={UpdateEmployee}>
                        <div class="row ">
                            <div class="col-sm-1"></div>
                            <div class="col-1 "  style={{color:"green"}}><AccountBoxIcon></AccountBoxIcon></div>
                            <div class="col-4 " style={{color:"green"}}><h6 class="mb-0"><label>First Name</label></h6></div>
                            <div class="col-sm-4"><input type="text" className="form-control rounded-pill"
                                                         name="firstName"  placeholder={users.firstName} value={Customers.firstName}
                                                         onChange={onChange} 
                                                         /></div>
                         
                        </div>


                        <hr></hr>
                        <div class="row ">
                            <div class="col-sm-1"></div>
                            <div class="col-1 "  style={{color:"green"}}><AccountBoxIcon></AccountBoxIcon></div>
                            <div class="col-4 " style={{color:"green"}}><h6 class="mb-0"><label>Last Name</label></h6></div>
                            <div class="col-sm-4"><input type="text" className="form-control rounded-pill"
                                                         name="lastName"  placeholder={users.lastName} value={Customers.lastName}
                                                         onChange={onChange} 
                                                         /></div>
                         
                        </div>

                        
                        <hr></hr>


                        <div class="row ">
                            <div class="col-sm-1"></div>
                            <div class="col-1 "  style={{color:"green"}}><PhoneAndroidIcon/></div>
                            <div class="col-4 " style={{color:"green"}}><h6 class="mb-0"><label>Contact Number</label></h6></div>
                            <div class="col-sm-4"><input type="text" className="form-control rounded-pill"
                                                         name="contact"  placeholder={users.contact} value={Customers.contact}
                                                         onChange={onChange} 
                                                         /></div>
                         
                        </div>

                        
                        <hr></hr>

                        
                        <div class="row ">
                            <div class="col-sm-1"></div>
                            <div class="col-1 "  style={{color:"green"}}><HomeIcon></HomeIcon></div>
                            <div class="col-4 " style={{color:"green"}}><h6 class="mb-0"><label>Address</label></h6></div>
                            <div class="col-sm-4"><input type="text" className="form-control rounded-pill"
                                                         name="address"  placeholder={users.address} value={Customers.address}
                                                         onChange={onChange} 
                                                         /></div>
                         
                        </div>

                        
                        <hr></hr>



                        <div class="row">
                            <div class="col-sm-5"></div>
                            <div class="col-sm-4"></div>
                            <div class="col-sm-3">
                                <button className="btn btn-danger " type='submit'>Save</button>
                            </div>
                        </div>


                        </form>
                    </div>




                </div>


                <br>
                </br>

                {/* <div className="row">

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


                </div> */}
                <br></br>

                <div className="row">

                    {/* <div className="col-6">









                        <Card >

                            <CardContent >


                                <Form onSubmit={UpdateEmployee}>
                    
                                    <InputLabel>  <h4 className="d-block" style={{ fontsize: "1.5rem", fontWeight: "bold" }}>Edit Details</h4></InputLabel>


                                    <div className="form-row row">

                                        <label htmlFor="your-Fist-name"> First Name</label>
                                        <Input type="text" placeholder={users.firstName} name="firstName" id="firstName" value={Customers.firstName} onChange={onChange} />

                                    </div>
                                    <br></br>

                                    <div className="form-row row">
                                        <label htmlFor="your-Last-name"> Last Name</label>
                                        <Input type="text" placeholder={users.lastName} name="lastName" id="lastName" value={Customers.lastName} onChange={onChange} />

                                    </div>
                                    <br></br>
                                    <div className="form-row row">
                                        <label htmlFor="telephone"> Telephone</label>

                                        <Input type="text" placeholder={users.contact} name="contact" id="contact" value={Customers.contact} onChange={onChange} />
                                    </div>
                                    <br></br>
                                    <div className="form-row row">
                                        <label htmlFor="address"> Address</label>

                                        <Input type="text" placeholder={users.address} name="address" id="address" value={Customers.address} onChange={onChange} />
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






                    </div> */}

                </div>
            </center>
        </div>



    );
}


const mapDispatchToProps = (dispatch) => {
    return {
        addUserData: (userCred) => {
            dispatch({ type: "ADD_USER", userCred: userCred });
        }

    };
};
const mapStateToProps = (state) => {
    return {
        reservations: state.eventpnl.reservations,
        formdata: state.eventpnl.formdata,
        total: state.eventpnl.total,
        userCred: state.eventpnl.userCred,
        id: state.auth.userId,
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Account);;