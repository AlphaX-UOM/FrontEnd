import React, { useState } from 'react';
import './listitemdetails.css'
import { Link } from 'react-router-dom'
import Ratings from '../CommonComponents/rating-mod/ratings'
import Comments from '../CommonComponents/comments/comments'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import TransportDetails from '../UniqueComponents/TransportDetails';
import GuideDetails from '../UniqueComponents/GuideDetails';
import EventDetails from '../UniqueComponents/EventDetails';
import HotelDetails from '../UniqueComponents/HotelDetails';
import { connect } from "react-redux";

function Listitemdetails(props) {
    const [Com, setCom] = useState(false);

    const handlecarClik = () => {
        setCom(!Com);
    }

    return (
        <div className="">
            <br />
            <div className="container border border-success  " >
                <br />
                <div className="row ">
                    <div className="col-sm-1">
                    </div>
                    <div className="col-sm-4 imgcolor " >
                        <br />
                        <div className="col-sm-12 ">
                            <h3 className="txtcolorx">{props.item.item.name}</h3>
                            <hr />
                        </div>
                        <br />
                        <div className="col-sm-12">
                            {props.item.item.hotelImgURL?<img src={props.item.item.hotelImgURL} alt="firebase-image" className='imgsize' />:props.item.item.imgURL?<img src={props.item.item.imgURL} alt="firebase-image" className='imgsize' />:<img src="http://via.placeholder.com/300" alt="firebase-image" className='imgsize' />}
                        </div>
                        <br />
                        <div className="col-sm-12">
                            <span className="lead">
                                <div className="row">
                                    <div className="col-sm">
                                        <Ratings/>
                                    </div>
                                </div>
                                <div className="row">
                                    <Link onClick={handlecarClik} >
                                        <div className="col txtcolorx rev-col "><small className="iconpad"> Reviews</small><ChatBubbleOutlineIcon fontSize="small" />
                                        </div>
                                    </Link>
                                </div>
                            </span>
                        </div>
                        <br />
                    </div>
                    <div className="col-sm-7 ">
                        {props.item.type==="Transport Service"?<TransportDetails item={props.item}/>:props.item.type==="Tour Guide Service"?<GuideDetails item={props.item}/>:props.item.type==="Event Service"?<EventDetails item={props.item}/>:<HotelDetails item={props.item}/>}
                    </div>
                    <div className="col-sm-1">
                    </div>
                </div>
                <br />
                <div hidden={(!Com) ? "hidden1" : ""}>
                    <Comments item={props.item}/>
                </div>
            </div>
            <br />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      item: state.eventpnl.item,
    };
  };

export default connect(mapStateToProps, null)(Listitemdetails);
