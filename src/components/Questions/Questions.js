import React, { useEffect, useState } from 'react';

import QuestionCard from './QuestionCard';
import QuestionHeader from './QuestionHeader';

import { Button } from './Button';
import ArrowLeft from './Button/ArrowLeft';
import ArrowRight from './Button/ArrowRight';

import { QuestionsMain, QuestionNavigationButtons } from './Questions.style';
import { setCurrentQuestions } from '../../redux/questions/questionsSlice';
import { useDispatch, useSelector } from 'react-redux';

import { getQuestionsFromStore } from 'redux/questions/questionsSelector';
import getQuestions from 'redux/questions/questionsOperatios';
import typeTest from 'services/variables';

function Questions() {
  const dispatch = useDispatch();
  const questions = useSelector(getQuestionsFromStore);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    dispatch(setCurrentQuestions(currentQuestionIndex));
  }, [currentQuestionIndex, dispatch]);

  useEffect(() => {
    dispatch(getQuestions(typeTest.tech));
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 2000);
    }
  }, [error]);

  const sendAnswers = () => {
    const results = {};

    for (let i = 0; i < questions.length; i++) {
      if (!questions[i].userAnswer) {
        setError('not all question get answer');
        console.log('sendAnswers');
        return;
      }
      results[questions[i]._id] = questions[i].userAnswer;
    }

    console.log(Object.keys(results).length);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex + 1 <= questions.length - 1) {
      setCurrentQuestionIndex(prevState => prevState + 1);
    }
  };
  const prevQuestion = () => {
    if (currentQuestionIndex - 1 >= 0) {
      setCurrentQuestionIndex(prevState => prevState - 1);
    }
  };

  return (
    <>
      {questions.length > 0 && (
        <QuestionsMain>
          <QuestionHeader sendAnswers={sendAnswers} error={error} />

          <QuestionCard
            currentQuestion={currentQuestionIndex}
            questions={questions}
            error={error}
          />

          <QuestionNavigationButtons>
            <Button
              onClick={prevQuestion}
              disabled={currentQuestionIndex === 0 && true}
            >
              <ArrowLeft />
              <span>Previous question</span>
            </Button>
            <Button
              onClick={nextQuestion}
              disabled={currentQuestionIndex === 11 && true}
            >
              <span>Next question</span>
              <ArrowRight />
            </Button>
          </QuestionNavigationButtons>
        </QuestionsMain>
      )}
    </>
  );
}

export default Questions;
