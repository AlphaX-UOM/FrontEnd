import React from 'react';
import LanguageIcon from '@material-ui/icons/Language';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

const RoomResultLanguages = (props) => {

    console.log(props.languages);

    const languagearray = typeof props.languages === "string" ? props.languages.split(',') : ""

    console.log(typeof(languagearray));

    const languageItems = Object.entries(languagearray).map(([key, value]) => {
        return (
            <ListItem>
                <ListItemAvatar>
                    <LanguageIcon/>
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
                {languageItems}
            </List>
        </div>
    );
}

export default RoomResultLanguages;