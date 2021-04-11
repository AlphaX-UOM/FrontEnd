import React, { useState, useEffect }  from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import axios from "axios";
import Popup from '../ApproveCancellation/popupModel';
import { connect } from "react-redux";


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function Guide(props) {


    const [eventList, setEventList] = useState([]);
  
    useEffect(() => {
      fetch(
        `https://alphax-api.azurewebsites.net/api/tourguideservicereservations`    //`https://alphax-api.azurewebsites.net/api/eventplannerservicereservations/${userId}`
      )
        .then((response) => {
          return response.json();
        })
        .then((responseData) => {
          responseData = responseData.filter(item => item.cancellation != null);
          setEventList(responseData);
          console.log("response data->"+responseData);
        });
    }, []);


  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const [value, setValue] = useState(false);
  const [popup, setPopup] = useState(false);

  const handleApproveChange = (event) => {
    var isTrueSet = (event.target.value == 'true');
    setValue(isTrueSet);
    console.log("butoon clicked ->"+isTrueSet);
  }


  const handleUpdateFund = (event) => {
    
    let adminPopup = true;
    props.adminCancelPop(adminPopup);
    let cancelData = {
      reservationName : event.tourGuideService.name,
      customerID : event.userID,
      payment : event.price,
      canDate : event.cancellation.date,
      okey : 'YES',
      policy : 'This is a service policy',
      paymentID : event.paymentID,
      cancellation : event.cancellation
    }
    props.adminCancelData(cancelData);
    setPopup(true);

  };

  if((props.adminPopup)&&(props.adminRefundData.paymentID!==undefined)){
    return(
       <Popup />
    );
  }

  return (
      <div>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Language</StyledTableCell>
            <StyledTableCell align="right">Customer ID</StyledTableCell>
            <StyledTableCell align="right">Reservation ID</StyledTableCell>
            <StyledTableCell align="right">Payment ID</StyledTableCell>
            <StyledTableCell align="right">CheckIn</StyledTableCell>
            <StyledTableCell align="right">PricePerDay</StyledTableCell>
            <StyledTableCell align="right">Refunded</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {eventList.map((row) => (
            <StyledTableRow key={row.tourGuideService.name}>
              <StyledTableCell component="th" scope="row">
                {row.tourGuideService.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.tourGuideService.language}</StyledTableCell>
              <StyledTableCell align="right">{row.tourGuideService.userID}</StyledTableCell>
              <StyledTableCell align="right">{row.id}</StyledTableCell>
              <StyledTableCell align="right">{row.paymentID}</StyledTableCell>
              <StyledTableCell align="right">{row.checkIn}</StyledTableCell>
              <StyledTableCell align="right">{row.tourGuideService.costPerDay}$</StyledTableCell>
              <StyledTableCell align="right">{row.cancellation.isApproved.toString()}</StyledTableCell>
              
              <StyledTableCell align="right">
                  {row.cancellation.isApproved.toString()==='false' ? <Button variant="contained" color="secondary" value={row} onClick={() => handleUpdateFund(row)}> Update</Button> : <Button variant="contained" disabled>Updated</Button> }
                </StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
</div>
  );
}

const mapStateToProps = (state) => {
  return {
    adminPopup: state.eventpnl.adminPopup,
    adminRefundData: state.eventpnl.adminRefundData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    adminCancelPop: (adminPopup) => {
      dispatch({ type: "Admin_Popup", adminPopup: adminPopup });
    },
    adminCancelData: (cancelData) => {
      dispatch({ type: "Admin_Refund_Data", adminRefundData: cancelData });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Guide);