import "./App.css";
import { Person } from "./components/Person";

function App() {
  return (
    <div className="App">
      <Person 
        name="Bryan"
        email="bryan@gmail.com"
        age={26}
        isMarried={true}
        friends={["Toreto", "Han", "The Rock"]}
      />
    </div>
  ); 
}

export default App;
