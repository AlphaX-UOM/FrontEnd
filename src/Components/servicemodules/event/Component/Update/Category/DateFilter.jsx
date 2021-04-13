import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CategoryRightListItem from './CategoryRightListItem';
import { connect } from "react-redux";
import { CardColumns } from 'reactstrap';
import { Container, Col, Row } from 'react-bootstrap';
import Dateleft from './dateleft';
import Map from './SriLanka/map';
import SearchIcon from '@material-ui/icons/Search';

function CategoryRightList(props) {
   
 
    const [myeventList, setmyeventList] = useState([]);
    const [search, setSearch] = useState("");
    let Checkin = props.formdata.Checkin;
    let Checkout = props.formdata.Checkout;
    let  aduls= props.formdata.aduls;
    let  kids= props.formdata.kids;
  //  let  location= props.formdata.location;
    let auddata=props.auddata;
    let pricedata=props.pricedata;
    let mapdata=props.mapdata;
  console.log("checkin=>"+Checkin);
  console.log("checkout=>"+Checkout);
  console.log("Adults=>"+aduls);
  console.log("Kids=>"+kids);
//  console.log("location=>"+location);
  console.log(auddata);
  console.log(pricedata);


  useEffect(() => {
    fetch(
      'https://alphax-api.azurewebsites.net/api/eventplannerservices/'   
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
      
        // responseData = responseData.filter(item => (new Date(item.date)>=new Date(Checkin))&& new Date(item.date) <=new Date(Checkout));
       
        setmyeventList (responseData);
        console.log("response data->"+responseData);
     
         
        
      });
      
  }, []);
  const filterSearch=myeventList.filter(item=>{
       
        
    return item.name.toLowerCase().includes(search.toLowerCase())
   })

  // const filterEvents=filterSearch.filter(item=>{
  //   if(auddata===null||auddata==="All")
  //   return myeventList;
  //   else if(auddata==="family")
  //   return item.audience!=="21+"
  //   else
  //   return item.audience.includes(auddata)
  //  })
    
  //  const filterPrice=filterEvents.filter(item=>{
  //   if(pricedata===null||pricedata==="All")
  //   return filterEvents;
  //   if(pricedata==='5000-')
  //   return item.price<=5000.00
  //   if(pricedata==='5000+')
  //   return item.price>5000.00
  //  })
   const filterDis=filterSearch.filter(item=>{
    if(mapdata===null)
    return filterSearch
    else
   return item.district.includes(props.eventmapCompare[mapdata])
  })

 
    
      return (
        <div>
        <Container>
        <Row>
          <Col >
          <br>
          </br>
          <Row>

          </Row>
          <Row>
            
            </Row>
            {<input type="text" placeholder="Search" onChange={e=>setSearch(e.target.value)} style={{width:'600px', padding: '10px'}}/>  }
            <SearchIcon/>
   <Row>

</Row>
<row>
  <br>
  </br>
</row>
<Row>
  
  </Row>
          </Col>
          </Row>
        
         
        <Row>
          <br>
          </br>
          <br>
          </br>
        <Col xs="6">
        
          {filterDis.map((item) => (
              
               
                   <CategoryRightListItem key={item.name} name={item.name} item={item} />
                   
                 ))}

          
          </Col>
      

        </Row>
      </Container>
      </div>
   
      ); 

}
const mapStateToProps = (state) => {
  return {
      reservations: state.eventpnl.reservations,
      formdata: state.eventpnl.formdata,
      formeventdata:state.eventpnl.formeventdata,
      total: state.eventpnl.total,
      userCred: state.eventpnl.userCred,
      eventData1:state.eventpnl.eventData1,
      auddata :state.eventpnl.auddata,
      pricedata:state.eventpnl.pricedata,
      mapdata:state.eventpnl.mapdata,
      eventmapCompare:state.eventpnl.eventmapCompare,
  };
};


export default connect(mapStateToProps)(CategoryRightList);

