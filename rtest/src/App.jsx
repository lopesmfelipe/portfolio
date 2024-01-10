import "./App.css";
import { Cat } from "./components/Cat";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  
  return (

    <div>
      <button onClick={increase}> increase </button>
      <button onClick={increase}> increase </button>
      <button onClick={increase}> increase </button>
    </div>
  );
  
  /*
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      },
    },
  });

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Cat />
      </QueryClientProvider>
    </div>
  );
   */
};

export default App;
