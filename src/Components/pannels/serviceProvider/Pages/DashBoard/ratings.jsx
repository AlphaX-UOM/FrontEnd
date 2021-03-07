

import React from 'react';
import { InputLabel } from '@material-ui/core/';
import { Card } from "react-bootstrap";
import Box from "@material-ui/core/Box";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Typography from '@material-ui/core/Typography';
import Rating, { IconContainerProps } from "@material-ui/lab/Rating";
import { withStyles } from "@material-ui/core/styles";




function Ratings(props) {
    const StyledRating = withStyles({
        iconFilled: {
            color: '#ff6d75',
        },
        iconHover: {
            color: '#ff3d47',
        },
    })(Rating);


    const ratingChangeHandler = () => {
        console.log("event fired");
    }



    return (
        <div>
            <Typography>
                <InputLabel><h3>My Ratings</h3></InputLabel>
            </Typography>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <StyledRating
                    name="customized-color"
                    value={4} readOnly
                    icon={<FavoriteIcon fontSize="inherit" />}
                />

            </Box>



        </div>
    );
}


export default Ratings;
