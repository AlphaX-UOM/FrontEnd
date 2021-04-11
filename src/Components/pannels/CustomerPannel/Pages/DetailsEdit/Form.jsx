import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";

import { Button, Input, CardFooter, Form, Col, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';


import { InputLabel } from '@material-ui/core';

import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';

function Form1 (props){
  const [users, setUsers] = useState([]);
  const [Customers, setCustomers] = useState({ id: '', firstName: '', lastName: '', password: '', dob: '', address: '', email: '', contact: '', role: '' });

  useEffect(() => {
    fetch(
        `https://alphax-api.azurewebsites.net/api/users/${props.id}` //`https://alphax-api.azurewebsites.net/api/eventplannerservicereservations/${userId}`
    )

        .then((response) => {
            return response.json();
        })
        .then((responseData) => {

            //  setEvent(responseData)
          
            setUsers(responseData);
            console.log(responseData)
       


        });
}, []);
const actualname = users.firstName;
    const actuallast = users.lastName;
    const actuualTel = users.contact;
    const actuuaadd = users.address;

const UpdateEmployee = (e) => {

  e.preventDefault();
console.log(Customers.firstName)
if(Customers.firstName==="")
{
    console.log("Hello")
}

  var axios = require('axios');

  var data = JSON.stringify({ "id": users.id, "firstName": Customers.firstName === "" ? actualname : Customers.firstName, "lastName": Customers.lastName === "" ? actuallast : Customers.lastName, "password": users.password, "dob": users.dob, "address": Customers.address === "" ? actuuaadd : Customers.address, "email": users.email, "contact": Customers.contact === "" ? actuualTel : Customers.contact, "role": users.role,"imgURL":users.imgURL });

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

    <div >









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






</div>

  
  );
};
const mapStateToProps = (state) => {
  return {
      id: state.auth.userId,
  };
};


export default connect(mapStateToProps)(Form1);;
