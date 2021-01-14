import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Form.css';

import DateRangePicker from '@wojtekmaj/react-daterange-picker';

const FormSearch = () => {
  const [language, setlanguage] = useState()
  const[state,setState]= useState(
    [new Date(), new Date()],
 )
  function Datepick() {
    
   
   const  onChange = () => setState
   
    
      return ( 
        <div style={{padding: '10px' ,backgroundColor: 'white',border: '1px ',borderRadius: '10px'}}>
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
  console.log(language);
  console.log("date 1=== ",state[0]);
  console.log("date 2 === ",state[1]);
  return (
    <div className='form-content-right-g'>
      <form className='form1-g' noValidate>
        <h1 style={{color: 'white'}}>
             Help Us to Select Your Guide!
        </h1>
        
    
        
        <div className='form-inputs-g'>
          <label className='form-label-g' placeholder='Search'></label>
          <select className='form-input-g' id="language" placeholder='Search' onChange={handleInputlanguage} >
            
          <option value="Hindi">Select Language</option>
          <option value="Spanish">Spanish</option>
          <option value="Japan">Japan</option>
          <option value="English">English</option>
          <option value="Korean">Korean</option>
          </select>
       
        </div>
        <div style={{padding:'10px'}}><Datepick/></div>
      
        
         <div>
        <Link to={{pathname:"/NameList", data: formdata}} > <button type="button" className="form-input-btn-g"  > Search</button></Link>
       
      </div>
        
        <span className='form-input-login-g'>
         
        </span>
       
      </form>
      
    </div>
  );
}; 

export default FormSearch;
