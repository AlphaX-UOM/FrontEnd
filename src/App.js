import React,{Component} from 'react';

import './App.css';
import Navbar from "./navbar/nav-bar";
import Home from "./home/home";
import Post from "./Post/post";
import Login from "./Login/login";
import Navbar2 from "./navbar2/navbar2";
import Footer from "./footer/footer";
import Transportinput from "./servicemodules/transport/transport-input";
import Transportproviderlist from "./Containers/Transportproviderlist/transportproviderlist";
import Listitemdetails from "./servicemodules/transport/listitemdetails";
import {BrowserRouter,Route,Switch} from 'react-router-dom';

class App extends Component{
    render() {
        return (


            <div>
                <BrowserRouter>
                    <Navbar/>
                    <Switch>
                        <Route path="/post"><Post/></Route>
                        <Route path="/login"><Login/></Route>
                        <Route path="/transport"><Transportinput/></Route>
                        <Route path="/transportproviderlist"><Transportproviderlist/></Route>
                        <Route path="/listitemdetails" component={Listitemdetails} />
                        <Route path="/"><Home/></Route>
                    </Switch>
                    <Footer/>

                </BrowserRouter>

            </div>

        );
    }
}

export default App;
