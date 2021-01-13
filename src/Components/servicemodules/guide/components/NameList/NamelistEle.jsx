import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import { Card,Button } from 'react-bootstrap';

function click(){
    return(
        alert('request sent')
    );
}


function NameListEle(props){
    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          flexDirection: 'column',
          '& > * + *': {
            marginTop: theme.spacing(1),
          },
        },
      }));
      const classes = useStyles();

    return(
        
        
                <div style={{padding:'10px'}}>
                 <Card style={{ width: '15rem' }}>
                 <Card.Img variant="top" src={props.avatar} />
                 <Card.Body>
                 <Card.Title>{props.name}</Card.Title>
                 <Card.Text>City: {props.city}  </Card.Text>
                 <Card.Text>Language: {props.lang}</Card.Text>
                 <Card.Text>Cost Per Day: {props.cost}</Card.Text>
                 <Card.Text>Rating:<Rating name="size-small" defaultValue={props.Rating} precision={0.5} readOnly /></Card.Text>
                
                 
                 
                 <Button variant="primary" onClick={click}>Select</Button>
                 </Card.Body>
                 </Card>
                
                </div>
           

            
           
          
        
           

    );

}

export default NameListEle;