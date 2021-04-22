import React,{Component,useEffect,useState}  from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {useHistory} from 'react-router-dom'
import { connect } from 'react-redux';
import { set_transport_vehicle_filter } from '../../../../store/actions/transport_reducer'
import * as actions from '../../../../store/actions/index';


class Transport_filters extends Component{

    constructor(props) {
        super(props)
        this.state = {


            vehicletype:'',
            priceperday:'',
            priceperdistance:''

        }


    }

    Changehandler=(event) => {
        this.setState({ [event.target.name]: event.target.value })
      this.props.set_transport_vehicle_filter(event.target.value);
    };
    Changehandler_02=(event) => {
        this.setState({ [event.target.name]: event.target.value })
        this.props.set_transport_vehicle_filter_02(event.target.value);
    };
    Changehandler_03=(event) => {
        this.setState({ [event.target.name]: event.target.value })
        this.props.set_transport_vehicle_filter_03(event.target.value);
    };

render(){
        return (

            <div>
                <br/>
                <div className="container viewp">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="row">

                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="">Vehicle types</label>
                                        <select className="form-control tm-select "  name="vehicletype"  onChange={this.Changehandler}>
                                            <option value="All">All</option>
                                            <option value="Car">Car</option>
                                            <option value="Van">Van</option>
                                            <option value="Suv">Suv</option>
                                            <option value="Bus">Bus</option>

                                        </select>
                                    </div>
                                </div>
                                <hr/>
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="">Ratings</label>
                                        <select className="form-control tm-select"  name="" >
                                            <option value="All">All</option>
                                            <option value="5">5</option>
                                            <option value="4">4</option>
                                            <option value="3">3</option>
                                            <option value="2">2</option>

                                        </select>
                                    </div>
                                </div>

                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="">Price per day</label>
                                        <select className="form-control tm-select" name="priceperday" onChange={this.Changehandler_02}  >
                                            <option value="All">All</option>
                                            <option value=">10000">up to 10000 </option>
                                            <option value="10000">10000</option>
                                            <option value="5000">5000</option>
                                            <option value="2500">2500</option>

                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="">Price per distance</label>
                                        <select className="form-control tm-select" name="priceperdistance" onChange={this.Changehandler_03}  >
                                            <option value="All">All</option>
                                            <option value=">100">up to 100</option>
                                            <option value="100">100</option>
                                            <option value="50">50</option>
                                            <option value="25">25</option>

                                        </select>
                                    </div>
                                </div>
                            </div>


                        </div>




                    </div>
                </div>

            </div>

        );
    }




}



const mapStateToProps = state => {
    return {


    }
};

const mapDispatchToProps = dispatch => {
    return {
        set_transport_vehicle_filter:  items => {dispatch(actions.set_transport_vehicle_filter(items)) },
        set_transport_vehicle_filter_02:  items => {dispatch(actions.set_transport_vehicle_filter_02(items)) },
        set_transport_vehicle_filter_03:  items => {dispatch(actions.set_transport_vehicle_filter_03(items)) }
    }
};
export default  connect(mapStateToProps, mapDispatchToProps)(Transport_filters);
