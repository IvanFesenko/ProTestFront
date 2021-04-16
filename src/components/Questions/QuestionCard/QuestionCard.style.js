import styled from 'styled-components';
import { errorColor } from 'assets/colors';

const QuestionCardStyle = styled.div`
  position: relative;
  background-color: white;
  padding: 40px 20px;
  margin-bottom: 20px;
  border: ${({ error }) =>
    error ? `1px solid ${errorColor}` : `1px solid white`};
  box-shadow: 0px 4px 15px rgba(2, 23, 42, 0.1);
  @media (min-width: 750px) {
    padding: 50px 40px;
  }
  @media (min-width: 1200px) {
    padding: 50px 85px;
  }
`;

const QuestionBodyStyle = styled.div`
  width: 100%;
  text-align: left;
  padding: 40px 0 0 12px;
`;

const QuestionItemStyle = styled.div`
  margin-bottom: 16px;
`;

export { QuestionCardStyle, QuestionBodyStyle, QuestionItemStyle };
