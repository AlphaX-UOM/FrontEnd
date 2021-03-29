import React,{Component} from 'react';
import './App.css';
import Layout from './Layout/layout'
import {BrowserRouter} from "react-router-dom";
import SimpleForm from '../src/Components/chatbot/SimpleForm';

class App extends Component{
    render() {
        return (
            <BrowserRouter>
            <div>
            <SimpleForm />
                <Layout/>
            </div>
            </BrowserRouter>
        );
    }
}

export default App;
