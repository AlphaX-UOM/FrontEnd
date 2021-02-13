import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import AdminPanel from '../pannels/adminPannel/adminpannel';
import CustomerPanel from '../pannels/CustomerPannel/customerPannel';
import ServicePanel from '../pannels/serviceProvider/sppannel';
import { connect } from "react-redux";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Vvisit - Tour Planning System
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://blogapi.uber.com/wp-content/uploads/2018/05/Webp.net-gifmaker-5.gif)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


function Login(props) {
    const classes = useStyles();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [userDetail, setUserDetail] = useState(props.userCred.id);
    const [userType, setUserType] = useState(props.userCred.role);


    const handleFormData = () => {
        console.log("signinsubmit");
        

        fetch(`https://alphax-api.azurewebsites.net/api/users`)
            .then((response) => {
                return response.json();
            })
            .then((responseData) => {
                
                responseData = responseData.filter(item => item.email == email && item.password == password);

                if (responseData[0] != undefined) {
                    setUserDetail(responseData[0].id);
                    setUserType(responseData[0].role);
                    props.addUserData(responseData[0]);
                    console.log("new user detail->" + responseData[0].firstName);
                }
                else {
                    console.log("error credentials");
                }
            });

            


        // var axios = require('axios');
        // var data = JSON.stringify({ "email": "lasithgmail.com", "password": "12345" });

        // var config = {
        //     method: 'get',
        //     url: 'https://alphax-api.azurewebsites.net/api/users/Login',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     data: data
        // };

        // axios(config)
        //     .then(function (response) {
        //         console.log(JSON.stringify(response.data));
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });


        // axios({
        //     method: "get",
        //     url: "https://alphax-api.azurewebsites.net/api/users/Login",
        //     data: {
        //         email: "lasith@gmail.com",
        //         password: "12345"
        //      }
        //     }).then(res => {
        //         const user = res.data;
        //         setUserDetail({user});
        //     });

        // axios.get('alphax-api.azurewebsites.net/api/users/Login', {
        //     data: {
        //         email: email,
        //         password: password
        //     }
        //   })
        //   .then(res => {
        //       const user = res.data;
        //       setUserDetail({user});
        //   });
        // console.log("this is return user Id -> " + userDetail.id);

        console.log("This is reached");
        console.log("This is reached");
        console.log("This is reached");
    }

    if(userType == "Customer"){
        return(
            <CustomerPanel myId={userDetail}/>
        )
    }

    if(userType == "ServiceProvider"){
        return(
            <ServicePanel myId={userDetail}/>
        )
    }

    if(userType == "Admin"){
        return(
            <AdminPanel myId={userDetail}/>
        )
    }



    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
            </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={e => setEmail(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={e => setPassword(e.target.value)}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            // type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={handleFormData}
                        >
                            Sign In
              </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                  </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}

const mapStateToProps = (state) => {
    return {
        userCred: state.eventpnl.userCred
    };
  };

const mapDispatchToProps = (dispatch) => {
    return {
      addUserData: (userCred) => {
        dispatch({ type: "ADD_USER", userCred: userCred });
      },
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);