import Wrapper from './Header.style';
import { Logo } from './Logo';
import { Menu } from './Menu';

const Header = () => {
  return (
    <Wrapper>
      <Logo />
      <Menu />
    </Wrapper>
  );
};

export default Header;
