import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button'
import id from 'date-fns/esm/locale/id/index.js';
import { color } from 'highcharts';
import Modal from "react-bootstrap/Modal";

export const Form = ({ onSubmit,data }) => {
    console.log("The comment ID "+data)
    const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

   
      const [eventList, setEventList] = useState([]);
      const[event,setEvent]=useState({ id: '', createdAt: '', content: '', userID: '', eventPlannerServiceID: '',})
      useEffect(() => {
        fetch(
            `https://alphax-api.azurewebsites.net/api/eventplannerservicecomments/${data}` //`https://alphax-api.azurewebsites.net/api/eventplannerservicereservations/${userId}`
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

        var data = JSON.stringify({ "id": eventList.id, "createdAt": eventList.createdAt , "content": event.content===""?eventList.content:event.content, "eventPlannerServiceID":eventList.eventPlannerServiceID ,"userID":eventList.userID });

console.log(data)
        var config = {
            method: 'put',
            url: `https://alphax-api.azurewebsites.net/api/eventplannerservicecomments/${eventList.id}`,
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

       handleShow();
      
      };

    console.log("Data"+data)
  return (
    <form onSubmit={updateEvent}>
      <div className="form-group">
         
        <label htmlFor="name"> Content</label>
        <input className="form-control" id="content" placeholder={eventList.content} 
        name="content" value={event.content} onChange={onChange}  />
      </div>
  
 
   
   
    


      <div className="form-group">
      <button class="btn btn-success" type="submit" >
        Update
        </button>
        
      </div>
      <div>
        <Modal show={show} onHide={handleClose}>
     
        <Modal.Body>Upadated Successfully!</Modal.Body>
        <Modal.Footer>
        <button className="btn btn-danger " type='submit'onClick={handleClose}>Close</button>  
        </Modal.Footer>
      </Modal>

 </div>
    </form>
  );
};
export default Form;