import React, { Component } from 'react';
import './post-hotels.css';

import ImageUploader from 'react-images-upload';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import { storage } from "../../../../src/config/firebaseConfig";

class PostHotelForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            venue: '',
            pricePerDay: '',
            district: '',
            pnumber: '',
            roomType: '',
            capacity: '',
            stars:'',
            features: '',
            otherDetails: '',
            imgURL: '',
            userID: '8c38ca3f-1ae6-4a7c-78ec-08d89bf76381',


            pictures: [],

            image: null,
            url: '',

            progressx: false,
            progress: ''
        }

        this.onDrop = this.onDrop.bind(this);

    }


    Changehandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleChange = e => {
        if (e.target.files[0]) {
            this.setState({image:e.target.files[0]});
        }

    };

    handleUpload = () => {

    };

    handlehiddenClik(e) {
        this.setState( {air_con: e.target.checked} )

    }
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    handleSubmit = e => {

        e.preventDefault();
        console.log(this.state)

        const uploadTask = storage.ref(`images/${this.state.image.name}`).put(this.state.image);
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                this.setState({ progress: progress });
            },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref(`images`)
                    .child(this.state.image.name)
                    .getDownloadURL()
                    .then((url) => {
                        this.setState({ url: url });
                        this.setState({ progressx: true });

                    });



            }

        );
        if (this.state.progressx === true) {

        }
        setTimeout(function () { //Start the timer
            axios
                .post('https://alphax-api.azurewebsites.net/api/hotelsservices/', {

                    name: this.state.name,
                    venue: this.state.venue,
                    pricePerDay: parseInt(this.state.pricePerDay),
                    district: this.state.district,
                    pnumber: this.state.pnumber,
                    roomType: this.state.roomType,
                    capacity: parseInt(this.state.capacity),
                    stars: parseInt(this.state.stars),
                    features: this.state.features,
                    otherDetails: this.state.otherDetails,
                    imgURL: this.state.url,
                    userID: '8c38ca3f-1ae6-4a7c-78ec-08d89bf76381',

                })
                .then(response => {
                    console.log(response)
                    alert("ok");
                })
                .catch(error => {
                    console.log(error)
                })
        }.bind(this), 4000)




    }


    render() {

        return (
            <div className="container-fluid mback">
                <br />
                <div className="container ">

                    <form className="fback" onSubmit={this.handleSubmit}>

                        <h1 className="h4 h1style"><strong>Fill in the details</strong></h1>
                        <hr />
                        <div className="row formmarge">
                            <div className="col-sm-2">

                            </div>
                            <div className="col-sm-6 ">
                                <label htmlFor="name">Hotel Name</label>
                                <input type="Text" className="form-control" id="name" name="name"
                                    value={this.state.name} onChange={this.Changehandler} />
                            </div>

                            <div className="col-sm-4">

                            </div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-6">
                                <label htmlFor="district">District</label>
                                <select className="form-control tm-select"  name="district" value={this.state.district} onChange={this.Changehandler}>
                                        <option value="Ampara">Ampara</option>
                                        <option value="Anuradhapura">Anuradhapura</option>
                                        <option value="Badulla">Badulla</option>
                                        <option value="Batticaloa">Batticaloa</option>
                                        <option value="Colombo">Colombo</option>
                                        <option value="Galle">Galle</option>
                                        <option value="Gampaha">Gampaha</option>
                                        <option value="Hambanthota">Hambanthota</option>
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
                                        <option value="Mullativu">Mullativu</option>
                                        <option value="Nuwara Eliya">Nuwara Eliya</option>
                                        <option value="Polonnaruwa">Polonnaruwa</option>
                                        <option value="Puttalam">Puttalam</option>
                                        <option value="Rathnapura">Rathnapura</option>
                                        <option value="Trincomalee">Trincomalee</option>
                                        <option value="Vavuniya">Vavuniya</option>

                                </select>
                            </div>
                            <div className="col-sm-4"></div>
                        </div>


                        <div className="row formmarge">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-6">
                                <label htmlFor="address">Address</label>
                                <input type="text" className="form-control" id="venue" name="venue"
                                    value={this.state.venue} onChange={this.Changehandler} />
                            </div>
                            <div className="col-sm-4"></div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-6">
                                <label htmlFor="pnumber">Contact Number</label>
                                <input type="text" name="pnumber" className="form-control" id="pnumber"
                                    value={this.state.pnumber} onChange={this.Changehandler} />
                            </div>
                            <div className="col-sm-4"></div>
                        </div>


                        <div className="row formmarge">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="stars">Stars</label>
                                    <select className="form-control" id="stars" value={this.state.stars} onChange={this.Changehandler}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-4"></div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">

                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Description</label>
                                <textarea className="form-control post" id="exampleFormControlTextarea1" name="otherDetails"
                                          rows="3" value={this.state.otherDetails} onChange={this.Changehandler}></textarea>
                            </div>
                        </div>
                        <div className="col-sm-3"></div>
                    </div>

{/* ////////////////////////////roomtype details/////////////////////////// */}
                        <div className="row formmarge">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-6">
                                <label htmlFor="roomType">Room type</label>
                                <input type="text" className="form-control" id="roomType" name="roomType"
                                    value={this.state.roomType} onChange={this.Changehandler} />
                            </div>
                            <div className="col-sm-4"></div>
                        </div>
                        
                        
                        <div className="row formmarge">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-6">
                                <label htmlFor="price">Price per day</label>
                                <input type="text" className="form-control" name="pricePerDay" id="pricePerDay"
                                    value={this.state.pricePerDay} onChange={this.Changehandler} />
                            </div>
                            <div className="col-sm-4"></div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-6">
                                <label htmlFor="capacity">Capacity</label>
                                <input type="text" className="form-control" name="capacity" id="capacity"
                                    value={this.state.capacity} onChange={this.Changehandler} placeholder="capacity of a room" />
                            </div>
                            <div className="col-sm-4"></div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-6">
                                <label htmlFor="features">Features</label>
                                <input type="text" className="form-control" id="features" name="features"
                                    value={this.state.features} onChange={this.Changehandler} />
                            </div>
                            <div className="col-sm-4"></div>
                        </div>

{/* ////////////////////////////roomtype details/////////////////////////// */}

                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">

                            <label htmlFor="image">Upload image</label>


                                <input type="file" onChange={this.handleChange} />
                                {/*<button onClick={this.handleUpload}>Upload</button>*/}

                                <br/>
                                <hr/>
                                {/*{this.state.url}*/}
                                <img src={this.state.url || "http://via.placeholder.com/300"} alt="firebase-image" className="imgsize" />
                            </div>
                            <div className="col-sm-3"></div>
                        </div>

                       
                        <hr />



                        <div className="row formmarge">
                            <div className="col-sm-2">

                            </div>
                            <div className="col-sm-5">

                            </div>
                            <div className="col-sm-5-center">
                                <button className="btn btn-primary" type="submit">Post ad</button>
                            </div>
                        </div>
                        <hr />
                    </form>
                </div>
            </div>
        )
    }

};

export default PostHotelForm;