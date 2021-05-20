import React, { useState, useEffect } from "react";
import "./guidedetailspage.css";
import connect from "react-redux/es/connect/connect";
import { Link } from "react-router-dom";
import axios from "axios"; 
import { addToCart } from "../../../../../store/lib/actions";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import Comments from "../comments/Comments";
import Ratingimport from "../comments/displayratings"
import Rating from "@material-ui/lab/Rating";


function guidedetailspage(props) {
    const { add_to_cart,dateg} = props;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [commentg,setcommentg]= useState(true)
  // backend dta assinged for these variables
  console.log("🚀 ~ file: guidedetailspage.js ~ line 21 ~ guidedetailspage ~ props.match.params.id", props.match.params.id)

  let comment=(
    <div hidden={(commentg)? true : ""}>
        <Comments add_id={props.match.params.id} />
       
    </div>
);
 
  let name1;

  let email;
  let lang;
  
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

  const totalcost= ((new Date(dateg.date1.checkoutdate).getTime()-new Date(dateg.date.checkindate).getTime())/(1000 * 3600 * 24)+1)*nameList.costPerDay
  const unitsx=((new Date(dateg.date1.checkoutdate).getTime()-new Date(dateg.date.checkindate).getTime())/(1000 * 3600 * 24)+1)+"days"
  name1 = nameList.name;
  email = nameList.pnumber;
  Dob = nameList.dob;
  cost = nameList.costPerDay;
  details = nameList.otherDetails;
  avatar=nameList.imgURL

  

 
  

  return (
    <div className="">
      <br />
      <div className="container debackcolor">
        <br />
        <div className="row ">
        <div className="gudemain border-3px-downy">
      <div className="overlap-group">
        <div className="gudeex27"></div>
        <div className="guidex24">
          <div className="guidex25 roboto-bold-black-18px">Description&nbsp;&nbsp;:</div>
          <div className="gudex26 roboto-bold-black-18px">{details}</div>
        </div>
        
        <div className="gudidex23 roboto-bold-black-18px">Telephone&nbsp;&nbsp;&nbsp;&nbsp;:</div>
        <div className="gudix21 roboto-bold-black-18px"> {email}</div>
        <Link to="/shoppingcart">
        <div className="guidex17 smart-layers-pointers " onClick={() => props.add_to_cart(name1, cost, nameList.id, 1, date, "GuideService", totalcost, unitsx, dateg.date.checkindate, null, null, dateg.date1.checkoutdate, null, null)}>
          <div className="gudex19 roboto-bold-white-18px">Book Now</div>
        </div>
        </Link>
        <div className="guidex16"></div>
        <Link>
        <div className="guidex15 roboto-bold-downy-18px smart-layers-pointers " onClick={()=>setcommentg(!commentg)}>Rewiews</div>
        </Link>
       
        <div className="guidex14 roboto-bold-downy-18px">Excellent</div>
        <div style={{paddingLeft:"100px"}} className="guidex14 roboto-bold-downy-18px">  <Ratingimport id={props.match.params.id}/>
</div>
        <div className="guidex13 roboto-bold-black-18px">Guide Name :</div>
        <div className="guidex11 roboto-bold-black-18px">{name1}</div>
        <div className="guidex10 roboto-bold-black-18px">Language&nbsp;&nbsp;&nbsp;&nbsp; :</div>
        <div className="guidex8 roboto-bold-black-18px">{ nameList.language}</div>
        <div className="guidex7 roboto-bold-black-18px">PricePerDay :</div>
        <div className="gudidex5 roboto-bold-black-18px">{cost}</div>
        <div className="guidex71 roboto-bold-black-18px">age&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :</div>
        <div className="gudidex51 roboto-bold-black-18px"> {getAge(Dob)}</div>
        <h1 className="guidex4 roboto-bold-downy-24px">Total&nbsp;&nbsp;Charge :&nbsp;&nbsp;{ totalcost}</h1>
        <ChatBubbleOutlineIcon className="guidex2" fontSize="small" />
        <img className="gudex1 smart-layers-pointers " src={avatar} />
      </div>
    </div>
          
        </div>

        <br />
        {comment}
       {/* < Comments userid={nameList.userID} add_id={nameList.id} /> */}
      </div>
      <br />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    dateg: state.guide_input_reducer.date,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

    add_to_cart: (item, unit_price, add_id, no_travellers, Current_date, type, total_price, units, checkin_date, checkin_time, checkin_location, checkout_date, checkout_time, checkout_location) => dispatch(addToCart(item, unit_price, add_id, no_travellers, Current_date, type, total_price, units, checkin_date, checkin_time, checkin_location, checkout_date, checkout_time, checkout_location))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(  guidedetailspage);
