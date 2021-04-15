import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import { ResultsChartPie, SectionTitle } from 'components';
import { getResult } from 'redux/questions/questionsSelector';
import { resetTestData } from 'redux/questions/questionsSlice';

import cat0 from 'assets/images/cat0.png';
import cat1 from 'assets/images/cat1.png';
import cat2 from 'assets/images/cat2.png';
import cat3 from 'assets/images/cat3.png';
import cat4 from 'assets/images/cat4.png';
import cat5 from 'assets/images/cat5.png';

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

const getResultImage = id => {
  switch (id) {
    case 1:
      return cat0;
    case 2:
      return cat1;
    case 3:
      return cat2;
    case 4:
      return cat3;
    case 5:
      return cat4;
    default:
      return cat5;
  }
};

const ResultsPage = () => {
  const [img, setImg] = useState(null);
  const history = useHistory();
  const results = useSelector(getResult);
  const dispatch = useDispatch();

  useEffect(() => {
    if (results?.points) setImg(getResultImage(results.points));
  }, [results]);

  const tryAgain = () => {
    dispatch(resetTestData());
    history.push('/test');
  };

  return (
    <Wrapper>
      {results ? (
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
          <Img src={img} alt="cat" />
          <ResultTitle>{results.title}</ResultTitle>
          <ResultDescription>{results.description}</ResultDescription>
          <Button onClick={tryAgain}>Try again</Button>
        </>
      ) : (
        <SectionTitle>You should finish test first</SectionTitle>
      )}
    </Wrapper>
  );
};

export default ResultsPage;
