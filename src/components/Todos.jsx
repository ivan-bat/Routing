import React, { useState, useEffect } from "react";
import "./todos.css";
import TodoItem from "./TodoItem";
import SearchBar from "./SearchBar";
import Input from "./Input";
import {
  getTodos,
  createTodo,
  deleteTodo,
  editTodo,
} from "../crudOperations/crudOperations";
import { Routes, Route, Link } from "react-router-dom";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [item, setItem] = useState("");
  const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [search, setSearch] = useState("");

  const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag);

  useEffect(() => {
    getTodos().then((responseTodos) => {
      setTodos(responseTodos);
    });
  }, [refreshTodosFlag]);

  const newItem = () => {
    if (item.trim() === "") {
      alert("Введите значение для добавления задачи");
    } else {
      createTodo(item).then((response) => {
        console.log("Задача добавлена, ответ от сервера", response);
        refreshTodos();
      });
    }
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

  const filteredTodos = todos.filter((todo) => {
    return todo.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <SearchBar setSearch={setSearch} />
      <Input item={item} setItem={setItem} newItem={newItem} />
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
