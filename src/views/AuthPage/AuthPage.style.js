import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 40px 0 50px;
  max-width: 1030px;
  @media (min-width: 768px) {
    padding: 80px 0 70px;
  }
  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 99px 0;
  }
`;

export const Info = styled.div`
  margin-bottom: 30px;
  @media (min-width: 1200px) {
    max-width: 420px;
  }
`;

export const Title = styled.h1`
  margin: 0 0 10px;
  font-weight: 800;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: 0.02em;
  color: #000000;
  @media (min-width: 768px) {
    margin: 0 0 20px;
    font-size: 30px;
    line-height: 1.233;
  }
  @media (min-width: 1200px) {
    font-size: 34px;
  }
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.67;
  letter-spacing: 0.02em;
  color: #555555;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 2.25;
  }
  @media (min-width: 1200px) {
    font-size: 18px;
    line-height: 2;
  }
`;

export const Bold = styled.span`
  font-weight: 700;
  color: #000000;
`;
