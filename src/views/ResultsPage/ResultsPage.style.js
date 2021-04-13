import styled from 'styled-components';
import { greyLine, orange } from 'assets/colors';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 40px 0 40px 0;
`;

export const WrapperRelative = styled.div`
  position: relative;
`;

export const TestName = styled.p`
  display: block;
  font-size: 10px;
  font-weight: 500;
  @media (min-width: 750px) {
    font-size: 14px;
    margin-top: 10px;
  }
`;

export const ChartWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 900px) {
    margin-bottom: 30px;
  }
`;

export const Results = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  width: 100%;
  top: -64px;
  @media (min-width: 750px) {
    padding: 0 90px;
  }
  @media (min-width: 900px) {
    padding: 0 400px;
    position: static;
    margin-bottom: 30px;
  }
`;

export const ResultName = styled.p`
  font-family: 'Montserrat';
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: 0.02em;
  @media (min-width: 750px) {
    font-size: 16px;
  }
`;

export const ResultValue = styled.span`
  font-family: 'Montserrat';
  font-size: 10px;
  font-weight: 700;
  line-height: 12px;
  letter-spacing: 0.02em;
  @media (min-width: 750px) {
    font-size: 16px;
  }
`;

export const VertLine = styled.span`
  display: block;
  width: 1px;
  height: 20px;
  background-color: ${greyLine};
  position: relative;
  top: -5px;
`;

export const Img = styled.img`
  margin: 0 auto 10px auto;
`;

export const ResultTitle = styled.h3`
  font-family: 'Montserrat';
  font-size: 16px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0.02em;
  text-align: center;
  margin-bottom: 10px;
  @media (min-width: 750px) {
    font-size: 22px;
  }
`;

export const ResultDescription = styled.p`
  font-family: 'Montserrat';
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: 0.02em;
  text-align: center;
  margin-bottom: 30px;
  @media (min-width: 750px) {
    font-size: 20px;
  }
  @media (min-width: 900px) {
    margin-bottom: 48px;
  }
`;

export const Button = styled.button`
  height: 48px;
  width: 190px;
  background-color: ${orange};
  color: white;
  outline: none;
  border: none;
  display: block;
  margin: 0 auto;
  font-family: 'Montserrat';
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0.02em;
  text-align: center;
`;
