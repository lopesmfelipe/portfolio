import "./App.css";
import { Cat } from "./components/Cat";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useCount } from "./components/useCount";

function App() {
  const { count, increase, decrease, restart } = useCount();
  return (
    <div className="App">
      {count}
      <button onClick={increase}> increase </button>
      <button onClick={decrease}> decrease </button>
      <button onClick={restart}> restart </button>
    </div>
  );
}

export default App;
