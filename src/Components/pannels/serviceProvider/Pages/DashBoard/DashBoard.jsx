import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';


import { Link } from 'react-router-dom';

import { InputLabel } from '@material-ui/core';
import { connect } from "react-redux";

import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
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
  const classes = useStyles();


  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (


    <div>


      <div className="row">
        <div className="col-3">
          <img src={props.userCred.imgURL} alt="img1" style={{ width: "255px", height: "225px" }}></img>
        </div>
        <div className="col-9">
       <h2>{props.userCred.firstName}  {props.userCred.lastName}</h2>   
        </div>
      </div>
      <br>
      </br>
      <br>
      </br>
      <div className="row">
        <div className="col-3">
          <Link to="/event" style={{ color: 'black' }}>
            <Card>
              <CardContent>
                <div >
                  <InputLabel>Event Posts</InputLabel>
                  <InputLabel></InputLabel>

                </div>


              </CardContent>
            </Card>
          </Link>

        </div>

        <div className="col-3">
          <Link to="/trans" style={{ color: 'black' }}>
            <Card>
              <CardContent>
                <div >
                  <InputLabel>Transport Posts</InputLabel>


                </div>


              </CardContent>
            </Card>
          </Link>

        </div>

        <div className="col-3">
          <Link to="/guide" style={{ color: 'black' }}>
            <Card>
              <CardContent>
                <div >
                  <InputLabel>Guide Posts</InputLabel>


                </div>


              </CardContent>
            </Card>
          </Link>

        </div>

        <div className="col-3">
          <Link to="/hotel" style={{ color: 'black' }}>
            <Card>
              <CardContent>
                <div >
                  <InputLabel>Hotel Posts</InputLabel>

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