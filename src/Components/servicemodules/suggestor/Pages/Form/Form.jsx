import React, { useState } from 'react';
import "./Form.css";
import Radium from 'radium';
import { Link } from 'react-router-dom'
import Flavour from './Flavour';
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { DateRangePickerCalendar, START_DATE } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import moment from 'moment';
import Dots from "../../../../../images/temp/dots-3.png";


function Form() {

    const [travellers, setTravelers] = useState()
    const [budget, setBudget] = useState()
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const [focus, setFocus] = useState(START_DATE)
    const handleFocusChange = newFocus => {
        setFocus(newFocus || START_DATE)
    }

    var formatadmission = moment(startDate).format('DD-MM-YYYY');
    var formatdischarge = moment(endDate).format('DD-MM-YYYY');
    var starts = formatadmission.substring(0, 2);
    var ends = formatdischarge.substring(0, 2);

    if (ends >= starts) {
        var noOdDates = (ends - starts);
    }
    else {
        var myvari = parseInt(30 - starts);
        var myend = parseInt(ends);
        var noOdDates = myvari + myend;
    }

    const handleChange = (event) => {
        setTravelers(travellers => event.target.value);
    }

    const handleInputBudget = (event) => {
        setBudget(budget => event.target.value);
    }

    let formdata = {
        budget: budget,
        travelers: travellers,
        days: noOdDates
    }

    return (
        <div >

            {/*<br />*/}
            {/*<div className="container " >*/}
                {/*<div className="row" style={{ padding: "10px" }}>*/}
                    {/**/}
                    {/*<div className="col-5">*/}
                        {/*<div className="card shadow-lg" >*/}
                                {/*<DateRangePickerCalendar startDate={startDate} endDate={endDate} focus={focus} onStartDateChange={setStartDate} onEndDateChange={setEndDate} onFocusChange={handleFocusChange} locale={enGB} />*/}
                        {/*</div>*/}
                    {/*</div>*/}
                        {/**/}
                    {/*<div className="col-5">*/}
                        {/*<br/>*/}
                        {/*<br/>*/}
                            {/*<div className="input-group mb-1">*/}
                                {/*<div className="input-group-prepend">*/}
                                    {/*<span className="input-group-text" id="basic-addon1">No. Of Travellers</span>*/}
                                {/*</div>*/}
                                {/*<input type="number" onChange={handleChange} min="0" className="form-control" aria-label="Username"*/}
                                    {/*aria-describedby="basic-addon1" />*/}
                            {/*</div>*/}
                    {/**/}
                            {/*<br />*/}

                            {/*<Flavour />*/}
                             {/*<br />*/}
                       {/*<br/>*/}


                        {/**/}
                            {/*<div className="input-group mb-3">*/}
                                {/*<div className="input-group-prepend">*/}
                                    {/*<span className="input-group-text" id="basic-addon1">Budget $</span>*/}
                                {/*</div>*/}
                                {/*<input type="number" onChange={handleInputBudget} className="form-control" aria-label="Username"*/}
                                    {/*aria-describedby="basic-addon1" min="0" step="1" placeholder="0" />*/}
                            {/*</div>*/}
                       {/**/}
                      {/*<br/>*/}
                           {/*<p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tab"></span>&nbsp;&nbsp;<span class="tab"></span>&nbsp;&nbsp;<Link to={{ pathname: "/result", data: formdata }} ><button type="button" className="btn btn-warning rounded">Give me a plan</button></Link></p>*/}
                        {/**/}
                {/**/}
                        {/*</div>*/}
                        {/*<div className="col-2"></div>*/}

                    {/*</div>*/}
                {/*</div>*/}

            <section className="tm-banner" >
                <div className="tm-container-outer tm-banner-bg">
                    <div className="container">

                        <div className="row tm-banner-row tm-banner-row-header">
                            <div className="col-xs-12">
                                <div className="tm-banner-header">
                                    <h1 className="text-uppercase tm-banner-title">Let's begin</h1>
                                    <img src={Dots} alt="Dots"/>
                                    <p className="tm-banner-subtitle">We assist you to choose the best.</p>

                                </div>
                            </div>

                        </div>

                        <div className="row tm-banner-row" id="tm-section-search">

                            <form action="index.html" method="get" className="tm-search-form tm-section-pad-2">
                                <div className="form-row tm-search-form-row">
                                    <div className="form-group tm-form-group tm-form-group-pad tm-form-group-1">
                                        <label htmlFor="inputCity">Choose Your Destination</label>

                                        <Flavour/>

                                    </div>
                                    <div className="form-group tm-form-group tm-form-group-1">
                                        <div className="form-group tm-form-group tm-form-group-pad tm-form-group-2">
                                            <label htmlFor="inputRoom">How many travellers?</label>
                                            <input name="check-out" type="number" className="form-control" id="inputCheckOut"
                                                   min="0" placeholder="0"/>
                                        </div>
                                        <div className="form-group tm-form-group tm-form-group-pad tm-form-group-2">
                                            <label htmlFor="inputAdult">Budget</label>
                                            <input name="check-out" type="number" className="form-control" id="inputCheckOut"
                                                   min="0" placeholder="0.00"/>
                                        </div>

                                    </div>
                                </div>

                                <div className="form-row tm-search-form-row">

                                    <div className="form-group tm-form-group tm-form-group-pad tm-form-group-3">
                                        <label htmlFor="inputCheckIn">Check In Date</label>
                                        <input name="check-in" type="date" className="form-control" id="inputCheckIn" placeholder="Check In"/>
                                    </div>
                                    <div className="form-group tm-form-group tm-form-group-pad tm-form-group-3">
                                        <label htmlFor="inputCheckOut">Check Out Date</label>
                                        <input name="check-out" type="date" className="form-control" id="inputCheckOut"
                                               placeholder="Check Out"/>
                                    </div>
                                    <div className="form-group tm-form-group tm-form-group-pad tm-form-group-1">
                                        <label htmlFor="btnSubmit">&nbsp;</label>
                                        <Link type="submit" to="/result"
                                                className="btn btn-primary tm-btn tm-btn-search text-uppercase"
                                                id="btnSubmit">Give Me A Plan
                                        </Link>
                                    </div>
                                </div>
                            </form>

                        </div>

                        <div className="tm-banner-overlay"></div>
                    </div>

                </div>

            </section>


        </div>
       
    )
};

export default Radium(Form);