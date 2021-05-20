import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { connect } from "react-redux";
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

function VerifyRefund(props) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Reservation -: {props.adminRefundData.reservationName}</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Customer ID -: {props.adminRefundData.customerID}</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Payment -: {props.adminRefundData.payment}$</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Cancellation Date -: {props.adminRefundData.canDate}</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Service Policy -: {props.adminRefundData.policy}</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Suitability for refund -: {props.adminRefundData.okey}</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Refund Amount -: {props.adminRefundData.refund}$</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Note to the Customer -: {props.adminRefundData.note}</Paper>
        </Grid>
      </Grid>
      </Container>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyRefund);