

import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { Alert } from '@material-ui/lab';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { saveCart } from '../../../../store/lib/actions'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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


const upgradeID = uuidv4();



const Upgrade = (props) => {
  const [state, setstate] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phonenumber: "",
    address: "",
    password: "",
    password2: "",
    passChangeSuccess:false,
    errors: {
      firstName: "",
      lastName: "",
      email: "",
      phonenumber: "",
      address: "",
      password: "",
      password2: "",
      id:"",
      bank:"",
      account:"",
      username:"",
    },
    isvalid: false

  });
  
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

 


  const handleClose = () => {
    setOpen(false);
  };




  const handleSubmit = e => {
  
    e.preventDefault();
    errors.lastName == "" && errors.firstName == "" && errors.password2 == "" && errors.phonenumber == "" && errors.address == "" && errors.email == "" && errors.password == "" ? state.isvalid = true : state.isvalid = false;
    console.log(state.isvalid);
    if (state.isvalid == true) {
      const apiUrlg = `https://vvisit-d6347-default-rtdb.firebaseio.com/upgrade/${upgradeID}.json`;
      let fireUpgrade = {
        userId: props.userCred.id,
        userName: props.userCred.firstName + " " + props.userCred.lastName,
        nationalID: state.id,
        paypalMail: state.email,
        bankName: state.bank,
        bankAccount: state.account,
        bankAccountName: state.username,
        upgradeID: upgradeID,
        requestDate: new Date(),
        id: props.userCred.id,
        firstName: props.userCred.firstName,
        lastName: props.userCred.lastName,
        password: props.userCred.password,
        dob: props.userCred.dob,
        address: props.userCred.address,
        email: props.userCred.email,
        contact: props.userCred.contact,
        role: props.userCred.role,
      };
      axios.put(apiUrlg, fireUpgrade).then((response) => {
        if (response.status === 200) {
          console.log("Data Saved");
         
        }
        
      
      });
      setOpen(true);


 
 


    }

  }




  const formValChange = (event) => {
    event.preventDefault();
    const validEmailRegex = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    const validIdRegex = RegExp(
      /^[1-9]{9}?|[V]$/
    );
    const validAccountRegex = RegExp(
      /^[0-9]{10}|[0-9]{12}$/
    );
    const validPnumRegex = RegExp(
      /^[0-9\b]+$/
    );
    const { name, value } = event.target;
    let errors = { ...state.errors };
    switch (name) {
      case "firstName":
        if (value.length < 3) {
          errors.firstName = "First Name must be 3 characters long!";
        } else {
          errors.firstName = "";
          setstate({
            ...state,
            firstName: value,
          });
        }
        break;
      case "lastName":
        if (value.length < 3) {
          errors.lastName = "Last Name must be 3 characters long!";
        } else {
          errors.lastName = "";
          setstate({
            ...state,
            lastName: value,
          });
        }
        break;
      case "email":
        if (!validEmailRegex.test(value)) {
          errors.email = "Email is not valid!";
        } else {
          errors.email = "";
          setstate({
            ...state,
            email: value,
          });
        }
        
        break;
        case "account":
          if (!validAccountRegex.test(value)) {
            errors.account = "Account Number is not valid!";
          } else {
            errors.account = "";
            setstate({
              ...state,
              account: value,
            });
          }
          
          break;

        case "id":
        if (!validIdRegex.test(value)) {
          errors.id = "National ID is not valid!";
        } else {
          errors.id = "";
          setstate({
            ...state,
            id: value,
          });
        }
        break;

      case "phonenumber":
        if (!validPnumRegex.test(value)) {
          errors.phonenumber = "Phonenumber is not valid!";
        } else {
          errors.phonenumber = "";
          setstate({
            ...state,
            phonenumber: value,
          });
        }
        break;

        case "bank":
        
            errors.bank = "";
            setstate({
              ...state,
              address: value,
            });
          
          break;

          case "username":
        
            errors.username = "";
            setstate({
              ...state,
              username: value,
            });
          
          break;
  
  
  
        
      default:
        break;
        
    }

    setstate({
      ...state,
      errors,
      [name]: value,
    });
  };
  const { errors } = state;


  return (
    <div>
    <center>
        <div className="form-v5-content">
          <form className="form-detail" onSubmit={handleSubmit}style= {{backgroundColor: '#34384E',color:'white'}}>
            <h2>Upgrade</h2>


            <div className="form-row row">

                <label htmlFor="your-email"> Paypal Mail</label>
                <input type="text" name="email" id="your-email" className="input-text"
                  placeholder="Your Email" onChange={formValChange} required />
                <div className="text-danger">{state.errors.email}</div>
              </div>

              <div className="form-row row">
                <label htmlFor="your-phonenumber">Telephone Number</label>
                <input type="number" name="phonenumber" id="your-phonenumber" className="input-text"
                  placeholder="Your Phone Number" onChange={formValChange} required />
                <div className="text-danger">{state.errors.phonenumber}</div>
              </div>
              <div className="form-row row">
                <label htmlFor="national-id"> National ID</label>
                <input type="text" name="id" id="your-id" className="input-text"
                  placeholder="National ID" onChange={formValChange} required />
                <div className="text-danger">{state.errors.id}</div>
              </div>
              <div className="form-row row">
                <label htmlFor="national-id"> Bank Name</label>
                <input type="text" name="bank" id="your-bank" className="input-text"
                  placeholder="Bank Name" onChange={formValChange} required />
                <div className="text-danger">{state.errors.bank}</div>
              </div>
              <div className="form-row row">
                <label htmlFor="national-id"> Account Number</label>
                <input type="text" name="account" id="account" className="input-text"
                  placeholder="Account Number" onChange={formValChange} required />
                <div className="text-danger">{state.errors.account}</div>
              </div>
              <div className="form-row row">
                <label htmlFor="national-id"> Bank User Name</label>
                <input type="text" name="username" id="username" className="input-text"
                  placeholder=" Bank User Name" onChange={formValChange} required />
                <div className="text-danger">{state.errors.username}</div>
              </div>

         

  

  

            <div className="form-row">


            </div>


            <div className="form-row-last">
              <input type="submit" name="Submit" className="Submit" value="Submit" />
            </div>
          </form>
        </div>
        </center>

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
                   <h4 id="transition-modal-title">Your request has been successfully submitted! </h4>
                  
                 </div>
               </Fade>
             </Modal>
      </div>
              
  
  )


}

const mapStateToProps = (state) => {
  return {
    userCred: state.eventpnl.userCred,
  };
};

export default connect(mapStateToProps)(Upgrade);
