import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [myCatFact, setMyCatFact] = useState("");
  
  const fetchCatFact = () => {
    axios.get("https://catfact.ninja/fact").then((resp) => {
      setMyCatFact(resp.data.fact);
    });
  }


  useEffect(() => {
    fetchCatFact();
  }, []);
    

  return (
    <div className="App">
      <button onClick={fetchCatFact}> Generate Cat Fact</button>
      <p> {myCatFact} </p>      
    </div>
  );
}

export default App;
