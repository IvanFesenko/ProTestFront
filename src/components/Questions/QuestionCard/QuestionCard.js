import React, { useEffect, useState } from 'react';

import { FormControlLabel, makeStyles } from '@material-ui/core';

import RadioOrange from './Radiostyles';
import {
  QuestionCardStyle,
  QuestionBodyStyle,
  QuestionItemStyle,
} from './QuestionCard.style';
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
    <QuestionCardStyle error={error}>
      <CurrentQuestions>
        Question
        <span className={'currentQuestion-number'}>
          {currentQuestion + 1}
        </span>/ {Object.keys(questions).length}
      </CurrentQuestions>

      <CurrentQuestionsName>
        {questions[currentQuestion].question}
      </CurrentQuestionsName>

      <QuestionBodyStyle>
        {questions[currentQuestion].answers.map((answer, index) => (
          <QuestionItemStyle key={index}>
            <FormControlLabel
              checked={questions[currentQuestion].userAnswer === answer}
              value={answer}
              control={<RadioOrange onChange={() => setAnswer(answer)} />}
              label={answer}
              className={style.test}
            />
          </QuestionItemStyle>
        ))}
      </QuestionBodyStyle>
    </QuestionCardStyle>
  );
}

export default QuestionCard;
