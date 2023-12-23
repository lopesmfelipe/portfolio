import "./App.css";
import { Planet } from "./Planet";

function App() {

  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];


  return (
    <div className="App">
        {planets.map((planet, key) => (
          !planet.isGasPlanet && <Planet name={planet.name} />     
      ))}
    </div>
  );
}

export default App

