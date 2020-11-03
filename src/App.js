import React, { useState, useEffect } from 'react';
import {Questionaire } from './components';

const API_URL = 'https://opentdb.com/api.php?amount=10&category=32&difficulty=medium&type=multiple';

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect( () => {
    fetch(API_URL)
      .then(res => res.json())
      .then((data) => {
        setQuestions(data.results)
        setCurrentIndex(0)
      });

  }, [])  

  const handleAnswer = (answer) => {
    if (!showAnswers) {
      // prevents double answers
      if (answer === questions[currentIndex].correct_answer) {
        setScore(score + 1);
      }
    }

    setShowAnswers(true)

  };

  const handleNextQuestion = () => {
    setShowAnswers(false);

    setCurrentIndex(currentIndex + 1);
  }

    return questions.length > 0 ? (
      <div className="container">
        {currentIndex >= questions.length ? (
          <h1 className="text-3xl text-white font-bold">Game Over! Your score was {score}. </h1>
        ) : (
          <Questionaire 
            data={questions[currentIndex]} 
            handleAnswer={handleAnswer} 
            showAnswers={showAnswers}
            handleNextQuestion={handleNextQuestion}
          />
        )}
      </div>
    ) : (
      <h2 className="text-2xl text-white font-bold">Loading..</h2>
    )
}

export default App;
