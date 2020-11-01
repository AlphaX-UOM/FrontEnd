import React from 'react';
import { Link } from 'react-router-dom';





function form() {




    return (
        <div>
            <div className="container plan ">
            <div className="card shadow-lg" >
                <div className="row" style={{ padding: "100px" }}>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text ">Check In</span>
                            </div>
                            <input type="date" aria-label="First name" className="form-control" />

                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Check Out</span>
                            </div>
                            <input type="date" aria-label="First name" className="form-control" />

                        </div>
                    </div>
                    <div className="col-lg-1"></div>


                    <div className="col-lg-1"></div>
                    <div className="col-lg-5">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">No. Of Travellers</span>
                            </div>
                            <input type="number" min="0" className="form-control" aria-label="Username"
                                aria-describedby="basic-addon1" />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <select className="form-control form-control-sm">
                            <option disabled selected>Select your favour</option>
                            <option>Beach</option>
                            <option>Safari</option>
                            <option>History</option>
                            <option>Upcountry</option>

                        </select>
                        <br />
                    </div>
                    <div className="col-lg-1"></div>


                    <div className="col-lg-1"></div>
                    <div className="col-lg-5">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Budget</span>
                            </div>
                            <input type="number" className="form-control" aria-label="Username"
                                aria-describedby="basic-addon1" min="0" step="1" placeholder="0" />
                        </div>
                    </div>
                    <div className="col-lg-5"></div>
                    <div className="col-lg-1"></div>

                    <div className="col-lg-2"></div>
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4" align="end">
                        <Link to="/result">
                        <button type="button" className="btn btn-warning rounded"  >Give me a plan</button>
                        </Link>
                    </div>
                    <div className="col-md-2" align="end">

                    </div>


                </div>
            </div>
     </div>
      </div>
    )
}

export default form;