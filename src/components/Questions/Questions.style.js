import styled from 'styled-components';

const QuestionsMain = styled.div`
  margin: 0 auto;
  @media (min-width: 480px) {
    padding: 0 20px;
  }
`;

const QuestionNavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export { QuestionsMain, QuestionNavigationButtons };
