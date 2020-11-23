import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Details = (props) => {

    let name = props.location.data.name;
    let venue = props.location.data.venue;
    let discription = props.location.data.details;
    let price = props.location.data.cost;
    let comments = props.location.data.comments;
    let notifications = props.location.data.notifications

    console.log(props.location.data);
    let costdetails =  {
                    
                    
        name :name,
        price:price,
        

       
       };


    return (







        <div className="row align-items-center" style={{ backgroundColor: 'green' }} >
            <div className="col-6" style={{ backgroundColor: 'green' }}>
                <div className="card" style={{ height: '20rem', width: '50rem' }}>
                    <img src="https://d3rr2gvhjw0wwy.cloudfront.net/uploads/activity_headers/128289/600x400-1-50-dde6fa3d3af8c1ef25e9120b4e1ff96d.jpg" class="card-img-top" alt="image1"></img>
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{discription}</p>
                         <Link to={{ pathname: "/payment", data:costdetails}}>
                         <Button variant="outlined" color="secondary"> Select </Button>

                        </Link>
                        <Link to='/'>
                         <Button variant="outlined" color="secondary"> Back </Button>

                        </Link>
                           
                       
                    </div>
                </div>
            </div>
            <div className="col-2" ></div>
            <div className="col-4" >
                <div class="card" >
                    <ul class="list-group list-group-flush" >
                        <li class="list-group-item"><h4>{name}</h4></li>

                        <li class="list-group-item" style={{ backgroundColor: 'yellow' }}>Venue:    {venue}</li>
                        <li class="list-group-item" style={{ backgroundColor: 'yellow' }}>price:   {price}</li>
                        <li class="list-group-item" style={{ backgroundColor: 'yellow' }}>comments:   {comments}</li>
                        <li class="list-group-item" style={{ backgroundColor: 'yellow' }}>Notifications:   {notifications}</li>
                        <li class="list-group-item" style={{ backgroundColor: 'yellow' }}>Ratings::    </li>
                        <li class="list-group-item" style={{ backgroundColor: 'yellow' }}>Reviews:   </li>

                    </ul>
                </div>


            </div>
        </div>



    )
}


export default Details;