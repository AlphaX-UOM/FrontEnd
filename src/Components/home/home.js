import React from 'react';
import "./style.css";
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import DriveEtaOutlinedIcon from '@material-ui/icons/DriveEtaOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import HotelOutlinedIcon from '@material-ui/icons/HotelOutlined';
import Radium from 'radium';
import {Link} from 'react-router-dom'
import Suggestor from '../servicemodules/suggestor/Pages/Form/Form';
import Dots from "../../images/temp/dots-3.png";
import Flavour from "../servicemodules/suggestor/Pages/Form/Flavour";
import { NavLink } from 'react-router-dom'
import img1 from "../../images/temp/Sri lanka/Galle-Fort_24th-oct.jpg"
import img2 from "../../images/temp/Sri lanka/Temple-of-Tooth-in-Sri-Lanka.jpg"
import img3 from "../../images/temp/Sri lanka/Sigiriya-rock-fortress-in-Sri-Lanka.jpg"
import img4 from "../../images/temp/Sri lanka/shutterstock_1084348016.jpg"
import img5 from "../../images/temp/Sri lanka/Sea-Surfing-at-Arugam-Bay.jpg"
import Footer from "../footer/footer";

const home=()=>{
        return(
        <div >

            <Suggestor/>



            <div className="container" id="tm-section-3">
                <ul className="nav nav-pills tm-tabs-links">
                    <li className="tm-tab-link-li">
                        <div className="tm-tab-link">
                            <Link to="/transport" className="tm-tab-link">
                                <DriveEtaOutlinedIcon style={{ fontSize: 50 }}/>
                                <br/>
                                rides
                            </Link>

                        </div >
                    </li>


                    <li className="tm-tab-link-li">
                        <div className="tm-tab-link" >
                            <Link to="/guide" className="tm-tab-link">
                                <PermIdentityOutlinedIcon  style={{ fontSize: 50 }}/>
                                <br/>
                                guides
                            </Link>

                        </div>
                    </li>
                    <li className="tm-tab-link-li">
                        <div className="tm-tab-link">
                            <Link to="/events" className="tm-tab-link">
                                <EventOutlinedIcon style={{ fontSize: 50 }}/>
                                <br/>
                                Events
                            </Link>

                        </div>
                    </li>
                    <li className="tm-tab-link-li">
                        <div  className="tm-tab-link">
                            <Link to="/hotel" className="tm-tab-link">
                                <HotelOutlinedIcon style={{ fontSize: 50 }}/>
                                <br/>
                                Hotels
                            </Link>



                        </div>
                    </li>

                </ul>
            </div>

            <section className="p-5 tm-container-outer tm-bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 mx-auto tm-about-text-wrap text-center">
                            <h2 className="text-uppercase mb-4">Your <strong>Journey</strong> is our priority</h2>
                            <p className="mb-4">Nullam auctor, sapien sit amet lacinia euismod, lorem magna lobortis
                                massa, in tincidunt mi metus quis lectus. Duis nec lobortis velit. Vivamus id magna
                                vulputate, tempor ante eget, tempus augue. Maecenas ultricies neque magna.</p>

                        </div>
                    </div>
                </div>
            </section>


            <div className="tm-container-outer tm-bg-gray" id="tm-section-2 ">
            <section className="clearfix tm-slideshow-section tm-slideshow-section-reverse tm-bg-gray" >

                <div className="tm-right tm-slideshow tm-slideshow-highlight">
                    <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-interval="5000">
                                <img src={img1} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item" data-interval="2000">
                                <img src={img2} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={img3} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={img4} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={img5} className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleInterval" role="button"
                           data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleInterval" role="button"
                           data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>

                </div>

                <div className="tm-slideshow-description tm-slideshow-description-left tm-bg-highlight">
                    <h2 className="">Sri Lanka's most popular places</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam commodi dignissimos ducimus enim, eveniet facilis fugit illum molestiae nam natus non odit quam repellendus sunt voluptas voluptatum. Earum, rem.
                       </p>

                </div>

            </section>


            </div>
            <br/>
        </div>
    )
};

export default Radium(home);