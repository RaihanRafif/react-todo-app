import { useState } from "react";
import PropTypes from "prop-types";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(title); // Pass "title" as an argument
    setTitle("");
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Add your Todo"
          style={styles.formInput}
          onChange={handleChangeTitle}
          value={title} // Set the value of the input to the "title" state
        />
        <button style={styles.button}>Add Todo</button>
      </form>
    </div>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

const styles = {
  container: {
    marginBottom: "32px",
  },
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  formInput: {
    height: "50px",
    width: "60%",
    fontSize: "18px",
    padding: "0 16px",
    border: "2px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    height: "54px",
    fontSize: "18px",
    padding: "0 20px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#45a049",
  },
};

export default TodoForm;