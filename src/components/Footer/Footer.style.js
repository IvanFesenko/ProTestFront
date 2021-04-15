import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { secondaryBackground, orange } from 'assets/colors';

export default styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  background-color: ${secondaryBackground};
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

export const Link = styled(NavLink)`
  color: rgba(255, 255, 255, 0.4);
  font-size: 10px;
  text-align: center;
  cursor: pointer;
  @media (min-width: 750px) {
    font-size: 12px;
  }
`;
