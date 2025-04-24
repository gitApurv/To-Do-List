import "./TaskList.css";

export default function TaskList({ tasks, setTasks }) {
  function handleDelete(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  function handleDone(id) {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      });
    });
  }

  const styles = { textDecoration: "line-through" };
  return (
    <div>
      {tasks.length > 0 ? <h2>Task List</h2> : <></>}

      <ul>
        {tasks.length ? (
          tasks.map((task) => (
            <li key={task.id}>
              <span style={task.done ? styles : {}}>{task.task}</span>
              &nbsp;&nbsp;&nbsp;
              <button
                onClick={() => {
                  handleDelete(task.id);
                }}
              >
                Delete
              </button>
              &nbsp;&nbsp;&nbsp;
              <button
                onClick={() => {
                  handleDone(task.id);
                }}
              >
                Done
              </button>
            </li>
          ))
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
}
