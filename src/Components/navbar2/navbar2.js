import React from 'react';
import './navbar2.css';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import EventIcon from '@material-ui/icons/Event';
import HotelIcon from '@material-ui/icons/Hotel';


const navbar2=()=>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center  " id="navbarNav">
                    <ul className="navbar-nav  ">

                        <li className="nav-item">
                            <a className="nav-link" href="#">  Find a ride <DriveEtaIcon /></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Guide <PermIdentityIcon/></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Events <EventIcon/></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Hotels <HotelIcon/></a>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    )
};

export default navbar2;