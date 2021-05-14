import React from 'react';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

const RoomResultFeatures = (props) => {

    console.log(props.features);

    const array1 = props.features.split(",");

    console.log(array1);

    const featureItems1 = array1.map((feature1) =>
            <ListItem>
                <ListItemAvatar>
                    <StarBorderRoundedIcon />
                </ListItemAvatar>
                <ListItemText>
                    {feature1}
                </ListItemText>
            </ListItem>
    );

    return (
        <div>
            <List>
                {featureItems1}
            </List>
        </div>
    );
}

export default RoomResultFeatures;