import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Details = (props) => {

    let name = props.location.data.name;
   
     let price = props.location.data.price;
  

    console.log(props.location.data);
   


    return (


    
<div class="card"  style={{ height: '20rem', width: '20rem' }}>
  <img src="https://th.bing.com/th/id/OIP.UkaAZqboACuFIe6Fh0JxYwHaEo?w=255&h=180&c=7&o=5&dpr=1.25&pid=1.7" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text"><h4> {name}</h4>
   <h6> Total Amount:{price}$</h6>
   </p>
   <Link to={{ pathname: "/"}}>
                         <Button variant="outlined" color="secondary"> Back </Button>

                        </Link>
                        <Link to={{ pathname: "/checkout"}}>
                         <Button variant="outlined" color="secondary"> Checkout </Button>

                        </Link>
   
  </div>
</div>





     
    )
}


export default Details;