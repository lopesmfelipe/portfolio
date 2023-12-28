import { useState } from "react";

export const Task = (props) => {

  const setBooleanTask = () => {
    setToDoList(toDoList.map((task) => {
      task.completed = true;
      return task;
    }));
  };

  const [taskColor, setColorTask] = useState('white');

  const changeTaskColor = () => {
    setColorTask('green');
  }

  const changeIt = () => {
    if (props.completed === true) {
      changeTaskColor();
    }
  }


  return (
    <div>
      <h1 style={{ color: taskColor}}>{props.taskName}</h1>
      <button className="delete-button" onClick={() => props.deleteTask(props.id)}>XXX</button>
      <button onClick={() => { setBooleanTask(); changeIt(); }}> Complete </button>
    </div>
  ); 
};