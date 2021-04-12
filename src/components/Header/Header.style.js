import styled from 'styled-components';

import { mainBackground, greyLine } from 'assets/colors';

export default styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  padding-right: 0;
  background-color: ${mainBackground};
  border: 1px solid ${greyLine};
  position: relative;
`;
