import React from 'react';
import './Form.css';
import { useForm } from "react-hook-form"
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';


const Form = () => {
    const history = useHistory();
    const { handleSubmit } = useForm();
    const onSubmit = values => {

        console.log(values)
        history.push('/HotelList')
    };
 
    return (
        <div>
            

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="container form">
                    <div className="row" style={{ padding: "100px" }}>
                        <div className="col-lg-12">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Hotel / Destination</span>
                                </div>
                                <input type="text" aria-label="First name" className="form-control" />

                            </div>

                        </div>

                        <div className="col-lg-1"></div>
                        <div className="col-lg-5">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Check In</span>
                                </div>
                                <input type="date" aria-label="First name" className="form-control"/>

                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Check Out</span>
                                </div>
                                <input type="date" aria-label="First name" className="form-control"/>

                            </div>
                        </div>
                        <div className="col-lg-1"></div>

                        <div className="col-lg-1"></div>
                        <div className="col-lg-5">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">No. Of Adults</span>
                                </div>
                                <input type="number" min="0" className="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">No. Of Kids</span>
                                </div>
                                <input type="number" min="0" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <br />
                        </div>

                        <div className="col-lg-4"></div>
                        <div className="col-lg-4" align="center">

 
                        
                        <Link to='/hotelList'>
                        <button type="button" className="btn btn-warning rounded">Find a Hotel</button>

                        </Link>
                           

        
                           

                        </div>

                    </div>
                </div>
            </form>

            <br />
            <br />

            <div className="container">
                <div className="row">
                    <div className="col-3"><h3>Sort By</h3></div>
                    <div className="col-2"><button type="button" className="btn btn-warning rounded">Rating</button>  </div>
                    <div className="col-1"></div>
                    <div className="col-2"><button type="button" className="btn btn-warning rounded">Stars</button></div>
                    <div className="col-1"></div>
                    <div className="col-2"><button type="button" className="btn btn-warning rounded">Price</button></div>
                    <div className="col-1"></div>
                </div>
            </div>
        </div>
    );

    /*searchSpace = (event) => {
        let keyword = event.target.value;
        setState({ search: keyword });

        if (state.search == null)
            setState({ itemsToDisplay: [...state.itemsToUse] });
        else {
            let itemsToDisplay = [];
            itemsToDisplay = state.itemsToUse.filter((item) =>
                item["Name"].toLowerCase().includes(state.search.toLowerCase())
            );
            setState({ itemsToDisplay });
        }
    };*/

}

export default Form;