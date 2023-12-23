import "./App.css";
import { useState } from "react";

function App() {
  const [textColor, setTextColor] = useState("lightpink"); 


  return (
    <div className="App">
      <button 
        onClick={() => {
          setTextColor(textColor === "lightpink" ? "lightblue" :  "lightpink");
        }}
      >
        Change-Colors
      </button>
      <h1 style={{color: textColor}}> HELLO HUMAN BEING</h1>
    </div>
  );
}

export default App;
