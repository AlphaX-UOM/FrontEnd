import React from "react";
import { Link } from "react-router-dom";
import Title from './Title';
import Date from './Date';
import CategoryList from './CategoryList';
import EventList from './EventList';

function Landing() {



  return (
    <div>
        <Title />
        <Date />
        <CategoryList />
        <EventList />
        <p>This is Event Landing</p>
    </div>
  );
}



export default Landing;
