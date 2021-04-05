import { FinishButton } from '../Button/Button.style';
import { ErrorMsg } from '../QuestionCard/CurrentQuestions.style';
import styles from './QuestionHeader.module.css';

function QuestionHeader({ sendAnswers, error }) {
  return (
    <div className={styles.questionHeader}>
      <h3 className={styles.questionHeaderTitle}>[ Testing theory_ ]</h3>
      {error && <ErrorMsg>{error}</ErrorMsg>}
      <FinishButton onClick={sendAnswers}>Finish test</FinishButton>
    </div>
  );
}

export default QuestionHeader;
