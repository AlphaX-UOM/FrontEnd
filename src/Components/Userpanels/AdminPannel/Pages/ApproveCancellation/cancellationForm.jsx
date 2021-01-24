import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import SettingsIcon from "@material-ui/icons/Settings";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import MoneyOffIcon from "@material-ui/icons/MoneyOff";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ReservationDetails from "./reservationDetails";
import RefundDetails from "./refundDetails";
import VerifyRefund from "./verifyRefund";
import axios from "axios";
import {encode as base64_encode} from 'base-64';

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <MoneyOffIcon />,
    3: <VerifiedUserIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Reservation Details", "Refund Details", "Verify Details"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <ReservationDetails />;
    case 1:
      return <RefundDetails />;
    case 2:
      return <VerifyRefund />;
    default:
      return "Unknown step";
  }
}

function CancellationForm(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const [payData, setPayData] = useState([]);
  const [payPalReservedId, setPayPalReservedId] = useState(null);

  let paypalSendId = props.adminRefundData.paymentID;

  useEffect(() => {
    const apiUrl =
      "https://vvisit-d6347-default-rtdb.firebaseio.com/payments.json";

    axios.get(apiUrl).then((response) => {
      if (response.data) {
        setPayData(
          Object.values(response.data).filter(
            (item) => item.payId === paypalSendId
          )[0]
        );
        setPayPalReservedId(
          Object.values(response.data).filter(
            (item) => item.payId === paypalSendId
          )[0].payPalReturn
        );
      }
    });
  }, []);

  const handleNext = () => {
    //send the requests to paypal here
    if (activeStep === steps.length - 1) {
      console.log("send data to server");

      // Note: This is example code. Each server platform and programming language has a different way of handling requests, making HTTP API calls, and serving responses to the browser.

      // 1. Set up your server to make calls to PayPal

      // 1a. Add your client ID and secret
      let PAYPAL_CLIENT =
        "AdIifGlGHm3H9iwtL9CMzrsE987IV4UgbNVbNbAmC2PNeR8KgOLwn96DolOeHwilDGcoimCk_C8DX85b";
      let PAYPAL_SECRET =
        "ECJcCewRzUK2li1SDcNRR9kcqNcWDLy9yHWfpBoXDhy2_w-ksZHPL5xgl1-9PNOYuj4vBHDQGN0g1Tpw";

      // 1b. Point your server to the PayPal API
      let PAYPAL_OAUTH_API =
        "https://api-m.sandbox.paypal.com/v1/oauth2/token/";
      let PAYPAL_PAYMENTS_API =
        "https://api-m.sandbox.paypal.com/v2/payments/captures/";

        var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({
 'grant_type': 'client_credentials' 
});
var config = {
  method: 'post',
  url: 'https://api-m.sandbox.paypal.com/v1/oauth2/token',
  headers: { 
    'Authorization': 'Basic QWRJaWZHbEdIbTNIOWl3dEw5Q016cnNFOTg3SVY0VWdiTlZiTmJBbUMyUE5lUjhLZ09Md245NkRvbE9lSHdpbERHY29pbUNrX0M4RFg4NWI6RUNKY0Nld1J6VUsybGkxU0RjTlJSOWtjcU5jV0RMeTl5SFdmcEJvWERoeTJfdy1rc1pIUEw1eGdsMS05UE5PWXVqNHZCSERRR04wZzFUcHc=', 
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data : data
};

axios(config)
.then(function (response) {
  let token = response.data.access_token;
  console.log("Access token->"+response.data.access_token);


  let  captureID = payPalReservedId;
  let refund = axios.post(PAYPAL_PAYMENTS_API + captureID + '/refund', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      amount: {
        currency_code: 'USD',
        value:         '20.00'
      }
    })
  });
  
  // 4. Handle any errors from the call
  if (refund.error) {
    console.error(refund.error);
  }

})
.catch(function (error) {
  console.log(error);
});

        
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    // setActiveStep(0);
    let adminPopup = false;
    props.adminCancelPop(adminPopup);
  };

  return (
    <div className={classes.root}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              Refund Details sent to Paypal Servers.
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              OK
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? "Update" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    adminPopup: state.adminPopup,
    adminRefundData: state.adminRefundData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    adminCancelPop: (adminPopup) => {
      dispatch({ type: "Admin_Popup", adminPopup: adminPopup });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CancellationForm);
