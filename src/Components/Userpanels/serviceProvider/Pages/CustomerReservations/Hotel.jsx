import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
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
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function Hotel(props) {
  let userId = props.myId;

  const [eventList, setEventList] = useState([]);
  const [loadning, setLoading] = useState(null);

  useEffect(() => {
    fetch(
      `https://alphax-api.azurewebsites.net/api/hotelsservicereservations?userId=${userId}` //`https://alphax-api.azurewebsites.net/api/eventplannerservicereservations/${userId}`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        responseData = responseData.filter((item) => item.cancellation == null);
        setEventList(responseData);
        console.log("response data->" + responseData);
      });
  }, [userId, loadning]);

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [canData, setCanData] = useState([]);

  const handleClose = () => {
    setOpen(false);
  };

  function handleClickOpen(params) {
    setOpen(true);
    console.log("cancelled 01->" + params.id);
    setCan(params.id);
    setCanData(params);
  }

  const [can, setCan] = useState(null);

  const cancelHandler = () => {
    setOpen(false);
    axios
      .post("https://alphax-api.azurewebsites.net/api/cancellations", cancelData)
      .then(function (response) {
        console.log(response);
        setLoading(response);
        setOpen(false);
      });

    const fireResIdg = uuidv4();
    const apiUrlg = `https://vvisit-d6347-default-rtdb.firebaseio.com/reservations/${fireResIdg}.json`;
    const fireGuide = {
      custId: userId,
      custName: props.userCred.firstName + " " + props.userCred.lastName,
      serId: canData.hotelsService.userID,
      serName: canData.hotelsService.name,
      bookedDate: canData.checkIn,
      createdDate: new Date(),
      custRead: "no",
      serRead: "no",
      resId: fireResIdg,
      type: "cancellation",
    };

    axios.put(apiUrlg, fireGuide).then((response) => {
      if (response.status === 200) {
        console.log("Data Saved");
      }
    });
  };

  let cancelData = {
    isApproved: false,
    date: "2020-10-11T00:00:00",
    userID: userId,
    reservationID: can,
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Room Type</StyledTableCell>
              <StyledTableCell align="right">No.Of Rooms</StyledTableCell>
              <StyledTableCell align="right">Check In</StyledTableCell>
              <StyledTableCell align="right">Check Out</StyledTableCell>
              <StyledTableCell align="right">Venue</StyledTableCell>
              <StyledTableCell align="right">Total Price</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {eventList.map((row) => (
              <StyledTableRow key={row.hotelsService.id}>
                <StyledTableCell component="th" scope="row">
                  {row.hotelsService.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.roomType}</StyledTableCell>
                <StyledTableCell align="right">{row.noOfRooms}</StyledTableCell>
                <StyledTableCell align="right">{row.checkIn}</StyledTableCell>
                <StyledTableCell align="right">{row.checkOut}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.hotelsService.venue}
                </StyledTableCell>
                <StyledTableCell align="right">{row.price}$</StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                      handleClickOpen(row);
                    }}
                  >
                    <HighlightOffIcon />
                    Cancellation
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Cancel Hotel Booking?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to cancel this service?, we will refund the
            amount based on Cancellation policy.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={cancelHandler} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userCred: state.userCred,
  };
};

export default connect(mapStateToProps)(Hotel);
