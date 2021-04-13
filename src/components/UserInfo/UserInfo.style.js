import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ProfileLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 0 20px;
  @media (min-width: 750px) {
    margin-right: 10px;
  }
`;

export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  margin-right: 30px;
  @media (min-width: 750px) {
    margin-right: 10px;
  }
`;

export const Name = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.02em;
  text-align: center;
  color: #000000;
`;
