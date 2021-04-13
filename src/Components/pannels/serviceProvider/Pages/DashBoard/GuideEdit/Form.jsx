import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button'
import id from 'date-fns/esm/locale/id/index.js';
import { color } from 'highcharts';

export const Form = ({ onSubmit,data }) => {
   
      const [eventList, setEventList] = useState([]);
      const[event,setEvent]=useState({ id: '', name: '', dob: '', language: '', costPerDay: '', pnumber: '',otherDetails:'',imgURL:'',userID:'',})
      useEffect(() => {
        fetch(
            `https://alphax-api.azurewebsites.net/api/tourguideservices/${data}` //`https://alphax-api.azurewebsites.net/api/eventplannerservicereservations/${userId}`
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

        var data = JSON.stringify({ "id": eventList.id, "name": event.name === "" ? eventList.name : event.name, "dob": eventList.dob ,"pnumber": event.pnumber===""?eventList.pnumber:event.pnumber, 
      "language": event.language===""?eventList.language:event.language,
        "costPerDay": event.costPerDay===""?eventList.costPerDay:event.costPerDay,"otherDetails":event.otherDetails===""?eventList.otherDetails:event.otherDetails,"imgURL":eventList.imgURL,"userID":eventList.userID });

console.log(data)
        var config = {
            method: 'put',
            url: `https://alphax-api.azurewebsites.net/api/tourguideservices/${eventList.id}`,
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
        <label htmlFor="name"> Guide Name</label>
        <input className="form-control" id="name" placeholder={eventList.name} 
        name="name" value={event.name} onChange={onChange}  />
      </div>
  
      <div className="form-group">
        <label htmlFor="text">Description</label>
        <textarea
          type="text"
          className="form-control"
          id="otherDetails"
          placeholder={eventList.otherDetails}
          name="otherDetails" value={event.otherDetails} onChange={onChange}
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
        <label htmlFor="text">Cost Per Day</label>
        <input
          type="number"
          className="form-control"
          id="costPerDay"
          placeholder={eventList.costPerDay}
          name="costPerDay" value={event.costPerDay} onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="text">Language</label>
        <input
          type="text"
          className="form-control"
          id="language"
          placeholder={eventList.language}
          name="language" value={event.language} onChange={onChange}
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
