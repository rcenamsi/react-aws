import React, { useState, useEffect } from 'react';
import Base from '../../hoc/Base';
import { API } from 'aws-amplify';
import { listTodos } from '../../graphql/queries';
import { createTodo as createTodoMutation, deleteTodo as deleteTodoMutation } from '../../graphql/mutations';


const initialFormState = { name: '', description: '' };

function  Todo() {

    const [todos, setTodos] = useState([]);
    const [formData, setFormData] = useState(initialFormState);

    useEffect(() => {
        fetchTodos();
    }, []);

    async function fetchTodos() {
        const apiData = await API.graphql({query: listTodos});
        setTodos(apiData.data.listTodos.items);
    }

    async function createTodo() {
        if (!formData.name || !formData.description) return;
        await API.graphql({query: createTodoMutation, variables: { input: formData}});
        setTodos([...todos, formData]);
        setFormData(initialFormState);
    }

    async function deleteTodo({id}) {
        const newTodoArray = todos.filter(todo => todo.id !== id);
        setTodos(newTodoArray);
        await API.graphql({query: deleteTodoMutation, variables: { input: id}});
    }


    return <Base>
    <div>
        <h2>My Todo</h2>
        <input
            onChange={e => setFormData({...formData, 'name': e.target.value})}
            placeholder="Todo Name"
            value={formData.name}
        />
        <input
            onChange={e => setFormData({...formData, 'description': e.target.value})}
            placeholder="Todo Description"
            value={formData.description}
        />
        <button onClick={createTodo}>Create</button>
        <div style={{ marginBottom: 30}}>
            {
                todos.map(todo => (
                    <div key={todo.id || todo.name}>
                        <h2>{todo.name}</h2>
                        <p>{todo.description}</p>
                        <button onClick={() => deleteTodo(todo)}>Delete</button>
                    </div>
                ))
            }
        </div>
    </div>
    </Base>
}

export default Todo;