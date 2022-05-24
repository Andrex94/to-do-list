import { useState } from "react";
import Todos from "./components/Todos";
import Form from "./components/Form";

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: "learn react",
      isCompleted: false,
    },
    {
      text: "meet a friend for lunch",
      isCompleted: false,
    },
    {
      text: "build todo app",
      isCompleted: false,
    },
  ]);

  const addTodo = (value) => {
    const newTodos = [...todos, { text: value, isCompleted: false }];
    setTodos(newTodos);
  };

  const removeTodo = (e) => {
    const index = Number(e.target.id);
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };
  return (
    <div className="container">
      <header>
        <h1 className="title">ToDos</h1>
      </header>
      <div className="app">
        <Todos todos={todos} onClick={removeTodo} />
        <Form addTodo={addTodo} />
      </div>
    </div>
  );
};

export default App;
