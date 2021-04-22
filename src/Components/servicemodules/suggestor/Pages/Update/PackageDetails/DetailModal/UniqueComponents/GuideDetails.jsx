import React, { useState, useEffect, useRef } from "react";

function GuideDetails(props) {

  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
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
                  <strong>Language :</strong>
                </div>
                <div className="col-sm-8">
                  <div className="">
                  {props.item.item.language}
                  </div>
                </div>
              </div>
            </span>
            <span className="">
              <div className="row">
                <div className="col-sm-4">
                  <strong>Age :</strong>
                </div>
                <div className="col-sm-8">
                  <div className="text-uppercase" role="alert">
                  {getAge(props.item.item.dob)}
                  </div>
                </div>
              </div>
            </span>
            <span className="">
              <div className="row">
                <div className="col-sm-4">
                  <strong>Contact Number :</strong>
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
                  <strong>Other Details :</strong>
                </div>
                <div className="col-sm-8">
                  <div className="" role="alert">
                  {props.item.item.otherDetails}
                  </div>
                </div>
              </div>
            </span>  
            <br />
            <span className="">
              <div className="row txtcolorx">
                <div className="col-sm-5 h5">
                  <strong>Cost Per Day :</strong>
                </div>
                <div className="col-sm-7">
                  <div className="h5">
                  {props.item.item.costPerDay} $
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

export default GuideDetails;
