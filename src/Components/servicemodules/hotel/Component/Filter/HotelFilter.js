import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import * as actions from '../../../../../store/actions/index';

import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormLabel from "@material-ui/core/FormLabel";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

function Filter(props) {
    const { hotel_filter_district,  hotel_filter_price } = props;

    const [filter_district, setFilterDistrict] = useState();
    const [filter_price, setFilterPrice] = useState();

    const handleDistrict = (event) => {
        setFilterDistrict(event.target.value);
        props.hotel_filter_district(event.target.value);
    }

    const handlePrice = (event) => {
        setFilterPrice(event.target.value);
        props.hotel_filter_price(event.target.value);
    }



    return (
        <div className="select_filter">
            <Grid container spacing={3} direction="column">
                <Grid item xs={12} >
                    <Paper className="paper">
                        <br />
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Sort by Price</FormLabel>
                            <RadioGroup aria-label="sort-price" onChange={handlePrice} >
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
                        <br />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className="paper">
                        <br />
                        <FormControl component="fieldset" className=".hotelfilter_select">
                        <FormLabel component="legend">Sort by District</FormLabel>
                            
                            <Select
                                
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                onChange={handleDistrict}
                            >
                                <MenuItem value="All"><em>All</em></MenuItem>
                                <MenuItem value="Ampara">Ampara</MenuItem>
                                <MenuItem value="Anuradhapura">Anuradhapura</MenuItem>
                                <MenuItem value="Badulla">Badulla</MenuItem>
                                <MenuItem value="Batticaloa">Batticaloa</MenuItem>
                                <MenuItem value="Colombo">Colombo</MenuItem>
                                <MenuItem value="Galle">Galle</MenuItem>
                                <MenuItem value="Gampaha">Gampaha</MenuItem>
                                <MenuItem value="Hambanthota">Hambanthota</MenuItem>
                                <MenuItem value="Jaffna">Jaffna</MenuItem>
                                <MenuItem value="Kalutara">Kalutara</MenuItem>
                                <MenuItem value="Kandy">Kandy</MenuItem>
                                <MenuItem value="Kegalle">Kegalle</MenuItem>
                                <MenuItem value="Kilinochchi">Kilinochchi</MenuItem>
                                <MenuItem value="Kurunegala">Kurunegala</MenuItem>
                                <MenuItem value="Mannar">Mannar</MenuItem>
                                <MenuItem value="Matale">Matale</MenuItem>
                                <MenuItem value="Matara">Matara</MenuItem>
                                <MenuItem value="Monaragala">Monaragala</MenuItem>
                                <MenuItem value="Mullativu">Mullativu</MenuItem>
                                <MenuItem value="Nuwara Eliya">Nuwara Eliya</MenuItem>
                                <MenuItem value="Polonnaruwa">Polonnaruwa</MenuItem>
                                <MenuItem value="Puttalam">Puttalam</MenuItem>
                                <MenuItem value="Rathnapura">Rathnapura</MenuItem>
                                <MenuItem value="Trincomalee">Trincomalee</MenuItem>
                                <MenuItem value="Vavuniya">Vavuniya</MenuItem>
                            </Select>
                          
                        </FormControl>
                    </Paper>
                    <br />
                </Grid>
            </Grid>
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
        hotel_filter_district: (filter_district) => {
            dispatch(actions.set_hotel_district_filter(filter_district));
        },
        // hotel_filter_price: (filter_price) => {
        //     dispatch(actions.set_hotel_price_filter(filter_price));
        // },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);