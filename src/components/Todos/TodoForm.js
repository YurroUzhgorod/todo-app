import { useState } from "react";
import styles from "./TodoForm.module.css";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText("");
  };

  const onChangeHandler = (e) => {
    const { value } = e.target;
    setText(value);
  };
  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new todo"
          value={text}
          onChange={onChangeHandler}
        />
        <button type="submit" onClick={onSubmitHandler}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
