import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Cancel from "@material-ui/icons/Cancel";
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import './sideBar.css';


import { Link } from 'react-router-dom';;
export const mainListItems = (
  <div className="navbar"style={{backgroundColor: '#060b26',height:"600px"}} >
     
       <Link to="/dashboard" style={{ color: '#FFF' }} >
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon style={{ color: '#FFF' }}/>
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    </Link>
    <Link to="/reservations"style={{ color: '#FFF' }}>
                
           
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon style={{ color: '#FFF' }} />
      </ListItemIcon>
      <ListItemText primary="Reservations" />
    </ListItem>
    </Link>
    <Link to="/user"style={{ color: '#FFF' }}>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon style={{ color: '#FFF' }} />
      </ListItemIcon>
      <ListItemText primary="User Details" style={{ color: '#FFF' }}/>
    </ListItem>
    </Link>
    <Link to="/cancelations">
    <ListItem button>
      <ListItemIcon>
        <Cancel style={{ color: '#FFF' }}/>
      </ListItemIcon>
      <ListItemText primary="Cancelations" style={{ color: '#FFF' }}/>
    
    </ListItem>
    </Link>
    <Link to="/upgrade"style={{ color: '#FFF' }}>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon style={{ color: '#FFF' }}/>
      </ListItemIcon>
      <ListItemText primary="APPROVE" />
    
    </ListItem>
    </Link>
  
  </div>
);


