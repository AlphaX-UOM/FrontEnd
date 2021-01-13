import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CategoryRightListItem from './CategoryRightListItem';

function CategoryRightList(props) {
    console.log("props->"+props.type);

    const [myeventList, setmyeventList] = useState([]);

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

  return (
    <div>
        {filterEvents.map((item) => (
           <CategoryRightListItem key={item.name} name={item.name} item={item} />
         ))}
    </div>
  );
}



export default CategoryRightList;