import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import Event from './RevenueReservations/Event';
import Guide from './RevenueReservations/Guide';
import Hotel from './RevenueReservations/Hotel';
import Transport from './RevenueReservations/Transport';
import { connect } from "react-redux";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

function Sreservations(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="on"
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="scrollable force tabs example"
                >
                    <Tab label="Transport Service Reservations" icon={<LocalTaxiIcon />} {...a11yProps(0)} />
                    <Tab label="Tour Guide Service Reservations" icon={<SupervisorAccountIcon />} {...a11yProps(1)} />
                    <Tab label="Event Services Reservations" icon={<BeachAccessIcon />} {...a11yProps(2)} />
                    <Tab label="Hotel Service Reservations" icon={<LocalHotelIcon />} {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Transport id={props.id}/>
        </TabPanel>
            <TabPanel value={value} index={1}>
                <Guide id={props.id}/>
        </TabPanel>
            <TabPanel value={value} index={2}>
                <Event id={props.id}/>
        </TabPanel>
            <TabPanel value={value} index={3}>
                <Hotel id={props.id}/>
        </TabPanel>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        id: state.auth.userId,
    };
};

export default connect(mapStateToProps, null)(Sreservations);