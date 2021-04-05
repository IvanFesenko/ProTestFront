import styled from 'styled-components';

import { mainBackground } from 'assets/colors';

export const Wrapper = styled.div`
  background-color: ${mainBackground};
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  @media (min-width: 750px) {
    max-width: 652px;
  }
  @media (min-width: 900px) {
    max-width: 1070px;
  }
`;