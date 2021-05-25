import React from 'react';
import LanguageIcon from '@material-ui/icons/Language';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

const HotelResultLanguages = (props) => {

    console.log(props.languages);

    const languagearray = props.languages.split(",");

    console.log(typeof(languagearray));

    const languageItems = languagearray.map((language) =>
            <ListItem>
                <ListItemAvatar>
                    <LanguageIcon />
                </ListItemAvatar>
                <ListItemText>
                    {language}
                </ListItemText>
            </ListItem>
    );

    return (
        <div>
            <List>
                {languageItems}
            </List>
        </div>
    );
}

export default HotelResultLanguages;