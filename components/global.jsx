import React, {Component} from 'react';
import {Container,FormControl, FormGroup, InputGroup, Glyphicon} from 'react-bootstrap';


class Global extends Component {
    render() {
        return (
            <div className="container">

                <h1>Book Explorer</h1>
                <FormGroup>
                    <InputGroup>
                        <FormControl placeholder="Search for a book" type="text" />
                        <InputGroup.Addon>
                            <Glyphicon glyph="search"></Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
            </div>
        );
    }
}

export default Global;