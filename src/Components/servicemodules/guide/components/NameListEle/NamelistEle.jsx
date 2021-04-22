import React from "react";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Newcard.css";
import Ratings from "../../../transport/rating-mod/ratings";
function click() {
  return alert("request sent");
}

function NameListEle(props) {
  const { dob, name, lang,  cost,avatar  } = props;
  const overlapGroup1="https://github.com/Ttecs/mobilenotico/blob/master/Rectangle%205.png?raw=true"
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
   <div>
      {/* <Card style={{ width: "22rem"  ,height: "30rem",borderColor: "1px solid",backgroundColor:"white",borderWidth: "1px"}} className="backcolor tcolr-guide">
        <Card.Img variant="top" src={props.avatar} style={{width: "150px",height: "150px",borderRadius:"10px",marginTop: "5px",marginLeft: "65px"}}/>
        <Card.Body>
          <Card.Title className="font-color">{name}</Card.Title>
          <hr />

          <Card.Text className="font-color">Language: {props.lang}</Card.Text>
        
          <Card.Text className="font-color">Age: {getAge(props.dob)}</Card.Text>
            <div style={{flexDirection:"row",marginLeft: "50px"}}>
          <Card.Text className="font-color"  style={{color: "#69C6BA",fontWeight:"bold"}}>  {props.cost}</Card.Text>
         
          </div>
          <br/>
          <Card.Text>
            {" "}
            <Ratings />
          </Card.Text>
        </Card.Body>
      </Card> */}
      <form className="frame-2" >
        <div className="overlap-group">
          <div className="rectangle-1"></div>
          <div className="rectangle-2"></div>
          <div className="age31 roboto-bold-black-13px">Age:{getAge(dob)}</div>
          <div className="tharaka-sandakelum roboto-bold-black-18px">{name}</div>
          <div className="rectangle-3"></div>
          <div className="korean roboto-bold-black-18px">{lang}</div>
          <img variant="top" src={avatar}  className="rectangle-4"/>
          <div className="frame-1">
            <div className="overlap-group1" style={{ backgroundImage: `url(${overlapGroup1})` }}>
              <div className="price roboto-bold-black-14px">{cost}</div>
            </div>
          </div>
          <Link
        onClick={props.clicked} to={`/guide/${props.userid}`}
      style={{ padding: "10px" }}
    >
          <a href="javascript:SubmitForm('form1')">
            <div className="rectangle-6 smart-layers-pointers "></div>
          </a>
      
          <div className="select roboto-bold-white-18px">select</div> </Link>
        </div>
      </form>
      </div>
    
  );
}

export default NameListEle;
