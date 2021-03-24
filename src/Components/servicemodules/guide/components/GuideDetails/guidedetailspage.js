import React, { useState, useEffect } from "react";
import "./guidedetailspage.css";
// import Logo1 from '../../../../images/vehicle/itemimages/Intermediate.jpg';
// import Logo2 from '../../../../images/vehicle/slide/v.jpg';
// import Logo3 from '../../../../images/vehicle/slide/suv.jfif';
// import Logo4 from '../../../../images/vehicle/slide/Bus.jfif';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
// import Ratings from '../rating-mod/ratingm'
import { addToCart } from "../../../../../store/lib/actions";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";

function guidedetailspage(props) {
    const { add_to_cart} = props;
  // backend dta assinged for these variables
  let name1;

  let email;
  let lang;
  let Rating;
  let cost;
  let avatar;
  let Dob;
  let details;

  // console.log(props.location.data.userId);
    var today = new Date(),

        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [nameList, setNameList] = useState([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetch(
      'https://alphax-api.azurewebsites.net/api/TourGuideServices/' +
        props.match.params.id
    )
      .then((res) => res.json())
      .then((data) => {
        setNameList(data);
      });
  }, []);

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
                      <div className="">Age :</div>
                      <div className="col">
                        <div className="" role="alert">
                          {getAge(Dob)}
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
                      <Link to="/shoppingcart">
                    <button type="button" className="btn btn-primary " onClick={()=> props.add_to_cart(name1,cost, props.match.params.id,20,date,'Guide')}>
                      Book Now
                    </button>
                      </Link>
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

  };
};

const mapDispatchToProps = (dispatch) => {
  return {

    add_to_cart:(item,price,add_id,no_travellers,date,type) => dispatch(addToCart(item,price,add_id,no_travellers,date,type))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(  guidedetailspage);