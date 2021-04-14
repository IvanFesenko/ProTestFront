import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';

import QuestionCard from './QuestionCard';
import QuestionHeader from './QuestionHeader';

import { Button } from './Button';
import ArrowLeft from './Button/ArrowLeft';
import ArrowRight from './Button/ArrowRight';

import { QuestionsMain, QuestionNavigationButtons } from './Questions.style';
import { setCurrentQuestions } from 'redux/questions/questionsSlice';

import {
  getQuestionsFromStore,
  getQuestionsName,
  getQuestionNumber,
} from 'redux/questions/questionsSelector';
import { getQuestions, sendAnswers } from 'redux/questions/questionsOperatios';

const useStyles = makeStyles({
  root: {
    marginBottom: '20px',
  },
});

function Questions() {
  const dispatch = useDispatch();
  const history = useHistory();
  const typeTest = useSelector(getQuestionsName);
  const questions = useSelector(getQuestionsFromStore);
  const currentQuestionIndex = useSelector(getQuestionNumber);
  const stylesSkeleton = useStyles();

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
        results = null;
        setError('not all question get answer');
        return;
      }
      results[questions[i]._id] = questions[i].userAnswer;
    }
    dispatch(sendAnswers({ results, typeTest }));
    history.push('/results');
  };

  const nextQuestion = () => {
    dispatch(setCurrentQuestions(currentQuestionIndex + 1));
  };
  const prevQuestion = () => {
    dispatch(setCurrentQuestions(currentQuestionIndex - 1));
  };

  return (
    <>
      <QuestionsMain>
        <QuestionHeader
          sendAnswers={sendResponse}
          error={error}
          typeTest={typeTest}
        />

        {questions.length > 0 ? (
          <QuestionCard
            currentQuestion={currentQuestionIndex}
            questions={questions}
            error={error}
          />
        ) : (
          <Skeleton
            height={500}
            variant="rect"
            className={stylesSkeleton.root}
          />
        )}

        <QuestionNavigationButtons>
          <Button onClick={prevQuestion} disabled={currentQuestionIndex === 0}>
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
    </>
  );
}

export default Questions;
