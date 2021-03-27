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

  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

  return (
    <Link
        onClick={props.clicked} to={`/guide/${props.userid}`}
      style={{ padding: "10px" }}
    >
      <Card style={{ width: "20rem"  ,height: "30rem" }} className="backcolor tcolr-guide">
        <Card.Img variant="top" src={props.avatar} style={{width: "100px",height: "100px",borderRadius:"10px",marginTop: "5px",marginLeft: "80px"}}/>
        <Card.Body>
          <Card.Title className="font-color">{props.name}</Card.Title>
          <hr />

          <Card.Text className="font-color">Language: {props.lang}</Card.Text>
          <Card.Text className="font-color">Cost Per Day: {props.cost}</Card.Text>
          <Card.Text className="font-color">Age: {getAge(props.dob)}</Card.Text>
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
