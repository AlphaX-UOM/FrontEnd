import React,{ useState, useEffect,Component } from 'react';
import './post-guide.css';
import {useHistory} from 'react-router-dom';
import axios from 'axios'

class PostGuideForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            firstname:'',
            lastname:'',
            dateofbirth:'',
            email:'',
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
                            <div className="col-sm-3 ">
                                <label htmlFor="name">First Name</label>
                                <input type="Text" className="form-control" id="name" name="firstname"
                                       value={this.state.firstname} onChange={this.Changehandler}/>
                            </div>
                            <div className="col-sm-3 ">
                                <label htmlFor="name">Last Name</label>
                                <input type="Text" className="form-control" id="lastname" name="lastname"
                                       value={this.state.lastname} onChange={this.Changehandler}/>
                            </div>
                            <div className="col-sm-4">

                            </div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-6">
                                <label htmlFor="inputEmail4">Date of Birth</label>
                                <input type="date" className="form-control" id="inputEmail4" name="dateofbirth"
                                       value={this.state.dateofbirth} onChange={this.Changehandler}     />
                            </div>
                            <div className="col-sm-4"></div>
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
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect2">Languages</label>
                                    <select multiple className="form-control" id="exampleFormControlSelect2">
                                        <option>English</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
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
                                <label htmlFor="district">Cost per day</label>
                                <input type="Text" className="form-control" name="costperday" id="district"
                                       value={this.state.costperday} onChange={this.Changehandler} />
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

export default PostGuideForm;
