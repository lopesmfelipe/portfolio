import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile"
import { Contact } from "./pages/Contact";
import { Navbar } from "./Navbar";
import { useState } from "react";

function App() {

  const ParentComponent = () => {
    const [state, setState] = useState();
    return (
      <div>
        <SonComponent state={state} />
      </div>
    );
  };

  const SonComponent = () => {
    return (
      <div>
        <GrandparentComponent state={state}/>
      </div>
    );
  };

  const GrandparentComponent = (state) => {
    return <div> {state} </div>;
  };

  return (
    <div className="App">


    </div>
  );
}

export default App;
