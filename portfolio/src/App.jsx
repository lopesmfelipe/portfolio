import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/pages/home/Home";
import Projects from "../src/pages/projects/Projects";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;
