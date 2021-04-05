import styled from 'styled-components';

import { secondaryBackground, orange } from 'assets/colors';

export default styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  background-color: ${secondaryBackground};
  @media (min-width: 750px) {
    padding: 19px 7px;
  }
`;

export const Text = styled.p`
  color: rgba(255, 255, 255, 0.4);
  font-size: 10px;
  text-align: center;
  @media (min-width: 750px) {
    font-size: 12px;
  }
`;

export const Heart = styled.svg`
  fill: ${orange};
  height: 16px;
  width: 15px;
  position: relative;
  top: 4px;
`;

export const HeartWrapper = styled.span`
  height: 16px;
  width: 15px;
  padding: 0 3px;
  @media (min-width: 750px) {
    padding: 0 7px;
  }
`;