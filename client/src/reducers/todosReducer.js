import {FETCH_TODOS_SUCCESS, ADD_TODO_SUCCESS, DELETE_TODO_SUCCESS} from '../actions/types';
import _ from 'lodash';

const todosReducer = (state = {}, action) => {
    switch(action.type){
        case FETCH_TODOS_SUCCESS:
            return _.mapKeys(action.payload, '_id');
        case ADD_TODO_SUCCESS:
            return {...state, [action.payload._id]: action.payload};
        case DELETE_TODO_SUCCESS:
            return _.omit(state, action.payload._id);
        default:
            return state;
    }
};

export default todosReducer