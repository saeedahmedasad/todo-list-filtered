import React from "react";
import { useState } from "react";
import { useTodo } from "../context";
import { FaEdit, FaSave } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const TodoItem = ({ todo }) => {
  const [editable, setEditable] = useState(false); //todo
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { toggleTodo, deleteTodo, updateTodo } = useTodo();

  const updatedTodo = () => {
    console.log("save todo");
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setEditable(!editable);
  };
  return (
    <>
      <div className="w-full max-w-xl rounded-md p-2 bg-blue-300 mt-2 flex flex-row items-center justify-between">
        <div className="flex">
          <div className="bg-white p-2 px-4 rounded-md mr-1">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => {
                toggleTodo(todo.id);
              }}
            />
          </div>
          <input
            className={`p-2 w-96 outline-none rounded-md font-medium ${
              todo.completed ? "line-through" : ""
            }`}
            type="text"
            value={todoMsg}
            onChange={(e) => {
              setTodoMsg(e.target.value);
            }}
            disabled={!editable} //todo
          />
        </div>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white p-2 rounded-md mr-1"
            onClick={() => {
              if (editable) {
                updatedTodo();
              } else {
                setEditable(!editable);
                console.log("edit todo");
              }
            }}
          >
            {!editable ? <FaEdit /> : <FaSave />}
          </button>
          <button
            onClick={() => {
              deleteTodo(todo.id);
            }}
            className="bg-red-500 hover:bg-red-400 text-white p-2 rounded-md"
          >
            <AiFillDelete />
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
