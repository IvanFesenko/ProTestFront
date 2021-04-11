import React, { useEffect, useState } from 'react';

import QuestionCard from './QuestionCard';
import QuestionHeader from './QuestionHeader';

import { Button } from './Button';
import ArrowLeft from './Button/ArrowLeft';
import ArrowRight from './Button/ArrowRight';

import { QuestionsMain, QuestionNavigationButtons } from './Questions.style';
import { setCurrentQuestions } from 'redux/questions/questionsSlice';
import { useDispatch, useSelector } from 'react-redux';

import {
  getQuestionsFromStore,
  getQuestionsName,
  getQuestionNumber,
} from 'redux/questions/questionsSelector';
import { getQuestions, sendAnswers } from 'redux/questions/questionsOperatios';

function Questions() {
  const dispatch = useDispatch();
  const typeTest = useSelector(getQuestionsName);
  const questions = useSelector(getQuestionsFromStore);
  const currentQuestionIndex = useSelector(getQuestionNumber);

  const [error, setError] = useState(null);

  useEffect(() => {
    if (questions.length === 0) {
      dispatch(getQuestions(typeTest));
    }
  }, [dispatch, typeTest, questions]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  }, [error]);

  const sendResponse = () => {
    let results = {};

    for (let i = 0; i < questions.length; i++) {
      if (!questions[i].userAnswer) {
        console.log('sendAnswers');
        results = null;
        setError('not all question get answer');
        return;
      }
      results[questions[i]._id] = questions[i].userAnswer;
    }
    dispatch(sendAnswers({ results, typeTest }));
  };

  const nextQuestion = () => {
    dispatch(setCurrentQuestions(currentQuestionIndex + 1));
  };
  const prevQuestion = () => {
    dispatch(setCurrentQuestions(currentQuestionIndex - 1));
  };

  return (
    <>
      {questions.length > 0 && (
        <QuestionsMain>
          <QuestionHeader
            sendAnswers={sendResponse}
            error={error}
            typeTest={typeTest}
          />

          <QuestionCard
            currentQuestion={currentQuestionIndex}
            questions={questions}
            error={error}
          />

          <QuestionNavigationButtons>
            <Button
              onClick={prevQuestion}
              disabled={currentQuestionIndex === 0}
            >
              <ArrowLeft />
              <span>Previous question</span>
            </Button>
            <Button
              onClick={nextQuestion}
              disabled={currentQuestionIndex === questions.length - 1}
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
