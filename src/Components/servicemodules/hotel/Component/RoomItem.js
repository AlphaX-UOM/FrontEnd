import React from 'react';
import ResultList from '../Result/HotelResultItem';
import {Link} from 'react-router-dom';


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './RoomItem.css';
import image1 from '../../../../images/hotel-img/deluxe-room.jpg';
import ReviewIcon from '@material-ui/icons/FavoriteBorder';
import { CheckOutlined, FormatAlignCenter, PinDropSharp } from '@material-ui/icons';
import Result from '../Result/HotelResult';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import PeopleOutlineOutlinedIcon from '@material-ui/icons/PeopleOutlineOutlined';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';


const RoomItem = (props) => {

    let data = {
        id: props.id,
    }

    return (
        <div>
            <Card className="roomitem-c1" 
            style={{  
                alignItems: 'center', 
                flex: "2", 
                marginRight:"20px",
                marginLeft:"20px", 
                width:"650px", 
                marginTop:"40px", 
                minHeight:"450px",
                borderStyle: "groove",
                
            }}
            >
                <CardContent style={{minHeight:"130px"}}>
                <Grid container justify="flex-end">
                                    <Grid item>                                        
                                    <Typography variant="subtitle1" className="roomitem_stars" ><StarRoundedIcon color="secondary"/>{props.stars}<span> stars</span></Typography>
                                    </Grid>
                                </Grid>
                    <Typography gutterBottom variant="h5" component="h2" style={{color:"#3a7c61"}}>
                        {props.name} - {props.roomType}
                                </Typography>
                </CardContent>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="170"
                        image={props.roomImgURL01}
                        title="Contemplative Reptile"
                    />
                    <CardContent style={{backgroundColor:"#ACDFCA"}}>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <p><PeopleOutlineOutlinedIcon/><span className="text-body">     Number of Guests:     </span>{props.capacity}</p>
                            <Grid container spacing={3}>
                                <Grid item xs={6}>
                                    {/* <p><span className="text-body"><ReviewIcon />Reviews</span> </p> */}
                                </Grid>
                                <Grid item xs={6}>
                                    <p><AttachMoneyOutlinedIcon/><span className="text-body">     Price per day:     </span>{props.pricePerDay}</p>
                                </Grid>
                            </Grid>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions style={{backgroundColor:"#ACDFCA"}}>
                    <Link to={{pathname: "./roomResult", data:data}}>
                    <Button size="small" color="primary" >
                            View More Details
                        </Button>
                    </Link>
                </CardActions>
            </Card>
            
        </div>
    );
}

export default RoomItem