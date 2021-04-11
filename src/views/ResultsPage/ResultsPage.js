import styles from './ResultsPage.module.css';
import cat from 'assets/images/cat.png';
import ResultsChartPie from 'components/ResultsChartPie';
import { useHistory } from 'react-router';

const INITIAL_STATE_RESULTS = {
  correct_answers: 12,
  total_questions: 12,
};

const INITIAL_STATE_CHART = [
  { value: 12, label: 'Correct', color: '#FF6B01' },
  { value: 40, label: 'Incorrect', color: '#D7D7D7' },
];

const ResultsPage = () => {
  const history = useHistory();

  const tryAgain = () => {
    history.push('/test');
  };

  return (
    <div className={styles.Results}>
      <h3>Results</h3>
      <span>[ Testing theory_]</span>

      <ResultsChartPie dataPoints={INITIAL_STATE_CHART} />

      <div className={styles.correctFlex}>
        <div>
          Correct answers - <b>{INITIAL_STATE_RESULTS.correct_answers}</b>
        </div>
        <div>
          Total questions - <b>{INITIAL_STATE_RESULTS.total_questions}</b>
        </div>
      </div>

      <img src={cat} alt="cat" />

      <h3>Not bad!</h3>
      <p>But you still need to learn some materials.</p>

      <button onClick={() => tryAgain()}>Try again</button>
    </div>
  );
};

export default ResultsPage;
