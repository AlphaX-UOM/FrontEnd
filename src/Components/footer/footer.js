import React from 'react';
import './footer.css';

const footer=()=>{
    return(
        <div className="">
            <section style={{height:"80px"}}></section>
            <div className="row" style={{textalign:"center"}}>

            </div>


            <footer className="footer-bs ">
                <div className="row">
                    <div className="col-md-3 footer-brand animated fadeInLeft">
                        <h2>Tour Planner</h2>
                        <p></p>
                        <p>ALPHA-X, All rights reserved</p>
        </div>
                    <div className="col-md-4 footer-nav animated fadeInUp">

                        <div className="col-md-6">
                            <ul className="list">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contacts</a></li>
                                <li><a href="#">Terms & Condition</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2 footer-social animated fadeInDown">
                        <h4>Follow Us</h4>
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">RSS</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 footer-ns animated fadeInRight">
                        <h4>Newsletter</h4>
                        <p>A rover wearing a fuzzy suit doesn’t alarm the real penguins</p>
                        <p>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search for..."/>
                      <span className="input-group-btn">
                        <button className="btn btn-default" type="button"><span
                            className="glyphicon glyphicon-envelope"></span></button>
                      </span>
                            </div>

                        </p>
                    </div>
                </div>
            </footer>

        </div>
    )
};

export default footer;