import { useDispatch } from 'react-redux';
import { SectionTitle } from 'components';

import {
  ButtonsWrapper,
  QuoteWrapper,
  QuoteAuthor,
  QuoteAuthorInfo,
  TestLink,
} from './Home.styles';
import {
  setTypeTest,
  setCurrentQuestions,
} from 'redux/questions/questionsSlice';

import typeTest from 'services/variables';

export const Home = () => {
  const dispatch = useDispatch();

  const setTest = typeTest => {
    dispatch(setCurrentQuestions(0));
    dispatch(setTypeTest(typeTest));
  };

  return (
    <>
      <QuoteWrapper>
        <SectionTitle>
          “Regression testing. What is it? If the system compiles, that's good,
          if it boots, that's great!”
        </SectionTitle>
        <QuoteAuthor>Linus Torvalds</QuoteAuthor>
        <QuoteAuthorInfo>Linux kernel creator, hacker, 1969</QuoteAuthorInfo>
      </QuoteWrapper>
      <ButtonsWrapper>
        <TestLink onClick={() => setTest(typeTest.tech)} to={'/test'}>
          QA technical training
        </TestLink>
        <TestLink onClick={() => setTest(typeTest.theor)} to={'/test'}>
          Testing theory
        </TestLink>
      </ButtonsWrapper>
    </>
  );
};
