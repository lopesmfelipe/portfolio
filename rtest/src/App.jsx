import "./App.css";

function App() {

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
