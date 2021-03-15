import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CategoryRightListItem from './CategoryRightListItem';

function CategoryRightList(props) {
    console.log("props->"+props.type);

    const [myeventList, setmyeventList] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
      fetch(`https://alphax-api.azurewebsites.net/api/eventplannerservices/`)
        .then((response) => {
          return response.json();
        })
        .then((responseData) => {
          setmyeventList(responseData);
        });
    }, []);
    
    
    const filterEvents=myeventList.filter(item=>{
        return item.eventType.includes(props.type)
       })

       const filterSearch=filterEvents.filter(item=>{
        return item.name.toLowerCase().includes(search.toLowerCase())
       })

  return (
    <div>
       <div >
       
       <input type="text" placeholder="Search" onChange={e=>setSearch(e.target.value)} style={{width:'400px', padding: '10px',alignSelf:'center'}}/> 
       <div>
         <br>
       </br>
       </div>
  
       </div>
      
        {filterSearch.map((item) => (
           <CategoryRightListItem key={item.name} name={item.name} item={item} />
         ))}
    </div>
  );
}



export default CategoryRightList;

