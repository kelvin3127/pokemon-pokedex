import React from 'react';
import { Form, Container, Col, Button } from 'react-bootstrap';

const PokemonSearch = (props) => {

        const [ search, setSearch] = React.useState('');

        return (
            <Container>
                <Form className='mt-2'>
                    <Form.Row className='align-items-center'>
                        <Col sm={10} className='my-1'>
                            <Form.Control
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search your Pokemon" />
                        </Col>
                        <Col sm={2} className="my-1">
                            <Button block onClick={(e) => props.getPokemon(search)}>Search</Button>
                        </Col>
                    </Form.Row>
                </Form>
            </Container>
        )
}

export default PokemonSearch;
