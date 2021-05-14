import React from 'react';
import "./thank.css";
import Cards from "./cards";

export default function Thank() {
  return (
    <React.Fragment>
    <div className="fthank">
      <header class="site-header" id="header">
        <h1 class="site-header__title" data-lead-id="site-header-title">
          THANK YOU!
        </h1>
      </header>
      <img
      alt=""
        src="https://icon-library.com/images/tick-icon-png/tick-icon-png-5.jpg"
        style={{ width: "100px", height: "100px" }}
      />
      <div className="main-content">
        <p className="main-content__body" data-lead-id="main-content-body">
          Your payment was successful. Head to your account for more details or
          EXPLORE MORE!.
        </p>
      </div>
      <br />
      <Cards />
      <br/>
      <br/>
      <br/>
    </div>
    </React.Fragment>
  );
}
