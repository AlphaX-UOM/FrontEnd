import React from 'react';
import './post-tprovider-form.css';
import {Link} from 'react-router-dom'
import { useForm } from "react-hook-form"
import {useHistory} from 'react-router-dom';

const PostTproviderForm=()=>{

    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {

        console.log(values)

    };

    return(
        <div className="container-fluid mback">
            <br/>
        <div className="container ">

            <form className="fback">

                <h1 className="h4 h1style" ><strong>Fill in the details</strong></h1>
                <hr/>
            <div className="row formmarge">
                <div className="col-sm-2">

                </div>
                <div className="col-sm-6 ">
                    <label htmlFor="name">Name</label>
                    <input type="Text" className="form-control" id="name"/>
                </div>
                <div className="col-sm-4">

                </div>
            </div>

                <div className="row formmarge">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4"/>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
                <div className="row formmarge">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-6">
                        <label htmlFor="Address">Address</label>
                        <input type="Address" className="form-control" id="Address"/>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
                <div className="row formmarge">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-6">
                        <label htmlFor="pnumber">TelePhone</label>
                        <input type="number" className="form-control" id="pnumber"/>
                    </div>
                    <div className="col-sm-4"></div>
            </div>

                <div className="row formmarge">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-6">
                        <label htmlFor="district">District</label>
                        <input type="Text" className="form-control" id="district"/>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-sm-2">

                    </div>
                    <div className="col-sm-6">
                        <p><small>Select vehicle type</small></p>
                    </div>
                    <div className="col-sm-4">

                    </div>
                </div>


                <div className="row formmarge">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-2">
                        <input className="form-check-input " type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" htmlFor="defaultCheck1">
                                    Car
                            </label>
                    </div>
                    <div className="col-sm-2">
                        <input type="Number" className="form-control" placeholder="No.of Vehicles"/>
                    </div>
                    <div className="col-sm-2">
                        <input type="number" className="form-control" placeholder="Price Per Day"/>
                    </div>
                    <div className="col-sm-4"></div>
                </div>

                <div className="row formmarge">
                    <div className="col-sm-2"></div>
                    <div className="col-sm">
                        <input className="form-check-input " type="checkbox" value="" id="defaultCheck1"/>
                        <label className="form-check-label" htmlFor="defaultCheck1">
                              Van
                        </label>
                    </div>
                    <div className="col-sm">
                        <input type="Number" className="form-control" placeholder="No.of Vehicles"/>
                    </div>
                    <div className="col-sm">
                        <input type="number" className="form-control" placeholder="Price Per Day"/>
                    </div>
                    <div className="col-sm-4"></div>
                </div>

                <div className="row formmarge">
                    <div className="col-sm-2"></div>
                    <div className="col-sm">
                        <input className="form-check-input " type="checkbox" value="" id="defaultCheck1"/>
                        <label className="form-check-label" htmlFor="defaultCheck1">
                            Suv
                        </label>
                    </div>
                    <div className="col-sm">
                        <input type="Number" className="form-control" placeholder="No.of Vehicles"/>
                    </div>
                    <div className="col-sm">
                        <input type="number" className="form-control" placeholder="Price Per Day"/>
                    </div>
                    <div className="col-sm-4"></div>
                </div>

                <div className="row formmarge">
                    <div className="col-sm-2"></div>
                    <div className="col-sm">
                        <input className="form-check-input " type="checkbox" value="" id="defaultCheck1"/>
                        <label className="form-check-label" htmlFor="defaultCheck1">
                            Bus
                        </label>
                    </div>
                    <div className="col-sm">
                        <input type="Number" className="form-control" placeholder="No.of Vehicles"/>
                    </div>
                    <div className="col-sm">
                        <input type="number" className="form-control" placeholder="Price Per Day"/>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
                <div className="row formmarge">
                    <div className="col-sm-2">

                    </div>
                    <div className="col-sm-5">

                    </div>
                    <div className="col-sm-5-center">
                        <button class="btn btn-primary" type="submit">Post ad</button>
                    </div>
                </div>
                <hr/>
            </form>
        </div>
        </div>
    )
};

export default PostTproviderForm;