import "./App.css";
import { useState } from "react";
import { Task } from "./Task";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      taskName: newTask,
      completed: false
    };
    setToDoList([...toDoList, task]);
  };

    

  const deleteTask = (id) => {
    setToDoList(toDoList.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <div className="main-container">
        <div className="addTask">
          <input onChange={handleChange} />
          <button className="button-addTask" onClick={addTask}>
            {" "}
            Add Task
          </button>
        </div>

        <div className="list">
          {toDoList.map((task) => {
            return (
              <Task
                taskName={task.taskName}
                id={task.id}
                completed={task.completed}
                deleteTask={deleteTask}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

/* import "./App.css";
import { useState} from "react";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => { setCount(count + 1); };
  const decreaseCount = () => { setCount(count - 1); };
  const setToZero = () => { setCount(0); };

  const [buttonColor, setButtonColor] = useState("lightskyblue");

  const changeColor1 = () => { setButtonColor("lightsteelblue");};
  const changeColor2 = () => { setButtonColor("lightPink"); };
  const changeColor3 = () => { setButtonColor("yellow"); };

  return (
    <div className="App">
      <button
        style={{ backgroundColor: buttonColor, transition: 500}}
        onClick={() => {
          increaseCount();
          changeColor1();
        }}
      >
        Increase
      </button>

      <button
        style={{ backgroundColor: buttonColor}}
        onClick={() => {
          decreaseCount();
          changeColor2();
        }}
      >
        Decrease
      </button>

      <button
        style={{ backgroundColor: buttonColor}}
        onClick={() => {
          setToZero();
          changeColor3();
        }}
      >
        Set to Zero
      </button>
      
      {count}
    </div>
  );
}

export default App;


*/
