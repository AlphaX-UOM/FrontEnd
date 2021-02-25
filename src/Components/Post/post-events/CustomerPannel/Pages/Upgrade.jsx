import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
}));

function Upgrade(props) {
  const classes = useStyles();
  const [national, setNational] = useState();
  const [payMail, setPayMail] = useState();
  const [bankName, setBankName] = useState();
  const [bankAccount, setBankAccount] = useState();
  const [bankAccountName, setBankAccountName] = useState();
  const upgradeID = uuidv4();

  const handleNational = (event) => {
    setNational(event.target.value);
  };

  const handlePayMail = (event) => {
    setPayMail(event.target.value);
  };

  const handleBankName = (event) => {
    setBankName(event.target.value);
  };
  const handleBankAccount = (event) => {
    setBankAccount(event.target.value);
  };
  const handleBankAccountName = (event) => {
    setBankAccountName(event.target.value);
  };

  const handleSaveChange = () => {
    const apiUrlg = `https://vvisit-d6347-default-rtdb.firebaseio.com/upgrade/${upgradeID}.json`;
    let fireUpgrade = {
      userId: props.userCred.id,
      userName: props.userCred.firstName + " " + props.userCred.lastName,
      nationalID: national,
      paypalMail: payMail,
      bankName: bankName,
      bankAccount: bankAccount,
      bankAccountName: bankAccountName,
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
  };

  return (
    <div className={classes.root}>
      <TextField
        id="outlined-full-width"
        label="National ID"
        style={{ margin: 8 }}
        placeholder="xxxxxxxxxV"
        
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        onChange={handleNational}
      />
      <TextField
        id="outlined-full-width"
        label="Paypal Mail"
        style={{ margin: 8 }}
        placeholder="xxxxx.@gmail.com"
      
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        onChange={handlePayMail}
      />
      <TextField
        id="outlined-full-width"
        label="Bank Name"
        style={{ margin: 8 }}
        placeholder="xxxxxxxxxx"
        
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        onChange={handleBankName}
      />
      <TextField
        id="outlined-full-width"
        label="Bank Account No."
        style={{ margin: 8 }}
        placeholder="xxxxxxxxxx"
        
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        onChange={handleBankAccount}
      />
      <TextField
        id="outlined-full-width"
        label="Bank Account Name."
        style={{ margin: 8 }}
        placeholder="xxxxxxxxxx"
    
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        onChange={handleBankAccountName}
      />
      <Button variant="contained" color="secondary" onClick={handleSaveChange}>
        Submit
      </Button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userCred: state.eventpnl.userCred,
  };
};

export default connect(mapStateToProps)(Upgrade);