import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { orange, secondaryBackground, greyLine } from 'assets/colors';

export const QuoteWrapper = styled.div`
  padding: 30px 0 20px 0;
  @media (min-width: 750px) {
    padding: 80px 0 30px 0;
  }
  @media (min-width: 900px) {
    padding: 122px 0 42px 0;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 12px 0;
  @media (min-width: 750px) {
    padding: 30px 0 112px 0;
  }
  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    max-width: 820px;
    margin: 0 auto;
    padding: 42px 0 114px 0;
  }
`;

export const QuoteAuthor = styled.p`
  font-size: 12px;
  text-align: center;
  font-weight: 500;
  line-height: 14px;
  margin-bottom: 8px;
  padding-top: 20px;
  @media (min-width: 750px) {
    font-size: 18px;
    line-height: 36px;
  }
`;

export const QuoteAuthorInfo = styled.p`
  font-size: 10px;
  text-align: center;
  font-weight: 500;
  line-height: 12px;
  color: #555;
  @media (min-width: 750px) {
    font-size: 14px;
    line-height: 36px;
  }
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
  @media (min-width: 750px) {
    font-size: 32px;
    line-height: 39px;
    font-weight: 800;
    width: 400px;
    height: 212px;
  }
  @media (min-width: 900px) {
    line-height: 36px;
    font-size: 32px;
  }
`;
