import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Box from "@material-ui/core/Box";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { withStyles } from "@material-ui/core/styles";
import Rating, { IconContainerProps } from "@material-ui/lab/Rating";
import Typography from '@material-ui/core/Typography';
import { CardColumns } from 'reactstrap';
import { Height } from "@material-ui/icons";
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Badge from "react-bootstrap/Badge";
import EventIcon from '@material-ui/icons/Event';

const EventItem  = ({ posts, loading }) =>  {
  const [value, setValue] = React.useState(4);

  const StyledRating = withStyles({
    iconFilled: {
      color: '#ff6d75',
    },
    iconHover: {
      color: '#ff3d47',
    },
  })(Rating);


  // const ratingChangeHandler = () => {
  //   console.log(props);
  // }
  
  
  return (
      //
   
    <div>
      <center>
  
      <h4 class="text-uppercase"  style={{ color:"black" }}>Explore SRI LANKA</h4>
      </center>
      <Grid container spacing={2} style={{padding: 24}}>
     
        {posts.map(post => (
             
            <Grid item xs={12} sm={6} lg={4} xl={3} minHeight="60px">
               <Link onClick={post.clicked} to={`/categorylanding/${post.id}`}  style={{ color: 'black' }}>

<Box borderRadius="30px" >
  <Card style={{border: '3px solid black',borderRadius: '5px!important' , height:"550px"}}>
<CardMedia style={{height: 0, paddingTop: '56.25%'}}
    // image={"https://www.touropia.com/gfx/d/best-places-to-visit-in-sri-lanka/yala_national_park.jpg?v=1"}
    image={post.imgURL}
  
    />
<CardContent style={{height:"60hv"}}>
    <Typography gutterBottom variant="headline" component="h4">
  
        {post.name}
    </Typography>
    <Typography component="p">
    {post.otherDetails}
    {/* <center>
    <div class="badge bg-warning text-dark"> </div>
    </center>
  */}
    {/* <Box component="fieldset" mb={3} borderColor="transparent">
      
        <Rating name="read-only" value={value} readOnly />
      </Box> */}
      <div>
<br>
</br>
      <Badge pill variant="warning">
   <AttachMoneyIcon />{post.price} Per Adult
  </Badge>

      </div>
  

 

    </Typography>
</CardContent>
<CardActions>
    <Button size="small" color="primary"  target="_blank">
        Go To Event
    </Button> 
</CardActions>

</Card>
</Box>
</Link>
</Grid>

    //       <div className="col-12">
           
    //        <div class="container-fluid py-2" >
         
    //          <Link onClick={post.clicked} to={`/categorylanding/${post.id}`} >
     
    //           <div className="col-12">
    // <CardColumns fluid="md">
    //      <div class="container-fluid py-2" >
    //   <Card className="shadow-lg" style={{ width: "10rem" , Height: "20rem"}}>
    //     <Card.Img
    //       variant="top"
    //      src="https://www.touropia.com/gfx/d/best-places-to-visit-in-sri-lanka/yala_national_park.jpg?v=1"
    //     />
    //     <Card.Body>
    //       <Card.Title>{post.name}</Card.Title>
    //       <Card.Text>
    //         <Box component="fieldset" mb={3} borderColor="transparent">
    //           <StyledRating
    //             name="customized-color"
    //             value={4} readOnly
    //             icon={<FavoriteIcon fontSize="inherit" />}
    //           />
    //           {/* <Typography><small>(100 reviews)</small></Typography> */}
    //         </Box>
    //       </Card.Text>
    //       <Card.Text>{post.price}$</Card.Text>
    //     </Card.Body>
    //   </Card>
    //   <div><p></p></div>
    //   </div>
    //   </CardColumns>
    //   </div>
     
  
    
    //   </Link>
    //   </div>
      
    //   </div>
      
        ))}
        </Grid>
        
    </div>
   
  );
}

export default EventItem;
