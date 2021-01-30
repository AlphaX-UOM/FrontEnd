import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Form.css';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import connect from "react-redux/es/connect/connect";
import {guide_input_form} from "../../../../store/actions/guide_input_reducer"


const FormSearch = (props) => {
    const {guideform } = props;
  const [language, setlanguage] = useState()
  const[state,setState]= useState(
    [new Date(), new Date()],
 )
  function Datepick() {
    
   
   const  onChange = () => setState
   
    
      return ( 
        <div style={{height:"50px",backgroundColor: 'white',border: '1px ',borderRadius: '10px'}} className='form-control tm-select'>
          <DateRangePicker
            onChange={onChange()}
            value={state}
          />
        </div>
      );
    
  
  }
 
  const handleInputlanguage = (event) => {
    setlanguage(language => event.target.value);
}

  let formdata={
    language:language,
    date1:state[0],
    date2:state[1],
  };
  // console.log(language);
  // console.log(state[1]);
  return (
    <div className='form-content-right-g'>


      <form className='form1-g' noValidate>

          <div className="container">
              <div className="row">

                  <div className="col-sm">
                      <h1 style={{color: 'white'}}>
                          Help Us to Select Your Guide!
                      </h1>
                  </div>

              </div>

              <div className="row">
                  <div className="col-sm-4"></div>
                  <div className="col-sm-6">

                      <div className='form-group'>
                          <label className='form-label-g' placeholder='Search'></label>
                          <select className='form-control tm-select' id="language" placeholder='Search' onChange={handleInputlanguage} style={{borderRadius:"10px"}} required>

                              <option value="Hindi" selected>Select Language</option>
                              <option value="Japan">Japan</option>
                              <option value="Korean">Korean</option>
                              <option value="English">English</option>
                              <option value="French">French</option>
                          </select>

                      </div>

                  </div>
                  <div className="col-sm-2"></div>
              </div>

              <div className="row">
                  <div className="col-sm-4"></div>
                  <div className="col-sm">

                      <div className="form-group"><Datepick/></div>
                  </div>
                  <div className="col-sm-2"></div>
              </div>

              <div className="row form-group">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-2 d-flex justify-content-center">

                      <Link to={{pathname:"/NameList", data: formdata}} className=""> <button type="button" className="form-input-btn-g " onClick={guideform(language,state[0],state[1])} >
                          Search</button></Link>
                  </div>
                  <div className="col-sm-3"></div>
              </div>

          </div>

      </form>
      
    </div>
  );
};



const mapStateToProps = (state) => {
    return {


    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        guideform:  (language,date,date1) => {dispatch(guide_input_form(language,date,date1)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)( FormSearch);

