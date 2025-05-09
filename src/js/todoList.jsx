import React, { useState } from 'react';
import '../styles/index.css';

function TodoList() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  function agregarTarea(e) {
    if (e.key === "Enter" && nuevaTarea.trim() !== "") {
      setTareas([...tareas, nuevaTarea.trim()]);
      setNuevaTarea("");
    }
  }

  function eliminarTarea(indice) {
    const nuevasTareas = tareas.filter((_, i) => i !== indice);
    setTareas(nuevasTareas);
  }

  return (
    <div className="todo-container">
      <h1 className="todo-title">TodoList</h1>
      <div className="todo-box">
        <input
          className="todo-input"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          onKeyDown={agregarTarea}
        />

        <ul className="todo-list">
          {tareas.length === 0 ? (
            <li className="todo-empty">No hay tareas, añade una</li>
          ) : (
            tareas.map((tarea, i) => (
              <li key={i} className="todo-item">
                <span>{tarea}</span>
                <button onClick={() => eliminarTarea(i)} className="todo-remove">✖</button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
