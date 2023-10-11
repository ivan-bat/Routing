import React from "react";
import "./todoItem.css";
import edit from "../edit.png";

const TodoItem = ({ id, name, deleteItem, editingItem, isDeleting }) => {
  return (
    <div className="items-todo">
      <div className="item">
        <ul>
          <li>{name}</li>
        </ul>
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
          <img src={edit} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
