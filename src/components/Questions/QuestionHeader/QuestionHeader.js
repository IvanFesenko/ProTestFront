import { FinishButton } from '../Button/Button.style';
import { ErrorMsg } from '../QuestionCard/CurrentQuestions.style';
import {
  QuestionHeaderTitleStyle,
  QuestionHeaderStyle,
} from './QuestionHeader.style';

function QuestionHeader({ sendAnswers, error }) {
  return (
    <QuestionHeaderStyle>
      <QuestionHeaderTitleStyle>[ Testing theory_ ]</QuestionHeaderTitleStyle>
      {error && <ErrorMsg>{error}</ErrorMsg>}
      <FinishButton onClick={sendAnswers}>Finish test</FinishButton>
    </QuestionHeaderStyle>
  );
}

export default QuestionHeader;
