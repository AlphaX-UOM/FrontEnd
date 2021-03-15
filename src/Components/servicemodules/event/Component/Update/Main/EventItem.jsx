import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Box from "@material-ui/core/Box";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { withStyles } from "@material-ui/core/styles";
import Rating, { IconContainerProps } from "@material-ui/lab/Rating";
import Typography from '@material-ui/core/Typography';

function EventItem(props) {
  const StyledRating = withStyles({
    iconFilled: {
      color: '#ff6d75',
    },
    iconHover: {
      color: '#ff3d47',
    },
  })(Rating);


  const ratingChangeHandler = () => {
    console.log(props);
  }
  return (
      //
   
    <div>
              <Link onClick={props.clicked} to={`/categorylanding/${props.item.id}`} >
      <div className="row">
      <div className="col-12">
      <div class="card-deck">
      <Card className="shadow-lg" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={props.img}
        />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            <Box component="fieldset" mb={3} borderColor="transparent">
              <StyledRating
                name="customized-color"
                value={4} readOnly
                icon={<FavoriteIcon fontSize="inherit" />}
              />
              <Typography><small>(100 reviews)</small></Typography>
            </Box>
          </Card.Text>
          <Card.Text>{props.price}$</Card.Text>
        </Card.Body>
      </Card>
      <div><p></p></div>
      </div>
      </div>
      </div>
      </Link>
    </div>
   
  );
}

export default EventItem;
