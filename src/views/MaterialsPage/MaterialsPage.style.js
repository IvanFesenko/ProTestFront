import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 40px 0 110px 0;
`;

export const Title = styled.h2`
  font-size: 12px;
  text-align: left;
  font-weight: 700;
  line-height: 20px;
  padding: 0 24px 40px 24px;
  ::after {
    content: '';
    display: block;
    width: 47%;
    height: 1px;
    background-color: rgba(0, 18, 47, 0.15);
    top: 13px;
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

export const List = styled.ul`
  list-style: decimal;
  margin-bottom: 40px;
  padding-left: 20px;
  max-width: 210px;
`;

export const ListItem = styled.li`
  font-family: 'Montserrat';
  font-size: 10px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.02em;
  padding-left: 5px;
`;

export const Link = styled.a`
  color: black;
`;
