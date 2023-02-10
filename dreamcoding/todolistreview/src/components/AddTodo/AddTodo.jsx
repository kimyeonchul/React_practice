import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddTodo.module.css";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    onAdd({ id: uuidv4(), text, status: "active" });
    setText("");
  };
  return (
    <form action="" className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        id="input"
        placeholder="Add Todo"
        value={text}
        onChange={handleChange}
        className={styles.input}
      />
      <button className={styles.button}>Add</button>
    </form>
  );
}
