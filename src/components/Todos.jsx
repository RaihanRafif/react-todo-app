/* eslint-disable react/prop-types */

import TodoItem from "./TodoItem";

// eslint-disable-next-line react/prop-types
const Todos = ({ todos, toggleCompleted, toggleDelete }) => {
  return (
    <div style={styles.container}>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleCompleted={toggleCompleted}
            toggleDelete={toggleDelete}
          />
        );
      })}
    </div>
  );
};

const styles = {
  container: {
    width: "40%",
    margin: "0 auto",
  },
};

export default Todos;
