import React, { useState, useEffect } from 'react';
import { InputLabel } from '@material-ui/core/';
import { Card } from "react-bootstrap";
import Box from "@material-ui/core/Box";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Typography from '@material-ui/core/Typography';
import Rating, { IconContainerProps } from "@material-ui/lab/Rating";
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid'
import { Link } from "react-router-dom";
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import { AllInclusiveRounded } from '@material-ui/icons';




function Events(props) {
  const [eventList, setEventList] = useState([]);

  let userId = props.myId;
  useEffect(() => {
      fetch(
          `https://alphax-api.azurewebsites.net/api/hotelsservices` //`https://alphax-api.azurewebsites.net/api/eventplannerservicereservations/${userId}`
      )

          .then((response) => {
              return response.json();
          })
          .then((responseData) => {

              //  setEvent(responseData)
              responseData = responseData.filter(item => item.userID === userId);
              responseData= responseData.filter((ele, ind) => ind === responseData.findIndex(elem => elem.name === ele.name))
             
              setEventList(responseData);



          });
  }, [userId]);


  return (
      <div>
          <Grid container spacing={2} style={{ padding: 24 }}>

              {eventList.map(post => (
             
                  <Grid item xs={12} sm={6} lg={4} xl={3}>
                  


                          <Box borderRadius="30px">
                              <Card style={{ border: '3px solid black', borderRadius: '5px!important',height:"150px" }}>

                                  <CardContent style={{ height: "50hv" }}>
                                      <Typography gutterBottom variant="headline" component="h5">

                                          {post.name}
                                      </Typography>
                                     
                                  </CardContent>
                                  <CardActions>
                             
                                      <Button size="small" color="primary" target="_blank">
                                         View Post
</Button>
                                  </CardActions>

                              </Card>
                          </Box>
                     
                  </Grid>



              ))}
          </Grid>





      </div>
  );
}


export default Events;