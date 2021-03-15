import React, { useState } from "react";
import { Link } from "react-router-dom";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import PageviewIcon from "@material-ui/icons/Pageview";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import { Collapse } from "react-bootstrap";
import { connect } from "react-redux";
import moment from "moment";

function Date(props) {
  const [open, setOpen] = useState(false);

  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();
  const [state, setState] = useState([
    {
      startDate: null,
      endDate: null,
      key: 'selection',
    }
  ]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleSelect =(ranges) =>{
    console.log("ranges->"+ranges.selection);
    // if(startDate==null){
    //   setStartDate(ranges.selection.startDate);
    // }
    // if(endDate==null){
    //   setEndDate(ranges.selection.endDate);
    // }
    console.log("startDate->"+startDate);
    console.log("endDate->"+endDate);
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  }

    var checkin = moment(state.startDate).format("DD-MM-YYYY");
    var checkout = moment(state.endDate).format("DD-MM-YYYY");

    let eventDate = {
      checkin: checkin,
      checkout: checkout,
    };

    const selectionRange = {
      startDate: null,
      endDate: null,
      key: 'selection',
    }

  const handleDateInput = () => {
    console.log("This was clicked auto");
    setOpen(!open);
    console.log("checkin RAW -> " + state.startDate);
    console.log("checkout RAW-> " + state.endDate);
    console.log("checkin -> " + checkin);
    console.log("checkout -> " + checkout); 
    props.addEventDate(eventDate);
  };

  return (
    <div>
      <div className="container" style={{ alignContent: "center" }}>
        <div className="row">
          <div class="col-sm">
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              When you are Travelling?
            </Button>
            <div>
              <Collapse in={open}>
                <div id="example-collapse-text">
                  <DateRange
                    editableDateInputs={true}
                    moveRangeOnFirstSelection={true}
                    ranges={[selectionRange]}
        onChange={handleSelect}
                  />
                </div>
              </Collapse>
            </div>
          </div>

          <div class="col-sm">
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<PageviewIcon />}
              onClick={handleDateInput}
            >
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    eventDate: state.eventpnl.eventDate,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addEventDate: (eventDate) => {
      dispatch({ type: "ADD_EVENT_DATE", eventDate: eventDate });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Date);
