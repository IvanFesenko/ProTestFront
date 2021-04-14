import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { orange, errorColor } from 'assets/colors';

import { subBlack } from 'assets/colors';

export const Form = styled.form`
  padding: 30px 20px;
  background-color: #ffffff;
  box-shadow: 0px 4px 15px rgba(2, 23, 42, 0.1);

  font-size: 10px;
  line-height: 1.2;
  color: #000000;

  @media (min-width: 768px) {
    padding: 62px 57px;
    font-size: 14px;
    line-height: 1.21;
  }
  @media (min-width: 1200px) {
    padding: 62px 40px 42px;
    max-width: 505px;
  }
`;

export const Text = styled.p`
  margin-bottom: 20px;
  font-weight: 500;

  @media (min-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const GoogleButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 17px 37px;
  margin-bottom: 30px;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1));
  background-color: #fafafa;
  color: #000000;
  border: none;
  outline: none;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    margin: 0 0 40px;
  }
`;

export const Span = styled.span`
  margin-left: 10px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.02em;
`;

export const FieldsContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const Field = withStyles({
  root: {
    width: '100%',
    '&:not(:last-child)': {
      marginBottom: '20px',
      '@media (min-width: 768px)': {
        marginBottom: '24px',
      },
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: '0px',
    },
    '& .MuiFormLabel-root.Mui-focused': {
      color: `${orange}`,
    },
    '& .MuiFormLabel-root': {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: '500',
      fontSize: '14px',
      lineHeight: '1.21',
      letterSpacing: '0.02em',
      color: '#BBBBBB',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: `${orange}`,
    },
    '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
      borderColor: `${errorColor}`,
    },
  },
})(props => <TextField variant="outlined" required {...props} />);

export const Error = styled.p`
  position: absolute;
  top: -18px;
  color: ${errorColor};
  font-weight: 500;
  @media (min-width: 768px) {
    top: -25px;
  }
`;

export const SignBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignButton = styled.button`
  position: relative;
  width: 110px;
  padding: 67px;
  background-color: ${({ active }) => (active ? `${orange}` : '#ffffff')};
  border: ${({ active }) =>
    active ? '1px solid transparent' : '1px solid #ced2d1'};
  color: ${({ active }) => (active ? '#ffffff' : '#000000')};
  cursor: pointer;
  outline: none;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.25;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: ${({ disabled }) => (disabled ? subBlack : orange)};
    color: #ffffff;
    border: 1px solid transparent;
  }
  :disabled {
    background-color: ${subBlack};
  }

  :not(:last-child) {
    margin-right: 20px;
  }

  @media (min-width: 768px) {
    width: 202px;
  }
`;
