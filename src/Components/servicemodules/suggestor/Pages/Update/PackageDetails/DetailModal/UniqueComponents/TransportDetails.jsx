import React from "react";

function TransportDetails(props) {
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
                  <strong>vehicle Type :</strong>
                </div>
                <div className="col-sm-8">
                  <div className="">
                    {props.item.item.brand} -{" "}
                    {props.item.item.vehicleType}
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
                  <strong>Address :</strong>
                </div>
                <div className="col-sm-8">
                  <div className="" role="alert">
                  {props.item.item.address}
                  </div>
                </div>
              </div>
            </span>
            <span className="">
              <div className="row">
                <div className="col-sm-4">
                  <strong>TP :</strong>
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
                <div className=" col-sm-4">
                  <strong>Email :</strong>
                </div>
                <div className="col-sm-8">
                  <div className="" role="alert">
                  {props.item.item.email}
                  </div>
                </div>
              </div>
            </span>
            <span className="">
              <div className="row">
                <div className="col-sm-4">
                  <strong>Air Condition :</strong>
                </div>
                <div className="col-sm-8">
                  <div className=" " role="alert">
                    {/*{this.state.providers.airCondition.toString()}*/}
                    {props.item.item.airCondition.toString()==='false'?"Not Available":"Available"}
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
                  {props.item.item.description}
                  </div>
                </div>
              </div>
            </span>
            <br />
            <span className="">
              <div className="row txtcolorx">
                <div className="col-sm-5 h5">
                  <strong>Price Per 1KM :</strong>
                </div>
                <div className="col-sm-7">
                  <div className="h5">
                    {props.item.item.pricePer1KM} $
                  </div>
                </div>
              </div>
            </span>
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

export default TransportDetails;
