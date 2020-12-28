import React from 'react';
import './nav-bar.css';
import HomeIcon from '@material-ui/icons/Home';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Link} from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { Button } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo1 from "../../images/temp/bg lg/bgbanner-logo.png"
import connect from "react-redux/es/connect/connect";

const navbar=(props)=>{
    const {items} = props;
    return(
        <div>
            <nav className="navbar navbar-expand-lg  navbar-dark bg-dark shadow-sm  " >
                <Link className="navbar-brand" to="/">
                   <span className="navbar-brand mb-0 h1"> <img src={logo1} alt="" style={{width:"100px"}}/></span>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"> </span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav nav-tabs  ">


                    <li className="nav-item  " style={{width:"100px"}}>
                        <Link className="nav-link " to="/"> <span className="align-text-bottom"><HomeIcon /></span> Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item" style={{width:"100px"}}>
                        <Link className="nav-link" to="/post"><span className="align-text-bottom"><AddCircleIcon/></span>  Post</Link>
                    </li>
                    <li className="nav-item " style={{width:"100px"}}>
                        <Link className="nav-link" to="/login"><span className="align-text-bottom"><ExitToAppIcon/></span> Sign in</Link>
                    </li>

                    <li className="nav-item" style={{width:"100px"}}>
                        <span className="badge badge-pill badge-success cartnum" >{items.length > 0 && items.length}</span>
                        <Link className="nav-link" to="/shoppingcart"><span className="align-text-bottom "><ShoppingCartIcon/></span></Link>
                        {/*<Link to="/" className="nav-link ">*/}
                        {/*<ShoppingCartIcon/>*/}
                        {/*</Link>*/}


                    </li>

                </ul>
            </div>
            </nav>
        </div>
    )
};
const mapStateToProps = (state) => {
    return {
        items: state.onlineStoreApp.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // saveLocalStorage:  items => { dispatch(saveCart(items)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(navbar);