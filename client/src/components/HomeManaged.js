import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { fetchTodos, deleteTodo } from '../actions/index';

class HomeManaged extends React.Component {

    componentDidMount() {
        this.props.fetchTodos();
    }

    onDeleteClick = (item) => {
        this.props.deleteTodo(item._id);
    }

    renderTable = () => {
        return this.props.todos.map((todo) => {
            const { _id, action } = todo;
            return (
                <tr key={_id}>
                    <td onClick={() => this.onDeleteClick(todo)} title='delete' 
                        style={{ cursor: "pointer", width:"5%", textAlign:"center" }}>
                        <FontAwesomeIcon icon={faTrash} size="1x" />
                    </td>
                    <td width="95%">{action}</td>
                </tr>
            )
        });
    }

    render() {
        return (
            <div className="pagePadding">
                <h4>Todo Items</h4>
                <Link to="/create" className="btn btn-link">Add Todo</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Todo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: Object.values(state.todos)
    };
}

export default connect(mapStateToProps, { fetchTodos, deleteTodo })(HomeManaged);