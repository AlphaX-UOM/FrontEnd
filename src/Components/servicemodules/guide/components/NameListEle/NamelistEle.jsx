import React from "react";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NamelistEle.css";
import Ratings from "../../../transport/rating-mod/ratings";
function click() {
  return alert("request sent");
}

function NameListEle(props) {
  let formdata = {
    userId: props.userid,
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      "& > * + *": {
        marginTop: theme.spacing(1),
      },
    },
  }));
  const classes = useStyles();

  return (
    <Link
        onClick={props.clicked} to={`/guide/${props.userid}`}
      style={{ padding: "10px" }}
    >
      <Card style={{ width: "17rem" }} className="backcolor tcolr-guide">
        <Card.Img variant="top" src={props.avatar} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <hr />

          <Card.Text>Language: {props.lang}</Card.Text>
          <Card.Text>Cost Per Day: {props.cost}</Card.Text>
          <Card.Text>Age: {props.dob}</Card.Text>
          <Card.Text>
            {" "}
            <Ratings />
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default NameListEle;
