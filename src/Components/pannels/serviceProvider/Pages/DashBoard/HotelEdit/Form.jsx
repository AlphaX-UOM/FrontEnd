import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button'
import id from 'date-fns/esm/locale/id/index.js';
import { color } from 'highcharts';

export const Form = ({ onSubmit,data }) => {
   
      const [eventList, setEventList] = useState([]);
      const[event,setEvent]=useState({ id: '', name: '', addressLine01: '', addressLine02: '', pricePerDay: '',district:'',pnumber:'', contactName: '', altPnumber: '',languages:'',roomType:'',numOfRooms:'',bedType:'',capacity:'',stars:'',features:'',amenities:'',otherDetails:'',
      hotelImgURL:'',roomImgURL01:'',roomImgURL02:'',roomImgURL03:'',userID:''})
      useEffect(() => {
        fetch(
            `https://alphax-api.azurewebsites.net/api/hotelsservices/${data}` //`https://alphax-api.azurewebsites.net/api/eventplannerservicereservations/${userId}`
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

        var data = JSON.stringify({ "id": eventList.id, "name": event.name === "" ? eventList.name : event.name, "addressLine01": eventList.addressLine01 ,"addressLine02":eventList.addressLine02,
        "pricePerDay": event.pricePerDay===""?eventList.pricePerDay:event.pricePerDay, "district": eventList.district, "pnumber": event.pnumber===""?eventList.pnumber:event.pnumber,
        "contactName": event.contactName===""?eventList.contactName:event.contactName,"roomType": event.roomType===""?eventList.roomType:event.roomType,
        "numOfRooms": event.numOfRooms === "" ? eventList.numOfRooms : event.numOfRooms, ",bedType": event.bedType===""?eventList.bedType:event.bedType,
    "capacity":event.capacity===""?eventList.capacity:event.capacity,"stars":event.stars===""?eventList.stars:event.stars,
    "features":event.features===""?eventList.features:event.features, "amenities": eventList.amenities,"otherDetails":event.otherDetails===""?eventList.otherDetails:event.otherDetails,
    "hotelImgURL":eventList.hotelImgURL,"roomImgURL01":eventList.roomImgURL01,"roomImgURL02":eventList.roomImgURL02,"roomImgURL03":eventList.roomImgURL03,"userID":eventList.userID });

console.log(data)
        var config = {
            method: 'put',
            url: `https://alphax-api.azurewebsites.net/api/hotelsservices/${eventList.id}`,
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
        <label htmlFor="text">Features</label>
        <textarea
          type="text"
          className="form-control"
          id="features"
          placeholder={eventList.features}
          name="features" value={event.features} onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="text">Details</label>
        <textarea
          type="text"
          className="form-control"
          id="otherDetails"
          placeholder={eventList.otherDetails}
          name="otherDetails" value={event.otherDetails} onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="text">Contact Name</label>
        <textarea
          type="text"
          className="form-control"
          id="contactName"
          placeholder={eventList.contactName}
          name="contactName" value={event.contactName} onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="text">Contact Number</label>
        <textarea
          type="pnumber"
          className="form-control"
          id="pnumber"
          placeholder={eventList.pnumber}
          name="pnumber" value={event.pnumber} onChange={onChange}
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
        <label htmlFor="text">Room Type</label>
        <input
          type="text"
          className="form-control"
          id="roomType"
          placeholder={eventList.roomType}
          name="roomType" value={event.roomType} onChange={onChange}
        />
      </div>

           
      <div className="form-group">
        <label htmlFor="text">num Of Rooms</label>
        <input
          type="number"
          className="form-control"
          id="numOfRooms"
          placeholder={eventList.numOfRooms}
          name="numOfRooms" value={event.numOfRooms} onChange={onChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="text"> capacity</label>
        <input
          type="number"
          className="form-control"
          id="capacity"
          placeholder={eventList.capacity}
          name="capacity" value={event.capacity} onChange={onChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="text"> stars</label>
        <input
          type="number"
          className="form-control"
          id="stars"
          placeholder={eventList.stars}
          name="stars" value={event.stars} onChange={onChange}
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
