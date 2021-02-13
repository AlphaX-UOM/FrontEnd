import React, { useState, useEffect } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';




const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

 function Orders() {

    const [payment, setPayment] = useState([]);
  const [loading, setLoading] = useState(false);
 
 
  axios
    .get("https://alphax-api.azurewebsites.net/api/payments")
    /*  .then((response) => {
      return response.json();
    })*/
    .then((responseData) => {
      console.log(responseData);

      setPayment(responseData.data);
      setLoading(false);
      /* for (var  i = 0; i < responseData.length; i++) {
      console.log(responseData[i]);
       // eslint-disable-next-line no-loop-func
       setNameList((nameList) => [...nameList, responseData[i]]);
      
      
      
      
    }*/
    });
  const classes = useStyles();
  return (
    <React.Fragment>
      <h4>Payment Summary</h4>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>User Id</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Discount</TableCell>
            <TableCell>Total Amount</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {payment.map((row) => (
       
            <TableRow key={row.userID}>
                  <TableCell>{row.userID}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.discount}</TableCell>
              <TableCell>{row.amount}</TableCell>

            
            </TableRow>
          ))}
        </TableBody>
      </Table>
   
    </React.Fragment>
  );
}
export default Orders;