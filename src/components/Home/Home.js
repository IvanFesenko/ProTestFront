import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { SectionTitle } from 'components';
import { getQuote } from 'services/API';

import {
  ButtonsWrapper,
  QuoteWrapper,
  QuoteAuthor,
  TestLink,
  QuoteSkeleton,
  QuoteAuthorSkeleton,
} from './Home.styles';
import {
  setTypeTest,
  setCurrentQuestions,
} from 'redux/questions/questionsSlice';

import typeTest from 'services/variables';

export const Home = () => {
  const [{ quote, author }, setQuote] = useState({ quote: '', author: '' });
  const dispatch = useDispatch();

  const setTest = typeTest => {
    dispatch(setCurrentQuestions(0));
    dispatch(setTypeTest(typeTest));
  };

  useEffect(() => {
    const updateQuote = async () => {
      const quote = await getQuote();
      setQuote(quote);
    };
    updateQuote();
    const interval = setInterval(() => {
      updateQuote();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <QuoteWrapper>
        <SectionTitle>
          {!quote ? (
            <>
              <QuoteSkeleton />
              <QuoteSkeleton />
            </>
          ) : (
            quote
          )}
        </SectionTitle>
        <QuoteAuthor>{!author ? <QuoteAuthorSkeleton /> : author}</QuoteAuthor>
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
