import React, { useState, useEffect } from "react";
import "./todos.css";
import TodoItem from "./TodoItem";
import SearchBar from "./SearchBar";
import {
  getTodos,
  createTodo,
  deleteTodo,
  editTodo,
} from "../crudOperations/crudOperations";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [item, setItem] = useState("");
  const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [search, setSearch] = useState("");

  const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag);

  useEffect(() => {
    getTodos().then((responseTodos) => {
      setTodos(responseTodos);
    });
  }, [refreshTodosFlag]);

  const newItem = () => {
    setIsCreating(true);
    createTodo(item)
      .then((response) => {
        console.log("Задача добавлена, ответ от сервера", response);
        refreshTodos();
      })
      .finally(() => setIsCreating(false));
  };

  const deleteItem = (id) => {
    setIsDeleting(true);
    deleteTodo(id)
      .then((response) => {
        console.log("Задача удалена, ответ от сервера", response);
        refreshTodos();
      })
      .finally(() => setIsDeleting(false));
  };

  const editingItem = (id, newName) => {
    editTodo(id, newName).then((response) => {
      console.log("Задача изменена, ответ от сервера", response);
      refreshTodos();
    });
  };

  const keyPress = (e) => {
    const code = e.which;
    if (code === 13) {
      newItem();
    }
  };

  const filteredTodos = todos.filter((todo) => {
    return todo.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="wrapper">
      <SearchBar setSearch={setSearch} />
      <input
        value={item}
        className="input"
        type="text"
        placeholder="Enter something..."
        onChange={(e) => setItem(e.target.value)}
        onKeyPress={(e) => keyPress(e)}
      />
      <button disabled={isCreating} className="enter" onClick={newItem}>
        ENTER
      </button>
      {filteredTodos.map(({ id, name }) => (
        <TodoItem
          key={id}
          id={id}
          name={name}
          deleteItem={deleteItem}
          editingItem={editingItem}
          isDeleting={isDeleting}
        />
      ))}
    </div>
  );
};

export default TodoList;
