import styled from 'styled-components';

import { mainBackground } from 'assets/colors';

export const Wrapper = styled.div`
  background-color: ${mainBackground};
  background-position: top right;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 900px) {
    background-position: top center;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 126px);
  margin: 0 auto;
  padding: 0 20px;

  @media (min-width: 750px) {
    max-width: 652px;
  }
  @media (min-width: 900px) {
    max-width: 1070px;
  }
  @media (min-width: 1000px) {
    max-width: 1280px;
  }
`;
