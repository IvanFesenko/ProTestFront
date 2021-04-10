import styled from 'styled-components';

const QuestionHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 26px;
  position: relative;
`;

const QuestionHeaderTitleStyle = styled.h3`
  width: 130px;
  font-size: 18px;
  font-weight: 500;
  @media (min-width: 480px) {
    font-size: 22px;
  }
`;

export { QuestionHeaderStyle, QuestionHeaderTitleStyle };
