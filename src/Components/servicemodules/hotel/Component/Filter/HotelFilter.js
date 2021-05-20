import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import * as actions from '../../../../../store/actions/index';
import './HotelFilter.css';

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

import { Dropdown } from 'bootstrap';

function Filter(props) {
    const { hotel_filter_district, hotel_filter_star } = props;

    const [filter_district, setFilterDistrict] = useState();
    const [filter_star, setFilterStar] = useState();

    const handleDistrict = (event) => {
        setFilterDistrict(event.target.value);
        props.hotel_filter_district(event.target.value);
    }

    const handleStar = (event) => {
        setFilterStar(event.target.value);
        props.hotel_filter_star(event.target.value);
    }



    return (
        <div className="select_filter">
            <Grid container spacing={3} direction="column">
                <Grid item xs={12}>
                    <Paper className="hotelfilter_paper" style={{backgroundColor:' #69c6ba'}}>
                        <br />
                        <FormControl component="fieldset">
                            <FormLabel component="legend"><strong>Sort by Star</strong></FormLabel>
                            <hr/>
                            <RadioGroup aria-label="sort-star" onChange={handleStar}>
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
                    <br />
                </Grid>




                <Grid item xs={12}>
                    <Paper className="hotelfilter_paper" style={{backgroundColor:' #69c6ba'}}>
                        <br />
                        <FormControl component="fieldset" className=".hotelfilter_select" style={{padding:'30px'}}>
                            <FormLabel component="legend"><strong>Sort by District</strong></FormLabel>

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
                        <br />
                    </Paper>
                </Grid>
            </Grid>

            <br/>
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
        hotel_filter_star: (filter_star) => {
            dispatch(actions.set_hotel_star_filter(filter_star));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);