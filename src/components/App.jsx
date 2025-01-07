import React, { useState } from "react";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [tasks, setTasks] = useState([]);

  console.log(inputVal);
  console.log(tasks);

  function handleInput(event) {
    let { value } = event.target;
    setInputVal(value);
  }

  function addTask() {
    setTasks((prev) => [...prev, inputVal]);
    setInputVal("");
  }

  function showTasks(task, index) {
    return <li key={index}>{task}</li>;
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          name="task"
          onChange={handleInput}
          value={inputVal}
        />
        <button onClick={addTask}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{tasks.map(showTasks)}</ul>
      </div>
    </div>
  );
}

export default App;
