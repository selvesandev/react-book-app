import React, {Component} from 'react';
import {Container, FormControl, FormGroup, InputGroup, Glyphicon} from 'react-bootstrap';


class Global extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
        };
    }

    render() {
        return (
            <div className="container">

                <h1>Book Explorer</h1>
                <FormGroup>
                    <InputGroup>
                        <FormControl onChange={event => this.setState({query: event.target.value})}
                                     placeholder="Search for a book"
                                     type="text"
                                     onKeyPress={event => {
                                         if (event.key == 'Enter') {
                                             this.search();
                                         }
                                     }}
                        />
                        <InputGroup.Addon onClick={() => this.search()}>
                            <Glyphicon glyph="search"></Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
            </div>
        );
    }

    search() {
        const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
        fetch(`${BASE_URL}${this.state.query}`, {method: 'GET'})
            .then(response => response.json())
            .then(json => console.log(json));
    }
}

export default Global;