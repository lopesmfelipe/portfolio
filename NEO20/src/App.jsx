import "./App.css";

function App() {
  const age = 15;
  const isPurple = true;

  return (
    <div className='App'>
      {age >= 18 ? <h1>OVER AGE</h1> : <h1> UNDER AGE</h1>}
      <h1 style={{ color: isPurple ? "purple" : "orange" }}> THIS HAS COLOR</h1>
    
      {isPurple && <button> BUTTON</button>}
    </div>
    );
}

export default App
