import "./App.css";
import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setIsVisible((prev) => !prev)}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <h1> Hidden text</h1>}
    </div>
  );
}

export default App;
