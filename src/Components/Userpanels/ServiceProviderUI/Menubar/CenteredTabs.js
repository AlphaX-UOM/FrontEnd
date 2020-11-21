import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

export default function CenteredTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Link to={'/serviceprovider/myaccountsp/adtransport'} className="ct ">
                    <Tab label="Transport" />
                </Link>
                <Link to={'/serviceprovider/myaccountsp/adguide'} className="ct">
                <Tab label="Guide" />
                </Link>
                <Link to={'/serviceprovider/myaccountsp/adevent'} className="ct">
                <Tab label="Event" />
                </Link>
                    <Link to={'/serviceprovider/myaccountsp/adhotel'} className="ct">
                <Tab label="Hotel" />
                    </Link>
            </Tabs>
        </Paper>
    );
}
