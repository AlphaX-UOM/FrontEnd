import React from 'react';
import './transport-input.css';
import {Link} from 'react-router-dom'
import Navbar2 from "../../navbar2/navbar2";

const transportinput=()=>{
    return(
        <div>
            <br/>
            <div className="container tinput " >
                <div className="row " style={{padding:"100px"}}>

                    <div className="col-lg-6">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Pickup Location</span>
                            </div>
                            <input type="location" min="0" className="form-control" aria-label="Username"
                                   aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Return location</span>
                            </div>
                            <input type="location" min="0" className="form-control" aria-label="Username"
                                   aria-describedby="basic-addon1"/>
                        </div>
                    </div>

                    <div className="col-lg-4 ">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Pickup Date</span>
                            </div>
                            <input type="date" aria-label="First name" className="form-control"/>

                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="input-group mb-3">

                            <input type="time" aria-label="First name" className="form-control"/>

                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Drop Off Date</span>
                            </div>
                            <input type="date" aria-label="First name" className="form-control"/>

                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="input-group mb-3">

                            <input type="time" aria-label="First name" className="form-control"/>

                        </div>
                    </div>





                    <div className="col-lg-6">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">No. Of Travellers</span>
                            </div>
                            <input type="number" min="0" className="form-control" aria-label="Username"
                                   aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                    <div className="col-lg-5"></div>
                    <div className="col-lg-1"></div>



                    <div className="col-lg-4">
                        <select className="form-control form-control-sm">
                            <option disabled selected>Select Vehicle Type</option>
                            <option>Car</option>
                            <option>Van</option>
                            <option>Suv</option>
                            <option>Bus</option>

                        </select>
                        <br/>
                    </div>
                    <div className="col-lg-7"></div>
                    <div className="col-lg-1"></div>

                    <div className="col-lg-2"></div>
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4" align="end">

                        <Link to="/transportproviderlist" type="button" className="btn btn-primary rounded">Find a ride</Link>
                    </div>
                    <div className="col-md-2" align="end">

                    </div>
                </div>
            </div>
            <br/>
    <div className="container-fluid bcolor">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <hr/>
                </div>
                <div className="col-lg-4">
                    <h3 style={{textAlign:"center"}}>Benefits from us</h3>
                </div>
                <div className="col-lg-4">
                    <hr/>
                </div>
            </div>

            <br/>
            <div className="row">
                <div className="col-lg-6">
                  <h4 style={{textAlign:"center"}} className="btitles">
                    Incredibly low prices
                  </h4>

                    <p style={{textAlign:"center"}}>
                        huge discounts and special rates
                    </p>
                    <br/>

                        <h4 style={{textAlign:"center"}} className="btitles">
                            Free cancellation & modification
                        </h4>
                        <p style={{textAlign:"center"}}>
                           Free of charge week befor cancelation
                        </p>
                    <br/>
                    <h4 style={{textAlign:"center"}} className="btitles">
                        24 hour support
                    </h4>
                    <p style={{textAlign:"center"}}>
                        Round the clock multi language customer service, 7 days a week
                    </p>
</div>

                <div className="col-lg-6">
                    <h4 style={{textAlign:"center"}} className="btitles">
                        No hidden fees and commisions
                    </h4>
                    <p style={{textAlign:"center"}}>
                        All details are indicted in the terms.There are no fees for credit card processing.
                    </p>
                    <br/>
                    <h4 style={{textAlign:"center"}} className="btitles">
                        Reliable
                    </h4>
                    <p style={{textAlign:"center"}}>
                         We collaborate only with reputable car rental companies and always gurantee highlevel of services.
                    </p>
                </div>
            </div>
        </div>
    </div>

        </div>
    )
};

export default transportinput;