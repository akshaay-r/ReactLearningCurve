import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/Todo/TodoSlice";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleUpdate = () => {
    dispatch(updateTodo({ id: editId, text: editText }));
    setEditId(null);
    setEditText("");
  };

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="text-black px-2 py-1 rounded"
                />
                <button
                  onClick={handleUpdate}
                  className="text-white bg-green-600 px-2 py-1 ml-2 rounded"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditId(null)}
                  className="text-white bg-gray-600 px-2 py-1 ml-2 rounded"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <div className="text-white">{todo.text}</div>
                <button
                  onClick={() => handleEdit(todo)}
                  className="text-white bg-blue-600 px-2 py-1 ml-2 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                >
                  🗑
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
