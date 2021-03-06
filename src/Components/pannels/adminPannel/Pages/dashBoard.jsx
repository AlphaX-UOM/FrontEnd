import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Orders from './table';
import TotalAmmount from './TotalAmount';
import Chart from './Chart';
import PieChart from './pieChart';
import Typography from '@material-ui/core/Typography';


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
    height: '150vh',
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

 function Dashboard() {
  const classes = useStyles();
  var current=new Date().getFullYear()
 
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <main className={classes.content}>
    {/* <div className={classes.appBarSpacer} /> */}
    <Container maxWidth="lg" className={classes.container} >
       <Grid container spacing={2}>
        {/* Chart */}
        <Grid item xs={4} md={4} lg={6}>
          <Paper style={{backgroundColor: '#17b3a3',color:'white',height:'350px'}}>
          <center>
            <Typography component="p" variant="h5">
       Reservation Per Services
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Current Year: {current}
      </Typography>
            </center>
         <Chart/>
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={9} md={4} lg={3}>
          <Paper className={fixedHeightPaper}style={{backgroundColor: '#49DE94',color:'white',height:'350px'}}>
          <TotalAmmount/>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4} lg={3}>
          <Paper style={{backgroundColor: '#0bb2d4',color:'white',height:'350px'}}>
            <center>
            <Typography component="p" variant="h5">
       Posts Summary
      </Typography>
            </center>
          
          <PieChart/>
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper className={classes.paper}style={{backgroundColor: '#34384E',color:'white'}}>
              <Orders/>
        
          </Paper>
        </Grid>
      </Grid>
      <Box pt={4}>
        
      </Box>
    </Container>
  </main>
  );
}

export default Dashboard;