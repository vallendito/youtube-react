import React, { Component } from 'react';
import { Col } from 'reactstrap';
import '../assets/style.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
    }

    render() {
        return(

            <Col>
                <div className="search-bar">
                    <input 
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} 
                    />
                </div>
            </Col>
                
        );  
     }

     onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
     }
}

export default SearchBar;