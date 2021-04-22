import React, { useState, useEffect, useRef } from "react";

function HotelDetails(props) {
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
                  <strong>District :</strong>
                </div>
                <div className="col-sm-8">
                  <div className="">
                  {props.item.item.district}
                  </div>
                </div>
              </div>
            </span>
            <span className="">
              <div className="row">
                <div className="col-sm-4">
                  <strong>Address :</strong>
                </div>
                <div className="col-sm-8">
                  <div className="text-uppercase" role="alert">
                  {props.item.item.addressLine01}<br/>{props.item.item.addressLine02}
                  </div>
                </div>
              </div>
            </span>
            <span className="">
              <div className="row">
                <div className="col-sm-4">
                  <strong>Contact :</strong>
                </div>
                <div className="col-sm-8">
                  <div className="" role="alert">
                  {props.item.item.pnumber}
                  </div>
                </div>
              </div>
            </span>
            <span className="">
              <div className="row">
                <div className="col-sm-4">
                  <strong>Room Type :</strong>
                </div>
                <div className="col-sm-8">
                  <div className="" role="alert">
                  {props.item.item.roomType}
                  </div>
                </div>
              </div>
            </span>
            <span className="">
              <div className="row">
                <div className=" col-sm-4">
                  <strong>Bed Type :</strong>
                </div>
                <div className="col-sm-8">
                  <div className="" role="alert">
                  {props.item.item.bedType}
                  </div>
                </div>
              </div>
            </span>
            <span className="">
              <div className="row">
                <div className="col-sm-4">
                  <strong>Features :</strong>
                </div>
                <div className="col-sm-8">
                  <div className=" " role="alert">
                  {props.item.item.features}
                  </div>
                </div>
              </div>
            </span>
            <span className="">
              <div className="row">
                <div className="col-sm-4">
                  <strong>Other Details :</strong>
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
                  <strong>Price Per Day :</strong>
                </div>
                <div className="col-sm-7">
                  <div className="h5">
                  {props.item.item.pricePerDay} $
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

export default HotelDetails;
