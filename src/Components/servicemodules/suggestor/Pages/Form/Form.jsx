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
            
            <br />
            <div className="container plan" >
                <div className="row" style={{ padding: "10px" }}>
                    
                    <div className="col-5">
                        <div className="card shadow-lg" >
                                <DateRangePickerCalendar startDate={startDate} endDate={endDate} focus={focus} onStartDateChange={setStartDate} onEndDateChange={setEndDate} onFocusChange={handleFocusChange} locale={enGB} />
                        </div>
                    </div>
                        
                    <div className="col-5">
                        <br/>
                        <br/>
                            <div className="input-group mb-1">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">No. Of Travellers</span>
                                </div>
                                <input type="number" onChange={handleChange} min="0" className="form-control" aria-label="Username"
                                    aria-describedby="basic-addon1" />
                            </div>
                    
                            <br />

                            <Flavour />
                             <br />
                       <br/>


                        
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">Budget $</span>
                                </div>
                                <input type="number" onChange={handleInputBudget} className="form-control" aria-label="Username"
                                    aria-describedby="basic-addon1" min="0" step="1" placeholder="0" />
                            </div>
                       
                      <br/>
                           <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tab"></span>&nbsp;&nbsp;<span class="tab"></span>&nbsp;&nbsp;<Link to={{ pathname: "/result", data: formdata }} ><button type="button" className="btn btn-warning rounded">Give me a plan</button></Link></p>
                        
                
                        </div>
                        <div className="col-2"></div>

                    </div>
                </div>

            </div>
       
    )
};

export default Radium(Form);