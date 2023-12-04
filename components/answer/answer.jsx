import React, { useState, useEffect } from "react";
import "./answer.css";

const Answers = ({ question, answersList }) => {
  const [content, setContent] = useState(answersList);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(answersList[0]);
  const [timer, setTimer] = useState(10);
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);

  const checkAnswer = () => {
    if (selectedAnswer === correctAnswer) {
      document.getElementById(`div-${selectedAnswer}`).classList.add("correct");
      setScore((prevScore) => prevScore + timer);
    } else {
      document
        .getElementById(`div-${selectedAnswer}`)
        .classList.add("incorrect");
      document.getElementById(`div-${correctAnswer}`).classList.add("correct");
      setScore((prevScore) => prevScore - timer);
    }
    setQuestionIndex(questionIndex + 1);
  };

  useEffect(() => {
    setContent((content) => [...content].sort(() => Math.random() - 0.5));
  }, []);

  useEffect(() => {
    if (selectedAnswer !== null) {
      checkAnswer();
    }
  }, [selectedAnswer]);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  useEffect(() => {
    console.log(score);
  }, [score]);

  const handleAnswerChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  return (
    <div>
      {questionIndex < answersList.length ? (
        <>
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
        </>
      ) : (
        <p>Total score: {score}</p>
      )}
    </div>
  );
};

export default Answers;
