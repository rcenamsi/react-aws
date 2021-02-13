import React, { useState, useEffect } from 'react';
import Base from '../../hoc/Base';
import { API, Storage } from 'aws-amplify';
import { listTodos } from '../../graphql/queries';
import { createTodo as createTodoMutation, deleteTodo as deleteTodoMutation } from '../../graphql/mutations';


const initialFormState = { name: '', description: '', image: '' };

function  Todo() {

    const [todos, setTodos] = useState([]);
    const [formData, setFormData] = useState(initialFormState);

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
        setFormData(initialFormState);
    }

    async function deleteTodo({id}) {
        const newTodoArray = todos.filter(todo => todo.id !== id);
        setTodos(newTodoArray);
        await API.graphql({query: deleteTodoMutation, variables: { input: id}});
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
        <input
            type="file"
            onChange={onChange}
        />
        <button onClick={createTodo}>Create</button>
        <div style={{ marginBottom: 30}}>
            {
                todos.map(todo => (
                    <div key={todo.id || todo.name}>
                        <h2>{todo.name}</h2>
                        <p>{todo.description}</p>
                        <button onClick={() => deleteTodo(todo)}>Delete</button>
                        {
                            todo.image && <img src={todo.image} style={{ width: 400 }} alt={'quality-assurance'}/>
                        }
                    </div>
                ))
            }
        </div>
    </div>
    </Base>
}

export default Todo;