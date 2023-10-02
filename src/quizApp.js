import React, { useState } from "react";
import quizCollection from "./quizCollection";

const QuizApp = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);

    const nextQuestion = (answer) => {
        // const currentQuiz = quizCollection[currentQuestion];
        if (currentQuiz.correctAns === answer) {
            setScore(score + 1);
        }

        if (currentQuestion + 1 < quizCollection.length)
            setCurrentQuestion(currentQuestion + 1);
        else
            setIsCompleted(true);
    };

    const retryQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setIsCompleted(false);
    };

    if (isCompleted) {
        const updateScore = Math.floor(((score + 1) / 10)*100);
        return (
            <>
                <div>
                    <div>
                        <center>QUIZ COMPLETED! </center>
                        <center>Your Score: {updateScore}%</center>
                    </div>
                    <div>
                        <button onClick={retryQuiz}>Retry</button>
                    </div>
                </div>
            </>
        )
    };

    const currentQuiz = quizCollection[currentQuestion];

    return (
        <>
            <div>
                <div>
                    <center>QUIZ</center>
                </div>
                <div>
                    <div>
                        <center>Question: </center>
                        <p>{currentQuestion + 1}. {currentQuiz.question}</p>
                    </div>
                    <div>
                        {currentQuiz.answer.map((options, index) => (
                            <button key={index} onClick={() => nextQuestion(options)}>
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