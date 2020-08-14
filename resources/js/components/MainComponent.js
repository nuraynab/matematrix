import React from "react";
import {Switch, Route, Redirect, withRouter} from "react-router-dom";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Footer from "./FooterComponent";
import Register from "./RegisterComponent";
import Login from "./LoginComponent";
import {registerUser, processLogin, processLogout} from "../redux/UserActions";
import {fetchTutors, postTutor} from "../redux/TutorActions";
import {actions} from "react-redux-form";
import {connect} from "react-redux";
import TutorsPage from "./TutorsComponent";
import RegisterTutor from "./RegisterTutorComponent";

const mapDispatchToProps = dispatch => ({
    registerUser: (userData) => {dispatch(registerUser(userData))},
    resetRegisterForm: () => {dispatch(actions.reset('register'))},
    processLogin: (loginData) => {dispatch(processLogin(loginData))},
    resetLoginForm: () => {dispatch(actions.reset('login'))},
    processLogout: () => dispatch(processLogout()),
    fetchTutors: () => {dispatch(fetchTutors())},
    postTutor: (tutorData) => {dispatch(postTutor(tutorData))},
    resetTutorForm: () => {dispatch(actions.reset('tutorForm'))},
});

const mapStateToProps = state => {
    return{
        auth: state.auth,
        tutors: state.tutors
    };
}

class Main extends React.Component{

    componentDidMount() {
        this.props.fetchTutors()
    };

    render() {
        return(
            <div>
                <Header processLogout={this.props.processLogout} auth={this.props.auth}/>
                <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/register' component={() => <Register resetRegisterForm={this.props.resetRegisterForm} registerUser={this.props.registerUser} />}/>
                    <Route path='/login' component={() => <Login resetLoginForm={this.props.resetLoginForm} processLogin={this.props.processLogin} />}/>
                    <Route path='/tutors' component={() => <TutorsPage tutors={this.props.tutors}/>}/>
                    <Route path='/tutor' component={() => <RegisterTutor postTutor={this.props.postTutor} resetTutorForm={this.props.resetTutorForm} />}/>
                    <Redirect to='/home'/>
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
