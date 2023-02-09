import React from "react";
import { FaTrashAlt } from "react-icons/fa";
export default function Todo({ id, todo, onUpdate, onDelete }) {
  const { text, status } = todo;
  const handleChange = (e) => {
    onUpdate({ ...todo, status: e.target.checked ? "completed" : "active" });
  };
  const handleDelete = (e) => onDelete(todo);
  return (
    <li>
      <input
        type="checkbox"
        id={id}
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label htmlFor={id}>{text}</label>
      <button onClick={handleDelete}>
        <FaTrashAlt />
      </button>
    </li>
  );
}
