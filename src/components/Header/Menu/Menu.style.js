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
  margin-right: 85px;
  display: flex;
  align-items: center;
`;

export const Link = styled(NavLink)`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  text-align: center;
  color: #000;
  text-decoration: none;
  :hover {
    border-bottom: 1px solid ${orange};
  }
`;
