import React from "react";
import {Switch, Route, Redirect, withRouter} from "react-router-dom";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Footer from "./FooterComponent";
import Register from "./RegisterComponent";
import {registerUser, processLogin} from "../../redux/ActionCreators";
import {actions} from "react-redux-form";
import {connect} from "react-redux";

const mapDispatchToProps = dispatch => ({
    registerUser: (userData) => {dispatch(registerUser(userData))},
    resetRegisterForm: () => {dispatch(actions.reset('register'))},
    processLogin: (loginData) => {dispatch(processLogin(loginData))}
});

class Main extends React.Component{

    render() {
        return(
            <div>
                <Header processLogin={this.props.processLogin}/>
                <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/register' component={() => <Register resetRegisterForm={this.props.resetRegisterForm} registerUser={this.props.registerUser} />}/>
                    <Redirect to='/home'/>
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Main));
