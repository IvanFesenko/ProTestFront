import { NavLink } from 'react-router-dom';

import { ReactComponent as LogoIcon } from 'assets/images/logo.svg';

const Logo = () => {
  return (
    <NavLink to="/" aria-label="Logo ProTest">
      <LogoIcon />
    </NavLink>
  );
};

export default Logo;
