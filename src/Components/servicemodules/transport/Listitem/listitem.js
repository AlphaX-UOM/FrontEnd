import React from 'react';
import './listitem.css';
import {Link} from 'react-router-dom'
import Listitemdetails from "../Listitemdetails/listitemdetails";


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
                {/*<div className="container-fluid textdec" >*/}
                    {/*<div className="row">*/}
                        {/*<div className="col-sm-3">*/}
                        {/*</div>*/}
                        {/*<div className="col-sm-6 ">*/}
                            {/*<div className="card border border-warning">*/}
                                {/*<h5 className="card-header">{props.name}</h5>*/}
                                {/*<div className="card-body row">*/}
                                    {/*<div className="col-1">*/}

                                    {/*</div>*/}
                                    {/*<div className="col-7">*/}
                                        {/*<h5 className="card-title"> {props.vtype}</h5>*/}
                                        {/*<p className="card-text">Price per day: {props.price}</p>*/}

                                    {/*</div>*/}

                                    {/*<div className="col-4">*/}
                                        {/*<span className="badge badge-success">Ratings: {props.rating}</span>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}


                        {/*<div className="col-sm-3">*/}

                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
                <div className="tab-content clearfix container">


                    <div className="row" >
                        <div className="tm-recommended-place-wrap">
                            <div className="tm-recommended-place">

                                <div className="tm-recommended-description-box">
                                    <h3 className="tm-recommended-title">{props.name}</h3>
                                    <p className="tm-text-highlight">Vehicle Type: <strong>{props.vtype}</strong></p>
                                    <p className="tm-text-gray">Ratings:{props.ratings}</p>
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