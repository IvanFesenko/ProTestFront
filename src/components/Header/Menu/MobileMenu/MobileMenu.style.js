import styled from 'styled-components';
import { mainBackground, greyLine } from 'assets/colors';

export const Wrapper = styled.div`
  display: block;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  position: absolute;
  z-index: 150;
  background-color: ${mainBackground};
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 70px;
  padding: 20px 0;
`;

export const Item = styled.li`
  margin-right: 0px;
  padding: 26px 0;
  text-align: center;
  border-bottom: 1px solid ${greyLine};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Burger = styled.button`
  width: 41px;
  height: 100%;
  border: none;
  background-color: inherit;
  outline: none;
`;
