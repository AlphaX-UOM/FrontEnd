import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems} from './sideBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Account from '../CustomerPannel/Pages/Account';
import Services from './Pages/services';
import Reservations from './../CustomerPannel/Pages/Reservation';
import Ratings from './Pages/Ratings';
import Cancelation from './../CustomerPannel/Pages/cancelation';
import Sreservation from './Pages/Sreservations';
import DashBoard from './Pages/DashBoard/DashBoard';
import Event from './Pages/DashBoard/eventPosts';
import Guide from './Pages/DashBoard/GuideTotal';
import Hotel from './Pages/DashBoard/hotelTotal';
import Trans from './Pages/DashBoard/TransTotal';
import ItemLanding from '../../servicemodules/event/Component/Update/Item/ItemLanding';
import Transport from '../../servicemodules/transport/Listitemdetails/listitemdetails';
import HotelViewPost from '../serviceProvider/Pages/DashBoard/hotelviewpost';
import GuidePge from '../../servicemodules/guide/components/GuideDetails/guidedetailspage';
import Password from '../CustomerPannel/Pages/password/passwordForm';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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

export default function Dashboard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
 
  return (
    <div className={classes.root} >
   
        <BrowserRouter>
  
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
       
      
      </Drawer>
      <main className={classes.content} >
        <div className={classes.appBarSpacer}  />
        <Switch>
        <Route path='/account'> <Account  myId={props.myId} /> </Route>
        <Route path='/services'><Services myId={props.myId}/></Route>
        <Route path='/ratings'><Ratings myId={props.myId}/></Route>
        <Route path='/pass'><Password myId={props.myId}/></Route>
        <Route path='/cancelation'><Cancelation myId={props.myId}/></Route>
        <Route path='/sreservation'><Sreservation myId={props.myId}/></Route>
        <Route path='/reservations'><Reservations myId={props.myId}/></Route>
        <Route path='/event'><Event myId={props.myId}/></Route>
        <Route path='/trans'><Trans myId={props.myId}/></Route>
        <Route path='/guide'><Guide myId={props.myId}/></Route>
        <Route path='/hotel'><Hotel myId={props.myId}/></Route>
        <Route path="/translanding/:id" component={Transport}/>
        <Route path="/guidelanding/:id" component={GuidePge}/>
        <Route path="/categorylanding/:id" component={ItemLanding}/>
        <Route path="/hotelviewpost" component={HotelViewPost}/>
        <Route path='/'><DashBoard myId={props.myId}/></Route>
      
      
        </Switch>


      </main>
      </BrowserRouter>
     
    </div>
  );
}