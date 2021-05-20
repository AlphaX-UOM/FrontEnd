import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button'
import id from 'date-fns/esm/locale/id/index.js';
import { color } from 'highcharts';

export const Form = ({ onSubmit,data }) => {
   
      const [eventList, setEventList] = useState([]);
      const[event,setEvent]=useState({ id: '', name: '', businessName: '', price: '', pricePerKid: '',adultTickets:'',kidTickets:'', venue: '', district: '',date:'',time:'',eventType:'',audience:'',otherDetails:'',imgURL:'',imgURL02:'',imgURL03:'',userID:''})
      useEffect(() => {
        fetch(
            `https://alphax-api.azurewebsites.net/api/eventplannerservices/${data}` //`https://alphax-api.azurewebsites.net/api/eventplannerservicereservations/${userId}`
        )

            .then((response) => {
                return response.json();
            })
            .then((responseData) => {

                //  setEvent(responseData)
              
                setEventList(responseData);
                console.log(responseData)



            });
    }, [data]);

    const onChange = (e) => {

        e.persist();

        setEvent({ ...event, [e.target.name]: e.target.value });

    }

    const updateEvent = (e) => {
        e.preventDefault();
        console.log("updated!!!")

        var axios = require('axios');

        var data = JSON.stringify({ "id": eventList.id, "name": event.name === "" ? eventList.name : event.name, "businessName": eventList.businessName ,"price": event.price===""?eventList.price:event.price, "pricePerKid": event.pricePerKid===""?eventList.pricePerKid:event.pricePerKid,"adultTickets": event.adultTickets===""?eventList.adultTickets:event.adultTickets,"kidTickets": event.kidTickets===""?eventList.kidTickets:event.kidTickets,"venue": eventList.venue, "district": eventList.district,longitude:eventList.longitude,latitude:eventList.latitude, "date": event.date === "" ? eventList.date : event.date, "time": event.time===""?eventList.time:event.time,"eventType":eventList.eventType,
    "audience":event.audience===""?eventList.audience:event.audience,frequency:eventList.frequency,"otherDetails":event.otherDetails===""?eventList.otherDetails:event.otherDetails,"imgURL":eventList.imgURL,"imgURL02":eventList.imgURL02,"imgURL03":eventList.imgURL03,"userID":eventList.userID });

console.log(data)
        var config = {
            method: 'put',
            url: `https://alphax-api.azurewebsites.net/api/eventplannerservices/${eventList.id}`,
            headers: {
                'Content-Type': 'application/json',

            },
            data: data
        };
        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

        alert("Updated Successfully!")
      
      };

    console.log("Data"+data)
  return (
    <form onSubmit={updateEvent}>
      <div className="form-group">
        <label htmlFor="name"> Event Name</label>
        <input className="form-control" id="name" placeholder={eventList.name} 
        name="name" value={event.name} onChange={onChange}  />
      </div>
  
      <div className="form-group">
        <label htmlFor="text">Details</label>
        <textarea
          type="text"
          className="form-control"
          id="details"
          placeholder={eventList.otherDetails}
          name="otherDetails" value={event.otherDetails} onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="text">Adult Price</label>
        <input
          type="number"
          className="form-control"
          id="price"
          placeholder={eventList.price}
          name="price" value={event.price} onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="text">Kid Per Price</label>
        <input
          type="number"
          className="form-control"
          id="pricePerKid"
          placeholder={eventList.pricePerKid}
          name="pricePerKid" value={event.pricePerKid} onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="text">Adult Tickets</label>
        <input
          type="number"
          className="form-control"
          id="adultTickets"
          placeholder={eventList.adultTickets}
          name="adultTickets" value={event.adultTickets} onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="text">Kid Tickets</label>
        <input
          type="number"
          className="form-control"
          id="kidTickets"
          placeholder={eventList.kidTickets}
          name="pricePerKid" value={event.kidTickets} onChange={onChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="text">Audience</label>
        <select className="form-control tm-select"  name="audience" value={event.audience} onChange={onChange}>
                                        <option value="All">All</option>
                                        <option value="21+">21+</option>
                                      
                                    </select>
      </div>
   
   
    


      <div className="form-group">
        <label htmlFor="time">Time</label>
        <input
          type="time"
          className="form-control"
          id="time"
          placeholder={eventList.time}
          name="time" value={event.time} onChange={onChange}
        />
      </div>
      <div className="form-group">
      <button class="btn btn-success" type="submit" >
        Update
        </button>
      </div>
    </form>
  );
};
export default Form;
