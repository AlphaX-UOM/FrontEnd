import React from 'react';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

const RoomResultFeatures = (props) => {



    console.log(typeof (props.roomfeatures));



    const array1 = typeof props.roomfeatures === "string" ? props.roomfeatures.split(',') : ""

    console.log(typeof (array1));

    const items = Object.entries(array1).map(([key, value]) => {
        return (
            <ListItem>
                <ListItemAvatar>
                    <StarBorderRoundedIcon />
                </ListItemAvatar>
                <ListItemText>
                    {value}
                </ListItemText>
            </ListItem>
        );

    });
  

    return (
        <div>
            <List>
                {items}
            </List>
        </div>
    );
}

export default RoomResultFeatures;