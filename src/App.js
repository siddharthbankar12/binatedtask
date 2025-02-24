import React from "react";
import { Route, Routes } from "react-router-dom";
import Tictactoe from "./Tictactoe";
import "./App.css";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Tictactoe />} />
      </Routes>
    </div>
  );
};

export default App;
