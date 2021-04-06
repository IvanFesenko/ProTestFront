import React, { useEffect, useState } from 'react';

import QuestionCard from './QuestionCard';
import QuestionHeader from './QuestionHeader';

import { Button } from './Button';
import ArrowLeft from './Button/ArrowLeft';
import ArrowRight from './Button/ArrowRight';

import { QuestionsMain, QuestionNavigationButtons } from './Questions.style';
import tempData from './tempData';

function Questions() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [error, setError] = useState(null);
  const keys = Object.keys(tempData);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 2000);
    }
  }, [error]);

  const sendAnswers = () => {
    const results = {};
    for (const questionID in tempData) {
      const question = tempData[questionID];
      if (!question.userAnswer) {
        setError('not all question get answer');
        return;
      }
      results[question.questionId] = question.userAnswer;
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex + 1 <= keys.length - 1) {
      setCurrentQuestionIndex(prevState => prevState + 1);
    }
  };
  const prevQuestion = () => {
    if (currentQuestionIndex - 1 >= 0) {
      setCurrentQuestionIndex(prevState => prevState - 1);
    }
  };

  return (
    <QuestionsMain>
      <QuestionHeader sendAnswers={sendAnswers} error={error} />
      <QuestionCard
        currentQuestion={currentQuestionIndex}
        questions={tempData}
        error={error}
      />
      <QuestionNavigationButtons>
        <Button onClick={prevQuestion}>
          <ArrowLeft />
          <span>Previous question</span>
        </Button>
        <Button onClick={nextQuestion}>
          <span>Next question</span>
          <ArrowRight />
        </Button>
      </QuestionNavigationButtons>
    </QuestionsMain>
  );
}

export default Questions;
