import "./App.css";

function App() {
  fetch("https://catfact.ninja/fact")
    .then((myResponse) => myResponse.json())
    .then((data) => {
      console.log(data);
    });

  return (
    <div className="App">
      <button> Generate some cat fact</button>
      <p></p>
    </div>
  );
}

export default App;
