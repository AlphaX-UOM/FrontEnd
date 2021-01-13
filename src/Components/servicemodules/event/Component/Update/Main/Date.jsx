import React, { useState } from "react";
import { Link } from "react-router-dom";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import PageviewIcon from "@material-ui/icons/Pageview";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import { Collapse } from 'react-bootstrap';

function Date() {

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
      key: "selection",
    },
  ]);

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
            onChange={(item) => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
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
              onClick={() => setOpen(!open)}
            >
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Date;
