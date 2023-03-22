import React from 'react';

import { useContext } from "react";

import { QuizContext } from "../context/quiz"; 

const Question = () => {
    
    const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div>
        <p>Pergunta 0 de 10</p>
        <h2>Pergunta atual</h2>
        <div id="options-container">
            <p>Opcões</p>
        </div>

    </div>
  )
}

export default Question