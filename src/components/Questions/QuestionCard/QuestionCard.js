import React, { useEffect, useState } from 'react';

import { FormControlLabel, makeStyles } from '@material-ui/core';

import RadioOrange from './Radiostyles';
import styles from './QuestionCard.module.css';
import {
  CurrentQuestions,
  CurrentQuestionsName,
} from './CurrentQuestions.style';

const useStyles = makeStyles({
  test: {
    display: 'flex',
    alignItems: 'flex-start',
    fontWeight: 500,
    '& .MuiTypography-body1': {
      fontFamily: 'Montserrat',
      fontSize: '12px',
      '@media (min-width: 480px)': {
        fontSize: '16px',
      },
    },
  },
});

function QuestionCard({ currentQuestion, questions, error }) {
  const [indexCheckedAnswer, setIndexCheckedAnswer] = useState(null);

  const setAnswer = answer => {
    questions[currentQuestion] = {
      ...questions[currentQuestion],
      userAnswer: answer,
    };
    setIndexCheckedAnswer(answer);
  };

  useEffect(() => {
    if (indexCheckedAnswer) {
      setIndexCheckedAnswer(null);
    }
  }, [indexCheckedAnswer]);

  const style = useStyles();
  return (
    <div
      className={`${styles.questionCard} ${
        error && styles.questionCardErrorBord
      }`}
    >
      <CurrentQuestions>
        Question
        <span className={'currentQuestion-number'}>
          {currentQuestion + 1}
        </span>/ {Object.keys(questions).length}
      </CurrentQuestions>

      <CurrentQuestionsName>
        {questions[currentQuestion].question}
      </CurrentQuestionsName>

      <div className={styles.questionBody}>
        {questions[currentQuestion].answers.map((answer, index) => (
          <div className={styles.questionItem} key={index}>
            <FormControlLabel
              checked={questions[currentQuestion].userAnswer === answer}
              value={answer}
              control={<RadioOrange onChange={() => setAnswer(answer)} />}
              label={answer}
              className={style.test}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
