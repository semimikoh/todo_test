import { useCallback, useMemo, useRef, useState } from "react";
import TodoCreate from "./TodoCreate";
import TodoHeader from "./Todoheader";
import TodoList from "./TodoList";
const initialState = [
  { id: 1, text: "해야 할 일", done: false },
  { id: 2, text: "해야 할 일", done: false },
];

function CountUndoneTodo(todo) {
  return [todo.filter((todo) => !todo.done).length, todo.length];
}

function Todos() {
  const [todos, setTodos] = useState(initialState);
  const nextId = useRef(3);

  const undoneCount = useMemo(() => {
    //의존성 배열에 있는 값이 변했을 때에만 다시 연산한다.
    return CountUndoneTodo(todos);
  }, [todos]);

  const handleSubmit = useCallback(
    (e) => {
      const newTodo = {
        id: nextId.current,
        text: e,
        done: false,
      };
      setTodos([...todos, newTodo]);
      nextId.current += 1;
    },
    [todos]
  );

  const handleRemove = (e) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== e.id));
  };

  const handleTooggle = (e) => {
    setTodos(
      todos.map((todo) =>
        todo.id === e.id ? { ...todo, done: !todo.done } : todo
      )
    );
  };
  //   const handleRemove = (e) => {
  //     setTodos(todos.filter((todo) => todo.id !== e.id));
  //   };
  return (
    <div>
      <TodoHeader onLeft={undoneCount} />
      <TodoList
        todos={todos}
        onRemove={handleRemove}
        onToggle={handleTooggle}
      />
      {/* <TodoCreate initialState={initialState} /> */}
      <TodoCreate onSubmit={handleSubmit} />
    </div>
  );
}

export default Todos;
