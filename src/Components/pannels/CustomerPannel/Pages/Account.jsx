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
import Modal from "react-bootstrap/Modal";



function Account(props) {
    let userId = props.myId;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
    const UpdatedCom = (e) => {
        e.preventDefault();
        setShow(true);

    }


    const UpdateEmployee = (e) => {

        e.preventDefault();
        console.log(Customers.firstName)
        if (Customers.firstName === "") {
            console.log("Hello")
        }

        var axios = require('axios');

        var data = JSON.stringify({ "id": users.id, "firstName": Customers.firstName === "" ? actualname : Customers.firstName, "lastName": Customers.lastName === "" ? actuallast : Customers.lastName, "password": users.password,"passwordHash":users.passwordHash,
        "passwordSalt":users.passwordSalt,"verified":users.verified, "dob": users.dob, "address": Customers.address === "" ? actuuaadd : Customers.address, "email": users.email, "contact": Customers.contact === "" ? actuualTel : Customers.contact, "role": users.role, "imgURL": users.imgURL });

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
setShow(false);
       


    };
    const onChange = (e) => {

        e.persist();

        setCustomers({ ...Customers, [e.target.name]: e.target.value });

    }
    return (

        <div className="container">
            <center>
                <div className="row">
                   
                    <div class="col-sm-3" >


                        <div className="row" >
                            <div>
                                <center>
                                    <h3>
                                    {users.firstName}   {users.lastName}
                                    </h3>
                              
                                </center>
                                <hr></hr>
                                
                            </div>
                            <div>
                                <Image src={users.imgURL} alt="img1" style={{ width: "255px", height: "225px" }} roundedCircle></Image>
                                <hr></hr>
                                <div>
                                    <Container triggerText={triggerText} onSubmit={onSubmit} data={props.myId} />

                                </div>
                          




                            </div>




                        </div>







                    </div>
                    <div class="col-sm-1">


                    </div>

              


                    
                    <div class="col-sm-8 ">
                    <form  onSubmit={UpdatedCom}>
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
                                <button className="btn btn-danger " type='submit'>Update Your Details</button>
                            </div>
                        </div>


                        </form>
                    </div>




                </div>


                <br>
                </br>

              
                <br></br>

                <div className="row">

              
                </div>
            </center>

               
 <div>
        <Modal show={show} onHide={handleClose}>
     
        <Modal.Body>Are you sure want to update?</Modal.Body>
        <Modal.Footer>
        <button className="btn btn-danger " type='submit'onClick={handleClose}>Close</button>
          <button className="btn btn-success" type='submit' onClick={UpdateEmployee}>   Save Changes
        </button>
         
        </Modal.Footer>
      </Modal>

 </div>
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