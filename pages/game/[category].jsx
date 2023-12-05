"use client";

import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import "/src/app/globals.css";
import Answers from "../../components/answer/answer";
import Styles from "./game.css";
import getQuestions from "../../api/questions";
const axios = require("axios");
import { io } from "socket.io-client";

const game = () => {
  const router = useRouter();
  const { category } = router.query;
  const [score, setScore] = useState(0);

  const [questions, setQuestions] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://localhost:3000/questions/${category}`
      );
      setQuestions(result.data);
    };
    if (category) {
      fetchData();
    }
  }, [category]);

  const [groupedQuestions, setGroupedQuestions] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://localhost:3000/questions/${category}`
      );
      setQuestions(result.data);

      const grouped = result.data.rows.reduce((grouped, row) => {
        if (!grouped[row.pregunta]) {
          grouped[row.pregunta] = [];
        }
        grouped[row.pregunta].push(row.respuesta);
        return grouped;
      }, {});

      setGroupedQuestions(grouped);
    };

    if (category) {
      fetchData();
    }
  }, [category]);

  const nextQuestion = () => {
    if (currentQuestionIndex < Object.keys(groupedQuestions).length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
    else{
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
    setTimer(10);
  };
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    if (timer === 0) {
      nextQuestion();
    }

    return () => clearInterval(countdown); // Cleanup on unmount
  }, [timer]);

  useEffect(() => {
    if (currentQuestionIndex + 1 == 6) {
      const socket = io("http://localhost:4000");
      socket.on("connect", () => {
        socket.emit("score", score);
      });
      router.push("/scoreboard");
    }
  }, [score, currentQuestionIndex, questions]);

  return (
    <div className="content">
      <div className="questions">
        <p>score: {score}</p>
        <h1 className="category">{category}</h1>
        <p className="timer">{timer < 10 ? `0${timer}` : timer}</p>
        <div className="question-section">
          <div className="question-title">
            <h2>Pregunta {currentQuestionIndex + 1}</h2>
          </div>

          <div className="answers">
            {questions &&
              questions.rows &&
              questions.rows.length > 0 &&
              Object.entries(groupedQuestions).map(
                ([pregunta, respuestas], index) => {
                  if (index === currentQuestionIndex) {
                    return (
                      <Answers
                        key={index}
                        question={pregunta}
                        answersList={respuestas}
                        setScore={setScore}
                      />
                    );
                  } else {
                    return null;
                  }
                }
              )}
          </div>
        </div>
      </div>
      <div className="chat">
        <embed
          src="http://localhost:2999/"
          type=""
          height={"800px"}
          width={"700px"}
        />
      </div>
    </div>
  );
};

export default game;
