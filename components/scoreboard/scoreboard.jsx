import React from "react";

const Scoreboard = ({ score }) => {
  return (
    <div className="scoreboard">
      <h2>Scoreboard</h2>
      <p>{score}</p>
    </div>
  );
};

export default Scoreboard;
