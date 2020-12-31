import React,{ useState, useEffect,Component } from 'react';
import './post-events.css';
import {useHistory} from 'react-router-dom';
import axios from 'axios'

class PostEventForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:'',
            location:'',
            price:'',
            telephone:'',
            costperday:''

        };

    }


    Changehandler = (event)=>{
        this.setState({ [event.target.name]: event.target.value })
    }


    handleSubmit = e=>{

        e.preventDefault();
        console.log(this.state)
        axios
            .post('http://localhost:5000/TransportProvider/Post', this.state)
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
                                <label htmlFor="name">Event Name</label>
                                <input type="Text" className="form-control" id="name" name="name"
                                       value={this.state.name} onChange={this.Changehandler}/>
                            </div>

                            <div className="col-sm-4">

                            </div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-6">
                                <label htmlFor="inputEmail4">Location</label>
                                <input type="text" className="form-control" id="location" name="location"
                                       value={this.state.location} onChange={this.Changehandler}     />
                            </div>
                            <div className="col-sm-4"></div>
                        </div>
                        <div className="row formmarge">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-6">
                                <label htmlFor="inputEmail4">Price</label>
                                <input type="number" className="form-control" id="price" name="price"
                                       value={this.state.price} onChange={this.Changehandler}     />
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
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Description</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>

                            </div>
                            <div className="col-sm-4"></div>
                        </div>
                        <hr/>









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

export default PostEventForm;