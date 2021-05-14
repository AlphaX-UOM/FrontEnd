import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button'
import id from 'date-fns/esm/locale/id/index.js';
import { color } from 'highcharts';

export const Form = ({ onSubmit, data }) => {

  const [eventList, setEventList] = useState([]);
  const [event, setEvent] = useState({
    id: '', name: '', addressLine01: '', addressLine02: '', pricePerDay: '', district: '', pnumber: '', contactName: '', altPnumber: '', languages: '', roomType: '', numOfRooms: '', bedType: '', capacity: '', stars: '', features: '', amenities: '', otherDetails: '',
    hotelImgURL: '', roomImgURL01: '', roomImgURL02: '', roomImgURL03: '', userID: ''
  })
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

    var data = JSON.stringify({
      "id": eventList.id, 
      "name": eventList.name, 
      "addressLine01": eventList.addressLine01, 
      "addressLine02": eventList.addressLine02,
      "pricePerDay": event.pricePerDay === "" ? eventList.pricePerDay : event.pricePerDay, 
      "district": eventList.district, 
      "pnumber": eventList.pnumber,
      "contactName": eventList.contactName, 
      "altPnumber": eventList.altPnumber, 
      "languages": eventList.languages, 
      "roomType": event.roomType === "" ? eventList.roomType : event.roomType,
      "numOfRooms": event.numOfRooms === "" ? eventList.numOfRooms : event.numOfRooms, 
      "bedType": event.bedType === "" ? eventList.bedType : event.bedType,
      "capacity": event.capacity === "" ? eventList.capacity : event.capacity, 
      "stars": eventList.stars,
      "features": eventList.features, 
      "amenities": event.amenitiesi === "" ? eventList.amenities:event.amenities, 
      "otherDetails": eventList.otherDetails,
      "hotelImgURL": eventList.hotelImgURL, 
      "roomImgURL01": eventList.roomImgURL01, 
      "roomImgURL02": eventList.roomImgURL02, 
      "roomImgURL03": eventList.roomImgURL03, 
      "userID": eventList.userID
    });

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

  console.log("Data" + data)
  return (
    <form onSubmit={updateEvent}>

      <div className="form-group">
        <label htmlFor="roomType">Room Type</label>
        <input
          type="text"
          className="form-control"
          id="roomType"
          placeholder={eventList.roomType}
          name="roomType" value={event.roomType} onChange={onChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="numOfRooms">Num Of Rooms</label>
        <input
          type="number"
          className="form-control"
          id="numOfRooms"
          placeholder={eventList.numOfRooms}
          name="numOfRooms" value={event.numOfRooms} onChange={onChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="bedType">Kind of beds available in this room type</label>
        <input
          type="text"
          className="form-control"
          id="bedType"
          placeholder={eventList.bedType}
          name="bedType" value={event.bedType} onChange={onChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="capacity">Number of guest can stay in this room type</label>
        <input
          type="number"
          className="form-control"
          id="capacity"
          placeholder={eventList.capacity}
          name="capacity" value={event.capacity} onChange={onChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="pricePerDay">Base price Per Day</label>
        <input
          type="number"
          className="form-control"
          id="pricePerDay"
          placeholder={eventList.pricePerDay}
          name="pricePerDay" value={event.pricePerDay} onChange={onChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="amenities">Amenities</label>
        <textarea
          type="text"
          className="form-control"
          id="amenities"
          placeholder={eventList.amenities}
          name="amenities" value={event.amenities} onChange={onChange}
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
