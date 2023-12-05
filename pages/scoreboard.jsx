import React, { useState, useEffect } from "react";
import "/src/app/globals.css";
import { io } from "socket.io-client";

const Scoreboard = () => {
  const [scores, setScores] = useState({});
  const socket = io("http://localhost:4000");

  useEffect(() => {
    socket.on("connect", () => {
      socket.emit("sendScore");
    });

    socket.on("sendScore", (finalScores) => {
      setScores(finalScores);
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  console.log(scores);

  return (
    <div className="scoreboard">
      <h2>Scoreboard</h2>
      <p>Score: {JSON.stringify(scores)}</p>
    </div>
  );
};

export default Scoreboard;
