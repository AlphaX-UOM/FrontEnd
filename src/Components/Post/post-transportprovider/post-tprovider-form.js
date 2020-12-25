import React,{ Component } from 'react';
import './post-tprovider-form.css';

import {useHistory} from 'react-router-dom';
import axios from 'axios'

class PostTproviderForm extends Component{
    constructor(props) {
        super(props)
        this.state = {

                name: '',
                email: '',
                address: '',
                telephone: '',
                district: '',
                vehicletype: 'Car',
                costperday: '',
                description: '',

            disabled1: false,
            disabled2: false,
            disabled3: false,
            disabled4: false,



            carvalue:'Car',
            carcount:'',
            carcostperday:'',

            vanvalue:'Van',
            vancount:'',
            vancostperday:'',

            suvvalue:'Suv',
            suvcount:'',
            suvcostperday:'',

            busvalue:'Bus',
            buscount:'',
            buscostperday:'',




        }

    }

    Changehandler = (event)=>{
        this.setState({ [event.target.name]: event.target.value })
    }

    handlecarClik() {

        this.setState( {disabled1: !this.state.disabled1} )
    }

    handlevanClik() {
        this.setState( {disabled2: !this.state.disabled2} )
    }
    handlesuvClik() {
        this.setState( {disabled3: !this.state.disabled3} )
    }
    handlebusClik() {
        this.setState( {disabled4: !this.state.disabled4} )
    }

