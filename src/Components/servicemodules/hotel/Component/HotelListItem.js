import React from 'react';
import {Link} from 'react-router-dom';

function HotelListItem(props) {
    
    let itemdetail = {
            hotelId: props.key,
            hotelName: props.hotelName,
            district: props.district,
            hotelAddress: props.hotelAddress,
            pNumber: props.pNumber,
            avgPrice: props.avgPrice,
            stars: props.stars
    }
    
    return (
        <div>
            <div className="container">
            <Link to={{ pathname: "/result", data:itemdetail}} className="link textdec" >
                <div className="card">
                    <div className="row no-gutters">
                        <div className="col-md-4 img">
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <p>
                                    <p className="text-success"><h5 className="card-title">{props.hotelName}</h5></p>
                                    <p className="text-right" >{props.district}</p>
                                </p>
                                <p className="text-body">This is a wider card with supporting text below as a natural lead-in to additional content.
                                This is a wider card with supporting text below as a natural lead-in to additional content.
                                This is a wider card with supporting text below as a natural lead-in to additional content.
                                </p>
                                <p><span className="text-body">Address:</span> {props.hotelAddress}</p>
                                <p><span className="text-body">Contact Number:</span> {props.pNumber}</p>
                                <p className="text-danger"><span>Average Price per Person:</span> {props.avgPrice}</p> 
                                <p className="text-right"> <button type="button">Select</button></p>
                            </div>
                        </div>
                    </div>
                </div>
                </Link>
            </div>

            <br />
        </div>
    );
}

export default HotelListItem;