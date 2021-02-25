import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Cancel from "@material-ui/icons/Cancel";
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import EditIcon from '@material-ui/icons/Edit';


import { Link } from 'react-router-dom';;
export const mainListItems = (
  <div>

    <Link to="/account">
                
           
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="My Account" />
    </ListItem>
    </Link>
    <Link to="/pass">
                
           
                <ListItem button>
                  <ListItemIcon>
                    <EditIcon />
                  </ListItemIcon>
                  <ListItemText primary="Change password" />
                </ListItem>
                </Link>
    <Link to="/reservations">
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="My Reservations" />
    </ListItem>
    </Link>
    <Link to="/ratings">
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Ratings" />
    </ListItem>
    </Link>
    <Link to="/cancelations">
    <ListItem button>
      <ListItemIcon>
        <Cancel />
      </ListItemIcon>
      <ListItemText primary="My Cancelations" />
    </ListItem>
    </Link>
    <Link to="/upgrade">
    <ListItem button>
      <ListItemIcon>
        <Cancel />
      </ListItemIcon>
      <ListItemText primary="UPGRADE" />
    </ListItem>
    </Link>
  
  
  </div>
);

