import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Tictactoe from "./Tictactoe";
import "./App.css";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Tictactoe />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
