import React, { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../Form/Form.css";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import connect from "react-redux/es/connect/connect";
import { guide_input_form } from "../../../../../store/actions/guide_input_reducer";

const FormSearch = (props) => {
  const { guideform } = props;
  
  const [state, setState] = useState({checkindate:null}); 
  const [state1, setState1] = useState({checkoutdate:null});
  

  
  const handleInputdate = (event) => {
    setState({ [event.target.name]: event.target.value })
  };
  const handleInputdate1 = (event) => {
    setState1({ [event.target.name]: event.target.value })
  };
  let formdata = {
    
     date: state,
     date1: state1,
  };
  let check =false
  if(state.checkindate !== null && state1.checkoutdate !== null){
    check = true;
  }
  
 
 

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
  return (
    <div className="form-content-right-g">
      <form className="form1-g" noValidate>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h1 style={{ color: "white" }}>Help Us to Select Your Guide!</h1>
            </div>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>

          <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-6">
              {/* <div className="form-group">
                <label className="form-label-g" placeholder="Search"></label>
                <select
                  className="form-control tm-select"
                  id="language"
                  placeholder="Search"
                  onChange={handleInputlanguage}
                  style={{ borderRadius: "10px" }}
                  required
                >
                  <option value="Hindi" selected>
                    Select Language
                  </option>
                  <option value="Japan">Japan</option>
                  <option value="Korean">Korean</option>
                  <option value="English">English</option>
                  <option value="French">French</option>
                </select>
              </div> */}
            </div>
            <div className="col-sm-2"></div>
          </div>

          <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm">
                <div><h3 style={{color: "white"}}>From</h3></div>
              <div  style={{hight:"30px",width:"220px"}}>
               
                <input
                  type="date"
                  id="contact_name"
                  name="checkindate"
                  className="form-control"
                  placeholder="checkindate"
                  value={state.checkindate} onChange={handleInputdate} min={today} />
              </div>
              <br/>
              <div><h3 style={{color: "white"}}>To</h3></div>
              <div style={{hight:"30px",width:"220px"}}>
               
               <input
                 type="date"
                 id="contact_name"
                 name="checkoutdate"
                 className="form-control"
                 placeholder="checkoutdate" 
                 value={state1.checkoutdate} onChange={handleInputdate1} 
                 min={state.checkindate}
               />
             </div>
             <br/>
             <div  >
              {check?  <Link to={{ pathname: "/NameList", data: formdata }} className="">
                {" "}
                <button
                  type="button"
                  className="form-input-btn-g "
                  onClick={guideform( formdata,formdata)}
                >
                  Search
                </button>
              </Link>: <button
                  type="button"
                  className="form-input-btn-g23 "
                 
                >
                 Enter date to continue
                </button>}
            
            </div>
          </div>
            </div>
            <div className="col-sm-2"></div>
           

          <div className="row form-group" >
          
           
            <div className="col-sm-3"></div>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    guideform: (date, date1) => {
      dispatch(guide_input_form(date, date1));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormSearch);
