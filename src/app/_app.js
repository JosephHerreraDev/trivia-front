import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Answers from "./Answers";
import Scoreboard from "./Scoreboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/answers" element={<Answers />} />
        <Route path="/scoreboard" element={<Scoreboard />} />
      </Routes>
    </Router>
  );
}

export default App;
