import * as ActionTypes from './ActionTypes';

export const Tutors = (state = {
    isLoading: true,
    errMess: null,
    tutors: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TUTORS:
            return {...state, isLoading: false, tutors: action.payload, errMess: null}
        case ActionTypes.TUTORS_LOADING:
            return {...state, isLoading: true, tutors: [], errMess: null}
        case ActionTypes.TUTORS_FAILED:
            return {...state, isLoading: false, tutors: [], errMess: action.payload}
        case ActionTypes.ADD_TUTOR:
            let tutor = action.payload;
            return { ...state, tutors: state.tutors.concat(tutor)};
        default:
            return state;
    }
}
