import React, { useState } from "react";

import Radium from "radium";
import { Link } from "react-router-dom";

import { DateRangePickerCalendar, START_DATE } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import moment from "moment";

import { connect } from "react-redux";

function DateForm(props) {
  const [travellers, setTravelers] = useState();
  const [budget, setBudget] = useState();
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


  let eventDate1 = {
    
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

  const handleFormData = () => {
    props.addFormData(eventDate1);
  };
  // console.log(noOdDates);
  return (
    <div>
 

     
       
              <form
                action="index.html"
                method="get"
                className="tm-search-form tm-section-pad-2"
              >
             

                <div className="form-row tm-search-form-row">
                  <div className="form-group tm-form-group tm-form-group-pad tm-form-group-3">
                    <label htmlFor="inputCheckIn">Check In Date</label>
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
                    <label htmlFor="inputCheckOut">Check Out Date</label>
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
                    {budget !== undefined &&
                    travellers !== undefined &&
                    noOdDates !== undefined ? (
                      <Link
                        type="submit"
                        to="/categorylanding"
                        className="btn btn-primary tm-btn tm-btn-search text-uppercase"
                        id="btnSubmit"
                        onClick={handleFormData}
                      >
                        Give me a Event
                      </Link>
                    ) : (
                      <Link
                        type="submit"
                        to="/categorylanding"
                        className="btn btn-primary tm-btn tm-btn-search text-uppercase disabled"
                        id="btnSubmit"
                        onClick={handleFormData}
                      >
                        Give Me A Event
                      </Link>
                    )}
                  </div>
                </div>
              </form>
            </div>

       
  
 
  );
}

const mapStateToProps = (state) => {
  return {
    eventDate1: state.eventpnl.eventDate1,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFormData: (eventDate1) => {
      dispatch({ type: "ADD_EVENT_DATE", eventDate1: eventDate1 });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Radium(DateForm));
