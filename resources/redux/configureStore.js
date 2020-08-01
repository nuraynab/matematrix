import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createForms} from 'react-redux-form';
import {UserData} from "./forms";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            ...createForms({
                register: UserData
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}
