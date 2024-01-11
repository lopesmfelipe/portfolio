import "./App.css";
import { Person, Country, Setup } from "./components/Person";

function App() {

  

  const job = {
    position: "Senior Developer",
    company: "Google",
  };

  return (
    <div className="App">
      <Person 
        name="Bryan"
        email="bryan@gmail.com"
        age={26}
        isMarried={false}
        friends={["Toreto", "Han", "The Rock"]}
        country={Country.Canada}
        setup={Setup.Notebook}
      />
      <h1>{job.company}</h1>
    </div>
  ); 
}

export default App;
