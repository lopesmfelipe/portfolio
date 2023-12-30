import "./App.css";
import axios from "axios";

function App() {
 // fetch("https://catfact.ninja/fact")
 //   .then((myResponse) => myResponse.json())
 //   .then((data) => {
 //     console.log(data);
 //   });


    axios.get("https://catfact.ninja/fact").then((res) => {
      console.log(res.data);
    });
  return (
    <div className="App">
      <button> Generate some cat fact</button>
      <p></p>
    </div>
  );
}

export default App;
