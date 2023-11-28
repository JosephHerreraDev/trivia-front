import React, { useState, useEffect } from "react";
import "./answer.css";

const Answers = () => {
  const question = "¿Quién fue el primer hombre en pisar la luna?";
  const initialContent = [
    "Neil Armstrong",
    "Buzz Aldrin",
    "Michael Collins",
    "Alan Shepard",
  ];

  const [content, setContent] = useState(initialContent);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState("Neil Armstrong");

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  useEffect(() => {
    setContent((content) => [...content].sort(() => Math.random() - 0.5));
  }, []);

  const checkAnswer = () => {
    if (selectedAnswer === correctAnswer) {
      document.getElementById(`div-${selectedAnswer}`).classList.add("correct");
    } else {
      document
        .getElementById(`div-${selectedAnswer}`)
        .classList.add("incorrect");

      document.getElementById(`div-${correctAnswer}`).classList.add("correct");
    }
  };

  return (
    <div>
      <p className="question">{question}</p>
      {content.map((answer, index) => (
        <div className="answer" key={index} id={`div-${answer}`}>
          <input
            className="answer-input"
            type="radio"
            id={answer}
            name="answer"
            value={answer}
            onChange={handleAnswerChange}
          />
          <label className="answer-name" htmlFor={answer}>
            {answer}
          </label>
        </div>
      ))}
      <button onClick={checkAnswer}>Check Answer</button>
    </div>
  );
};

export default Answers;
