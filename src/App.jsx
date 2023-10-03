import React, { useEffect, useState } from "react";
import { FilterForm, TodoForm, TodoItem } from "./components";
import { TodoProvider } from "./context";

const App = () => {
  const [showSearchBox, SetShowSearchBox] = useState(false);
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  const updateTodo = (id, todo) => {
    const newTodos = todos.map((prevTodo) =>
      prevTodo.id === id ? todo : prevTodo
    );
    setTodos(newTodos);
  };
  const toggleTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log("updated todos in local storage");
  }, [todos]);
  return (
    <>
      <TodoProvider
        value={{ todos, addTodo, deleteTodo, updateTodo, toggleTodo }}
      >
        <div className="w-full bg-orange-500">
          <h1 className="text-2xl w-full max-w-md text-center font-medium p-2 text-white">
            Manage Your Todos
          </h1>
          <TodoForm />
          {todos?.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </div>
        <div
          className={`${
            showSearchBox
              ? "opacity-100 pointer-events-auto transition-all"
              : "opacity-0 pointer-events-none transition-all"
          }`}
        >
          <FilterForm />
        </div>
        <div className="fixed right-1 bottom-1 z-50">
          <button
            className="p-2 px-4 font-bold text-white bg-green-600 rounded-full hover:bg-green-700"
            onClick={() => SetShowSearchBox(!showSearchBox)}
          >
            {showSearchBox ? "Close Search" : "Show Search"}
          </button>
        </div>
      </TodoProvider>
    </>
  );
};

export default App;
