import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);

  const fetchData = () => {
    axios.get(`https://api.agify.io/?name=${name}`).then((resp) => {
      setPredictedAge(resp.data);
    });
  };

  return (
    <div className="App">
      <input
        placeholder="Type any name and we will predict it"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={fetchData}> Predict the Age</button>

      <h1> Name = {predictedAge?.name}</h1>
      <h1> Predicted Age = {predictedAge?.age}</h1>
      <h1> Count = {predictedAge?.count}</h1>
    </div>
  );
}

export default App;
