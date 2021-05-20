import React, {useState} from 'react';
import { connect } from "react-redux";
import * as actions from '../../../../../store/actions/index';
import './RoomFilter.css';

import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormLabel from "@material-ui/core/FormLabel";

function RoomFilter (props){

    const { hotel_filter_pricerange,  hotel_filter_stars } = props;

    const [filter_pricerange, setFilterPriceRange] = useState();
    const [filter_stars, setFilterStars] = useState();

    const handlePriceRange = (event) => {
        setFilterPriceRange(event.target.value);
        props.hotel_filter_pricerange(event.target.value);
    }

    const handleStars = (event) => {
        setFilterStars(event.target.value);
        props.hotel_filter_stars(event.target.value);
    }

    return(
        <div>
        <div className="roomfilter_root">
                <Grid container spacing={3} direction="column" style={{alignItems:"center"}}>
                    <Grid item xs={12} >
                        <Paper className="roomfilter_paper" style={{backgroundColor:' #69c6ba', borderStyle: "outset", width:"350px" }} >
                            <br/>
                            <FormControl component="fieldset">
                            <FormLabel component="legend"><strong>Sort by Price</strong></FormLabel>
                            <RadioGroup aria-label="sort-price" onChange={handlePriceRange} >
                                <FormControlLabel
                                    value="All"
                                    control={<Radio />}
                                    label="All"
                                />
                                <FormControlLabel
                                    value="15000-"
                                    control={<Radio />}
                                    label="Less than or equal to RS.15000"
                                />
                                <FormControlLabel
                                    value="15000+"
                                    control={<Radio />}
                                    label="Greater than Rs.15000"
                                />
                            </RadioGroup>
                        </FormControl>
                            <br/>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} >
                        <Paper className="roomfilter_paper" style={{backgroundColor:' #69c6ba', borderStyle: "outset", width:"250px"}}>
                        <br/>
                            <FormControl component="fieldset">
                                <FormLabel component="legend"><strong>Sort by Star</strong></FormLabel>
                                <RadioGroup aria-label="sort-stars" onChange={handleStars}>
                                    <FormControlLabel
                                        value="All"
                                        control={<Radio />}
                                        label="All"
                                    />
                                    <FormControlLabel
                                        value="1"
                                        control={<Radio />}
                                        label="1 star"
                                    />
                                    <FormControlLabel
                                        value="2"
                                        control={<Radio />}
                                        label="2 stars"
                                    />
                                    <FormControlLabel
                                        value="3"
                                        control={<Radio />}
                                        label="3 stars"
                                    />
                                    <FormControlLabel
                                        value="4"
                                        control={<Radio />}
                                        label="4 stars"
                                    />
                                    <FormControlLabel
                                        value="5"
                                        control={<Radio />}
                                        label="5 stars"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Paper>
                        <br/>
                    </Grid>
                </Grid>
            </div>
    </div>
    );
    
}

const mapStateToProps = (state) => {
    return {
        //

    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        hotel_filter_pricerange: (filter_pricerange) => {
            dispatch(actions.set_hotel_pricerange_filter(filter_pricerange));
        },
        hotel_filter_stars: (filter_stars) => {
            dispatch(actions.set_hotel_stars_filter(filter_stars));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomFilter);


{/* <FormControl component="fieldset">
<FormLabel component="legend">Sort by Price</FormLabel>
<RadioGroup aria-label="sort-price" onChange={handlePriceRange} >
    <FormControlLabel
        value="LowToHigh"
        control={<Radio />}
        label="Low to High"
    />
    <FormControlLabel
        value="HighToLow"
        control={<Radio />}
        label="High to Low"
    />
</RadioGroup>
</FormControl> */}