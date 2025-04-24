import { useState } from "react";
import "./App.css";
import Form from "./Form";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <div>
      <h1>To-Do List</h1>
      <Form setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
      <p>
        Made by <a href="https://github.com/gitApurv">Apurv</a>
      </p>
    </div>
  );
}

export default App;
