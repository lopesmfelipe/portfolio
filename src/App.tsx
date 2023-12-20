import "./App.css";

function App() {
  return (
    <div className="App">
      <Job salary={75000} position="Junior FullStack Developer" company="IBM" />
      <Job salary={120000} position="Mid Level FullStack Developer" company="Twitch" />
      <Job salary={600000} position="TechLead" company="Amazon" />
    </div>
  );
}

const Job = (props) => {
  return (
    <div>
      <h1> {props.position} </h1>
      <h1> {props.company} </h1>
      <h1> {props.salary} </h1>
    </div>
  ) 
}

export default App;