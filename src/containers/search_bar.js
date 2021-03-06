import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import * as actions from '../actions';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };

        // //Allow onInputChange use 'this' keyword as global this context
        // this.onInputChange = this.onInputChange.bind(this);
        // this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <form className='input-group' onSubmit={this.onFormSubmit.bind(this)}>
                <input
                    placeholder='Type any city to get a weather forecast'
                    className='form-control'
                    value={this.state.term}
                    onChange={this.onInputChange.bind(this)} />
                <span className='input-group-btn'>
                    <button className='btn btn-secondary' type='submit'>Go</button>
                </span>
            </form>
        );
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ fetchWeather }, dispatch);
// }

export default connect(null, actions)(SearchBar);