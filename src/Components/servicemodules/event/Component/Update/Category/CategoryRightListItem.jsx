import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { Link } from "react-router-dom";
import EventIcon from '@material-ui/icons/Event';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 500,

  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  playIcon: {
    height: 18,
    width: 38,
  },
}));

function CategoryRightListItem(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(4);

  console.log("name->" + props.name);
  var today = new Date(props.item.date);
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  return (
    <div>
      <ul>
        <Link onClick={props.clicked} to={`/categorylanding/${props.item.id}`}>
          <Card className={classes.root}>
            {/* <CardMedia
            className={classes.cover}
            // image="https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/c1/7c/ed/adult-humpback-whale.jpg"
            image={props.item.imgURL}
            width="100px"
            title="Live from space album cover"
           
          /> */}
            <img src={props.item.imgURL} alt="Example2" width="250" height="250"></img>

            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h6" variant="h6">
                  {props.name}

                </Typography>
                <small>
                <Typography variant="subtitle1" color="textSecondary">
                  {props.item.otherDetails}
                </Typography>
                </small>
               
                {/* <Typography variant="subtitle1" color="textSecondary">
                  <Button variant="contained" color="primary" >
                   <EventIcon/> {date}
                  </Button>

                </Typography> */}
              </CardContent>
              <div className={classes.controls}>
                {/* <Button variant="contained" disabled> */}

                <span class="badge bg-warning text-dark">  <AttachMoneyIcon />{props.item.price}</span>




                {/* </Button> */}
              </div>
              <Box component="fieldset" mb={3} borderColor="transparent">
      
      <Rating name="read-only" value={value} readOnly />
    </Box>
            </div>

          </Card>
        </Link>
      </ul>
    </div>
  );
}

export default CategoryRightListItem;

