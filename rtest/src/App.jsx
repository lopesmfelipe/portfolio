import "./App.css";
import { Cat } from "./components/Cat";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useCount } from "./components/useCount";

function App() {
  const { count, increase, decrease, restart, reset } = useCount(1);
  return (
    <div className="App">
      {count}
      <button onClick={increase}> increase </button>
      <button onClick={decrease}> decrease </button>
      <button onClick={restart}> restart </button>
      <span onClick={reset}> another </span>
    </div>
  );
}

export default App;
