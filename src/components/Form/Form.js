import React, {useState,useEffect,useRef} from 'react';
import './Form.css';



function Form(props) {
const [input, setInput] = useState('');

const inputRef = useRef(null)
useEffect(() => {
  inputRef.current.focus()
})

const handleChange = e =>{
  setInput(e.target.value);
};

const handleSubmit = e => {
  e.preventDefault();


  props.onSubmit({
    id:Math.floor(Math.random()*10000),
    text: input
  });

  setInput('');
}

  return (
    <div className='containerForm'>
    
        <form className='todo-form' onSubmit={handleSubmit}>
          <input
            className='todo-input' 
            value = {input} 
            type='text' 
            name = 'text'
            placeholder = 'Enter text'
            onChange = {handleChange}
            ref={inputRef}
            >
            
          </input>
          <button 
            className='todo-button'
             
            >Add todo
          </button>
        </form>
    </div>
  );
}

export default Form