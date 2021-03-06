import React from 'react';
import './post.css';
import Logo1 from '../../images/vehicle/itemimages/estate.jpg';
import Logo2 from '../../images/post-card/guide (2).jfif';
import Logo3 from '../../images/post-card/event.jfif';
import Logo4 from '../../images/post-card/hotel.jfif';
import {Link} from 'react-router-dom'


import DriveEtaOutlinedIcon from '@material-ui/icons/DriveEtaOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import HotelOutlinedIcon from '@material-ui/icons/HotelOutlined';

const post=(props)=>{
    return(

            <div className="container">
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">

                            <h1 className="h4 text-center"><strong>Welcome -User Name-! Let's post an ad.</strong></h1>

                        </div>
                    </div>
                </div>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                        <p className="text-center">

                        </p>

                        </div>
                    </div>
                </div>

                <br/>
                        <div className="row">
                           <div className="col-sm-3">
                               </div>


                            <div className="col-sm-6">



                                <div className="container" id="tm-section-3">
                                    <ul className="nav nav-pills tm-tabs-links">
                                        <li className="tm-tab-link-li">
                                            <div className="tm-tab-link">
                                                <Link to={props.match.url + '/post-transportprovider'} className="tm-tab-link">
                                                    <DriveEtaOutlinedIcon/>
                                                    <br/>
                                                    Be a vehicle provider
                                                </Link>

                                            </div >
                                        </li>


                                        <li className="tm-tab-link-li">
                                            <div className="tm-tab-link" >
                                                <Link to={props.match.url +"/post-tourguide"} className="tm-tab-link">
                                                    <PermIdentityOutlinedIcon/>
                                                    <br/>
                                                    join as a Tour Guide
                                                </Link>

                                            </div>
                                        </li>



                                    </ul>
                                    <ul className="nav nav-pills tm-tabs-links">




                                        <li className="tm-tab-link-li">
                                            <div className="tm-tab-link">
                                                <Link to={props.match.url +"/post-event"} className="tm-tab-link">
                                                    <EventOutlinedIcon/>
                                                    <br/>
                                                    Post Your Events
                                                </Link>

                                            </div>
                                        </li>
                                        <li className="tm-tab-link-li">
                                            <div  className="tm-tab-link">
                                                <Link to={props.match.url +"/post-hotel"} className="tm-tab-link">
                                                    <HotelOutlinedIcon/>
                                                    <br/>
                                                    Add your Hotel
                                                </Link>



                                            </div>
                                        </li>

                                    </ul>
                                </div>


                                    </div>
                            </div>

                <div className="col-sm-3">
                </div>
                <br/>
                <br/>
            </div>


    )
};

export default post;