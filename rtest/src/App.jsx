import "./App.css";
import { Cat } from "./components/Cat";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useCount } from "./components/useCount";
import { Person } from "./components/Person";

function App() {
  const { count, increase, decrease, restart, reset } = useCount(1);
  return (
    <div className="App">
      <Person 
        name="The Rock"
        email="therock@gmail.com"
        age={42}
        isMarried={false}
        friends={["Batman, Superman, Dr.Fate, Flash"]}
      />
      
      {count}
      <button onClick={increase}> increase </button>
      <button onClick={decrease}> decrease </button>
      <button onClick={restart}> restart </button>
      <span onClick={reset}> another </span>
    </div>
  );
}

export default App;
