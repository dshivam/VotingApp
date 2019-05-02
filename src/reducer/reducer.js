import {GET_ALL_POLLS, GET_POLL_RESULT, UPDATE_VOTE, GET_POLLs_BY_USER, ADD_NEW_POLL, RESET_NEWPOLLSTATUS_STATE, LOGIN, LOGOUT} from '../action/index';

export function pollsReducer(state = [], action) {
switch(action.type) {
    case GET_ALL_POLLS:
        return Object.assign({}, state, {pollsList: action.data});
    case GET_POLL_RESULT: 
        return Object.assign({}, state, {pollDetails: action.data});
    case UPDATE_VOTE:
        return Object.assign({}, state, {pollDetails: action.data});
    case GET_POLLs_BY_USER:
        return Object.assign({}, state, {userPollsList: action.data});
    default:
        return state;
}
}

export function loginReducer(state = [], action) {
    switch(action.type) {
        case LOGIN:
            localStorage.setItem('loggedInUser',action.data);
            return Object.assign({}, state, {loggedInUSer: action.data});
        case LOGOUT:
            localStorage.removeItem('loggedInUser');
            return Object.assign({}, state, {loggedInUSer: action.data});
        default:
        return state;
    }
}

export function newPoll(state = [], action) {
    switch(action.type) {
        case ADD_NEW_POLL:
            return Object.assign({}, state, {newPollcreationStatus: action.data});
        case RESET_NEWPOLLSTATUS_STATE:
            return Object.assign({}, state, {newPollcreationStatus: action.data});
        default:
        return state;
    }
}
