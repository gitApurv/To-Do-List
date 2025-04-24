export default function TaskList({ tasks, setTasks }) {
  function handleDelete(eve) {
    const taskToDelete = eve.target.parentElement.innerText.split(" ")[0];

    setTasks((prevTasks) => prevTasks.filter((task) => task !== taskToDelete));
  }

  function handleEdit(eve) {
    const taskToEdit = eve.target.parentElement.innerText.split(" ")[0];
    const newTask = prompt("Edit your task", taskToEdit);
    if (newTask) {
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task === taskToEdit ? newTask : task))
      );
    }
  }
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.length ? (
          tasks.map((task, index) => (
            <li key={index}>
              {task} <button onClick={handleEdit}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
            </li>
          ))
        ) : (
          <p></p>
        )}
      </ul>
    </div>
  );
}
