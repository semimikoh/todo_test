import React, { useCallback, useRef, useState } from "react";

function TodoCreate({ onSubmit }) {
  const [text, setText] = useState("");

  const handleText = useCallback((e) => setText(() => e.target.value), []);

  //   const handleSubmit = useCallback(
  //     (e) => {
  //       e.preventDefault();
  //       onSubmit(text);
  //       setText("");
  //     },
  //     [text]
  //   );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text);
    setText("");
  };

  //   const handleSubmit = useCallback(
  //     (e) => {
  //       e.preventDefault();
  //       const newTodo = {
  //         id: nextId.current,
  //         text: e,
  //         done: false,
  //       };
  //       setTodos(todos.concat(newTodo));
  //       nextId.current += 1;
  //       setText("");
  //     },
  //     [text]
  //   );

  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit}>
        {" "}
        <input type="text" onChange={handleText} value={text} />{" "}
        <button>등록</button>
      </form>
      {/* <p>{text}</p> */}
    </div>
  );
}

export default React.memo(TodoCreate);
