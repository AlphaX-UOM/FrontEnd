import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from 'react-bootstrap/Button';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


import { Link } from 'react-router-dom';

import { InputLabel } from '@material-ui/core';
import { connect } from "react-redux";
import Container from '@material-ui/core/Container';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import Image from 'react-bootstrap/Image'
import PieChart from './chart/pieChart';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TotalRes from './TotalRese';

import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
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
    height: 190,
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
      <center> <Typography component="p" variant="h3">
                 {users.firstName}  {users.lastName}
      </Typography>
</center>


      <div className="row">
      
{/*     
        <div className="col-2">
          <Image src={users.imgURL} alt="img1" style={{ width: "255px", height: "225px" }} roundedCircle></Image>
        </div> */}
           <div className="col-1"></div>
           <div className="col-1">
         
           <Image src={users.imgURL} alt="img1" style={{ width: "255px", height: "225px" }} roundedCircle></Image>
           </div>
        <div className="col-2">

         
        </div>
      
        <Grid item xs={9} md={4} lg={3} >
          <Paper className={fixedHeightPaper}style={{backgroundColor: '#FFDC2E',height:'300px'}}>
            <center>
              <ShoppingCartIcon></ShoppingCartIcon>
              <Typography component="p" variant="h5">
                  Total Reservations
               
                  
      </Typography>
      <TotalRes/>

            </center>
          
          </Paper>
        </Grid>
        <div className="col-1"></div>

        <Grid item xs={9} md={4} lg={3}>
          <Paper className={fixedHeightPaper}style={{backgroundColor: '#9DE6F5',color:'white',height: '300px'}}>
            <center>
            <Typography component="p" variant="h5">
     
      </Typography>
            </center>
          
            <PieChart myId={props.myId} />
          </Paper>
          <center>My Posts Summary</center>

        </Grid>
      
        

  
        </div>
       

    
      <hr></hr>
      <Container maxWidth="lg" className={classes.container} >
        <Grid container spacing={4} style={{
          justifyContent: "center"
        }}>
          <Grid item xs={6} md={4} lg={2}>
            <Link to="/event" style={{ color: 'black' }}>
              <Paper className={fixedHeightPaper} style={{ backgroundColor: '#49DE94', height: '100' }}>
                <center>
                  <BeachAccessIcon />
                  <br></br>

                  <Typography component="p" variant="h5">
                    Event Posts
      </Typography>
                </center>


              </Paper>
            </Link>
          </Grid>

          <Grid item xs={6} md={4} lg={2}>
            <Link to="/trans" style={{ color: 'black' }}>
              <Paper className={fixedHeightPaper} style={{ backgroundColor: '#49DE94', height: '150' }}>
<center>
<LocalTaxiIcon />   
 <Typography component="p" variant="h5">
                  Transport Posts
      </Typography>

</center>

               

              </Paper>
            </Link>
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <Link to="/guide" style={{ color: 'black' }}>
              <Paper className={fixedHeightPaper} style={{ backgroundColor: '#49DE94', height: '150' }}>
                <center>
                <SupervisorAccountIcon />    <Typography component="p" variant="h5">
                  Guide Posts
      </Typography>

                </center>

           

              </Paper>
            </Link>
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <Link to="/hotel" style={{ color: 'black' }}>
              <Paper className={fixedHeightPaper} style={{ backgroundColor: '#49DE94', height: '150' }}>
                <center>
                  
                <LocalHotelIcon />    <Typography component="p" variant="h5">
                  Hotel Posts
      </Typography>


                </center>


              </Paper>
            </Link>
          </Grid>
        </Grid>
      </Container>
      {/* <div className="row">
      <div className="col-1"></div>
        <div className="col-2">
          <Link to="/event"  style={{ color: 'black' }}>
     
            <Button variant="success">    <BeachAccessIcon />Event Posts</Button>
          </Link>

        </div>
      

        <div className="col-2">
          <Link to="/trans" style={{ color: 'black' }}>
        
                <Button variant="success">Transport Posts</Button>
          </Link>

        </div>

        <div className="col-2">
          <Link to="/guide" style={{ color: 'black' }}>
          <Button variant="success">Guide Posts</Button>
          </Link>

        </div>

        <div className="col-2">
          <Link to="/hotel" style={{ color: 'black' }}>
          <Button variant="success">Hotel Posts</Button>
          </Link>
        </div>

      </div> */}
    </div>





  );
}

const mapStateToProps = (state) => {
  return {
    userCred: state.eventpnl.userCred,
  };
};

export default connect(mapStateToProps)(Dashboard);