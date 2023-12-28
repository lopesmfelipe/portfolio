export const Task = (props) => {
  return (
    <div>
      <h1>{props.taskName}</h1>
      <button className="delete-button" onClick={() => props.deleteTask(props.id)}>XXX</button>
    </div>
  ); 
};