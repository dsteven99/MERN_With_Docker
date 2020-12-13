import React from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import HomeManaged from './HomeManaged';
import Help from './Help';
import About from './About';
import Header from './Header';
import CreateTodo from './CreateTodo';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div style={this.props.loading ? { opacity: "0.25" } : { opacity: "1.0" }}>
                    <Header />
                    <Route exact path="/" component={HomeManaged} />
                    <Route path="/create" component={CreateTodo} />
                    <Route path="/about" component={About} />
                    <Route path="/help" component={Help} />
                </div>
                <div className="loader" hidden={!this.props.loading}></div>
            </Router>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.ajaxCallsInProgress > 0
    };
}

export default connect(mapStateToProps)(App);