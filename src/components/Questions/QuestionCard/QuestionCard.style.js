import styled from 'styled-components';
import { errorColor } from 'assets/colors';

const QuestionCardStyle = styled.div`
  background-color: white;
  padding: 40px 0px;
  margin-bottom: 20px;
  border: ${({ error }) =>
    error ? `1px solid ${errorColor}` : `1px solid white`};
  @media (min-width: 480px) {
    padding: 40px 20px;
  }
`;

const QuestionBodyStyle = styled.div`
  width: 100%;
  text-align: left;
  padding: 40px 20px 0px 20px;
`;

const QuestionItemStyle = styled.div`
  margin-bottom: 16px;
`;

export { QuestionCardStyle, QuestionBodyStyle, QuestionItemStyle };
