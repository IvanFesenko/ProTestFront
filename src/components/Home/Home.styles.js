import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { orange, secondaryBackground } from 'assets/colors';

export const QuoteWrapper = styled.div`
  padding-top: 30px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 12px;
`;

export const Quote = styled.h2`
  font-size: 12px;
  text-align: center;
  font-weight: 700;
`;

export const QuoteAuthor = styled.p`
  font-size: 12px;
  text-align: center;
  font-weight: 500;
`;

export const TestLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 212px;
  width: 280px;
  font-size: 24px;
  text-decoration: none;
  color: #fff;
  font-weight: 800;
  margin-bottom: 20px;
  padding: 50px;
  background: ${secondaryBackground};
  :hover {
    background: ${orange};
  }
`;
