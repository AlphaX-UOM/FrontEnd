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
<div className="navbar"style={{backgroundColor: '#060b26',height:"600px"}} >
    <Link to="/account" style={{ color: '#FFF' }}>
                
           
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon style={{ color: '#FFF' }}/>
      </ListItemIcon>
      <ListItemText primary="My Account" />
    </ListItem>
    </Link>
    <Link to="/pass"style={{ color: '#FFF' }}>
                
           
                <ListItem button>
                  <ListItemIcon>
                    <LockOpenIcon style={{ color: '#FFF' }}  />
                  </ListItemIcon>
                  <ListItemText primary="Change password" />
                </ListItem>
                </Link>
    <Link to="/reservations"style={{ color: '#FFF' }}>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon style={{ color: '#FFF' }} />
      </ListItemIcon>
      <ListItemText primary="My Reservations" />
    </ListItem>
    </Link>
    {/* <Link to="/ratings" style={{ color: '#FFF' }}>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon style={{ color: '#FFF' }} />
      </ListItemIcon>
      <ListItemText primary="Ratings" />
    </ListItem>
    </Link> */}
    <Link to="/cancelations"style={{ color: '#FFF' }}>
    <ListItem button>
      <ListItemIcon>
        <Cancel style={{ color: '#FFF' }} />
      </ListItemIcon>
      <ListItemText primary="My Cancelations" />
    </ListItem>
    </Link>
    <Link to="/upgrade" style={{ color: '#FFF' }}>
    <ListItem button>
      <ListItemIcon>
        <Cancel style={{ color: '#FFF' }} />
      </ListItemIcon>
      <ListItemText primary="UPGRADE" />
    </ListItem>
    </Link>
  
  
  </div>
);

