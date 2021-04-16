import styled from 'styled-components';
import { errorColor } from 'assets/colors';

const FormWrapper = styled.div`
  padding: 30px 0 30px 0;

  @media (min-width: 768px) {
    padding: 80px 0 256px 0;
  }
`;

const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextHeader = styled.p`
  font-weight: 500;
`;

const Form = styled.form`
  position: relative;
  padding: 30px 20px;
  background-color: #ffffff;
  box-shadow: 0px 4px 15px rgba(2, 23, 42, 0.1);

  font-size: 10px;
  line-height: 1.2;
  color: #000000;

  @media (min-width: 768px) {
    padding: 62px 57px;
    font-size: 14px;
    line-height: 1.21;
    max-width: 505px;
    margin: 0 auto;
  }
  @media (min-width: 1200px) {
    padding: 62px 40px 42px;
  }
`;

const ErrorMsg = styled.p`
  color: ${errorColor};
  opacity: ${({ error }) => (error ? 1 : 0)};
  position: absolute;
  bottom: 26%;
  transition: 0.3s;

  @media (min-width: 768px) {
    bottom: 28%;
  }

  @media (min-width: 1198px) {
    bottom: 26%;
  }
`;

export { Form, ErrorMsg, FormWrapper, FormHeader, TextHeader };
