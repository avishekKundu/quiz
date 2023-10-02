import React, { useState } from "react";
import quizCollection from "./quizCollection";

const QuizApp = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);

    const nextQuestion = (answer) => {
        if (currentQuiz.correctAns === answer) {
            setScore(score + 1);
        }

        if (currentQuestion + 1 < quizCollection.length) {
            setCurrentQuestion(currentQuestion + 1);
        }
        else {
            setIsCompleted(true);
        }
    };

    const retryQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setIsCompleted(false);
    };

    if (isCompleted) {
        const updateScore = Math.floor(((score + 1) / 10) * 100);
        return (
            <>
                <div className="content_message">
                    <div className="message_head">
                        <center>QUIZ COMPLETED! </center>
                        <center>Your Score: {updateScore}%</center>
                    </div>
                    <div className="message_button">
                        <button onClick={retryQuiz}>Retry</button>
                    </div>
                </div>
            </>
        )
    };

    const currentQuiz = quizCollection[currentQuestion];

    return (
        <>
            <div className="main_content">
                <div className="content_head">
                    <center>QUIZ</center>
                </div>
                <div className="content_body">
                    <div className="body_head">
                        <center>Question: </center>
                        <p>{currentQuestion + 1}. {currentQuiz.question}</p>
                    </div>
                    <div className="option_body">
                        {currentQuiz.answer.map((options, index) => (
                            <button key={index} onClick={() => nextQuestion(options)} className="option_button">
                                {options}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuizApp;