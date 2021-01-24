import React, {useState} from 'react';
import { connect } from "react-redux";
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


function RefundDetails(props) {

  let serviceName = props.adminRefundData.reservationName;
  let customer = props.adminRefundData.customerID;
  let paymentAmount = props.adminRefundData.payment;
  let cancelDate = props.adminRefundData.canDate;
  let ok = props.adminRefundData.okey;
  let poli = props.adminRefundData.policy;
  let paymentUn = props.adminRefundData.paymentID;
  let cancellation = props.adminRefundData.cancellation;


  const [amount,setAmount] = useState(null);
  const [ note, setNote] = useState(null);


  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  const handleTextChange = (event) => {
    setNote(event.target.value);

  };

  const handleSaveChange = () => {

    let cancelData = {
      reservationName : serviceName,
      customerID : customer,
      payment : paymentAmount,
      canDate : cancelDate,
      okey : ok,
      policy :poli,
      paymentID : paymentUn,
      refund : amount,
      note : note,
      cancellation : cancellation
    }

    props.adminCancelData(cancelData);

  };

  return (
    <div>
      <Container maxWidth="sm">
      <TextField
          id="outlined-number"
          label="Refund Amount"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={handleChange}
        />
        <br/>
        <br/>
        <br/>
        <TextField fullWidth
          id="outlined-multiline-static"
          label="Note to the Customer"
          multiline
          rows={4}
          variant="outlined"
          onChange={handleTextChange}
        />
        <br/>
        <br/>
        <br/>
        <Button variant="contained" color="secondary" onClick={handleSaveChange}>
        SAVE
      </Button>
      <br/>
      </Container>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    adminPopup: state.adminPopup,
    adminRefundData: state.adminRefundData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    adminCancelData: (cancelData) => {
      dispatch({ type: "Admin_Refund_Data", adminRefundData: cancelData });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RefundDetails);