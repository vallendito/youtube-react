import React, { Component } from 'react';
import { Input,Container,Row,Col } from 'reactstrap';
import '../assets/style.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
    }

    render() {
        return(
            <Container>
                <Row>
                    <Col>
                        <Input 
                        className="search-input"
                        value={this.state.term}
                        onChange={event => this.setState({term: event.target.value})} 
                        />
                    </Col>
                </Row>
                
            </Container>
        );  
     }
}

export default SearchBar;