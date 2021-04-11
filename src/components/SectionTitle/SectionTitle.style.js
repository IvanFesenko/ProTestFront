import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 12px;
  text-align: center;
  font-weight: 700;
  line-height: 20px;
  padding: 0 24px 40px 24px;
  ::after {
    content: '';
    display: block;
    margin: 0 auto;
    width: 41%;
    height: 1px;
    background-color: rgba(0, 18, 47, 0.15);
    top: 22px;
    transform: translateY(-50%);
    position: relative;
  }
  @media (min-width: 750px) {
    font-size: 22px;
    line-height: 20px;
    font-weight: 700;
  }
  @media (min-width: 900px) {
    line-height: 30px;
    padding: 0 155px 40px 155px;
  }
`;
