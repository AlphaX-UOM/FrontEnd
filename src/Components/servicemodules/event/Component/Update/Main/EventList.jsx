import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EventItem from "./EventItem";
import { CardColumns } from 'reactstrap';

function EventList() {
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

  const EventListComponent = () => {
    return myeventList.map((aCat) => {
      return (
        <EventItem
          item={aCat}
          key={aCat.id}
          name={aCat.name}
          price={aCat.price}
          img="https://www.touropia.com/gfx/d/best-places-to-visit-in-sri-lanka/yala_national_park.jpg?v=1"
        />
      );
    });
  };

  return (
    <div>
    <div className="col-12">
    <CardColumns fluid="md">
    <div class="container-fluid py-2" >
      <div>{EventListComponent()}</div>
      </div>
      </CardColumns>
  </div>
  </div>
  );
}

export default EventList;
