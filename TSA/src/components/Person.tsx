export const Person = (props) => {
  return (
    <div>
      <h1>Name: {props.name} </h1>
      <h1>Email: {props.name} </h1>
      <h1>Age: {props.name} </h1>
      <h1>This person {props.isMarried ? "is" : "is not"} MARRIED </h1>
      {props.friends.map((friend) => {
        <h1> {friend} </h1>
      })}      
    </div>
  );
};