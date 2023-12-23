import "./App.css";
import {User} from "./User";

function App() {

  return ( 
    <div className="App">
      {users.map((user, key) => {
        return <User name={user.name} age={user.age} />;
      })}
    </div>
  );
}

const users = [ 
  { name: "Kakashi Hatake", age: 33 },
  { name: "Hiruzen Sarutobi", age: 68},
  { name: "Tobirama Senju", age: 42}
];



export default App
