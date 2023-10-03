import React, { useState } from "react";
import { useTodo } from "../context";
import { FaEdit, FaSave } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const FilterItem = ({ todo }) => {
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const [editable, setEditable] = useState(false);
  const { deleteTodo, updateTodo, toggleTodo } = useTodo();
  return (
    <>
      <div className="w-full max-w-sm mx-auto rounded-full p-2 bg-blue-300 mt-2 flex flex-row items-center justify-between">
        <div className="flex ">
          <div className="bg-purple-500 hover:bg-red-400 text-white p-2 rounded-full mr-1">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => {
                toggleTodo(todo.id);
                todo.completed = !todo.completed;
              }}
            />
          </div>
          <input
            className={`p-2 w-[220px] outline-none rounded-full font-medium ${
              todo.completed ? "line-through" : ""
            }`}
            type="text"
            value={todoMsg}
            onChange={(e) => {
              setTodoMsg(e.target.value);
            }}
            disabled={!editable}
          />
        </div>
        <div>
          <button
            onClick={() => {
              deleteTodo(todo.id);
            }}
            className="bg-red-500 hover:bg-red-400 text-white p-2 rounded-full"
          >
            <AiFillDelete />
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterItem;
