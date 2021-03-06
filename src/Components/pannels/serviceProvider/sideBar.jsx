import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Cancel from "@material-ui/icons/Cancel";
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import LockOpenIcon from '@material-ui/icons/LockOpen';



import { Link } from 'react-router-dom';;
export const mainListItems = (
  <div className="navbar"style={{backgroundColor: '#060b26',height:"600px"}}>
        <Link to="/dash"  style={{ color: '#FFF' }}>
                
           
                <ListItem button>
                  <ListItemIcon>
                    <DashboardIcon  style={{ color: '#FFF' }} />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItem>
                </Link>

    <Link to="/account"  style={{ color: '#FFF' }}>
                
           
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon  style={{ color: '#FFF' }} />
      </ListItemIcon>
      <ListItemText primary="My Account" />
    </ListItem>
    </Link>

    <Link to="/pass"  style={{ color: '#FFF' }}>
                
           
                <ListItem button>
                  <ListItemIcon>
                    <LockOpenIcon  style={{ color: '#FFF' }} />
                  </ListItemIcon>
                  <ListItemText primary="Password" />
                </ListItem>
                </Link>
    <Link to="/reservations"  style={{ color: '#FFF' }}>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon  style={{ color: '#FFF' }}/>
      </ListItemIcon>
      <ListItemText primary="My Reservations" />
      
    </ListItem>
    </Link>
    <Link to="/cancelation"  style={{ color: '#FFF' }}>
    <ListItem button>
      <ListItemIcon>
        <Cancel  style={{ color: '#FFF' }} />
      </ListItemIcon>
      <ListItemText primary="My Cancelations" />
    </ListItem>
    </Link>

    <Link to="/sreservation"  style={{ color: '#FFF' }}>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon  style={{ color: '#FFF' }}/>
      </ListItemIcon>
      <ListItemText primary="Service Reservations" />
    </ListItem>
    </Link>
  
  </div>
);

