import styled from 'styled-components';

const QuestionsMain = styled.div`
  margin: 0 auto;
  padding: 20px 0;
  @media (min-width: 480px) {
    padding: 20px 20px;
  }
`;

const QuestionNavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export { QuestionsMain, QuestionNavigationButtons };
