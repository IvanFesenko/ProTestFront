import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { orange } from 'assets/colors';

export default styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  @media (min-width: 750px) {
    margin-right: 56px;
  }
  @media (min-width: 900px) {
    margin-right: 85px;
  }
`;

export const Link = styled(NavLink)`
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  text-align: center;
  color: #000;
  text-decoration: none;
  :hover {
    border-bottom: 1px solid ${orange};
  }
  @media (min-width: 750px) {
    font-size: 14px;
  }
`;
