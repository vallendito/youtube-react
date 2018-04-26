import React, { Component } from 'react';
import { Container,Row,Col } from 'reactstrap';
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
                        <div className="search-bar">
                            <input 
                            value={this.state.term}
                            onChange={event => this.setState({term: event.target.value})} 
                            />
                        </div>
                    </Col>
                </Row>
                
            </Container>
        );  
     }
}

export default SearchBar;