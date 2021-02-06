import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Card from './Card';
import {Button} from  "react-bootstrap";

function NameList (){
  
  const [nameList, setNameList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");
 
  axios
    .get("https://alphax-api.azurewebsites.net/api/eventplannerservices")
    /*  .then((response) => {
      return response.json();
    })*/
    .then((responseData) => {
      console.log(responseData);

      setNameList(responseData.data);
      setLoading(false);
      /* for (var  i = 0; i < responseData.length; i++) {
      console.log(responseData[i]);
       // eslint-disable-next-line no-loop-func
       setNameList((nameList) => [...nameList, responseData[i]]);
      
      
      
      
    }*/
    });
    const filterEvents=nameList.filter(item=>{
      return item.name.toLowerCase().includes(search.toLowerCase())
     })
    

 

  return (
    <div className="col-sm">
       
       
    
      <div >
       
      <input type="text" placeholder="Search" onChange={e=>setSearch(e.target.value)} style={{width:'800px', padding: '20px',alignSelf:'center'}}/> 
      </div>
     
     
     
     

      <div className="row">
        {filterEvents.map((item) => (
           
          <Card key={item.name} item={item} />
        ))}
        
      </div>
    </div>
  );
};

export default NameList;