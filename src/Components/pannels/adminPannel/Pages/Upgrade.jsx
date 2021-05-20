import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Modal from "react-bootstrap/Modal";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Upgrade() {
  const classes = useStyles();
  const[load,setLoad] = useState(false);
  const [upgradeRequest, setUpgradeRequest] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const apiUrl =
      "https://vvisit-d6347-default-rtdb.firebaseio.com/upgrade.json";

    axios.get(apiUrl).then((response) => {
      if (response.data) {
        setUpgradeRequest(Object.values(response.data));
      }
    });
  }, [load]);

  const handleApprove = (params) => {

    var axios = require("axios");

    var data = JSON.stringify({
      id: params.id,
      firstName: params.firstName,
      lastName: params.lastName,
      password: params.password,
      passwordHash:params.passwordHash,
      passwordSalt:params.passwordSalt,
      verified:params.verified,
      dob: params.dob,
      address: params.address,
      email: params.email,
      contact: params.contact,
      bankName:params.bankName,
      accountNo:params.bankAccount,
      nic:params.nationalID,
      role: "ServiceProvider",
      imgURL:params.imgURL,
    });

    var config = {
      method: "put",
      url: `https://alphax-api.azurewebsites.net/api/users/${params.id}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));

        var axios = require('axios');

var config = {
  method: 'delete',
  url: `https://vvisit-d6347-default-rtdb.firebaseio.com/upgrade/${params.upgradeID}.json`,
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});


      })
      .catch(function (error) {
        console.log(error);
      });
  
    setLoad(true);
    handleShow();
  };

  return (
    <div>

<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>User Name</StyledTableCell>
            <StyledTableCell align="right">National ID</StyledTableCell>
            <StyledTableCell align="right">Paypal Email</StyledTableCell>
            <StyledTableCell align="right">Bank Name</StyledTableCell>
            <StyledTableCell align="right">Bank Account</StyledTableCell>
            <StyledTableCell align="right">Bank Account Name</StyledTableCell>
            <StyledTableCell align="right">Requested Date</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {upgradeRequest.map((row) => (
            <StyledTableRow key={row.userId}>
              <StyledTableCell component="th" scope="row">
                {row.userName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.nationalID}</StyledTableCell>
              <StyledTableCell align="right">{row.paypalMail}</StyledTableCell>
              <StyledTableCell align="right">{row.bankName}</StyledTableCell>
              <StyledTableCell align="right">{row.bankAccount}</StyledTableCell>
              <StyledTableCell align="right">
                {row.bankAccountName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.requestDate}</StyledTableCell>
              <StyledTableCell align="right">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    handleApprove(row);
                  }}
                >
                  APPROVE
                  
                </Button>

                <div>
        <Modal show={show} onHide={handleClose}>
     
        <Modal.Body>Upgraded Successfully </Modal.Body>
        <Modal.Footer>
        <button className="btn btn-danger " type='submit'onClick={handleClose}>Close</button>
        
         
        </Modal.Footer>
      </Modal>

 </div>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
 
  );
}