import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NameList.css';
import NamelistItem from './NamelistItem';

function Namelist() {
  
  const [nameList, setNameList] = useState([]);
  const [loading,setLoading]=useState(false);
  const [search,setSearch]=useState('');
    
  
  //const [myVariable,setmyVariable]=useState();

  

    useEffect(() => {
      setLoading(true);
      axios
    .get('https://localhost:44385/api/eventplanners')
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
  }, []);

  const filterEvents=nameList.filter(item=>{
   return item.eventName.toLowerCase().includes(search.toLowerCase())
  })

  


  const nameListComponent = () => {
    return filterEvents.map((aName) => {
      return (

        <NamelistItem
        
          name={aName.eventName}
          cost={aName.price}
          details={aName.otherDetails}
          venue={aName.venue}
          comments={aName.comments}
          notifications={aName.notifications}
         
        />
       
      );
    });
  };

  
  return (
    
       <div className="card" >
      
      <br/>
      <br/>
        
              <input type="text" placeholder="Search" onChange={e=>setSearch(e.target.value)} style={{width:'800px', padding: '20px',alignSelf:'center'}}/>  
             
              
             

           
    <React.Fragment>
    
      <div className="container mt-4">
      
        <ul className="list-group">{nameListComponent()}</ul>
       
      </div>
    </React.Fragment>
   
    
    </div>
  
 
  );
}

export default Namelist;