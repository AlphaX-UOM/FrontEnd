import React from 'react';
import './transport-input.css';
import {Link} from 'react-router-dom'
import { useForm } from "react-hook-form"
import {useHistory} from 'react-router-dom';

const TransportInput=()=>{
    const history = useHistory();
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {

        console.log(values)
        history.push('/transportproviderlist')
    };

    return(
        <div>
            <br/>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="container tinput " >
                <div className="row " style={{padding:"100px"}}>


                    <div className="col-lg-12">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Destination</span>
                            </div>
                            <input type="location" min="0" className="form-control" aria-label="Username"
                                   aria-describedby="basic-addon1"
                                   ref={register({ required: true })}
                                   name="destination"
                            />

                        </div>
                    </div>


                    <div className="col-lg-4 ">


                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Pickup Date</span>
                            </div>
                            <input type="date" name="pickupdate" className="form-control" ref={register({ required: true })}/>

                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="input-group mb-3">

                            <input type="time" name="pickuptime" className="form-control" ref={register({ required: true })}/>

                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Drop Off Date</span>
                            </div>
                            <input type="date" name="dropoffdate" className="form-control"ref={register({ required: true })}/>

                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="input-group mb-3">

                            <input type="time" name="dropofftime" aria-label="First name" className="form-control" ref={register({ required: true })}/>

                        </div>
                    </div>





                    <div className="col-lg-6">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1" >No. Of Travellers</span>
                            </div>
                            <input type="number" min="0" className="form-control" name="no.travelers"
                                   aria-describedby="basic-addon1" ref={register({ required: true })}/>
                        </div>
                    </div>
                    <div className="col-lg-5"></div>
                    <div className="col-lg-1"></div>



                    <div className="col-lg-4">
                        <br/>
                    </div>
                    <div className="col-lg-7"></div>
                    <div className="col-lg-1"></div>

                    <div className="col-lg-2"></div>
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4" align="end">



    <button type="submit" className="btn btn-primary rounded" >Find a ride</button>



                    </div>
                    <div className="col-md-2" align="end">

                    </div>

                </div>
            </div>
            </form>
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

export default TransportInput;