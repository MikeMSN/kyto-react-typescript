import React, {useState} from 'react';
import {Navbar} from "./components/Navbar";
import {TodoForm} from "./components/TodoForm";
import {TodoList} from "./components/TodoList";
import {ITodo} from "./interfaces";



const App: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    const addHandler = (title: string) => {
        const newTodo : ITodo = {
            title: title,
            id: Date.now(),
            completed: false
        }
        //setTodos([newTodo, ...todos]);
        setTodos(prev => [newTodo, ...prev]);
    }

    const toggleHandler = (id: number) => {
        setTodos(prev => prev.map(t => {
            if(t.id === id ) {
                t.completed = !t.completed;
            }
            return t;
        }))
    }
    const removeHandler = (id: number) => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }

  return (
    <>
      <Navbar/>
      <div className="container">
          <TodoForm onAdd={addHandler}/>
          <TodoList todos={todos} onRemove={removeHandler} onToggle={toggleHandler}/>
      </div>
    </>
  );
}

export default App;
