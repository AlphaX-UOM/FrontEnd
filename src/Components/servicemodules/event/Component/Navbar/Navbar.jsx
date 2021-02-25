import React from 'react';

import {Link} from 'react-router-dom';
const navbar=()=>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light shadow-sm   bg-white rounded" >
               
                   <span className="navbar-brand mb-0 h1"> Tour Planner</span>
              
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav nav-tabs  ">
                    <li className="nav-item  px-md-3">
                        <span className="align-text-bottom"></span> Home <span className="sr-only">(current)</span>
                    </li>
                    <li className="nav-item px-md-3">
                     <span className="align-text-bottom"></span> Post
                    </li>
                    <li className="nav-item px-md-3">
                        <span className="align-text-bottom"></span> Sign in
                    </li>

                </ul>
            </div>
            </nav>
        </div>
    )
};

export default navbar;