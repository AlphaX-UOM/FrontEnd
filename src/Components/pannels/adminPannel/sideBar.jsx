import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Cancel from "@material-ui/icons/Cancel";
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';


import { Link } from 'react-router-dom';;
export const mainListItems = (
  <div>
       <Link to="/dashboard">
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    </Link>
    <Link to="/reservations">
                
           
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Reservations" />
    </ListItem>
    </Link>
    <Link to="/user">
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="User Details" />
    </ListItem>
    </Link>
    <Link to="/cancelations">
    <ListItem button>
      <ListItemIcon>
        <Cancel />
      </ListItemIcon>
      <ListItemText primary="Cancelations" />
    
    </ListItem>
    </Link>
    <Link to="/upgrade">
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon/>
      </ListItemIcon>
      <ListItemText primary="APPROVE" />
    
    </ListItem>
    </Link>
  
  </div>
);


