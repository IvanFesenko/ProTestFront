import styled from 'styled-components';

import { mainBackground, greyLine } from 'assets/colors';

export default styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  padding: 0 20px;
  background-color: ${mainBackground};
  border: 1px solid ${greyLine};
  position: relative;
`;
