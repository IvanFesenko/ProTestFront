import styled from 'styled-components';

import { orange } from 'assets/colors';

const Button = styled.button`
  border: none;
  outline: none;
  font-size: 12px;
  color: black;
  cursor: pointer;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 9px 13px;
  width: 55px;
  transition: 0.3s;
  span {
    display: none;
  }
  svg path {
    transition: 0.3s;
  }
  :hover {
    background-color: ${orange};
    color: ${({ disabled }) => (disabled ? `#9f9f9f` : `white`)};
  }
  :hover svg path {
    fill: ${({ disabled }) => (disabled ? `#9f9f9f` : `white`)};
  }
  :disabled {
    background-color: #cccccc;
    color: #9f9f9f;
    cursor: auto;

    svg path {
      fill: #9f9f9f;
    }
  }

  @media (min-width: 480px) {
    width: 180px;
    span {
      display: block;
    }
  }

  @media (min-width: 550px) {
    width: 210px;
  }
`;

const FinishButton = styled(Button)`
  width: 130px;
  font-size: 10px;
  font-weight: 500;
  padding: 17px 14px;
  border: 1px solid ${orange};
  display: flex;
  justify-content: center;
  background-color: ${orange};
  color: white;
  transition: 0.3s;
  :hover {
    background-color: white;
    color: ${orange};
  }
  @media (min-width: 480px) {
    width: 190px;
    font-size: 14px;
  }
`;

export { Button, FinishButton };
