import {SET_CURRENT_USER} from "./ActionTypes";
import jwt from 'jsonwebtoken';
import config from './config';
import axios from 'axios';
import setAuthorizationToken from "./setAuthorizationToken";

export const registerUser = (userData) => (dispatch) => {
    return axios.post('api/registering', userData)
        .then(response => alert('Вы были успешно зарегистрированы!\n '))
        .catch(error => {console.log('register user', error.message); alert('Ошибка регистрации\nError: ' + error.message);});
}

export const processLogin = (userData) => (dispatch) => {
    return axios.post('api/logining', userData)
        .then(response => {
            if (response.data.message === 'Logged in!'){
                console.log(userData.username)
                const LoginToken = jwt.sign({
                    username: userData.username
                }, config.jwtSecret);
                localStorage.setItem('LoginToken', LoginToken);
                setAuthorizationToken(LoginToken);
                dispatch(setCurrentUser(userData.username))
            }
        })
        .then(() => alert('Вы успешно вошли в свой аккаунт\n '))
        .catch(error => {console.log('login', error.message); alert('Ошибка входа\nError: ' + error.message);});
}

export const processLogout = () => (dispatch) => {
    localStorage.removeItem('LoginToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
    return axios.post('api/logout');
}

export const setCurrentUser = (user) => ({
    type: SET_CURRENT_USER,
    user
});
