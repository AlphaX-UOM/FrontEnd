import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CategoryRightListItem from './CategoryRightListItem';
import { connect } from "react-redux";
import { Container, Col, Row } from 'react-bootstrap';


function CategoryRightList(props) {
    console.log("props->"+props.type);
    let mapdata=props.mapdata;
    console.log(mapdata);
    let auddata=props.auddata;
    let pricedata=props.pricedata;
    let searchdata=props.searchdata;

 
    const [myeventList, setmyeventList] = useState([]);
    const [mylocation, setmaylocations] = useState([]);
    const [search, setSearch] = useState("");


    useEffect(() => {
      fetch('https://alphax-api.azurewebsites.net/api/eventplannerservices')
        .then((response) => {
          return response.json();
        })
         .then((responseData) => {
        //   if(mapdata!=null){
        //     responseData = responseData.filter(item => item.district === props.eventmapCompare[mapdata]);
           setmyeventList(responseData);
        //   }
          
          setmyeventList(responseData);
        });
    }, []);
    
    
    const filterEvents=myeventList.filter(item=>{
        return item.eventType.includes(props.type)
       })

    

       const filterSearch=filterEvents.filter(item=>{
       
        
        return item.name.toLowerCase().includes(search.toLowerCase())
       })
       const filterDis=filterSearch.filter(item=>{
        if(mapdata===null)
        return filterEvents
        else
       return item.district.includes(props.eventmapCompare[mapdata])
      })
      const filterAud=filterDis.filter(item=>{
        if(auddata===null||auddata==="All")
        return filterDis;
        else if(auddata==="family")
        return item.audience!=="21+"
        else
        return item.audience.includes(auddata)
       })
        
       const filterPrice=filterAud.filter(item=>{
        if(pricedata===null||pricedata==="All")
        return filterAud;
        if(pricedata==='500-')
        return item.price<=500.00
        if(pricedata==='500+')
        return item.price>500.00
       })
   

  return (
    <div>
       <div >
       <Row>
         <Col>
         <center>
         {<input type="text" placeholder="Search" onChange={e=>setSearch(e.target.value)} style={{width:'400px', padding: '10px'}}/>  }
         </center>
         </Col>
        
        </Row>
        <Row>

        </Row>
       
      
       <div>
         <br>
       </br>
       </div>
  
       </div>
       <Row>
         <Col>
         {filterPrice.map((item) => (
           <CategoryRightListItem key={item.name} name={item.name} item={item} />
         ))}
         </Col>
       </Row>
      
       
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
      reservations: state.eventpnl.reservations,
      formdata: state.eventpnl.formdata,
      total: state.eventpnl.total,
      userCred: state.eventpnl.userCred,
      eventData1:state.eventpnl.eventData1,
      eventmapCompare:state.eventpnl.eventmapCompare,
      mapdata:state.eventpnl.mapdata,
      auddata :state.eventpnl.auddata,
      pricedata:state.eventpnl.pricedata,
      searchdata:state.eventpnl.searchdata,
  };
};


export default connect(mapStateToProps)(CategoryRightList);

