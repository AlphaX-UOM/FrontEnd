import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row } from 'react-bootstrap';
import CategoryRightList from './CategoryRightList';
import CategoryLeftFilter from './CategoryLeftFilter';
import Title from '../Main/Title';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import Map from './SriLanka/map';

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



function CategoryLanding(props) {
  const[audience,setAudience]=useState();
  const[price,setPrice]=useState();
  const [search, setsearch] = useState("");
 

  const Changehandler = (event) => {
    setAudience(event.target.value);
    props.addAudData(event.target.value);
  };

  
 const ChangePrice = (event) => {
  setPrice(event.target.value);
  props.pricedData(event.target.value);
};
const changeSearch = (event) => {
  setsearch(event.target.value);

 // props.pricedata(event.target.value);
 
};

  const classes = useStyles();

  let type = props.type;
  console.log("selected type->" + props.type);




  return (
    <div>
      <Grid>
      <Title />

      <div><p><br /></p></div>
      <Container>
      <Row>
        <Col> 
       
      <Row>
        
        </Row>
        </Col>
      </Row>
      <Row>
        <Col>
             
        <div className="form-group tm-form-group tm-form-group-pad tm-form-group-1">
        <label htmlFor="inputCity"> Audience</label>
        <select className="form-control tm-select"  name="audience"  onChange={Changehandler} >
                                        <option value="All">All</option>
                                        <option value="family">Family</option>
                                        <option value="21+">21+</option>
                                 
                                        

                                    </select>
                                    </div>
                                 
        </Col>
        
        <Col>
        <div className="form-group tm-form-group tm-form-group-pad tm-form-group-1">
    
    <label htmlFor="inputCity">Price</label>
    <select className="form-control tm-select"  name="price"  onChange={ChangePrice}  >
                        <option value="All">All</option>
                        <option value="5000-">Less than $5000</option>
                        <option value="5000+">Greater than $5000</option>
                        

                    </select>
                    </div>
                    </Col>
        
      </Row>
      <Row>

      </Row>
      <Row>
        <Col xs="6">
        <CategoryRightList type={type} />
        </Col>
        <Col>
        <Map/>
        </Col>

      </Row>
      </Container>
      {/* <Grid container spacing={4}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <CategoryRightList type={type} />
           
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
        
          <CategoryLeftFilter/>
          </Paper>
        </Grid>
       
      </Grid> */}
      {/* <Container>
        <Row>
          <Col xs={4} >
            <CategoryLeftFilter />
          </Col>
          <Col xs={12} md={6}>
            <CategoryRightList type={type} />
          </Col>

        </Row>
      </Container> */}
      </Grid>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    type: state.eventpnl.type,
    searchdata: state.search,
  }
}





const mapDispatchToProps = (dispatch) => {
  return {
    addAudData: (auddata) => {
      dispatch({ type: "ADD_EVENT_AUD_DATA", auddata: auddata });
    },
    pricedData: (pricedata) => {
      dispatch({ type: "ADD_PRICE_DATA", pricedata: pricedata });
    },
    searchdData: (searchdata) => {
      dispatch({ type: "ADD_SEARCH_DATA", searchdata: searchdata });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryLanding);