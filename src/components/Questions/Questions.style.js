import styled from 'styled-components';

const QuestionsMain = styled.div`
  margin: 0 auto;
  padding: 20px 0;
  max-width: 820px;
  @media (min-width: 750px) {
    padding: 42px 0;
  }
`;

const QuestionNavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export { QuestionsMain, QuestionNavigationButtons };
