import {
  ButtonsWrapper,
  QuoteWrapper,
  Quote,
  QuoteAuthor,
  QuoteAuthorInfo,
  TestLink,
} from './Home.styles';

export const Home = () => {
  return (
    <>
      <QuoteWrapper>
        <Quote>
          “Regression testing. What is it? If the system compiles, that's good,
          if it boots, that's great!”
        </Quote>
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
