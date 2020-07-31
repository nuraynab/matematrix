import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Footer from "./FooterComponent";

class Main extends React.Component{
    render() {
        return(
            <div>
                <Header/>
                <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Redirect to='/home'/>
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main;
