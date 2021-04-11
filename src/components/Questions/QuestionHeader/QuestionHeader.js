import React from 'react';

import { FinishButton } from '../Button';
import { ErrorMsg } from '../QuestionCard';
import {
  QuestionHeaderTitleStyle,
  QuestionHeaderStyle,
} from './QuestionHeader.style';

function QuestionHeader({ sendAnswers, error, typeTest }) {
  return (
    <QuestionHeaderStyle>
      <QuestionHeaderTitleStyle>
        [ Testing {typeTest}_ ]
      </QuestionHeaderTitleStyle>
      {error && <ErrorMsg>{error}</ErrorMsg>}
      <FinishButton onClick={sendAnswers}>Finish test</FinishButton>
    </QuestionHeaderStyle>
  );
}

export default QuestionHeader;
