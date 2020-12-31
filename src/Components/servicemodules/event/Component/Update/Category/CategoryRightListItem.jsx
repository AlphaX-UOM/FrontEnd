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
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  }));

function CategoryRightListItem(props) {
  const classes = useStyles();
  const theme = useTheme();

  console.log("name->"+props.name);

  return (
    <div>
        <ul>
      <Link to={{pathname: '/itemlanding',data:props.item}}>
        <Card className={classes.root}>
        <CardMedia
            className={classes.cover}
            image="https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/c1/7c/ed/adult-humpback-whale.jpg"
            title="Live from space album cover"
          />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {props.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {props.item.otherDetails}
              </Typography>
            </CardContent>
            <div className={classes.controls}>
            <Button variant="contained" disabled>
        {props.item.price}
        <AttachMoneyIcon />
      </Button>
            </div>
          </div>
          
        </Card>
        </Link>
      </ul>
    </div>
  );
}

export default CategoryRightListItem;
