import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "./Form.css";

export default function Form({ setTasks }) {
  const [task, setTask] = useState("");

  function handleSubmit(eve) {
    eve.preventDefault();
    if (task.trim() === "") alert("Please enter a task!");
    else {
      setTasks((prevTasks) => [
        ...prevTasks,
        { task: task, id: uuidv4(), done: false },
      ]);
      setTask("");
    }
  }

  function handleChange(eve) {
    setTask(eve.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your task!"
          value={task}
          onChange={handleChange}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}
