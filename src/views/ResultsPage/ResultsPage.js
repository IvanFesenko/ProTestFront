import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

import { ResultsChartPie, SectionTitle } from 'components';
import { getResult } from 'redux/questions/questionsSelector';

import cat from 'assets/images/cat.png';

import {
  Wrapper,
  TestName,
  Results,
  WrapperRelative,
  ResultName,
  VertLine,
  ResultValue,
  ChartWrap,
  Img,
  ResultTitle,
  ResultDescription,
  Button,
} from './ResultsPage.style';

const INITIAL_STATE_RESULTS = {
  correct_answers: 9,
  total_questions: 12,
};

const INITIAL_STATE_CHART = [
  { value: 9, label: 'Correct', color: '#FF6B01' },
  { value: 3, label: 'Incorrect', color: '#D7D7D7' },
];

const ResultsPage = () => {
  const history = useHistory();
  const results = useSelector(getResult);

  const tryAgain = () => {
    //think about realization
    history.push('/test');
  };

  return (
    <Wrapper>
      {results && (
        <>
          <SectionTitle>
            Results<TestName>{`[ ${'Testing theory'}_]`}</TestName>
          </SectionTitle>
          <ChartWrap>
            <ResultsChartPie dataPoints={results.chart} />
          </ChartWrap>
          <WrapperRelative>
            <Results>
              <ResultName>
                {`Correct answers - `}
                <ResultValue>{results.results.correct_answers}</ResultValue>
              </ResultName>
              <VertLine />
              <ResultName>
                {`Total questions - `}
                <ResultValue>{results.results.total_questions}</ResultValue>
              </ResultName>
            </Results>
          </WrapperRelative>
          <Img src={cat} alt="cat" />
          <ResultTitle>{results.title}</ResultTitle>
          <ResultDescription>{results.description}</ResultDescription>
          <Button onClick={tryAgain}>Try again</Button>
        </>
      )}
    </Wrapper>
  );
};

export default ResultsPage;
