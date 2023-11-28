import React from "react";
import "/src/app/globals.css";
import Answers from "../components/answer/answer";
import Styles from "./game.css";

const game = () => {
  return (
    <div className="content">
      <h1 className="category">Ciencias</h1>
      <p className="timer">00:50</p>
      <div className="question-section">
        <div className="question-title">
          <h2>Pregunta 1</h2>
          <p className="points">50 pts</p>
        </div>

        
        <div className="answers">
          <Answers />
        </div>
      </div>
    </div>
  );
};

export default game;
