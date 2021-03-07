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
        <Link to="/dash">
                
           
                <ListItem button>
                  <ListItemIcon>
                    <PeopleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItem>
                </Link>

    <Link to="/account">
                
           
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="My Account" />
    </ListItem>
    </Link>
    <Link to="/reservations">
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="My Reservations(As a customer)" />
    </ListItem>
    </Link>
    <Link to="/ratings">
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="My ratings" />
    </ListItem>
    </Link>
    <Link to="/cancelation">
    <ListItem button>
      <ListItemIcon>
        <Cancel />
      </ListItemIcon>
      <ListItemText primary="My Cancelations" />
    </ListItem>
    </Link>
    <Link to="/services">
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon/>
      </ListItemIcon>
      <ListItemText primary="My Services" />
    </ListItem>
    </Link>
    <Link to="/sreservation">
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon/>
      </ListItemIcon>
      <ListItemText primary="Reservations(As a Service Provider)" />
    </ListItem>
    </Link>
  
  </div>
);

