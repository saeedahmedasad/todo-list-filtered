import React, { useState } from "react";
import FilterItem from "./FilterItem";
import { useTodo } from "../context";

const FilterForm = () => {
  const { todos } = useTodo();
  const [text, setText] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const inputHandler = (e) => {
    setText(e.target.value);
  };
  const filter = (e) => {
    e.preventDefault();
    setText("");
    setFilteredTodos(todos.filter((todo) => todo.todo.includes(text)));
  };
  return (
    <>
      <form
        onSubmit={filter}
        className="absolute top-1 right-1 w-full max-w-xs bg-emerald-800 p-2 rounded-lg shadow-lg mx-auto flex items-center ltr"
      >
        <input
          className="w-full  p-2 px-4 outline-none bg-green-200 text-black rounded-s-full font-medium placeholder-black"
          type="text"
          value={text}
          onChange={inputHandler}
          placeholder="Search Todo..."
        />
        <div dir="rtl">
          <button
            className="w-20 rounded-s-full bg-green-700 hover:bg-slate-400 text-white p-2"
            type="submit"
          >
            Search
          </button>
        </div>
        <div className="absolute top-[4rem] right-0 w-full max-w-xs bg-emerald-800 p-2 rounded-xl shadow-sm shadow-slate-900 mx-auto">
          {filteredTodos?.map((todo) => {
            return <FilterItem key={todo.id} todo={todo} />;
          })}
        </div>
      </form>
    </>
  );
};

export default FilterForm;
