import React,{Component} from 'react';
import './transport-input.css';
import {History} from 'react-router-dom';
import axios from "axios";
import {withRouter} from 'react-router-dom';
import { format } from "date-fns";
import {saveCart} from "../../../../store/lib/actions";
import connect from "react-redux/es/connect/connect";
import * as actions from '../../../../store/actions/index';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Geocode from "react-geocode";
class TransportInput extends Component{

    constructor(props) {
        super(props)
        var today = new Date(),

            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        this.state = {


            pickupdate: '',
            pickuptime: '',
            dropoffdate: '',
            dropofftime: '',
            notravellers: '',
            rounded: '',


            distance: [],
            pickuplocation: '',
            droplocation: '',
            origin_lat: 0,
            origin_lang: 0,
            desti_lat: 0,
            desti_lang: 0,
            distance_text: '',
            currentDate: ''

        }


    }



    Changehandler = (event)=>{
        this.setState({ [event.target.name]: event.target.value })
    }

    handlehiddenClik(e) {
        this.setState( {rounded: e.target.checked} )

    }

    handleSubmit =(e) =>{


         e.preventDefault();
        // this.props.history.push('/transportproviderlist');


        Geocode.setApiKey('AIzaSyD3hAWVrmMEMeI6xhdtSGCmEJ6FHccdKUk');
        Geocode.setLanguage("en");


        Geocode.setRegion("es");


        Geocode.setLocationType("ROOFTOP");


        Geocode.enableDebug();


        Geocode.fromAddress(this.state.pickuplocation).then(
            (response) => {
                let { lat, lng } = response.results[0].geometry.location;
                console.log(lat, lng);
                this.setState({origin_lat:lat,origin_lang:lng})

            },
            (error) => {
                console.error(error);
            }
        ).then(
            Geocode.fromAddress(this.state.droplocation).then(
                (response) => {
                    let { lat, lng } = response.results[0].geometry.location;
                    console.log(lat, lng);
                    this.setState({desti_lat:lat,desti_lang:lng})
                },
                (error) => {
                    console.error(error);
                }
            )
        ).then(
            setTimeout(function() { //Start the timer
                 this.calculateDistance()

            }.bind(this), 3000)

        ).then(
            setTimeout(function() { //Start the timer
                console.log(this.state)
                if(this.state.distance_text!==''){
                    this.props.transport_input_form(this.state.notravellers,this.state.droplocation,
                        this.state.dropoffdate,this.state.dropofftime,this.state.pickuplocation,this.state.pickupdate,
                        this.state.pickuptime,this.state.rounded,this.state.distance_text);
                    console.log('redux insert')
                    this.props.history.push('/transportproviderlist');
                }

            }.bind(this), 5000),  // this.props.history.push('/transportproviderlist')



        )





        // axios
        //     .post('http://localhost:5000/TransportProvider/Post', {
        //
        //     })
        //     .then(response => {
        //         console.log(response)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })


    }

    calculateDistance() {
        const { google } = this.props;
        const service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix(
            {
                origins: [{ lat: this.state.origin_lat, lng: this.state.origin_lang }],
                destinations: [{ lat: 	this.state.desti_lat, lng: this.state.desti_lang}],
                travelMode: "DRIVING"
            },
            (response, status) => {
                if (status !== "OK") {
                    alert("Error was: " + status);
                } else {
                    const distance=response.rows[0].elements[0].distance.text;
                    console.log(distance);
                    this.setState({distance_text:distance});
                }
            }

        )
    }


    render() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = "0" + dd;
        }
        if (mm < 10) {
            mm = "0" + mm;
        }

        today = yyyy + "-" + mm + "-" + dd;
        console.log(today);
        return (
            <div>
                <br/>



                <div className="container-fluid">
                    <div className="row">

                        <div className="col-sm-6 tinput">

                        </div>


                        <div className="col-sm-6 tm-bg-gray">
                            <form onSubmit={this.handleSubmit} className="tm-contact-form">
                                <div className="form-group">
                                    <input type="text" id="contact_subject"
                                           className="form-control" placeholder="Pickup Location"    value={this.state.pickuplocation} onChange={this.Changehandler}
                                           name="pickuplocation" />
                                </div>
                                <div className="form-group tm-name-container">
                                    <input type="date" id="contact_name" name="pickupdate" className="form-control"
                                           placeholder="Pickup Date"  value={this.state.pickupdate} onChange={this.Changehandler} min={today} />
                                </div>

                                <div className="form-group tm-email-container">
                                    <input type="time" id="contact_email" name="pickuptime" className="form-control"
                                           placeholder="time"     value={this.state.pickuptime} onChange={this.Changehandler}/>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input form-group" type="checkbox"
                                           value="true" name=" checkboxval"   onChange = {e=>this.handlehiddenClik(e)} />
                                    <div className="input-group-prepend">
                                        <label className="form-group "><p >Return  to the same location</p> </label>
                                    </div>
                                </div>

                                <div className="form-group" >
                                    <input type="text"
                                           className="form-control" placeholder="Drop Off Location"
                                           value={this.state.droplocation} onChange={this.Changehandler}
                                           name="droplocation"
                                    />
                                </div>

                                <div className="form-group tm-name-container">
                                    <input   name="contact_name" className="form-control"
                                            placeholder="Drop off Date" disabled/>
                                </div>

                                <div className="form-group tm-email-container">
                                    <input type="date" name="dropoffdate" className="form-control"
                                           placeholder="date"  value={this.state.dropoffdate} onChange={this.Changehandler}
                                           min={this.state.pickupdate}/>
                                </div>

                                <div className="form-group tm-name-container">
                                    <input   name="contact_name" className="form-control"
                                            placeholder="Drop Off Time" disabled/>
                                </div>

                                <div className="form-group tm-email-container">
                                    <input type="time"  name="dropofftime" className="form-control"
                                           placeholder="date"   value={this.state.dropofftime} onChange={this.Changehandler}/>
                                </div>

                                <div className="form-group">
                                    <input type="Number"  name="notravellers"
                                           className="form-control" placeholder="No Of Travellers" max='20' value={this.state.notravellers} onChange={this.Changehandler} min="0"/>
                                </div>


                                <button type="submit" className="btn btn-primary tm-btn-primary tm-btn-send text-uppercase rounded subbtn">
                                 Find a ride
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <h1>{this.state.distance_text}</h1>
                <br/>
            </div>
        )
    }
};


const mapStateToProps = (state) => {
    return {
        // items: state.onlineStoreApp.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        transport_input_form:  (no_travellers,drop_location,drop_date,drop_time,pickup_location,pickup_date,pickup_time,rounded,distance_text) => { 
            dispatch(actions.get_transport_input_form(no_travellers,drop_location,drop_date,drop_time,pickup_location,pickup_date,pickup_time,rounded,distance_text)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)
(GoogleApiWrapper({apiKey:'AIzaSyD3hAWVrmMEMeI6xhdtSGCmEJ6FHccdKUk'})(withRouter(TransportInput)));
//export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TransportInput));
