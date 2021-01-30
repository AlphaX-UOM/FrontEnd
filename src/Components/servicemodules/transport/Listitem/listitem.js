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

                <div className="tab-content clearfix container">


                    <div className="row" >
                        <div className="tm-recommended-place-wrap">
                            <div className="tm-recommended-place">

                                <div className="tm-recommended-description-box">
                                    <h3 className="tm-recommended-title">{props.name}</h3>
                                    <p className="tm-text-highlight">Vehicle Type: <strong>{props.vtype}</strong></p>
                                    <p className="tm-text-gray"><Ratings/></p>
                                </div>
                                <a  className="tm-recommended-price-box">
                                    <p className="tm-recommended-price">$ {props.price}</p>

                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>




        </div>
    )
};

export default listitem;