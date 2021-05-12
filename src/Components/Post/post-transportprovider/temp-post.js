import React, {Component, useEffect, useState} from 'react';
import './post-tprovider-form.css';
import ImageUploader from 'react-images-upload';
import {useHistory} from 'react-router-dom';
import axios from 'axios'
import {storage} from "../../../../src/config/firebaseConfig";
import Logo1 from "../../../images/vehicle/itemimages/Intermediate.jpg";
import Logo2 from "../../../images/vehicle/slide/v.jpg";
import Logo3 from "../../../images/vehicle/slide/suv.jfif";
import Logo4 from "../../../images/vehicle/slide/Bus.jfif";
import connect from "react-redux/es/connect/connect";
import Imgup from './img_up'


const Temppost=(props)=> {

    const [state, setstate] = useState({
        name: '',
        district: '',
        telephone:'',
        address: '',
        vehicletype: 'Car',
        brand: '',
        model: '',
        num_seat: '',
        air_con: '',
        costperdistance: '',
        costperday: '',
        description: '',
        pictures: [],
        image: null,
        url: '',
        progressx: false,
        progress: '',

        errors: {
            telephone: '',
            email: '',
        },
        isvalid:false

    });

    // this.onDrop = this.onDrop.bind(this);

    const formValChange = (event) => {
        event.preventDefault();
        const validEmailRegex = RegExp(
            /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        );
        const validPnumRegex = RegExp(
            /^[0-9]{10}$/
        );
        const { name, value } = event.target;
        let errors = { ...state.errors };
        switch (name) {

            case "email":
                if (!validEmailRegex.test(value)) {
                    errors.email = "Email is not valid!";
                } else {
                    errors.email = "";
                    setstate({
                        ...state,
                        email: value,
                    });
                }
                break;

            case "telephone":
                if (!validPnumRegex.test(value)) {
                    errors.telephone = "Phonenumber is not valid!";
                } else {
                    errors. telephone = "";
                    setstate({
                        ...state,
                        telephone: value,
                    });
                }
                break;

            case "image":
                if (value[0]) {
                    setstate({
                        ...state,
                        image: value[0],
                    });
                }
                break;

            default:
                break;

        }

        setstate({
            ...state,
            errors,
            [name]: value,
        });
    };
    const { errors } = state;

   const handleSubmit = e => {

        e.preventDefault();
       errors.email==""&&errors.telephone==""?state.isvalid=true:state.isvalid=false;
       console.log(state.isvalid)
         // console.log(state)
       if(state.isvalid){
           axios
               .post('https://alphax-api.azurewebsites.net/api/TransportServices', {
                   name:state.name,
                   district:state.district,
                   pnumber:state.telephone,
                   email:state.email,
                   address:state.address,
                   vehicleType:state.vehicletype,
                   brand:state.brand,
                   model:state.model,
                   noOfSeats:state.num_seat,
                   airCondition:state.air_con,
                   pricePer1KM:parseInt(state.costperdistance),
                   pricePerDay:parseInt(state.costperday),
                   description:state.description,
                   imgURL:props.imgurl,
                   UserID: props.id

               })
               .then(response => {
                   console.log(response)
                   alert("Post added");

               })
               .catch(error => {
                   console.log(error);
                   alert('Post adding is failed!')
               })
       }




    }



        return (
            <div className="container-fluid mback">
                <br/>
                <div className="container ">

                    <form className="fback" onSubmit={handleSubmit}>

                        <h1 className="h4 h1style"><strong>Fill in the details</strong></h1>
                        <hr/>
                        <div className="row formmarge">
                            <div className="col-sm-3">

                            </div>
                            <div className="col-sm-6 ">
                                <label htmlFor="name">Business Name</label>
                                <input type="Text" className="form-control" id="name" name="name"
                                        onChange={formValChange} required minLength='3'
                                       maxLength='30'/>
                            </div>
                            <div className="col-sm-3">

                            </div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <label htmlFor="inputEmail4">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" name="email"
                                        onChange={formValChange} required/>

                                <div className="error_msg rounded-pill center">{state.errors.email}</div>
                            </div>
                            <div className="col-sm-3"></div>
                        </div>
                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <label htmlFor="Address">Address</label>
                                <input type="Address" name="address" className="form-control" id="Address"
                                        onChange={formValChange} required/>
                            </div>
                            <div className="col-sm-3"></div>
                        </div>
                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <label htmlFor="pnumber">TelePhone</label>
                                <input type="number" name="telephone" className="form-control" id="pnumber"
                                        onChange={formValChange} required/>

                                <div className="error_msg rounded-pill center">{state.errors.telephone}</div>
                            </div>
                            <div className="col-sm-3"></div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <label htmlFor="district">District</label>
                                {/*<input type="Text" className="form-control" name="district"*/}
                                {/*value={this.state.district} onChange={this.Changehandler}required />*/}
                                <select className="form-control tm-select" name="district" value={state.district}
                                        onChange={formValChange} required>
                                    <option value=""></option>
                                    <option value="Ampara">Ampara</option>
                                    <option value="Anuradhapura">Anuradhapura</option>
                                    <option value="Badulla">Badulla</option>
                                    <option value="Batticaloa">Batticaloa</option>
                                    <option value="Colombo">Colombo</option>
                                    <option value="Galle"> Galle</option>
                                    <option value="Hambantota">Hambantota</option>
                                    <option value="Jaffna">Jaffna</option>
                                    <option value="Kalutara">Kalutara</option>
                                    <option value="Kandy">Kandy</option>
                                    <option value="Kegalle">Kegalle</option>
                                    <option value="Kilinochchi">Kilinochchi</option>
                                    <option value="Kurunegala">Kurunegala</option>
                                    <option value="Mannar">Mannar</option>
                                    <option value="Matale">Matale</option>
                                    <option value="Matara">Matara</option>
                                    <option value="Monaragala">Monaragala</option>
                                    <option value="Mullaitivu">Mullaitivu</option>
                                    <option value="Nuwara Eliya">Nuwara Eliya</option>
                                    <option value="Polonnaruwa">Polonnaruwa</option>
                                    <option value="Puttalam">Puttalam</option>
                                    <option value="Ratnapura">Ratnapura</option>
                                    <option value="Trincomalee">Trincomalee</option>
                                    <option value="Vavuniya">Vavuniya</option>
                                </select>
                            </div>
                            <div className="col-sm-3"></div>
                        </div>
                        <hr/>
                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Vehicle type</label>
                                    <select className="form-control tm-select" name="vehicletype"
                                            value={state.vehicletype} onChange={formValChange} required>
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

                            <div className="col-sm-3"></div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-3"></div>

                            <div className="col-sm-3">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Brand</label>

                                    <input type="Text" className="form-control" name="brand"
                                           value={state.brand} onChange={formValChange}  maxLength='20' required/>
                                </div>
                            </div>

                            <div className="col-sm-3">
                                <div className="form-group">
                                    <label htmlFor="">Model</label>
                                    <input type="Text" className="form-control" name="model"
                                           value={state.model} onChange={formValChange}  maxLength='10'/>
                                    <small>(optional)</small>
                                </div>
                            </div>
                            <div className="col-sm-3"></div>
                        </div>


                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6 ">
                                <label htmlFor="district">Number of seats</label>
                                <input type="number" className="form-control" name="num_seat"
                                       value={state.num_seat} onChange={formValChange} required max='60'/>
                            </div>
                            <div className="col-sm-3"></div>
                        </div>
                        <br/>
                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-4">

                                        <label className="form-group "><p>Air Condition</p></label>

                                    <select className="form-control tm-select" name="air_con"
                                            value={state.air_con} onChange={formValChange} required>
                                        <option value=""></option>
                                        <option value="true">Available</option>
                                        <option value="false">Not Available</option>

                                    </select>

                            </div>
                            <div className="col-sm-3"></div>
                        </div>
                        <br/>
                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <label htmlFor="district"> Cost Per 1 km ($)</label>
                                <input type="number" className="form-control" name="costperdistance"
                                       value={state.costperdistance} onChange={formValChange} min='0.0' max='5' step='0.1'
                                       required/>
                            </div>
                            <div className="col-sm-3"></div>
                        </div>
                        <br/>
                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <label htmlFor="district"> Cost Per day ($)</label>
                                <input type="number" className="form-control" name="costperday"
                                       value={state.costperday} onChange={formValChange} min='0' max='200' required/>
                            </div>
                            <div className="col-sm-3"></div>
                        </div>
                        <br/>
                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">

                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Description</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1"
                                              name="description"
                                              rows="3" value={state.description} onChange={formValChange} required
                                              maxLength='200'></textarea>
                                </div>
                            </div>
                            <div className="col-sm-3"></div>
                        </div>




                        <Imgup/>

                        <br/>


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

                    </form>
                </div>
            </div>
        )


};

const mapStateToProps = (state) => {
    return {
        items: state.onlineStoreApp.items,
        isAuthenticated: state.auth.token !== null,
        role: state.auth.role,
        id: state.auth.userId,
        imgurl:state.transport_reducer. imgUrl

    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Temppost);