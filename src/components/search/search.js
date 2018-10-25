import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Search as GrommetSearch } from 'grommet';
import doSearchFilter from './actions';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '',
        }
    }

    handleChange = (event) => {
        let query = event.target.value;
        this.setState({ query },
        () => {
            this.props.search(query);
        });
    }

    render() {
        return (
            <GrommetSearch 
                placeHolder='Search'
                inline={true}
                size='medium'
                fill={true}
                value={this.state.query}
                onDOMChange={this.handleChange} 
            />
        );
    }
}

const mapDispatchToProps = dispatch => ({
    search: (query) => dispatch( doSearchFilter(query) )
});

export default connect (
    undefined,
    mapDispatchToProps
)(Search);