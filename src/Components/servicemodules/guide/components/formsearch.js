import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Form.css';



const FormSearch = () => {
  const [language, setlanguage] = useState()
 
  const handleInputlanguage = (event) => {
    setlanguage(language => event.target.value);
}

  let formdata={
    language:language,
  };
  console.log(formdata.language);
  return (
    <div className='form-content-right'>
      <form className='form' noValidate>
        <h1>
             Help Us to Select Your Guide!
        </h1>
        
    
        
        <div className='form-inputs'>
          <label className='form-label' placeholder='Search'></label>
          <select className='form-input' id="language" placeholder='Search' onChange={handleInputlanguage} >
            
          <option value="Hindi">Select Language</option>
          <option value="Spanish">Spanish</option>
          <option value="Chinees">Chinees</option>
          <option value="English">English</option>
          <option value="French">French</option>
          </select>
       
        </div>
        <div style={{padding:'10px'}}><Calendar /></div>
      
        
     
        <Link to={{pathname:"/NameList", data: formdata}} > <button type="button" className="btn btn-warning rounded"  > Search</button></Link>
      
        
        <span className='form-input-login'>
         
        </span>
       
      </form>
      
    </div>
  );
}; 

export default FormSearch;
