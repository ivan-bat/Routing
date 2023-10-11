import React from "react";
import "./todoItem.css";

const TodoItem = ({ id, name, deleteItem, editingItem, isDeleting }) => {
  return (
    <div className="item-todo">
      <button
        className="item-delete"
        disabled={isDeleting}
        onClick={() => {
          deleteItem(id);
        }}
      >
        X
      </button>
      <button
        className="item-edit"
        onClick={() => {
          const newName = prompt("Введите новое название задачи");
          if (newName) {
            editingItem(id, newName);
          }
        }}
      >
        изменить
      </button>
      <div>
        {id}. {name}
      </div>
    </div>
  );
};

export default TodoItem;
