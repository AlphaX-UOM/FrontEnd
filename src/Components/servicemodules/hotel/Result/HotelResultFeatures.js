import React from 'react';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

const HotelResultFeatures = (props) => {

    console.log(props.features);

    const array = props.features.split(",");

    console.log(array);

    const featureItems = array.map((feature) =>
            <ListItem>
                <ListItemAvatar>
                    <StarBorderRoundedIcon />
                </ListItemAvatar>
                <ListItemText>
                    {feature}
                </ListItemText>
            </ListItem>
    );

    return (
        <div>
            <List>
                {featureItems}
            </List>
        </div>
    );
}

export default HotelResultFeatures;