import React, { useState, useEffect, Component } from 'react';
import './post-events.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import {storage} from  '../../../config/firebaseConfig';

class PostEventForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            price: '',
            venue: '',
            date: '',
            time: '',
            eventType: '',
            otherDetails: '',
            url : '',
            userID: '8c38ca3f-1ae6-4a7c-78ec-08d89bf76381'
        };

    }


    Changehandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }


    handleSubmit = e => {

        e.preventDefault();
        console.log(this.state)
        axios
            .post('https://alphax-api.azurewebsites.net/api/eventplannerservices', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })


    }

    handleImageUpload = (e) => {
        if(e.target.files[0]) {
            const image = (e.target.files[0]);
            const uploadTask = storage.ref(`images/events/${image.name}`).put(image);
            uploadTask.on('state_changed',
            (snapshot) => {
                console.log(snapshot);
            },
            (error) => {
                console.log(error);
            },
            () => {
                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                    this.setState({url});
                })
            }
            )
        }
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
                                <label htmlFor="name">Event Name</label>
                                <input type="Text" className="form-control" id="name" name="name"
                                    value={this.state.name} onChange={this.Changehandler} />
                            </div>

                            <div className="col-sm-4">

                            </div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-6">
                                <label htmlFor="inputEmail4">Location</label>
                                <input type="text" className="form-control" id="location" name="location"
                                    value={this.state.location} onChange={this.Changehandler} />
                            </div>
                            <div className="col-sm-4"></div>
                        </div>
                        <div className="row formmarge">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-6">
                                <label htmlFor="inputEmail4">Price</label>
                                <input type="number" className="form-control" id="price" name="price"
                                    value={this.state.price} onChange={this.Changehandler} />
                            </div>
                            <div className="col-sm-4"></div>
                        </div>


                        <div className="row formmarge">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-6">
                                <label htmlFor="inputEmail4">Date</label>
                                <input type="text" className="form-control" id="date" name="date"
                                    value={this.state.date} onChange={this.Changehandler} />
                            </div>
                            <div className="col-sm-4"></div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-6">
                                <label htmlFor="inputEmail4">Time</label>
                                <input type="text" className="form-control" id="time" name="time"
                                    value={this.state.time} onChange={this.Changehandler} />
                            </div>
                            <div className="col-sm-4"></div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-6">
                                <label htmlFor="inputEmail4">Event Type</label>
                                <input type="text" className="form-control" id="eventType" name="eventType"
                                    value={this.state.eventType} onChange={this.Changehandler} />
                            </div>
                            <div className="col-sm-4"></div>
                        </div>


                        <div className="row formmarge">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-6">
                                <label htmlFor="inputEmail4">Upload Image</label>
                                <div className="form-group">
                                    <input onChange={this.handleImageUpload} type="file" className="form-control-file mb-2" />
                                </div>
                            </div>
                            <div className="col-sm-4"></div>
                        </div>


                        <div className="row formmarge">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-6">
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Description</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>

                            </div>
                            <div className="col-sm-4"></div>
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

export default PostEventForm;