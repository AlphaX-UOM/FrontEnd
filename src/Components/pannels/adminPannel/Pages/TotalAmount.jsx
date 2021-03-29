
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    
    flex: 1,
  },
});

 function TotalAmount() {
    const [payment, setPayment] = useState([]);
  const [loading, setLoading] = useState(false);

  const [total,setTotal]=useState(0);
  // axios
  //   .get("https://alphax-api.azurewebsites.net/api/payments")
  //   /*  .then((response) => {
  //     return response.json();
  //   })*/
  //   .then((responseData) => {
  //     console.log(responseData);

  //     setPayment(responseData.data);
  //    setTotal(responseData.data.reduce((total,pay)=>total+pay.amount,0))

  //     setLoading(false);

  //   });


    useEffect(() => {
      fetch(
        `https://alphax-api.azurewebsites.net/api/payments`
      )
        .then((response) => {
          return response.json();
        })
        .then((responseData) => {
          setPayment(responseData);
     setTotal(responseData.reduce((total,pay)=>total+pay.amount,0))
        });
    }, []);


  const classes = useStyles();
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
 
  return (
  
    <React.Fragment>
     

      <h4>Total Revenue</h4>
      <Typography component="p" variant="h4">
       {total}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {date}
      </Typography>
      <div>
        
      </div>
    </React.Fragment>
  );
}
export default TotalAmount;