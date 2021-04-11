import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button'
import id from 'date-fns/esm/locale/id/index.js';
import { color } from 'highcharts';

export const Form = ({ onSubmit,data }) => {
   
      const [eventList, setEventList] = useState([]);
      const[event,setEvent]=useState({ id: '', name: '', district: '', pnumber: '', email: '', address: '',vehicleType:'',brand:'',model:'',noOfSeats:'',airCondition:'',pricePer1KM:'',pricePerDay:'',description:'',imgURL:'',userID:''})
      useEffect(() => {
        fetch(
            `https://alphax-api.azurewebsites.net/api/transportservices/${data}` //`https://alphax-api.azurewebsites.net/api/eventplannerservicereservations/${userId}`
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

        var data = JSON.stringify({ "id": eventList.id, "name": event.name === "" ? eventList.name : event.name, "district": eventList.district ,"pnumber": event.pnumber===""?eventList.pnumber:event.pnumber, "email": eventList.email, "address": eventList.address,"vehicleType": eventList.vehicleType,"brand": eventList.brand,
        "model": eventList.model, "noOfSeats": eventList.noOfSeats,"airCondition": eventList.airCondition,"pricePer1KM": event.pricePer1KM===""?eventList.pricePer1KM:event.pricePer1KM,
        "pricePerDay": event.pricePerDay===""?eventList.pricePerDay:event.pricePerDay,"description":event.description===""?eventList.description:event.description,"imgURL":eventList.imgURL,"userID":eventList.userID });

console.log(data)
        var config = {
            method: 'put',
            url: `https://alphax-api.azurewebsites.net/api/transportservices/${eventList.id}`,
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
        <label htmlFor="text">Description</label>
        <textarea
          type="text"
          className="form-control"
          id="otherDetails"
          placeholder={eventList.description}
          name="otherDetails" value={event.description} onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="text">Contact</label>
        <input
          type="number"
          className="form-control"
          id="pnumber"
          placeholder={eventList.pnumber}
          name="pnumber" value={event.pnumber} onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="text">Price Per 1KM</label>
        <input
          type="number"
          className="form-control"
          id="pricePer1KM"
          placeholder={eventList.pricePer1KM}
          name="pricePer1KM" value={event.pricePer1KM} onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="text">Price Per Day</label>
        <input
          type="number"
          className="form-control"
          id="pricePerDay"
          placeholder={eventList.pricePerDay}
          name="pricePerDay" value={event.pricePerDay} onChange={onChange}
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
