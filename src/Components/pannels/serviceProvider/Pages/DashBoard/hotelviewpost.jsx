import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import Container from './HotelEdit/container';

const HotelViewPost = (props) => {

    console.log(props.location.data);
   
    const [addList, setAddList] = useState([]);

    const triggerText = 'Edit Details';
    const onSubmit = (event) => {
        event.preventDefault(event);
        console.log(event.target.name.value);
        console.log(event.target.email.value);

    };

    useEffect(() => {
        fetch(
            `https://alphax-api.azurewebsites.net/api/hotelsservices`
        )

            .then((response) => {
                return response.json();
            })
            .then((responseData) => {

                responseData = responseData.filter(add => add.name === props.location.data);

                setAddList(responseData);
            });
    }, []);


    return (

        <div className="container">

            <div className="row" style={{ flexGrow: "1", padding:"10px"}}>

<Grid containner container
  direction="row"
  justify="flex-start"
  alignItems="flex-start"
  spacing={2}
  >

                    {addList.map((add, index) => (


    
                        <Grid item xs={6}>

                            <Paper style={{backgroundColor:"#dbe1de"}}>

                            <TableRow>
                                    <TableCell>
                                    <h4 style={{textAlign:"center"}}>Post {index+1}</h4>
                                    </TableCell>
                                    <TableCell align="left">
                                    <Container triggerText={triggerText} onSubmit={onSubmit} data={add.id}/>   
                                    </TableCell>
                                </TableRow> 

                            
           
                            
                                    <hr/>
                                <TableRow>
                                    <TableCell>
                                        Room Type
                                    </TableCell>
                                    <TableCell>
                                        {add.roomType}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        Number of Rooms
                                    </TableCell>
                                    <TableCell>
                                        {add.numOfRooms}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        Price Per Day
                                    </TableCell>
                                    <TableCell>
                                        {add.pricePerDay}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        Number of guest can stay
                                    </TableCell>
                                    <TableCell>
                                        {add.capacity}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        Bed Type
                                    </TableCell>
                                    <TableCell>
                                        {add.bedType}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        Amenities
                                    </TableCell>
                                    <TableCell>
                                        {add.amenities}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                    Room Type Image 01
                                    </TableCell>
                                    <TableCell>
                                    <img
                                                className="d-block w-100"
                                                src={add.roomImgURL01}
                                            />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                    Room Type Image 02
                                    </TableCell>
                                    <TableCell>
                                    <img
                                                className="d-block w-100"
                                                src={add.roomImgURL02}
                                            />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                    Room Type Image 03
                                    </TableCell>
                                    <TableCell>
                                    <img
                                                className="d-block w-100"
                                                src={add.roomImgURL03}
                                            />
                                    </TableCell>
                                </TableRow>

                                <br/>
                             
                                    
                                

                                    
                            </Paper>

                            <br />


                        </Grid>
                        
                       

                    ))}
                     </Grid>
                </div>
              
                
        </div>
    );
}

export default HotelViewPost;


