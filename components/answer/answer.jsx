import React, { useState, useEffect } from "react";
import "./answer.css";

const Answers = ({ question, answersList }) => {
  const [content, setContent] = useState(answersList);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(answersList[0]);
  const [timer, setTimer] = useState(10);

  

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

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  useEffect(() => {
    setContent((content) => [...content].sort(() => Math.random() - 0.5));
  }, []);

  useEffect(() => {
    if (selectedAnswer !== null) {
      checkAnswer();
    }
  }, [selectedAnswer]);

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
    </div>
  );
};

export default Answers;
