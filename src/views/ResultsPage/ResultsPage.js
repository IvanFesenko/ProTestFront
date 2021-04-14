import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import { ResultsChartPie, SectionTitle } from 'components';
import { getResult } from 'redux/questions/questionsSelector';
import { resetTestData } from 'redux/questions/questionsSlice';

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

const ResultsPage = () => {
  const history = useHistory();
  const results = useSelector(getResult);
  const dispatch = useDispatch();

  const tryAgain = () => {
    dispatch(resetTestData());
    history.push('/test');
  };

  return (
    <Wrapper>
      {results && (
        <>
          <SectionTitle>
            Results<TestName>{`[ Testing ${results.type}_]`}</TestName>
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
