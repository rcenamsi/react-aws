import React, { useState, useEffect } from 'react';
import Base from '../../hoc/Base';
import classes from './Todo.module.css';
import { Container, Row, Col, Card, Form, ListGroup, Image, ButtonGroup, Button, FormControl, InputGroup, Toast } from 'react-bootstrap';
import { Notification } from '../../components/ui/notification/Notification';
import { API, Storage } from 'aws-amplify';
import { listTodos } from '../../graphql/queries';
import { createTodo as createTodoMutation, deleteTodo as deleteTodoMutation } from '../../graphql/mutations';


const initialFormState = { name: '', description: '', image: '' };

function Todo() {

    const [todos, setTodos] = useState([]);
    const [formData, setFormData] = useState(initialFormState);
    const [show, setShow] = useState(false);

    useEffect(() => {
        fetchTodos();
    }, []);

    async function fetchTodos() {
        const apiData = await API.graphql({query: listTodos});
        const todoFromApi = apiData.data.listTodos.items;
        await Promise.all(todoFromApi.map(async todo => {
            if (todo.image) {
                const image = await Storage.get(todo.image);
                todo.image = image;
            }
            return todo;
        }))
        setTodos(apiData.data.listTodos.items);
        
    }

    async function createTodo() {
        if (!formData.name || !formData.description) return;
        await API.graphql({query: createTodoMutation, variables: { input: formData}});
        if(formData.image) {
            const image = await Storage.get(formData.image);
            formData.image = image;
        }
        setTodos([...todos, formData]);
        setShow(true);
        setFormData(initialFormState);
    }

    async function deleteTodo({id}) {
        const newTodoArray = todos.filter(todo => todo.id !== id);
        setTodos(newTodoArray);
        await API.graphql({query: deleteTodoMutation, variables: { input: {id} }});
    }

    async function onChange(e) {
        if (!e.target.files[0]) return;
        const file = e.target.files[0];
        setFormData({...formData, image: file.name});
        await Storage.put(file.name, file);
        fetchTodos();
    }

    return <Base>
    <div>
        {
            show ? <Notification show={show}/> : null
        }
        <h4>My Todo</h4>
        <Card style={{ marginBottom: 15, padding: 25}}>
            <InputGroup className={classes.pb_10}>
                <FormControl 
                onChange={e => setFormData({...formData, 'name': e.target.value})}
                value={formData.name}
                placeholder={'Name'} 
                aria-label={'name'} />
            </InputGroup>
            <InputGroup className={classes.pb_10}>
                <FormControl 
                onChange={e => setFormData({...formData, 'description': e.target.value})}
                value={formData.description}
                placeholder={'Description'} 
                aria-label={'description'} />
            </InputGroup>
            <InputGroup className={classes.pb_10}>
                <FormControl 
                    type={'file'}
                    onChange={onChange}
                />
            </InputGroup>
            <InputGroup className={classes.pt_15}>
                <Button onClick={createTodo}>Create</Button>
            </InputGroup>
        </Card>
        <Card style={{width: '100%'}}>
            <Card.Header>Todo List</Card.Header>
            <ListGroup varian={'flush'}>
                {
                    todos.map(todo => (
                        <ListGroup.Item key={todo.id || todo.name} style={{display: 'inline-flex'}}>
                            {
                                todo.image && <Image src={todo.image} alt={'list-images'} roundedCircle width={120}  heigth={'100%'}/>
                            }
                            <div className={!todo.image ? classes.todo_details : ''}>
                                <h3>{todo.name}</h3>
                                <p>{todo.description}</p>
                            </div>
                            <ButtonGroup style={{position: 'absolute', right: 5}}>
                                <Button>Edit</Button>
                                <Button style={{marginLeft: 10}} onClick={() => deleteTodo(todo)}>Delete</Button>
                            </ButtonGroup>
                        </ListGroup.Item>
                    ))

                }
            </ListGroup>
        </Card>
  
    </div>
    </Base>
}

export default Todo;