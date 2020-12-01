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


const home=()=>{
        return(
        <div >

            <Suggestor/>


            <br/>
            <div className="container ">
                <div className="row">
                    <div className="col-md-2"></div>



                    <div className="col-lg-2">
                        <Link to="/transport" className="link textdec">
                            <div className="card  text-center rounded text-c">
                                <div className="card-body ct ">
                                    <div >
                                        <DriveEtaOutlinedIcon/>
                                    </div>
                                    <br/>
                                    <h5 className="card-title ct" style={{fontFamily:"verdana"}}>Find a Vehicle</h5>
                                </div>
                            </div>
                        </Link>

                    </div>

                    <div className="col-lg-2">
                        <Link to="/guide" className="link textdec">
                            <div className="card  text-center text-c">
                                <div className="card-body ct">
                                    <div>
                                        <PermIdentityOutlinedIcon/>
                                    </div>
                                    <br/>
                                    <h5 className="card-title ct" style={{fontFamily:"verdana"}}>Find a Tour guide</h5>
                                </div>

                            </div>
                        </Link>

                    </div>

                    <div className="col-lg-2">
                        <Link  to="/events"className="link textdec">
                            <div className="card  text-center text-c">
                                <div className="card-body ct">
                                    <div>
                                        <EventOutlinedIcon/>
                                    </div>
                                    <br/>
                                    <h5 className="card-title ct" style={{fontFamily:"verdana"}}>Things to do Events</h5>
                                </div>
                            </div>
                        </Link>

                    </div>

                    <div className="col-lg-2">
                        <Link  to="/hotel" className="link textdec">
                            <div className="card  text-center text-c">
                                <div className="card-body ct">
                                    <div>
                                        <HotelOutlinedIcon/>
                                    </div>
                                    <br/>
                                    <h5 className="card-title ct" style={{fontFamily:"verdana"}}>Hotels & Resturants</h5>
                                </div>
                            </div>
                        </Link>

                    </div>

                    <div className="col-md-2"></div>
                </div>
            </div>
            <br/>
            <br/>
            <div className="container-fluid plan" >


            </div>

        </div>
    )
};

export default Radium(home);