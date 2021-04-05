import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const Form = styled.form`
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
  }
  @media (min-width: 1200px) {
    padding: 62px 40px 42px;
    max-width: 505px;
  }
`;

export const Text = styled.p`
  margin-bottom: 20px;
  font-weight: 500;

  @media (min-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 17px 37px;
  margin-bottom: 30px;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1));
  cursor: pointer;
  background-color: #fafafa;
  border: none;
  outline: none;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    margin: 0 0 40px;
  }
`;

export const Span = styled.span`
  margin-left: 10px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.02em;
`;

export const Field = styled(TextField)`
  width: 100%;
  margin-bottom: 20px !important;

  @media (min-width: 768px) {
    margin-bottom: 24px !important;
  }
`;

export const SignBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 768px) {
    margin-top: 16px;
  }
`;

export const SignButton = styled.button`
  width: 110px;
  padding: 25px 0;
  background-color: ${({ active }) => (active ? '#ff6b09' : '#ffffff')};
  border: ${({ active }) =>
    active ? '1px solid transparent' : '1px solid #ced2d1'};
  color: ${({ active }) => (active ? '#ffffff' : '#000000')};
  cursor: pointer;
  outline: none;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.25;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: #ff6b09;
    color: #ffffff;
    border: 1px solid transparent;
  }

  @media (min-width: 768px) {
    width: 202px;
  }
`;
