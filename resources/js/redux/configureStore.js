import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import auth from './auth';
import {Tutors} from './tutors';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createForms} from 'react-redux-form';
import {UserData, LoginData, TutorForm} from "./forms";



export const ConfigureStore = () => {
    const enhancers = compose(
        applyMiddleware(thunk, logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    const store = createStore(
        combineReducers({
            tutors: Tutors,
            auth,
            ...createForms({
                register: UserData,
                login: LoginData,
                tutorForm: TutorForm
            })
        }),
        enhancers
    );

    return store;
}
