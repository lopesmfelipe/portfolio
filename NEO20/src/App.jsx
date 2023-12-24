import "./App.css";
import { useState} from "react";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => { setCount(count + 1); };
  const decreaseCount = () => { setCount(count - 1); };
  const setToZero = () => { setCount(0); };

  const [buttonColor, setButtonColor] = useState("lightskyblue");

  const changeColor1 = () => { setButtonColor("lightsteelblue");};
  const changeColor2 = () => { setButtonColor("lightPink"); };
  const changeColor3 = () => { setButtonColor("yellow"); };

  return (
    <div className="App">
      <button
        style={{ backgroundColor: buttonColor, transition: 500}}
        onClick={() => {
          increaseCount();
          changeColor1();
        }}
      >
        Increase
      </button>

      <button
        style={{ backgroundColor: buttonColor}}
        onClick={() => {
          decreaseCount();
          changeColor2();
        }}
      >
        Decrease
      </button>

      <button
        style={{ backgroundColor: buttonColor}}
        onClick={() => {
          setToZero();
          changeColor3();
        }}
      >
        Set to Zero
      </button>
      
      {count}
    </div>
  );
}

export default App;