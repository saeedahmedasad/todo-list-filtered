import React from "react";
import { useState } from "react";
import { useTodo } from "../context";

const TodoForm = () => {
  const [todo, setTodo] = useState(""); //todo
  const { addTodo } = useTodo();
  const add = (e) => {
    e.preventDefault();
    if (todo.length === 0) return;
    addTodo({ id: Date.now(), todo, completed: false });
    setTodo("");
  };
  return (
    <form
      onSubmit={add}
      className="w-full max-w-xl bg-slate-700 p-2 rounded-full shadow-lg mt-6 flex items-center ltr"
    >
      <input
        className="w-full  p-2 px-4 outline-none bg-slate-200 rounded-s-full font-medium"
        type="text"
        value={todo}
        placeholder="Todo..."
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <div dir="rtl">
        <button
          className="w-20 rounded-s-full bg-slate-500 hover:bg-slate-400 text-white p-2"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
