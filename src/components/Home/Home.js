import { SectionTitle } from 'components';
import {
  ButtonsWrapper,
  QuoteWrapper,
  QuoteAuthor,
  QuoteAuthorInfo,
  TestLink,
} from './Home.styles';

export const Home = () => {
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
        <TestLink to={'/'}>QA technical training</TestLink>
        <TestLink to={'/'}>Testing theory</TestLink>
      </ButtonsWrapper>
    </>
  );
};
