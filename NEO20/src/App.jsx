import { useState } from "react";
import "./App.css";
import { Text } from "./Text";

function App() {
  const [showMyText, setMyShowText] = useState(false);

  return (
    <div className="App">
      <button
        onClick={() => {
          setMyShowText(!showMyText);
        }}
      >
        Show My Text
      </button>

      {showMyText && <Text />}
    </div>
  );
}

export default App;
