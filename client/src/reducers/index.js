import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import ajaxStatusReducer from './ajaxStatusReducer';
import todosReducer from './todosReducer';

export default combineReducers({
    form: formReducer,
    ajaxCallsInProgress: ajaxStatusReducer,
    todos: todosReducer
});
