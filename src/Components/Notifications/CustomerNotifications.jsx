import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import NotificationsIcon from "@material-ui/icons/Notifications";
import axios from "axios";
import Badge from "@material-ui/core/Badge";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function CustomerNotifications(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [nofications, setNotification] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [key, setKey] = useState([]);
  const [test, setTest] = useState([]);

  useEffect(() => {
    const apiUrl =
      "https://vvisit-d6347-default-rtdb.firebaseio.com/reservations.json";

    axios.get(apiUrl).then((response) => {
      if (response.data) {
        setNotification(
          Object.values(response.data).filter(
            (item) => item.custId === props.myId && item.custRead === "no"
          )
        );
        setCount(
          Object.values(response.data).filter(
            (item) => item.custId === props.myId && item.custRead === "no"
          ).length
        );
        setKey(
          Object.keys(response.data).filter(
            (item) => item.custId === props.myId && item.custRead === "no"
          )
        );
        setKey(
          Object.keys(response.data).filter(
            (item) => item.custId === props.myId && item.custRead === "no"
          )
        );
        setLoading(false);
      }
    });
  }, [loading]);

  function handleClickOpen(params, index) {
    const apiUrlg = `https://vvisit-d6347-default-rtdb.firebaseio.com/reservations/${params.resId}/custRead.json`;

    axios.put(apiUrlg, JSON.stringify("yes")).then((response) => {
      if (response.status === 200) {
        setLoading(true);
      }
    });
  }

  const nameListComponent = () => {
    return nofications.map((noti, index) => {
      if (noti.type === "cancellation") {
        return (
          <ListItem button>
            <Typography className={classes.typography}>
              <small>
                {noti.serName} reserved for {noti.bookedDate} cancelled
                sucessfully
                <br />
                <small>in {noti.createdDate}</small>
              </small>
            </Typography>
            <Divider />
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => {
                handleClickOpen(noti, index);
              }}
            >
              Mark as Read
            </Button>
          </ListItem>
          //    <Divider />
        );
      } else {
        return (
          <ListItem button>
            <Typography className={classes.typography}>
              <small>
                {noti.serName} reserved for {noti.bookedDate} sucessfully
                <br />
                <small>created in {noti.createdDate}</small>
              </small>
            </Typography>
            <Divider />
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => {
                handleClickOpen(noti, index);
              }}
            >
              Mark as Read
            </Button>
          </ListItem>
          //    <Divider />
        );
      }
    });
  };

  return (
    <div>
      {/* <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}> */}
      <Badge badgeContent={count} color="secondary">
        <NotificationsIcon onClick={handleClick} />
      </Badge>
      {/* </Button> */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <List
          component="nav"
          className={classes.root}
          aria-label="mailbox folders"
        >
          {nameListComponent()}
        </List>
      </Popover>
    </div>
  );
}
