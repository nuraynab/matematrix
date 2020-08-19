import * as ActionTypes from './ActionTypes';
import axios from "axios";

export const tutorsLoading = () => ({
    type: ActionTypes.TUTORS_LOADING
});

export const tutorsFailed = (errmess) => ({
    type: ActionTypes.TUTORS_FAILED,
    payload: errmess
});

export const addTutors = (tutors) => ({
    type: ActionTypes.ADD_TUTORS,
    payload: tutors
});

export const addTutor = (comment) => ({
    type: ActionTypes.ADD_TUTOR,
    payload: comment
});

export const fetchTutors = () => (dispatch) => {

    dispatch(tutorsLoading());

    return fetch('api/tutorGetData') // !!!!!!!! в api/tutors нужен список всех тьюторов !!!!!!!!
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response
                    throw error;
                }
            },
            error => {
                throw new Error(error.message);
            })
        .then(response => response.json())
        .then(tutors => dispatch(addTutors(tutors)))
        .catch(error => dispatch(tutorsFailed(error.message)));
}

export const postTutor = (tutorData) => (dispatch) => {

    return axios.post('api/tutorRegister', tutorData)
        .then(response => dispatch(addTutor(response)))
        .then(() => alert('Ваша заявка отправлена \n'))
        .catch(error => {console.log('post tutor', error.message); alert('Не удалось загрузить объявление. \nError: ' + error.message);});

}
