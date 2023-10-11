import React from "react";
import "./Input.css";

const Input = ({ item, setItem, newItem }) => {
  const keyPress = (e) => {
    const code = e.which;
    if (code === 13) {
      newItem();
    }
  };

  return (
    <div className="row">
      <input
        value={item}
        className="input"
        type="text"
        placeholder="Enter something..."
        onChange={(e) => setItem(e.target.value)}
        onKeyPress={(e) => keyPress(e)}
      />
      <button className="enter" onClick={newItem}>
        Add
      </button>
    </div>
  );
};

export default Input;
