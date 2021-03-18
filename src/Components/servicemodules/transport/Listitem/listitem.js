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
                                    <h3 className="txtcolorx">{props.brand} {props.model} {props.vtype}</h3>
                                    <small className="">{props.district},{props.vtype}</small>
                                    <p className="tm-text-highlight"><strong>{props.name}</strong></p>
                                    <p className="tm-text-gray"><Ratings/></p>
                                </div>
                                <a  className="">
                                    {/*<p className="tm-recommended-price">$ {props.price}</p>*/}
                                    <img src={props.imgURL || "http://via.placeholder.com/50"} alt="firebase-image" className='listitemimgsize' />
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