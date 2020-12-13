import React from 'react';
import { Field, reduxForm } from 'redux-form';

class TodoForm extends React.Component {

    renderError({ error, touched }) {

        if (touched && error) {
            return (
                <div className="alert alert-danger">
                    {error}
                </div>
            );
        }

    };

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" className="form-control"/>
                <div>{this.renderError(meta)}</div>
            </div>
        );
    };

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <div style={{padding: "10px"}}>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="form-group">
                    <Field name="todo" component={this.renderInput} label='Enter Todo' />
                    <button className="btn btn-primary" style={{marginTop: "10px"}}>Submit</button>
                </form>
            </div>
        )
    }
}

const validate = (formValues) => {
    const errors = {};
    if (!formValues.todo) {
        errors.todo = "You must enter a todo.";
    }
    return errors;
};

export default reduxForm({
    form: 'todoForm',
    validate
})(TodoForm);