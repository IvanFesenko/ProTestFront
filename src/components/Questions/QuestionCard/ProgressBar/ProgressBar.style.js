import styled from 'styled-components';
import { orange } from 'assets/colors';

const ProgressBarStyled = styled.div`
  position: absolute;
  ${width => width};
  background-color: ${orange};
  height: 3px;
  top: 0;
  left: 0;
`;

export default ProgressBarStyled;
