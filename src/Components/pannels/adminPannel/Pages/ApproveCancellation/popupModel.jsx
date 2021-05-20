import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Form from './cancellationForm';
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function PopupModel(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    let adminPopup = false;
    props.adminCancelPop(adminPopup);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            < Form />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    adminPopup: state.eventpnl.adminPopup
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    adminCancelPop: (adminPopup) => {
      dispatch({ type: "Admin_Popup", adminPopup: adminPopup });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PopupModel);