import React, { useState, useEffect, useRef } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    const handleDeleteAll = () => {
        if (todos.length === 0) {
            alert('Список пуст');
        } else {
            setTodos([]);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                ref={inputRef}
            />
            <button onClick={handleAddTodo}>Добавить</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
            <button onClick={handleDeleteAll}>Удалить все</button>
        </div>
    );
}

export default TodoList;
