import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';


import { Link } from 'react-router-dom';

import { InputLabel } from '@material-ui/core';
import { connect } from "react-redux";

import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import Image from 'react-bootstrap/Image'
import PieChart from './chart/pieChart';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

function Dashboard(props) {



  let userId = props.myId;
  const [users, setUsers] = useState([]);


  useEffect(() => {
      fetch(
          `https://alphax-api.azurewebsites.net/api/users/${userId}` //`https://alphax-api.azurewebsites.net/api/eventplannerservicereservations/${userId}`
      )

          .then((response) => {
              return response.json();
          })
          .then((responseData) => {

              //  setEvent(responseData)
            
              setUsers(responseData);
              console.log(responseData)
             


          });
  }, []);
  const classes = useStyles();


  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (


    <div>


      <div className="row">
      <div className="col-1">
          
        </div>
        <div className="col-3">
          <Image src={users.imgURL} alt="img1" style={{ width: "255px", height: "225px" }}roundedCircle></Image>
        </div>
        <div className="col-4">
       <h2>{users.firstName}  {users.lastName}</h2>   
        </div>

        <div className="col-3">
          <PieChart myId={props.myId}/>
     <center>My Post Summary</center>     
    
        </div>

        
      </div>
      <br>
      </br>
      <br>
      </br>
      <div className="row">
      <div className="col-1"></div>
        <div className="col-2">
          <Link to="/event"  style={{ color: 'black' }}>
            <Card style={{backgroundColor:"#AC3E31"}}>
              <CardContent>
                <div >
                  <h3>Event Posts</h3>
                 
                </div>


              </CardContent>
            </Card>
          </Link>

        </div>

        <div className="col-2">
          <Link to="/trans" style={{ color: 'black' }}>
          <Card style={{backgroundColor:"#AC3E31"}}>
              <CardContent>
                <div >
                  <h3>Transport</h3>


                </div>


              </CardContent>
            </Card>
          </Link>

        </div>

        <div className="col-2">
          <Link to="/guide" style={{ color: 'black' }}>
          <Card style={{backgroundColor:"#AC3E31"}}>
              <CardContent>
                <div >
                  <h3>Guide Posts</h3>


                </div>


              </CardContent>
            </Card>
          </Link>

        </div>

        <div className="col-2">
          <Link to="/hotel" style={{ color: 'black' }}>
          <Card style={{backgroundColor:"#AC3E31"}}>
              <CardContent>
                <div >
                  <h3>Hotel Posts</h3>

                </div>


              </CardContent>
            </Card>
          </Link>
        </div>

      </div>
    </div>





  );
}

const mapStateToProps = (state) => {
  return {
    userCred: state.eventpnl.userCred,
  };
};

export default connect(mapStateToProps)(Dashboard);