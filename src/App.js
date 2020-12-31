import React,{Component} from 'react';
import './App.css';
import Layout from './Layout/layout'
import {BrowserRouter} from "react-router-dom";

class App extends Component{
    render() {
        return (

            <BrowserRouter>
            <div>
                <Layout/>
            </div>
            </BrowserRouter>
        );
    }
}

export default App;
