import * as types from './types';
import todos from '../apis/todos';

export const fetchTodos = () => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({ type: types.BEGIN_AJAX_CALL });
        todos.get('api/todos')
            .then(response => {
                dispatch({ type: types.FETCH_TODOS_SUCCESS, payload: response.data });
                resolve();
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: types.AJAX_CALL_ERROR });
                reject();
            })
    });
};

export const createTodo = (formValues) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({ type: types.BEGIN_AJAX_CALL });

        const data = {
            action: formValues.todo
        };

        todos.post('api/todos', data)
            .then(response => {
                dispatch({ type: types.ADD_TODO_SUCCESS, payload: response.data });
                resolve();
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: types.AJAX_CALL_ERROR });
                reject();
            })
    });
};

export const deleteTodo = (id) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({ type: types.BEGIN_AJAX_CALL });

        todos.delete('api/todos/' + id)
            .then(response => {
                dispatch({ type: types.DELETE_TODO_SUCCESS, payload: response.data });
                resolve();
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: types.AJAX_CALL_ERROR });
                reject();
            })
    });
};



