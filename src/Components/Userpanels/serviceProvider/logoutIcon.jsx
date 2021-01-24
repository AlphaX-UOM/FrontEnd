import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";

function LogoutIcon(props) {
  const [open, setOpen] = React.useState(false);
  let empty = {};

  const handleClose = () => {
    setOpen(false);
  };

  let history = useHistory();

  const handleFormData = () => {
    setOpen(true);

  };

  const handleLogout = () => {
    props.addUserData(empty);
    setOpen(false);
  };

  return (
    <div>
      <PowerSettingsNewIcon onClick={handleFormData} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"LOGOUT"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to Logout?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Link to="/">
          <Button onClick={handleLogout} color="primary" autoFocus>
            Yes
          </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userCred: state.userCred,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUserData: (userCred) => {
      dispatch({ type: "ADD_USER", userCred: userCred });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogoutIcon);
