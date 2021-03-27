import React from 'react';
import './listitem.css';
import {Link} from 'react-router-dom'
import Listitemdetails from "../Listitemdetails/listitemdetails";
import Ratings from '../rating-mod/ratingm'

const listitem=(props)=>{

   let itemdetail =  {
                    name:props.name,
                    id:props.key,
                    price:props.price,
                    vtype:props.vtype,
                    rating:props.rating
    }


    return(
        <div>
            <br/>

            <Link  className="link textdec" onClick={props.clicked} to={`/transportproviderlist/${props.id}`}>

                <div className="tab-content clearfix container ">


                    <div className="row" >
                        <div className="tm-recommended-place-wrap">
                            <div className="tm-recommended-place">

                                <div className="tm-recommended-description-box border border-success rounded ">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h3 className="txtcolorx">{props.brand} {props.model} {props.vtype}</h3>
                                            </div>

                                            <div className="col-sm-4">
                                                <p className="tm-text-gray"><Ratings/></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <p className="tm-text-highlight"><strong>{props.name}</strong></p>
                                            </div>

                                            <div className="col-sm-4">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="row txtcolorx">
                                                    <div className="col-sm">per 1KM : <small>(LKR) </small> <strong> {props.pricePer1KM}</strong> </div>


                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="row txtcolorx">
                                                    <div className="col-sm">per day :  <small>(LKR) </small><strong> {props.pricePerDay}</strong>  </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Link>




        </div>
    )
};

export default listitem;