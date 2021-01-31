import React, { useState, useEffect } from "react";
import "./guidedetailspage.css";
// import Logo1 from '../../../../images/vehicle/itemimages/Intermediate.jpg';
// import Logo2 from '../../../../images/vehicle/slide/v.jpg';
// import Logo3 from '../../../../images/vehicle/slide/suv.jfif';
// import Logo4 from '../../../../images/vehicle/slide/Bus.jfif';

import { Link } from "react-router-dom";
// import Ratings from '../rating-mod/ratingm'

import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";

function guidedetailspage(props) {
  // backend dta assinged for these variables
  let name1;

  let email;
  let lang;
  let Rating;
  let cost;
  let avatar;
  let Dob;
  let details;

  console.log(props.location.data.userId);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [nameList, setNameList] = useState([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetch(
      "https://alphax-api.azurewebsites.net/api/TourGuideServices/" +
        props.location.data.userId
    )
      .then((res) => res.json())
      .then((data) => {
        setNameList(data);
      });
  }, []);

  name1 = nameList.name;
  email = nameList.pnumber;
  Dob = nameList.dob;
  cost = nameList.costPerDay;
  details = nameList.otherDetails;

  console.log(nameList.name);

  return (
    <div className="">
      <br />
      <div className="container debackcolor">
        <br />
        <div className="row ">
          <div className="col-sm-1"></div>
          <div className="col-sm-4 imgcolor">
            <br />
            <div className="col-sm-12 ">
              {/* <h3 className="txtcolorx">{this.state.providers.name}</h3> */}
            </div>

            <div className="col-sm-12">{/* image */}</div>

            <div className="col-sm-12">
              <span className="lead">
                <div className="row">
                  {/* <div className="col-sm"><Ratings/></div> */}
                  <div className="col-sm txtcolorx">Excellent</div>
                </div>

                <div className="row">
                  <Link>
                    <div className="col txtcolorx">
                      <small className="iconpad">Customer Reviews</small>
                      <ChatBubbleOutlineIcon fontSize="small" />
                    </div>
                  </Link>
                </div>
              </span>
            </div>
            <br />
          </div>
          <div className="col-sm-7 ">
            <div className="row ">
              <div className="col-sm-2"></div>
              <div className="col-sm ">
                <div className="depad">
                  <br />
                  <span className="">
                    <div className="row ">
                      <div className="">Guide Name :</div>
                      <div className="col ">
                        <div className="" role="alert">
                          {name1}
                        </div>
                      </div>
                    </div>
                  </span>

                  <span className="">
                    <div className="row">
                      <div className="">Price Per Day :</div>
                      <div className="col">
                        <div className="">{cost}</div>
                      </div>
                    </div>
                  </span>

                  <span className="">
                    <div className="row">
                      <div className="">TP :</div>
                      <div className="col">
                        <div className="" role="alert">
                          {email}
                        </div>
                      </div>
                    </div>
                  </span>

                  {/* <span className="">
                            <div className="row">
                                <div className=" ">Email :</div>
                                <div className="col">
                                    <div className="" role="alert">
                                       {email}
                                </div></div>
                            </div>

                        </span> */}

                  <span className="">
                    <div className="row">
                      <div className="">DOB :</div>
                      <div className="col">
                        <div className="" role="alert">
                          {Dob}
                        </div>
                      </div>
                    </div>
                  </span>

                  {/* <div className="row">
                                <div className="">District :</div>
                                <div className="col">
                                    <div className="" role="alert">
                                  
                                </div>
                                </div>
                            </div> */}
                  <span className="">
                    <div className="row">
                      <div className="">Description :</div>
                      <div className="col">
                        <div className=" " role="alert">
                          {details}
                        </div>
                      </div>
                    </div>
                  </span>

                  <div className="row">
                    <div className="col-sm"></div>
                    <div className="col-sm"></div>

                    <button type="button" className="btn btn-primary ">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-1"></div>
            </div>
          </div>

          <div className="col-sm-1"></div>
        </div>

        <br />
      </div>
      <br />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    provider_array: state.transport_reducer.provider,
    no_travellers: state.transport_input_reducer.form_no_travellers,
    drop_location: state.transport_input_reducer.form_drop_location,
    drop_date: state.transport_input_reducer.form_drop_date,
    drop_time: state.transport_input_reducer.form_drop_time,
    pickup_location: state.transport_input_reducer.form_pickup_location,
    pickup_date: state.transport_input_reducer.form_pickup_date,
    pickup_time: state.transport_input_reducer.form_drop_time,
    rounded: state.transport_input_reducer.form_rounded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // onInitTransportProvider: (id) => dispatch(actions.initTransportProvider(id)),
    //  add_to_cart:(item,qty,add_id,no_travellers,date) => dispatch(actions.addToCart(item,qty,add_id,no_travellers,date))
  };
};

export default guidedetailspage;
