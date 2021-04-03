import { NavLink } from 'react-router-dom';

import logoImage from 'assets/images/logo.png'; 

const Logo = () => {

  return (
    <NavLink to="/">
      <img src={logoImage} alt="logo"/>
    </NavLink>    
  )
}

export default Logo;
