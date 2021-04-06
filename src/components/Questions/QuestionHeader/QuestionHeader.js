import { FinishButton } from '../Button';
import { ErrorMsg } from '../QuestionCard';
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
