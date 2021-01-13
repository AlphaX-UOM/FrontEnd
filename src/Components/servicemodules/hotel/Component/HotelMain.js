import React, { Component } from 'react';
import Form from './Form';
import './HotelMain.css';
import HotelList from './HotelList';
import Result from '../Result/Result';


class HotelMain extends Component {
    render() {
        return (
            <div>
                <div className="container heading">
                    <div className="row">
                        <div className="col" align="center"><p className="title">Hotel and Accommodation Provider</p></div>
                    </div>
                </div>
                <Form/>

                <br />
                <br />

            </div>
        );
    }
}




export default HotelMain;