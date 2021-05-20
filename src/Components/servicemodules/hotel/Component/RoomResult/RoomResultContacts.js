import React from 'react';
import CallRoundedIcon from '@material-ui/icons/CallRounded';
import PhoneInTalkRoundedIcon from '@material-ui/icons/PhoneInTalkRounded';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

const HotelResultContacts = (props) => {

    return (
        <div>
            <List>

                <ListItem>
                    <ListItemAvatar>
                        <PhoneInTalkRoundedIcon/>
                    </ListItemAvatar>
                    <ListItemText>
                        {props.contactName}
                        <br/>
                        {props.pnumber}
                    </ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <CallRoundedIcon/>
                    </ListItemAvatar>
                    <ListItemText>
                        {props.altPnumber}
                    </ListItemText>
                </ListItem>

            </List>
        </div>
    );
}

export default HotelResultContacts;