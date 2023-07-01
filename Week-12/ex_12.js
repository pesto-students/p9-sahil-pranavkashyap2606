import React, { useState } from "react";
import "./styles.css";


function ToDoList() {
  const [toDos, setToDos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddToDo = () => {
    setToDos([
      ...toDos,
      { id: Date.now(), text: inputValue, completed: false },
    ]);
    setInputValue("");
  };

  const handleToggleComplete = (id) => {
    const updatedToDos = toDos.map((toDo) => {
      if (toDo.id === id) {
        return { ...toDo, completed: !toDo.completed };
      } else {
        return toDo;
      }
    });
    setToDos(updatedToDos);
  };

  const handleDeleteToDo = (id) => {
    const updatedToDos = toDos.filter((toDo) => toDo.id !== id);
    setToDos(updatedToDos);
  };

  return (
    <div className="ToDoList">
      <h1>To Do List</h1>
      <form>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="button" onClick={handleAddToDo}>
          Add
        </button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>
            <input
              type="checkbox"
              checked={toDo.completed}
              onChange={() => handleToggleComplete(toDo.id)}
            />
            <span className={toDo.completed ? "completed" : null}>
              {toDo.text}
            </span>
            <button type="button" onClick={() => handleDeleteToDo(toDo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
