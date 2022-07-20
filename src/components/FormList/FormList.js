import React,{useState} from 'react'
import './FormList.css'
import Form from '../Form/Form.js'
import Todo from '../Todo/Todo.js';


function FormList() {
    const [todos,setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todos.text)){
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
       
    };


    const updateTodo = (todoId,newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        } 

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);
    };
    
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    }


  return (
    <div className='boxContainerMeta'>
        <div className='boxContainer'>
            <h1 className='h1Title'>What is the plan for today?</h1>
            <Form 
            onSubmit = {addTodo}/>
            <Todo 
            todos= {todos} 
            completeTodo ={completeTodo} 
            removeTodo = {removeTodo} 
            updateTodo = {updateTodo}
         />
        </div>
    </div>
    
  )
}

export default FormList