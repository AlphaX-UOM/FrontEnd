import React, { useState, useEffect } from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
}));

function Ratings(props) {
  const classes = useStyles();
  const [total, setTotal] = useState(false);
  const [value, setValue] = useState(0);


  useEffect(() => {
    console.log(props.item.type);
    if (props.item.type === "Transport Service") {
      fetch(
        `https://alphax-api.azurewebsites.net/api/transportserviceratings/`
      )
        .then((response) => {
          return response.json();
        })
        .then((responseData) => {
          responseData = responseData.filter(item => item.transportServiceID === props.item.item.id);
          setValue(responseData.reduce((total, pay1) => total + pay1.rating, 0))
          setTotal(responseData.reduce((total, pay) => total + 1, 0));
        });

    } else if (props.item.type === "Tour Guide Service") {
      fetch(
        `https://alphax-api.azurewebsites.net/api/tourguideserviceratings`
      )
        .then((response) => {
          return response.json();
        })
        .then((responseData) => {
          responseData = responseData.filter(item => item.tourGuideServiceID === props.item.item.id);
          setValue(responseData.reduce((total, pay1) => total + pay1.rating, 0))
          setTotal(responseData.reduce((total, pay) => total + 1, 0));
        });

    } else if (props.item.type === "Event Service") {
      fetch(
        `https://alphax-api.azurewebsites.net/api/eventplannerserviceratings`
      )
        .then((response) => {
          return response.json();
        })
        .then((responseData) => {
          responseData = responseData.filter(item => item.eventPlannerServiceID === props.item.item.id);
          setValue(responseData.reduce((total, pay1) => total + pay1.rating, 0))
          setTotal(responseData.reduce((total, pay) => total + 1, 0));
        });

    } else {
      fetch(
        `https://alphax-api.azurewebsites.net/api/hotelsserviceratings`
      )
        .then((response) => {
          return response.json();
        })
        .then((responseData) => {
          responseData = responseData.filter(item => item.hotelsServiceID === props.item.item.id);
          setValue(responseData.reduce((total, pay1) => total + pay1.rating, 0))
          setTotal(responseData.reduce((total, pay) => total + 1, 0));
        });

    }
    console.log("total -> "+total);
    console.log("value ->"+value);

  }, [props.item.item.id,props.item.type]);


  return (
    <div className={classes.root}>
      {/*<Rating name="size-small" defaultValue={2} size="small" />*/}
      <Rating name="half-rating-read" value={value/total} precision={0.5} readOnly/> <small>Based on {total} reviews</small>
      {/*<Rating name="size-large" defaultValue={2} size="large" />*/}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    item: state.eventpnl.item,
  };
};

export default connect(mapStateToProps, null)(Ratings);
