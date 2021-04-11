import styled from 'styled-components';
import { orange, subBlack } from 'assets/colors';
const CurrentQuestions = styled.p`
  text-align: center;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: 500;
  color: ${subBlack};
  margin-bottom: 20px;
  span {
    padding-left: 10px;
    color: ${orange};
    font-weight: 600;
  }
  @media (min-width: 480px) {
    font-size: 14px;
    text-transform: none;
  }
`;

const CurrentQuestionsName = styled.p`
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  position: relative;
  margin-bottom: 30px;
  :before {
    content: '';
    position: absolute;
    transform: translate(-50%);
    left: 50%;
    bottom: -20px;
    width: 130px;
    height: 1px;
    background-color: #00122f;
    opacity: 0.15;
    @media (min-width: 480px) {
      width: 320px;
    }
  }
  @media (min-width: 480px) {
    font-size: 22px;
  }
`;

const ErrorMsg = styled.p`
  position: absolute;
  text-align: center;
  width: 100%;
  color: #ff4562;
  left: 50%;
  bottom: -46px;
  transform: translate(-50%);
  font-size: 13px;
  @media (min-width: 700px) {
    font-size: 18px;
  }
`;

export { CurrentQuestions, CurrentQuestionsName, ErrorMsg };
