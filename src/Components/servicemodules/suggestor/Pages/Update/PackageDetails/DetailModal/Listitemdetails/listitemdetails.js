import React, { useState } from 'react';
import './listitemdetails.css'
import { Link } from 'react-router-dom'
import Ratings from '../rating-mod/ratingm'
import Comments from '../comments/comments'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

function Listitemdetails() {
    const [Com, setCom] = useState(false);

    const handlecarClik = () => {
        setCom(!Com);
    }

    return (
        <div className="">
            <br />
            <div className="container border border-success  " >
                <br />
                <div className="row ">
                    <div className="col-sm-1">
                    </div>
                    <div className="col-sm-4 imgcolor " >
                        <br />
                        <div className="col-sm-12 ">
                            <h3 className="txtcolorx">{"this.state.providers.brand"} {"this.state.providers.model"} {"this.state.providers.vehicleType"}</h3>
                            <hr />
                        </div>
                        <br />


                        <div className="col-sm-12">

                            <img src="http://via.placeholder.com/300" alt="firebase-image" className='imgsize' />

                        </div>
                        <br />
                        <div className="col-sm-12">
                            <span className="lead">
                                <div className="row">

                                    <div className="col-sm"><Ratings /></div>


                                </div>

                                <div className="row">
                                    <Link onClick={handlecarClik} >
                                        <div className="col txtcolorx rev-col "><small className="iconpad"> Reviews</small><ChatBubbleOutlineIcon fontSize="small" /></div>
                                    </Link>



                                </div>
                            </span>
                        </div>
                        <br />
                    </div>
                    <div className="col-sm-7 ">


                        <div className="row ">
                            <div className="col-sm-2">
                            </div>
                            <div className="col-sm " >
                                <div className="depad">

                                    <br />



                                    <span className="">
                                        <div className="row">
                                            <div className="col-sm-4"><strong>Owner :</strong> </div>
                                            <div className="col-sm-8">
                                                <div className="" >
                                                    {"this.state.providers.name"} - {"this.state.providers.district"}
                                                </div>
                                            </div>
                                        </div>



                                    </span>


                                    <span className="">
                                        <div className="row">
                                            <div className="col-sm-4"><strong>District :</strong></div>
                                            <div className="col-sm-8">
                                                <div className="text-uppercase" role="alert">
                                                    {"this.state.providers.district"}
                                                </div>
                                            </div>
                                        </div>

                                    </span>


                                    <span className="">
                                        <div className="row">
                                            <div className="col-sm-4"><strong>Address :</strong></div>
                                            <div className="col-sm-8">
                                                <div className="" role="alert">
                                                    {"this.state.providers.address"}
                                                </div></div>
                                        </div>

                                    </span>
                                    <span className="">
                                        <div className="row">
                                            <div className="col-sm-4"><strong>TP :</strong></div>
                                            <div className="col-sm-8">
                                                <div className="" role="alert">
                                                    {"this.state.providers.pnumber"}
                                                </div>
                                            </div>
                                        </div>

                                    </span>

                                    <span className="">
                                        <div className="row">
                                            <div className=" col-sm-4"><strong>Email :</strong></div>
                                            <div className="col-sm-8">
                                                <div className="" role="alert">
                                                    {"this.state.providers.email"}
                                                </div></div>
                                        </div>

                                    </span>


                                    <span className="">
                                        <div className="row">
                                            <div className="col-sm-4"><strong>Air Condition :</strong></div>
                                            <div className="col-sm-8">
                                                <div className=" " role="alert">
                                                    {/*{this.state.providers.airCondition.toString()}*/}

                                                    {'Available'}
                                                </div>
                                            </div>
                                        </div>
                                    </span>




                                    <span className="">
                                        <div className="row">
                                            <div className="col-sm-4"><strong>Description :</strong></div>
                                            <div className="col-sm-8">
                                                <div className=" " role="alert">
                                                    {"this.state.providers.description"}
                                                </div>
                                            </div>
                                        </div>
                                    </span>
                                    <br />
                                    <span className="">
                                        <div className="row txtcolorx">
                                            <div className="col-sm-5 h5"><strong>Price Per 1KM :</strong> </div>
                                            <div className="col-sm-7">
                                                <div className="h5" >
                                                    Rs {"this.state.providers.pricePer1KM"}
                                                </div>
                                            </div>
                                        </div>

                                    </span>

                                    <span className="">
                                        <div className="row txtcolorx">
                                            <div className="col-sm-5 h5"><strong>Price Per Day :</strong> </div>
                                            <div className="col-sm-7">
                                                <div className="h5" >
                                                    Rs {"this.state.providers.pricePerDay"}
                                                </div>
                                            </div>
                                        </div>

                                    </span>
                                    <hr />
                                </div>
                            </div>
                            <div className="col-sm-1">
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1">
                    </div>
                </div>
                <br />
                <div hidden={(!Com) ? "hidden1" : ""}>
                    <Comments />
                </div>
            </div>
            <br />
        </div>
    )
}


export default Listitemdetails;
