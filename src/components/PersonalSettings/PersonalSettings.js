import { WrapperSettings, WrapperLink } from './PersonalStettings.style';
import { Link } from 'components/Header/Menu/Menu.style';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';

import React from 'react';

function PersonalSettings() {
  return (
    <WrapperSettings>
      <WrapperLink>
        <AssessmentOutlinedIcon />
        <Link to={'/results'}>Show previous result</Link>
      </WrapperLink>
      <WrapperLink>
        <SettingsOutlinedIcon />
        <Link to={'/change-password'}>Change Password</Link>
      </WrapperLink>
    </WrapperSettings>
  );
}

export default PersonalSettings;
