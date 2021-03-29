import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import RowingIcon from '@material-ui/icons/Rowing';
import { alignPropType } from "react-bootstrap/esm/DropdownMenu";

function CategoryItem(props) {
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      width: '5vw',
      transitionDuration: '0.3s',
      height: '5vw',
      alignItems:'center',
      justifyContent:'center',
      

     
    },
  });

  const CategoryClickHandle = () => {
    let selected = props.type;
    console.log("ClickReached");
    props.addCategoryData(selected);
  };

  const classes = useStyles();
  
  return (
    <div class="card card-body" style={{ width: "3vw", height: '12vw',  alignItems:"center",
    justifyContent:"center"}}>
      <Link  to={{pathname: '/categorylanding',data:props}}>
        <CardActionArea>
          <cebter>
          <CardMedia
            className={classes.media}
            image={props.url}
            style={{ alignItems: "center"}}
            title="Contemplative Reptile"
            onClick={CategoryClickHandle}
          />
          </cebter>
          <CardContent>
            <Typography
              gutterBottom
             // variant="h6"
              component="h3"
              fontSize="5px !important"
              style={{ textAlign: "center", fontSize:"5px !important" }}
            >
             
              {props.name}
          
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </div>
  );
}



const mapDispatchToProps = (dispatch) => {
  return {
    addCategoryData: (selected) => { dispatch({type: 'ADD_Category_DATA', selected: selected} )}
  }
}

export default connect(null, mapDispatchToProps)(CategoryItem);