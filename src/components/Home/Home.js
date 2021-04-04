import { ButtonsWrapper, QuoteWrapper, TestLink } from './Home.styles';

export const Home = () => {
  return (
    <>
      <QuoteWrapper>
        <h2>
          “Regression testing. What is it? If the system compiles, that's good,
          if it boots, that's great!”
        </h2>
        <p>Linus Torvalds</p>
        <p>Linux kernel creator, hacker, 1969</p>
      </QuoteWrapper>
      <ButtonsWrapper>
        <TestLink to={'/'}>QA technical training</TestLink>
        <TestLink to={'/'}>Testing theory</TestLink>
      </ButtonsWrapper>
    </>
  );
};
