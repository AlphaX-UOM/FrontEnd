import React,{Component} from 'react';
import './transport-input.css';
import {History} from 'react-router-dom';
import axios from "axios";
import {withRouter} from 'react-router-dom';
import { format } from "date-fns";
import {saveCart} from "../../../../store/lib/actions";
import connect from "react-redux/es/connect/connect";
import * as actions from '../../../../store/actions/index';

class TransportInput extends Component{

    constructor(props) {
        super(props)
        this.state = {

            pickuplocation: '',
            pickupdate: '',
            pickuptime: '',
            dropofflocation: '',
            dropoffdate: '',
            dropofftime: '',
            notravellers: '',
            rounded:''

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

          console.log(this.state)
        this.props.transport_input_form(this.state.notravellers,this.state.dropofflocation,this.state.dropoffdate,this.state.dropofftime,this.state.pickuplocation,this.state.pickupdate,this.state.pickuptime,this.state.rounded);
        this.props.history.push('/transportproviderlist')
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



    render() {

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
                                           name="pickuplocation"/>
                                </div>
                                <div className="form-group tm-name-container">
                                    <input type="date" id="contact_name" name="pickupdate" className="form-control"
                                           placeholder="Pickup Date"  value={this.state.pickupdate} onChange={this.Changehandler} />
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
                                           value={this.state.dropofflocation} onChange={this.Changehandler}
                                           name="dropofflocation"
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
                                           className="form-control" placeholder="No Of Travellers"  value={this.state.notravellers} onChange={this.Changehandler} min="0"/>
                                </div>

                                <button type="submit"
                                        className="btn btn-primary tm-btn-primary tm-btn-send text-uppercase">
                                    Find a ride
                                </button>
                            </form>
                        </div>
                    </div>
                </div>


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
        transport_input_form:  (no_travellers,drop_location,drop_date,drop_time,pickup_location,pickup_date,pickup_time,rounded) => { dispatch(actions.get_transport_input_form(no_travellers,drop_location,drop_date,drop_time,pickup_location,pickup_date,pickup_time,rounded)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TransportInput));
