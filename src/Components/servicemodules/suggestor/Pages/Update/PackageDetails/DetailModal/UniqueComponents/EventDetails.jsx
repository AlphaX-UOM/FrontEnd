import React, { useState, useEffect, useRef } from "react";

function EventDetails(props) {

  function eventTime(){
    var time = new Date(props.item.item.time);
  return time.getHours() + ':' + time.getMinutes();
  }

  function eventDate(){
    var time = new Date(props.item.item.time);
  return time.getFullYear() + '/' + time.getMonth() + '/' + time.getDate();
  }

  return (
    <div>
      <div className="row ">
        <div className="col-sm-2"></div>
        <div className="col-sm ">
          <div className="depad">
            <br />
            <span className="">
              <div className="row">
                <div className="col-sm-4">
                  <strong>Business Name :</strong>
                </div>
                <div className="col-sm-8">
                  <div className="">
                  {props.item.item.businessName}
                  </div>
                </div>
              </div>
            </span>
            <span className="">
              <div className="row">
                <div className="col-sm-4">
                  <strong>District :</strong>
                </div>
                <div className="col-sm-8">
                  <div className="text-uppercase" role="alert">
                  {props.item.item.district}
                  </div>
                </div>
              </div>
            </span>
            <span className="">
              <div className="row">
                <div className="col-sm-4">
                  <strong>Venue :</strong>
                </div>
                <div className="col-sm-8">
                  <div className="" role="alert">
                  {props.item.item.venue}
                  </div>
                </div>
              </div>
            </span>
            <span className="">
              <div className="row">
                <div className="col-sm-4">
                  <strong>Event Date :</strong>
                </div>
                <div className="col-sm-8">
                  <div className="" role="alert">
                    {eventDate()}
                  </div>
                </div>
              </div>
            </span>
            <span className="">
              <div className="row">
                <div className=" col-sm-4">
                  <strong>Event Time :</strong>
                </div>
                <div className="col-sm-8">
                  <div className="" role="alert">
                    {eventTime()}
                  </div>
                </div>
              </div>
            </span>
            <span className="">
              <div className="row">
                <div className="col-sm-4">
                  <strong>Audience :</strong>
                </div>
                <div className="col-sm-8">
                  <div className=" " role="alert">
                  {props.item.item.audience}
                  </div>
                </div>
              </div>
            </span>
            <span className="">
              <div className="row">
                <div className="col-sm-4">
                  <strong>Description :</strong>
                </div>
                <div className="col-sm-8">
                  <div className=" " role="alert">
                  {props.item.item.otherDetails}
                  </div>
                </div>
              </div>
            </span>
            <br />
            <span className="">
              <div className="row txtcolorx">
                <div className="col-sm-5 h5">
                  <strong>Ticket Price :</strong>
                </div>
                <div className="col-sm-7">
                  <div className="h5">
                  {props.item.item.price} $
                  </div>
                </div>
              </div>
            </span>
            <hr />
          </div>
        </div>
        <div className="col-sm-1"></div>
      </div>
    </div>
  );
}

export default EventDetails;
