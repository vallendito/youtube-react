import React, { Component } from 'react';
import { Input } from 'reactstrap';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
    }

    render() {
        return  <Input 
        value={this.state.term}
        onChange={event => this.setState({term: event.target.value})} />;
    }
}

export default SearchBar;