import {combineReducers} from 'redux';
import {pollsReducer, loginReducer, newPoll} from './reducer';

export default combineReducers(Object.assign({},{
    pollsReducer,
    loginReducer,
    newPoll
}));