import styled from 'styled-components';

export const WrapperSettings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 250px;
  margin: 0 auto;
  padding: 20px 0px;
  & a {
    border-bottom: 1px solid transparent;
    display: flex;
    align-items: center;
  }
`;

export const WrapperLink = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  & svg {
    margin-right: 5px;
  }
`;
