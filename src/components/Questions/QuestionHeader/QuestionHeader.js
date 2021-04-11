import { FinishButton } from '../Button';
import { ErrorMsg } from '../QuestionCard';
import {
  QuestionHeaderTitleStyle,
  QuestionHeaderStyle,
} from './QuestionHeader.style';
import { useSelector } from 'react-redux';
import { getQuestionsName } from 'redux/questions/questionsSelector';

function QuestionHeader({ sendAnswers, error }) {
  const typeTest = useSelector(getQuestionsName);

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
