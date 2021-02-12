import React, {Component} from 'react';
import Base from "../../hoc/Base";
import classes from './Todo.module.css';
import {Container, Row, Col, Modal, ListGroup, Button} from "react-bootstrap";

class Todo extends Component {

    state = {
        isActive: false,
        isCreateNew: false
    }

    componentDidMount() {
    }


    render() {
        let listGroup = <ListGroup className={classes.todo_list}>
            <ListGroup.Item action>Item 1</ListGroup.Item>
            <ListGroup.Item action>Item 2</ListGroup.Item>
            <ListGroup.Item action>Item 3</ListGroup.Item>
            <ListGroup.Item action>Item 4</ListGroup.Item>
        </ListGroup>;

        let newTodo = <Modal
            show={this.state.isCreateNew}
            backdrop={'static'}
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Modal Title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                I will not close this
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'secondary'} onClick={() => this.setState({isCreateNew: false})}>Close</Button>
                <Button variant={'primary'}>Ok</Button>
            </Modal.Footer>
        </Modal>;


        return <Base>
            <Container fluid>
                <Row>
                    <Col>
                        {newTodo}
                        {listGroup}
                        <Button variant={'primary'} className={classes.new_todo}
                                onClick={() => this.setState({isCreateNew: true})}>New</Button>
                    </Col>
                </Row>
            </Container>
        </Base>
    }
}

export default Todo;
