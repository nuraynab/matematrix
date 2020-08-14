import React from 'react';
import Main from "./MainComponent";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConfigureStore} from "../redux/configureStore";
import setAuthorizationToken from "../redux/setAuthorizationToken";
import {setCurrentUser} from "../redux/UserActions";
import jwt from 'jsonwebtoken';

const store = ConfigureStore();

function App() {
    if (localStorage.getItem('LoginToken')){
        setAuthorizationToken(localStorage.getItem('LoginToken'));
        store.dispatch(setCurrentUser(jwt.decode(localStorage.getItem('LoginToken'))))
    }

    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <Main/>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
