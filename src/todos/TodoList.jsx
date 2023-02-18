import React, { useState } from "react";

// const initialState = [
//   { id: 1, text: "해야 할 일", done: false },
//   { id: 2, text: "해야 할 일", done: false },
// ];

function TodoList({ todos, onRemove, onToggle }) {
  //   const [todos, setTodos] = useState([todos]);
  //   console.log(todos);
  //   setTodos((todos) => todos);
  //   console.log(e);
  return (
    <div>
      {todos.map((e) => (
        <li key={e.id}>
          <span
            style={{ textDecoration: e.done && "line-through" }}
            onClick={() => onToggle(e)}
          >
            {e.text}{" "}
          </span>{" "}
          <button onClick={() => onRemove(e)}>삭제</button>{" "}
        </li>
      ))}
    </div>
  );
}

export default React.memo(TodoList);
