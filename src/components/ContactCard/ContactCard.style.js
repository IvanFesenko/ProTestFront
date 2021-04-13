import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import GitHubIcon from '@material-ui/icons/GitHub';

import { orange } from 'assets/colors';

export const Card = styled.li`
  width: 250px;
  height: 360px;
  background-color: #fff;
  margin: 10px;
  transition: 0.45s;
  list-style: none;
  text-align: center;
  position: relative;
  overflow: hidden;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const DescriptionWrapper = styled.div`
  position: absolute;
  bottom: -102px;
  left: 0;
  width: 100%;
  background-color: #fff;
  transition: all 0.3s linear;
  padding-top: 15px;

  ${Card}:hover & {
    bottom: 0px;
    background-color: rgba(255, 255, 255, 0.9);
  }
`;

export const Name = styled.h3`
  font-size: 14px;
  line-height: 12px;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const Position = styled.p`
  font-size: 14px;
  line-height: 12px;
  letter-spacing: 0.02em;
  margin-bottom: 15px;
`;

export const Location = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 12px;
  letter-spacing: 0.02em;
  margin-bottom: 15px;
`;

const LocationIconStyles = {
  root: {
    fontSize: '18px',
  },
};

export const LocationIcon = withStyles(LocationIconStyles)(LocationOnIcon);

const GitHubIconStyles = {
  root: {
    fontSize: '20px',
  },
};

export const GitIcon = withStyles(GitHubIconStyles)(GitHubIcon);

export const Description = styled.p`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #000;
  font-weight: 600;
  margin-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Photo = styled.img`
  width: 100%;
  overflow: hidden;
`;

export const Social = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #02172a;
  padding: 7px 10px 5px 10px;
`;

export const SocialItem = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const SocialLink = styled.a`
  display: block;
  color: #fff;
  transition: color 0.2s linear;

  &:hover {
    color: ${orange};
  }
`;
