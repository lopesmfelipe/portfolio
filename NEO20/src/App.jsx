import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [excuseString, setExcuseString] = useState("");
  const [excuseData, setExcuseData] = useState(null);
  
  const fetchExcuse = (excuseType) => {
    axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuseType}/`)
    .then((result) => {
      setExcuseString(result.data[0].excuse);
      setExcuseData(result.data[0]);
    });
  }

  return (
    <div className="App">
      <h1> Generate An Excuse</h1>
      <button onClick={() => fetchExcuse("party")}> Party </button>
      <button onClick={() => fetchExcuse("family")}> Family </button>
      <button onClick={() => fetchExcuse("office")}> Office </button>
      <h1> {excuseString} </h1>

      <h2> {excuseData?.excuse}</h2>
      <h2> {excuseData?.category}</h2>


    </div>
  );
}

export default App;
