
import { Link } from "react-router-dom";
import Map from './SriLanka/map';
import React,{Component, useState }  from 'react';
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function CategoryLeftFilter(props) {
  const[audience,setAudience]=useState();
  const[price,setPrice]=useState();
 
  const Changehandler = (event) => {
     setAudience(event.target.value);
     props.addAudData(event.target.value);
   };
 
   
  const ChangePrice = (event) => {
   setPrice(event.target.value);
   props.pricedData(event.target.value);
 };
 

  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Grid container spacing={4}>
      <Grid item xs={5}>
     
       
        <div className="form-group tm-form-group tm-form-group-pad tm-form-group-1">
        <label htmlFor="inputCity"> Audience</label>
        <select className="form-control tm-select"  name="audience" onChange={Changehandler} >
                                        <option value="All">All</option>
                                        <option value="family">Family</option>
                                        <option value="21+">21+</option>
                                 
                                        

                                    </select>
                                    </div>
                                 
   

      </Grid>
      
      <Grid item xs={7}>
      <div className="form-group tm-form-group tm-form-group-pad tm-form-group-1">
    
                    <label htmlFor="inputCity">Price</label>
                    <select className="form-control tm-select"  name="price" onChange={ChangePrice} >
                                        <option value="All">All</option>
                                        <option value="5000-">Less than $5000</option>
                                        <option value="5000+">Greater than $5000</option>
                                        

                                    </select>
                                    </div>

                   
                 
                
      </Grid>
      
    </Grid>
    <Grid container spacing={4}>
    
      <Grid item xs={9}>
        <Paper className={classes.paper}>
          <p>Search by location</p>
          <Map/>
        </Paper>
      </Grid>
   
    </Grid>
  </div>

   
  );
}



const mapStateToProps = (state) => {
  return {
    mapdata: state.eventpnl.auddata,
    
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    addAudData: (auddata) => {
      dispatch({ type: "ADD_EVENT_AUD_DATA", auddata: auddata });
    },
    pricedData: (pricedata) => {
      dispatch({ type: "ADD_PRICE_DATA", pricedata: pricedata });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryLeftFilter);
