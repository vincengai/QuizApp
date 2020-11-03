import React, { useState, useEffect } from 'react';
import {Questionaire } from './components';

const API_URL = 'https://opentdb.com/api.php?amount=10&category=32&difficulty=medium';

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(undefined)

  useEffect( () => {
    fetch(API_URL)
      .then(res => res.json())
      .then((data) => {
        setQuestions(data.results)
        setCurrentQuestion(data.results[0])
      });

  }, [])  

  const handleAnswer = (answer) => {
    // etc

    // show another question
    // change score if correct
    // 
  }
    return questions.length > 0 ? (
      <div className="container">
        <Questionaire data={currentQuestion} handleAnswer={handleAnswer}/>
      </div>
    ) : (
      <h2 className="text-2xl text-white font-bold">Loading..</h2>
    )
}

export default App;
