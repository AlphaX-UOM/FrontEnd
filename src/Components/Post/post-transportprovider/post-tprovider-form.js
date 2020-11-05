import React,{ useState, useEffect,Component } from 'react';
import './post-tprovider-form.css';
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom';
import axios from 'axios'

class PostTproviderForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:'',
            email:'',
            address:'',
            telephone:'',
            district:''

        };

    }


    Changehandler = (event)=>{
        this.setState({ [event.target.name]: event.target.value })
    }


    handleSubmit = e=>{

        e.preventDefault();
        console.log(this.state)
        axios
            .post('http://localhost:5000/TransportProvider/Post', {
                name:"Az",
                userid:1,
                Costperday:25.0,
                Phonenumber:"077290",
                TypesofVehicle:"Suv",
                Description:"Toyota Allion"
            })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })


    }

    render() {

        return (
            <div className="container-fluid mback">
                <br/>
                <div className="container ">

                    <form className="fback" onSubmit={this.handleSubmit}>

                        <h1 className="h4 h1style"><strong>Fill in the details</strong></h1>
                        <hr/>
                        <div className="row formmarge">
                            <div className="col-sm-2">

                            </div>
                            <div className="col-sm-6 ">
                                <label htmlFor="name">Name</label>
                                <input type="Text" className="form-control" id="name" name="name"
                                      value={this.state.name} onChange={this.Changehandler}/>
                            </div>
                            <div className="col-sm-4">

                            </div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-6">
                                <label htmlFor="inputEmail4">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" name="email"
                                       value={this.state.email} onChange={this.Changehandler}     />
                            </div>
                            <div className="col-sm-4"></div>
                        </div>
                        <div className="row formmarge">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-6">
                                <label htmlFor="Address">Address</label>
                                <input type="Address" name="address" className="form-control" id="Address"
                                       value={this.state.address} onChange={this.Changehandler}  />
                            </div>
                            <div className="col-sm-4"></div>
                        </div>
                        <div className="row formmarge">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-6">
                                <label htmlFor="pnumber">TelePhone</label>
                                <input type="number" name="telephone" className="form-control" id="pnumber"
                                       value={this.state.telephone} onChange={this.Changehandler}   />
                            </div>
                            <div className="col-sm-4"></div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-6">
                                <label htmlFor="district">District</label>
                                <input type="Text" className="form-control" name="district" id="district"
                                       value={this.state.district} onChange={this.Changehandler} />
                            </div>
                            <div className="col-sm-4"></div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-sm-2">

                            </div>
                            <div className="col-sm-6">
                                <p>
                                    <small>Select vehicle type</small>
                                </p>
                            </div>
                            <div className="col-sm-4">

                            </div>
                        </div>


                        <div className="row formmarge">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-2">
                                <input className="form-check-input " type="checkbox" value="" id="defaultCheck1"/>
                                <label className="form-check-label" htmlFor="defaultCheck1">
                                    Car
                                </label>
                            </div>
                            <div className="col-sm-2">
                                <input type="Number" className="form-control" placeholder="No.Vehicles"/>
                            </div>
                            <div className="col-sm-2">
                                <input type="number" className="form-control" placeholder="Price Per Day"/>
                            </div>
                            <div className="col-sm-4"></div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-2"></div>
                            <div className="col-sm">
                                <input className="form-check-input " type="checkbox" value="" id="defaultCheck1"/>
                                <label className="form-check-label" htmlFor="defaultCheck1">
                                    Van
                                </label>
                            </div>
                            <div className="col-sm">
                                <input type="Number" className="form-control" placeholder="No.Vehicles"/>
                            </div>
                            <div className="col-sm">
                                <input type="number" className="form-control" placeholder="Price Per Day"/>
                            </div>
                            <div className="col-sm-4"></div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-2"></div>
                            <div className="col-sm">
                                <input className="form-check-input " type="checkbox" value="" id="defaultCheck1"/>
                                <label className="form-check-label" htmlFor="defaultCheck1">
                                    Suv
                                </label>
                            </div>
                            <div className="col-sm">
                                <input type="Number" className="form-control" placeholder="No.Vehicles"/>
                            </div>
                            <div className="col-sm">
                                <input type="number" className="form-control" placeholder="Price Per Day"/>
                            </div>
                            <div className="col-sm-4"></div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-2"></div>
                            <div className="col-sm">
                                <input className="form-check-input " type="checkbox" value="" id="defaultCheck1"/>
                                <label className="form-check-label" htmlFor="defaultCheck1">
                                    Bus
                                </label>
                            </div>
                            <div className="col-sm">
                                <input type="Number" className="form-control" placeholder="No.Vehicles"/>
                            </div>
                            <div className="col-sm">
                                <input type="number" className="form-control" placeholder="Price Per Day"/>
                            </div>
                            <div className="col-sm-4"></div>
                        </div>
                        <div className="row formmarge">
                            <div className="col-sm-2">

                            </div>
                            <div className="col-sm-5">

                            </div>
                            <div className="col-sm-5-center">
                                <button className="btn btn-primary" type="submit">Post ad</button>
                            </div>
                        </div>
                        <hr/>
                    </form>
                </div>
            </div>
        )
    }

};

export default PostTproviderForm;