    handleSubmit = e=>{

        e.preventDefault();
        console.log(this.state)
        axios
            .post('http://localhost:5000/TransportProvider/Post', {
                name:this.state.name,
                Email:this.state.email,
                Address:this.state.address,
                District:this.state.district,
                Costperday:parseInt(this.state.costperday),
                Phonenumber:this.state.telephone,
                TypesofVehicle:this.state.vehicletype,
                Description:this.state.description
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
                            <div className="col-sm-3">

                            </div>
                            <div className="col-sm-6 ">
                                <label htmlFor="name">Business Name</label>
                                <input type="Text" className="form-control" id="name" name="name"
                                      value={this.state.name} onChange={this.Changehandler}/>
                            </div>
                            <div className="col-sm-3">

                            </div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <label htmlFor="inputEmail4">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" name="email"
                                       value={this.state.email} onChange={this.Changehandler}     />
                            </div>
                            <div className="col-sm-3"></div>
                        </div>
                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <label htmlFor="Address">Address</label>
                                <input type="Address" name="address" className="form-control" id="Address"
                                       value={this.state.address} onChange={this.Changehandler}  />
                            </div>
                            <div className="col-sm-3"></div>
                        </div>
                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <label htmlFor="pnumber">TelePhone</label>
                                <input type="number" name="telephone" className="form-control" id="pnumber"
                                       value={this.state.telephone} onChange={this.Changehandler}   />
                            </div>
                            <div className="col-sm-3"></div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <label htmlFor="district">District</label>
                                <input type="Text" className="form-control" name="district"
                                       value={this.state.district} onChange={this.Changehandler} />
                            </div>
                            <div className="col-sm-3"></div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Vehicle type</label>
                                    <select className="form-control"  name="vehicletype" value={this.state.vehicletype} onChange={this.Changehandler}>
                                        <option value="Car">Car</option>
                                        <option value="Van">Van</option>
                                        <option value="Suv">Suv</option>
                                        <option value="Bus">Bus</option>

                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-3"></div>
                        </div>


                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <label htmlFor="district"> costperday</label>
                                <input type="number" className="form-control" name="costperday"
                                       value={this.state.costperday} onChange={this.Changehandler} />
                            </div>
                            <div className="col-sm-3"></div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">

                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Description</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" name="description"
                                              rows="3" value={this.state.description} onChange={this.Changehandler}></textarea>
                                </div>
                            </div>
                            <div className="col-sm-3"></div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-sm-2">

                            </div>
                            <div className="col-sm-6 ">
                                <p>
                                    <small>Select vehicle type</small>
                                </p>
                            </div>
                            <div className="col-sm-2">

                            </div>
                        </div>


                        <div className="row formmarge">
                            <div className="col-sm-2">
                                <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1"
                                value="Car" name=" checkboxval"    onClick = {this.handlecarClik.bind(this)}/>
                                <label className="form-check-label" htmlFor="inlineCheckbox1">Car</label>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="col-sm">
                                    <div className="form-group">

                                        <select className="form-control" id="exampleFormControlSelect1"  name="carvalue" value={this.state.carvalue} onChange={this.Changehandler} disabled = {(!this.state.disabled1)? "disabled" : ""} >
                                            <option value="Car">Car</option>


                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2 form-group">
                                <input type="Number" className="form-control" name="carcount" placeholder="No.Vehicles" value={this.state.carcount} onChange={this.Changehandler}  disabled = {(!this.state.disabled1)? "disabled" : ""}/>
                            </div>
                            <div className="col-sm-2 form-group">
                                <input type="number" className="form-control" name="carcostperday" placeholder="Price Per Day" value={this.state.carcostperday} onChange={this.Changehandler} disabled = {(!this.state.disabled1)? "disabled" : ""}/>
                            </div>
                            <div className="col-sm-2">

                            </div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-2">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1"
                                           value="Van" name=" checkboxval"    onClick = {this.handlevanClik.bind(this)}/>
                                    <label className="form-check-label" htmlFor="inlineCheckbox1">Van</label>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="col-sm">
                                    <div className="form-group">

                                        <select className="form-control" id="exampleFormControlSelect1"  name="vanvalue" value={this.state.vanvalue} onChange={this.Changehandler} disabled = {(!this.state.disabled2)? "disabled" : ""} >
                                            <option value="Van">Van</option>


                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2 form-group">
                                <input type="Number" className="form-control" name="vancount" placeholder="No.Vehicles" value={this.state.vancount} onChange={this.Changehandler}  disabled = {(!this.state.disabled2)? "disabled" : ""}/>
                            </div>
                            <div className="col-sm-2 form-group">
                                <input type="number" className="form-control" name="vancostperday" placeholder="Price Per Day" value={this.state.vancostperday} onChange={this.Changehandler} disabled = {(!this.state.disabled2)? "disabled" : ""}/>
                            </div>
                            <div className="col-sm-2">

                            </div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-2">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1"
                                           value="suv" name=" checkboxval" onClick = {this.handlesuvClik.bind(this)}   />
                                    <label className="form-check-label" htmlFor="inlineCheckbox1">Suv</label>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="col-sm">
                                    <div className="form-group">

                                        <select className="form-control" id="exampleFormControlSelect1"  name="suvvalue" value={this.state.suvvalue} onChange={this.Changehandler} disabled = {(!this.state.disabled3)? "disabled" : ""} >
                                            <option value="suv">Suv</option>


                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2 form-group">
                                <input type="Number" className="form-control" name="suvcount" placeholder="No.Vehicles" value={this.state.suvcount} onChange={this.Changehandler}  disabled = {(!this.state.disabled3)? "disabled" : ""}/>
                            </div>
                            <div className="col-sm-2 form-group">
                                <input type="number" className="form-control" name="suvcostperday" placeholder="Price Per Day" value={this.state.suvcostperday} onChange={this.Changehandler} disabled = {(!this.state.disabled3)? "disabled" : ""}/>
                            </div>
                            <div className="col-sm-2">

                            </div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-2">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1"
                                           value="Bus" name="bus"  onClick = {this.handlebusClik.bind(this)}  />
                                    <label className="form-check-label" htmlFor="inlineCheckbox1">Bus</label>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="col-sm">
                                    <div className="form-group">

                                        <select className="form-control" id="exampleFormControlSelect1"  name="busvalue" value={this.state.busvalue} onChange={this.Changehandler} disabled = {(!this.state.disabled4)? "disabled" : ""} >
                                            <option value="Bus">Bus</option>


                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2 form-group">
                                <input type="Number" className="form-control" name="buscount" placeholder="No.Vehicles" value={this.state.buscount} onChange={this.Changehandler}  disabled = {(!this.state.disabled4)? "disabled" : ""}/>
                            </div>
                            <div className="col-sm-2 form-group">
                                <input type="number" className="form-control" name="buscostperday" placeholder="Price Per Day" value={this.state.buscostperday} onChange={this.Changehandler} disabled = {(!this.state.disabled4)? "disabled" : ""}/>
                            </div>
                            <div className="col-sm-2">

                            </div>
                        </div>

                        <hr/>

                        <div className="row formmarge">
                            <div className="col-sm-5">

                            </div>
                            <div className="col-sm-5">

                            </div>
                            <div className="col-sm-2-center">
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