import React, { useState } from "react";
import Radium from "radium";
import { Link } from "react-router-dom";
import Flavour from "./Flavour";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import { DateRangePickerCalendar, START_DATE } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import moment from "moment";
import { connect } from "react-redux";

function Form(props) {
  const[location,setLocation]=useState();
  const [aduls, setadults] = useState();
  const[kids,setKids]=useState();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focus, setFocus] = useState(START_DATE);
  const handleFocusChange = (newFocus) => {
    setFocus(newFocus || START_DATE);
  };

  var formatadmission = moment(startDate).format("DD-MM-YYYY");
  var formatdischarge = moment(endDate).format("DD-MM-YYYY");

  var suggestCheckin = moment(startDate).format("YYYY-MM-DD");
  var suggestCheckout = moment(endDate).format("YYYY-MM-DD");

  var starts = formatadmission.substring(0, 2);
  var ends = formatdischarge.substring(0, 2);

  if (ends >= starts) {
    var noOdDates = ends - starts;
  } else {
    var myvari = parseInt(30 - starts);
    var myend = parseInt(ends);
    var noOdDates = myvari + myend;
  }

  //min date is today
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  today = yyyy + "-" + mm + "-" + dd;
  console.log(today);
  if (endDate != null) {
    var maximum = endDate;
  }

  if (startDate != null) {
    today = startDate;
  }

  console.log("no of days-> " + noOdDates);

  const handleAdults = (event) => {
    setadults(event.target.value);
  };
  const handleKids = (event) => {
    setKids(event.target.value);
  };

 

  let formdata = {
    location: location,
    aduls: aduls,
    kids:kids,
    days: noOdDates,
    Checkin : suggestCheckin,
    Checkout : suggestCheckout
  };

  const handleStartDate = (event) => {
    setStartDate(event.target.value);
    console.log("start Date-> " + event.target.value);
  };

  const handleEndDate = (event) => {
    setEndDate(event.target.value);
    console.log("End Date-> " + event.target.value);
  };
  const Changehandler = (event) => {
    setLocation(event.target.value);
  };

  const handleFormData = () => {
    props.addFormData(formdata);
  };
  
  // console.log(noOdDates);
  return (
    <div>


   
      
          
  
<div>
              <form
                action="index.html"
                method="get"
                className="tm-search-form tm-section-pad-2"
              >
                <div className="form-row tm-search-form-row">
                  {/* <div className="form-group tm-form-group tm-form-group-pad tm-form-group-1">
                    <label htmlFor="inputCity">Location</label>
                    <select className="form-control tm-select"  name="province"  onChange={Changehandler}>
                                        <option value="Nothern">Nothern</option>
                                        <option value="North Cenral">North Cenral</option>
                                        <option value="North Western">North Western</option>
                                        <option value="Southern">Southern</option>
                                        <option value="Sabaragamuwa">Sabaragamuwa</option>
                                        <option value="Uva">Uva</option>
                                        <option value="Western">Western</option>
                                        <option value="Central">Central</option>
                                        <option value="Eastern">Eastern</option>

                                    </select>

                   
                  </div> */}
                 
               
                  </div>
                
              

                <div className="form-row tm-search-form-row">
                  <div className="form-group tm-form-group tm-form-group-pad tm-form-group-3">
                    <label htmlFor="inputCheckIn">Arrival Date</label>
                    <input
                      name="check-in"
                      type="date"
                      className="form-control"
                      id="inputCheckIn"
                      placeholder="Check In"
                      min={today}
                      max={maximum}
                      onChange={handleStartDate}
                    />
                  </div>
                  <div className="form-group tm-form-group tm-form-group-pad tm-form-group-3">
                    <label htmlFor="inputCheckOut">Dipature Date</label>
                    <input
                      name="check-out"
                      type="date"
                      className="form-control"
                      id="inputCheckOut"
                      placeholder="Check Out"
                      min={today}
                      onChange={handleEndDate}
                    />
                  </div>
                  <div className="form-group tm-form-group tm-form-group-pad tm-form-group-1">
                    <label htmlFor="btnSubmit">&nbsp;</label>
                    {
                   
                    noOdDates !== undefined ? (
                      <Link
                        type="submit"
                        to="/categorylanding1"
                        className="btn btn-primary tm-btn tm-btn-search text-uppercase"
                        id="btnSubmit"
                        onClick={handleFormData}
                      >
                        Search
                      </Link>
                    ) : (
                      <Link
                        type="submit"
                        to="/result"
                        className="btn btn-primary tm-btn tm-btn-search text-uppercase disabled"
                        id="btnSubmit"
                        onClick={handleFormData}
                      >
                        Search
                      </Link>
                    )}
                  </div>
                </div>
              </form>
            </div>

        
            </div>
         
       
    
  );
}

const mapStateToProps = (state) => {
  return {
    formeventData: state.eventpnl.formeventData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFormData: ( formdata) => {
      dispatch({ type: "ADD_FORM_DATA",  formdata:  formdata });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Radium(Form));
