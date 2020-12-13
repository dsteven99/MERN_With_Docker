import React from 'react';
import {connect} from 'react-redux';
import {createTodo} from '../actions';
import TodoForm from './TodoForm';

class CreateTodo extends React.Component {
    state = {initialValues: {todo: ''}}
    
    onSubmit = (formValues) => {
        this.props.createTodo(formValues)
            .then(() => {
                this.props.history.push('/');
            });
    }
    
    render() {
        return (
            <div>
                <h3>Create a Todo</h3>
                <TodoForm onSubmit={this.onSubmit} initialValues={this.state.initialValues}/>
            </div>      
        );
    }
}

export default connect(null, {createTodo})(CreateTodo);